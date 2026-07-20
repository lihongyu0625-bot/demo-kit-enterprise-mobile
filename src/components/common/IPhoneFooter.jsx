import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function IPhoneFooter({ className, indicatorClassName }) {
  return (
    <div className={cx('iphone-footer', className)}>
      <div
        className={cx('iphone-footer__indicator', indicatorClassName)}
        aria-hidden="true"
      />
    </div>
  )
}
