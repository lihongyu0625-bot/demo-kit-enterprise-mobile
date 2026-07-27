const globalStyleIconModules = import.meta.glob('../../assets/global-styles/**/*.svg', {
  eager: true,
  import: 'default',
})

const globalStyleIconSrcMap = Object.fromEntries(
  Object.entries(globalStyleIconModules).flatMap(([path, src]) => {
    const match = path.match(/\/global-styles\/([^/]+)\/(.+)\.svg$/)

    if (!match) {
      return []
    }

    const [, categoryFolder, relativePath] = match
    const categoryName = categoryFolder.replace(/-icons$/, '')
    const iconName = `icon/${categoryName}/${relativePath.replace(/\\/g, '/')}`

    return [[iconName, src]]
  }),
)

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function GlobalStyleIcon({ className, label, name, style, ...props }) {
  const iconSrc = globalStyleIconSrcMap[name]

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
