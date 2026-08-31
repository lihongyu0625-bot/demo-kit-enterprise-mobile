import customerServiceAvatar from '../../assets/car-pickup/customer-service-avatar.png'
import './car-common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function CarCustomerServiceCard({ className, service }) {
  return (
    <section className={cx('car-customer-service-card', className)}>
      <div className="car-customer-service-card__title">
        <img
          alt=""
          src={customerServiceAvatar}
        />
        <h2>{service.title}</h2>
      </div>
      <button
        className="car-customer-service-card__action"
        type="button"
      >
        {service.action}
      </button>
    </section>
  )
}
