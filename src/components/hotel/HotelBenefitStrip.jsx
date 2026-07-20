import benefitLeftIcon from '../../assets/hotel-list/icon-benefit-left.svg'
import './hotel-benefit-strip.css'

export function HotelBenefitStrip({ className = '', items = [] }) {
  return (
    <div className={`hotel-benefit-strip ${className}`.trim()}>
      <span className="hotel-benefit-strip__badge">
        <img
          alt=""
          className="hotel-benefit-strip__icon"
          src={benefitLeftIcon}
        />
        <span className="hotel-benefit-strip__badge-text">专享权益</span>
      </span>

      {items.map((item, index) => (
        <span
          className="hotel-benefit-strip__item"
          key={`${item}-${index}`}
        >
          {item}
        </span>
      ))}
    </div>
  )
}
