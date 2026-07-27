import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function PriceDisplay({
  amount,
  className,
  currency = '¥',
  mutedSuffix = false,
  suffix,
  tone = 'blue',
}) {
  return (
    <div
      className={cx(
        'common-price-display',
        tone === 'orange' && 'common-price-display--orange',
        className,
      )}
    >
      <span className="common-price-display__currency">{currency}</span>
      <span className="common-price-display__amount">{amount}</span>
      {suffix ? (
        <span
          className={cx(
            'common-price-display__suffix',
            mutedSuffix && 'common-price-display__suffix--muted',
          )}
        >
          {suffix}
        </span>
      ) : null}
    </div>
  )
}
