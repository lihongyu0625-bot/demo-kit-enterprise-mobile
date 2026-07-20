import './hotel-booking-button.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function getVariantFromHint(hint) {
  return hint === '企业+个人' ? 'enterprise-personal' : 'enterprise'
}

export function HotelBookingButton({
  className,
  hint = '企业支付',
  label = '预订',
  variant,
}) {
  const resolvedVariant = variant ?? getVariantFromHint(hint)
  const orange = resolvedVariant === 'enterprise-personal'

  return (
    <button
      className={cx(
        'hotel-booking-button',
        orange && 'hotel-booking-button--orange',
        className,
      )}
      type="button"
    >
      <span className="hotel-booking-button__label">{label}</span>
      <span className="hotel-booking-button__hint">{hint}</span>
    </button>
  )
}
