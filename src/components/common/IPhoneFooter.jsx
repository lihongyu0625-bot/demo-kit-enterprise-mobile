import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function IPhoneFooter({
  className,
  indicatorClassName,
  transparent = false,
}) {
  return (
    <div
      className={cx(
        'iphone-footer',
        transparent && 'iphone-footer--transparent',
        className,
      )}
    >
      <div
        className={cx('iphone-footer__indicator', indicatorClassName)}
        aria-hidden="true"
      />
    </div>
  )
}
