import { GlobalStyleIcon } from './GlobalStyleIcon'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function DirectionalIcon({ className, name, style, label, ...props }) {
  return (
    <GlobalStyleIcon
      {...props}
      className={cx('directional-icon', className)}
      label={label}
      name={name}
      style={style}
    />
  )
}
