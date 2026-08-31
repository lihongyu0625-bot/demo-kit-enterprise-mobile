import { useEffect, useState } from 'react'
import './App.css'
import {
  defaultPreviewId,
  findPreviewById,
  previewNavigation,
  resolvePreviewId,
} from './previews/previewRegistry.jsx'

function getInitialPreviewId() {
  if (typeof window === 'undefined') {
    return defaultPreviewId
  }

  const { previewId: resolvedPreviewId } = getPreviewHashState()
  return findPreviewById(resolvedPreviewId) ? resolvedPreviewId : defaultPreviewId
}

function getInitialFocusId() {
  if (typeof window === 'undefined') {
    return null
  }

  return getPreviewHashState().focusId
}

function getPreviewHashState() {
  const hashValue = window.location.hash.replace('#', '')
  const [previewIdValue, queryValue = ''] = hashValue.split('?')
  const queryParams = new URLSearchParams(queryValue)

  return {
    focusId: queryParams.get('focus'),
    previewId: resolvePreviewId(previewIdValue),
  }
}

function collectExpandableGroups(items, level = 0, expandedGroups = {}) {
  items.forEach((item) => {
    if (item.type !== 'group') {
      return
    }

    if (level >= 1) {
      expandedGroups[item.id] = true
    }

    collectExpandableGroups(item.children, level + 1, expandedGroups)
  })

  return expandedGroups
}

function findParentGroupIds(items, targetId, parentGroups = []) {
  for (const item of items) {
    if (item.type === 'group') {
      const groupTrail = [...parentGroups, item.id]
      const matchedGroupIds = findParentGroupIds(item.children, targetId, groupTrail)

      if (matchedGroupIds) {
        return matchedGroupIds
      }

      continue
    }

    if (item.id === targetId) {
      return parentGroups
    }
  }

  return null
}

function PreviewNavTree({
  items,
  activePreviewId,
  expandedGroups,
  level = 0,
  onSelect,
  onToggleGroup,
}) {
  return (
    <div className="preview-nav-tree">
      {items.filter((item) => !item.hidden).map((item) => {
        if (item.type === 'group') {
          const isCollapsible = level >= 1
          const isCardGroup = level === 1
          const isExpanded = isCollapsible ? expandedGroups[item.id] !== false : true

          return (
            <section
              className="preview-nav-group"
              data-expanded={isExpanded}
              data-level={level}
              key={item.id}
            >
              <div
                className="preview-nav-group__label"
                data-level={level}
              >
                {isCollapsible ? (
                  <button
                    aria-expanded={isExpanded}
                    className={`preview-nav-group__trigger${isCardGroup ? ' preview-nav-group__trigger--card' : ''}`}
                    data-level={level}
                    onClick={() => onToggleGroup(item.id)}
                    type="button"
                  >
                    <span className="preview-nav-group__trigger-label">{item.label}</span>
                    <span className="preview-nav-group__meta">
                      {item.statusLabel ? (
                        <span className="preview-nav-group__status">{item.statusLabel}</span>
                      ) : null}
                      <span
                        aria-hidden="true"
                        className="preview-nav-group__caret"
                        data-expanded={isExpanded}
                      >
                        ▾
                      </span>
                    </span>
                  </button>
                ) : (
                  item.label
                )}
              </div>
              {isExpanded ? (
                <div
                  className="preview-nav-group__children"
                  data-level={level + 1}
                >
                  <PreviewNavTree
                    items={item.children}
                    activePreviewId={activePreviewId}
                    expandedGroups={expandedGroups}
                    level={level + 1}
                    onSelect={onSelect}
                    onToggleGroup={onToggleGroup}
                  />
                </div>
              ) : null}
            </section>
          )
        }

        return (
          <button
            className="preview-nav-item"
            data-active={item.id === activePreviewId}
            data-level={level}
            key={item.id}
            onClick={() => onSelect(item.id)}
            type="button"
          >
            <span className="preview-nav-item__label">{item.label}</span>
            <span className="preview-nav-item__status">{item.statusLabel}</span>
          </button>
        )
      })}
    </div>
  )
}

