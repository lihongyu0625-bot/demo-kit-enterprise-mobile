import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function BottomWatermark({ className, headlineAlt = '', headlineSrc, items, tone = 'default' }) {
  return (
    <div className={cx('common-bottom-watermark', `common-bottom-watermark--${tone}`, className)}>
      <div className="common-bottom-watermark__headline">
        <img
          alt={headlineAlt}
          className="common-bottom-watermark__headline-image"
          src={headlineSrc}
        />
      </div>

      <div className="common-bottom-watermark__items">
        {items.map((item, index) => (
          <span
            className="common-bottom-watermark__item"
            key={item}
          >
            <span>{item}</span>
            {index < items.length - 1 ? <span aria-hidden="true" className="common-bottom-watermark__divider" /> : null}
          </span>
        ))}
      </div>
    </div>
  )
}
