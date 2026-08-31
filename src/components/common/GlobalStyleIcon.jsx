import { useEffect, useState } from 'react'

const globalStyleIconLoaderModules = import.meta.glob(
  ['../../assets/global-styles/**/*.svg', '../../assets/global-styles/**/*.png'],
  { import: 'default' },
)

const globalStyleIconLoaderMap = Object.fromEntries(
  Object.entries(globalStyleIconLoaderModules).flatMap(([path, loader]) => {
    const match = path.match(/\/global-styles\/([^/]+)\/(.+)\.(svg|png)$/)

    if (!match) {
      return []
    }

    const [, categoryFolder, relativePath] = match
    const categoryName = categoryFolder.replace(/-icons$/, '')
    const iconName = `icon/${categoryName}/${relativePath.replace(/\\/g, '/')}`

    return [[iconName, loader]]
  }),
)

const loadedIconSrcCache = new Map()

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function GlobalStyleIcon({ className, label, name, style, ...props }) {
  const [iconSrc, setIconSrc] = useState(() => loadedIconSrcCache.get(name))

  useEffect(() => {
    const cachedSrc = loadedIconSrcCache.get(name)

    if (cachedSrc) {
      setIconSrc(cachedSrc)
      return undefined
    }

    const loader = globalStyleIconLoaderMap[name]

    if (!loader) {
      console.warn(`[GlobalStyleIcon] 未找到图标资源: ${name}`)
      return undefined
    }

    let cancelled = false

    loader().then((src) => {
      loadedIconSrcCache.set(name, src)

      if (!cancelled) {
        setIconSrc(src)
      }
    })

    return () => {
      cancelled = true
    }
  }, [name])

  if (!iconSrc) {
    return null
  }

  return (
    <span
      {...props}
      aria-hidden={label ? undefined : 'true'}
      aria-label={label}
      className={cx('global-style-icon', className)}
      style={{
        '--global-style-icon-src': `url("${iconSrc}")`,
        ...style,
      }}
    />
  )
}