function App() {
  const [activePreviewId, setActivePreviewId] = useState(getInitialPreviewId)
  const [expandedGroups, setExpandedGroups] = useState(() => collectExpandableGroups(previewNavigation))
  const [pendingFocusId, setPendingFocusId] = useState(getInitialFocusId)
  const resolvedActivePreviewId = resolvePreviewId(activePreviewId)
  const activePreview = findPreviewById(resolvedActivePreviewId) ?? findPreviewById(defaultPreviewId)
  const ActivePreviewComponent = activePreview.component

  useEffect(() => {
    const targetHash = `#${resolvedActivePreviewId}`

    // 由浏览器返回/前进触发的 hashchange 已经更新了地址，这里避免重复压栈
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash)
    }
  }, [resolvedActivePreviewId])

  useEffect(() => {
    function syncPreviewFromHash() {
      const { focusId, previewId: resolvedPreviewId } = getPreviewHashState()

      if (findPreviewById(resolvedPreviewId)) {
        setActivePreviewId(resolvedPreviewId)
      }

      setPendingFocusId(focusId)
    }

    window.addEventListener('hashchange', syncPreviewFromHash)

    return () => {
      window.removeEventListener('hashchange', syncPreviewFromHash)
    }
  }, [])

  useEffect(() => {
    if (!pendingFocusId) {
      return undefined
    }

    const frameId = window.requestAnimationFrame(() => {
      const targetElement = document.getElementById(pendingFocusId)

      if (!targetElement) {
        setPendingFocusId(null)
        return
      }

      document.querySelectorAll('.preview-anchor--active').forEach((element) => {
        element.classList.remove('preview-anchor--active')
      })
      targetElement.scrollIntoView({ block: 'center', behavior: 'smooth' })
      targetElement.classList.add('preview-anchor--active')
      window.setTimeout(() => {
        targetElement.classList.remove('preview-anchor--active')
      }, 1600)
      setPendingFocusId(null)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [pendingFocusId, resolvedActivePreviewId])

  useEffect(() => {
    const parentGroupIds = findParentGroupIds(previewNavigation, resolvedActivePreviewId) ?? []

    setExpandedGroups((currentGroups) => {
      let hasChanged = false
      const nextGroups = { ...currentGroups }

      parentGroupIds.forEach((groupId) => {
        if (nextGroups[groupId] === false) {
          nextGroups[groupId] = true
          hasChanged = true
        }
      })

      return hasChanged ? nextGroups : currentGroups
    })
  }, [resolvedActivePreviewId])

  function handleToggleGroup(groupId) {
    setExpandedGroups((currentGroups) => ({
      ...currentGroups,
      [groupId]: currentGroups[groupId] === false,
    }))
  }

  return (
    <main className="preview-workspace">
      <aside className="preview-sidebar">
        <div className="preview-sidebar__header">
          <p className="preview-sidebar__eyebrow">组件与页面目录</p>
          <h1 className="preview-sidebar__title">演示组件套件预览台</h1>
          <p className="preview-sidebar__copy">
            左侧按全局、通用、业务和页面案例维护目录。业务组件按酒店、用车、机票、火车票归类，页面案例单独核对整页编排。
          </p>
        </div>

        <nav
          aria-label="预览目录"
          className="preview-sidebar__nav"
        >
          <PreviewNavTree
            items={previewNavigation}
            activePreviewId={resolvedActivePreviewId}
            expandedGroups={expandedGroups}
            onSelect={setActivePreviewId}
            onToggleGroup={handleToggleGroup}
          />
        </nav>
      </aside>

      <section className="preview-stage">
        <header className="preview-stage__header">
          <div className="preview-stage__heading">
            <p className="preview-stage__path">{activePreview.pathLabel}</p>
            <h2 className="preview-stage__title">{activePreview.title}</h2>
            <p className="preview-stage__copy">{activePreview.description}</p>
          </div>
          <div className="preview-stage__meta">
            <span className="preview-stage__badge">{activePreview.statusLabel}</span>
            <span className="preview-stage__hint">{activePreview.maintenanceHint}</span>
          </div>
        </header>

        <div className="preview-stage__canvas">
          <ActivePreviewComponent {...activePreview.previewProps} />
        </div>
      </section>
    </main>
  )
}

export default App
