import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function CardDivider({
  className,
  heavy = false,
  orientation = 'horizontal',
}) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        'common-card-divider',
        heavy && 'common-card-divider--heavy',
        orientation === 'vertical' && 'common-card-divider--vertical',
        className,
      )}
    />
  )
}
