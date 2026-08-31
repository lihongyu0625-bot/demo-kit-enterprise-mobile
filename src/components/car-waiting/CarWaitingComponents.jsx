import heroBgImage from '../../assets/car-waiting/raw-image-5.png'
import heroMascotImage from '../../assets/car-waiting/raw-image-1.png'
import v6BadgeImage from '../../assets/car-waiting/raw-image-10.png'
import { CarBubbleVehicleOption } from '../car-bubble/CarBubbleComponents'
import { DirectionalIcon } from '../common/DirectionalIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './car-waiting.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function CarWaitingTopChrome({ route }) {
  return (
    <header className="car-waiting-top">
      <IPhoneBar
        className="car-waiting-statusbar"
        reserveSpace
        transparent
      />
      <div className="car-waiting-nav">
        <button
          aria-label="返回"
          className="car-waiting-back"
          type="button"
        >
          <DirectionalIcon
            className="car-waiting-back__icon"
            name="icon/directional/arrow-left/filled"
          />
        </button>
        <div className="car-waiting-route">
          <span className="car-waiting-route__dot car-waiting-route__dot--origin" />
          <span>{route.origin}</span>
          <span className="car-waiting-route__line" />
          <span className="car-waiting-route__dot car-waiting-route__dot--destination" />
          <span>{route.destination}</span>
        </div>
      </div>
    </header>
  )
}

export function CarWaitingStatusHero({ status }) {
  return (
    <section className="car-waiting-hero">
      <img
        alt=""
        className="car-waiting-hero__bg"
        src={heroBgImage}
      />
      <div className="car-waiting-hero__content">
        <div className="car-waiting-hero__title-row">
          <h1>{status.title}</h1>
          <button
            className="car-waiting-hero__cancel"
            type="button"
          >
            {status.action}
          </button>
        </div>
        <p className="car-waiting-hero__estimate">
          {status.selected}
          <span>{status.companyPay}</span>
          <span>{status.personalPay}</span>
          <DirectionalIcon
            className="car-waiting-hero__estimate-icon"
            name="icon/directional/chevron-right-small/outlined"
          />
        </p>
        <p className="car-waiting-hero__rank">
          {status.rank}
          <DirectionalIcon
            className="car-waiting-hero__rank-icon"
            name="icon/directional/chevron-right-small/outlined"
          />
        </p>
        <p className="car-waiting-hero__message">{status.message}</p>
      </div>
      <img
        alt=""
        className="car-waiting-hero__mascot"
        src={heroMascotImage}
      />
    </section>
  )
}

function SpeedTag({ children }) {
  return (
    <span className="car-waiting-speed-tag">
      <span aria-hidden="true">⚡</span>
      {children}
    </span>
  )
}

export function CarWaitingBenefitCard({ benefits }) {
  return (
    <section className="car-waiting-benefit-card">
      <div className="car-waiting-benefit-card__title">
        <img
          alt="V6"
          src={v6BadgeImage}
        />
        <h2>{benefits.title}</h2>
      </div>
      <div className="car-waiting-benefit-card__list">
        {benefits.items.map((item) => (
          <article
            className="car-waiting-benefit"
            key={item.title}
          >
            <div className="car-waiting-benefit__text">
              <div className="car-waiting-benefit__name">
                <strong>{item.title}</strong>
                <SpeedTag>{item.tag}</SpeedTag>
              </div>
              <p>{item.description}</p>
            </div>
            <button
              className={cx('car-waiting-benefit__action', item.primary && 'car-waiting-benefit__action--primary')}
              type="button"
            >
              {item.action}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export function CarWaitingAddMoreFooter({ footer }) {
  return (
    <div className="car-waiting-add-card__footer">
      <div className="car-waiting-add-card__price">
        <div>
          <span>{footer.prefix}</span>
          <strong>{footer.amount}</strong>
          <span>{footer.unit}</span>
        </div>
        <p>{footer.selected}</p>
      </div>
      <button
        className="car-waiting-add-card__action"
        type="button"
      >
        {footer.action}
      </button>
    </div>
  )
}

export function CarWaitingAddMoreCard({ addMore }) {
  return (
    <section className="car-waiting-add-card">
      <div className="car-waiting-add-card__header">
        <div className="car-waiting-add-card__heading">
          <h2>{addMore.title}</h2>
          <span>{addMore.speed}</span>
        </div>
        <button
          className="car-waiting-add-card__select"
          type="button"
        >
          {addMore.selectAll}
          <span aria-hidden="true" />
        </button>
      </div>
      <div className="car-waiting-add-card__list">
        {addMore.vehicles.map((vehicle) => (
          <CarBubbleVehicleOption
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))}
      </div>
      <CarWaitingAddMoreFooter footer={addMore.footer} />
    </section>
  )
}

export function CarWaitingPreviewFrame({ data }) {
  return (
    <div className="car-waiting-shell">
      <CarWaitingTopChrome route={data.route} />
      <CarWaitingStatusHero status={data.status} />
      <main className="car-waiting-main">
        <CarWaitingBenefitCard benefits={data.benefits} />
        <CarWaitingAddMoreCard addMore={data.addMore} />
      </main>
      <IPhoneFooter className="car-waiting-footer" transparent />
    </div>
  )
}
