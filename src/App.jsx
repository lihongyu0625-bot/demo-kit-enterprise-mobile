import { useEffect, useState } from 'react'
import './App.css'
import {
  defaultPreviewId,
  findPreviewById,
  previewNavigation,
} from './previews/previewRegistry.jsx'

function getInitialPreviewId() {
  if (typeof window === 'undefined') {
    return defaultPreviewId
  }

  const hashValue = window.location.hash.replace('#', '')
  return findPreviewById(hashValue) ? hashValue : defaultPreviewId
}

function PreviewNavTree({ items, activePreviewId, level = 0, onSelect }) {
  return (
    <div className="preview-nav-tree">
      {items.map((item) => {
        if (item.type === 'group') {
          return (
            <section
              className="preview-nav-group"
              key={item.id}
            >
              <div
                className="preview-nav-group__label"
                data-level={level}
              >
                {item.label}
              </div>
              <PreviewNavTree
                items={item.children}
                activePreviewId={activePreviewId}
                level={level + 1}
                onSelect={onSelect}
              />
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
  const activePreview = findPreviewById(activePreviewId) ?? findPreviewById(defaultPreviewId)
  const ActivePreviewComponent = activePreview.component

  useEffect(() => {
    window.history.replaceState(null, '', `#${activePreviewId}`)
  }, [activePreviewId])

  return (
    <main className="preview-workspace">
      <aside className="preview-sidebar">
        <div className="preview-sidebar__header">
          <p className="preview-sidebar__eyebrow">组件与页面目录</p>
          <h1 className="preview-sidebar__title">演示组件套件预览台</h1>
          <p className="preview-sidebar__copy">
            左侧统一维护目录，右侧负责实际预览。后续新增组件时，只要补预览组件并在注册表里加一项即可。
          </p>
        </div>

        <nav
          aria-label="预览目录"
          className="preview-sidebar__nav"
        >
          <PreviewNavTree
            items={previewNavigation}
            activePreviewId={activePreviewId}
            onSelect={setActivePreviewId}
          />
        </nav>

        <div className="preview-sidebar__footer">
          <p>维护建议</p>
          <p>1. 新建预览组件</p>
          <p>2. 在 `src/previews/previewRegistry.js` 里注册</p>
          <p>3. 菜单和右侧预览会自动接入</p>
        </div>
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
          <ActivePreviewComponent />
        </div>
      </section>
    </main>
  )
}

export default App
