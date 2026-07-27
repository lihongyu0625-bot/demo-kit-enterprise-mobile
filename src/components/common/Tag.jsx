import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function Tag({
  children,
  className,
  icon,
  tone = 'default',
  variant = 'selector',
}) {
  return (
    <span
      className={cx(
        'common-tag',
        variant === 'room' && 'common-tag--room',
        tone === 'muted' && 'common-tag--muted',
        tone === 'primary' && 'common-tag--primary',
        className,
      )}
    >
      {icon ? <span className="common-tag__icon">{icon}</span> : null}
      <span>{children}</span>
    </span>
  )
}
