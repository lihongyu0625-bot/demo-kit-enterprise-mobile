import './car-common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function CarPaymentActionCapsule({
  action,
  amount,
  className,
  payType,
  prefix,
  unit = '元',
  variant = 'compact',
}) {
  return (
    <div className={cx('car-payment-action-capsule', `car-payment-action-capsule--${variant}`, className)}>
      <div className="car-payment-action-capsule__amount">
        {prefix ? <span className="car-payment-action-capsule__prefix">{prefix}</span> : null}
        {payType ? <strong className="car-payment-action-capsule__pay-type">{payType}</strong> : null}
        <em>{amount}</em>
        {unit ? <span className="car-payment-action-capsule__unit">{unit}</span> : null}
      </div>
      <button
        className="car-payment-action-capsule__button"
        type="button"
      >
        {action}
      </button>
    </div>
  )
}
