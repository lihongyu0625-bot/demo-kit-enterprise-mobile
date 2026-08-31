import mapBackgroundImage from '../../assets/car-bubble/raw-image-2.jpeg'
import carpoolImage from '../../assets/car-bubble/raw-image-1.png'
import savingImage from '../../assets/car-bubble/raw-image-3.png'
import specialExpressImage from '../../assets/car-bubble/raw-image-4.png'
import moreBrandImage from '../../assets/car-bubble/raw-image-5.png'
import taxiImage from '../../assets/car-bubble/raw-image-7.png'
import comfortImage from '../../assets/car-bubble/raw-image-8.png'
import premiumImage from '../../assets/car-bubble/raw-image-9.png'
import luxuryImage from '../../assets/car-bubble/raw-image-10.png'
import { CarPaymentActionCapsule } from '../car-common/CarPaymentActionCapsule'
import { CarPaymentFloatingSafety } from '../car-payment/CarPaymentComponents'
import { DirectionalIcon } from '../common/DirectionalIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './car-bubble.css'

const vehicleImages = {
  'raw-image-1': carpoolImage,
  'raw-image-3': savingImage,
  'raw-image-4': specialExpressImage,
  'raw-image-5': moreBrandImage,
  'raw-image-7': taxiImage,
  'raw-image-8': comfortImage,
  'raw-image-9': premiumImage,
  'raw-image-10': luxuryImage,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function PricePart({ part, withInfo = false }) {
  return (
    <span
      className="car-bubble-price-part"
      data-tone={part.tone}
    >
      {withInfo ? <span className="car-bubble-price-part__info" /> : null}
      <span className="car-bubble-price-part__label">{part.label}</span>
      {part.payType ? <span className="car-bubble-price-part__pay">{part.payType}</span> : null}
      <span className="car-bubble-price-part__amount">{part.amount}</span>
      <span className="car-bubble-price-part__unit">元</span>
    </span>
  )
}

export function CarBubbleMapLayer() {
  return (
    <div className="car-bubble-map-layer">
      <img
        alt=""
        src={mapBackgroundImage}
      />
    </div>
  )
}

export function CarBubbleTopChrome() {
  return (
    <>
      <IPhoneBar
        className="car-bubble-statusbar"
        transparent
      />
      <button
        aria-label="返回"
        className="car-bubble-back"
        type="button"
      >
        <DirectionalIcon
          className="car-bubble-back__icon"
          name="icon/directional/arrow-left/filled"
        />
      </button>
    </>
  )
}

export function CarBubbleRouteLayer({ route }) {
  return (
    <section className="car-bubble-route-layer">
      <div className="car-bubble-route-card car-bubble-route-card--origin">
        <span>{route.origin}</span>
        <DirectionalIcon
          className="car-bubble-route-card__icon"
          name="icon/directional/chevron-right-small/filled"
        />
      </div>
      <div className="car-bubble-route-card car-bubble-route-card--destination">
        <span>{route.destination}</span>
        <DirectionalIcon
          className="car-bubble-route-card__icon"
          name="icon/directional/chevron-right-small/filled"
        />
      </div>
      <div className="car-bubble-route-line">
        <span className="car-bubble-route-line__start" />
        <span className="car-bubble-route-line__red" />
        <span className="car-bubble-route-line__end" />
      </div>
      <div className="car-bubble-route-summary">
        全程
        <span>{route.distance}</span>
        公里,约行驶
        <span>{route.duration}</span>
        分钟
      </div>
    </section>
  )
}

export function CarBubbleSafetyFloating() {
  return (
    <div className="car-bubble-safety-floating">
      <CarPaymentFloatingSafety />
    </div>
  )
}

export function CarBubbleVehicleOption({ vehicle }) {
  return (
    <button
      className={cx('car-bubble-vehicle', vehicle.highlight && 'car-bubble-vehicle--highlight')}
      type="button"
    >
      <div className="car-bubble-vehicle__main">
        <img
          alt=""
          className="car-bubble-vehicle__image"
          src={vehicleImages[vehicle.imageKey]}
        />
        <div className="car-bubble-vehicle__text">
          <div className="car-bubble-vehicle__name">
            <strong>{vehicle.name}</strong>
            {vehicle.upgrade ? <span>· {vehicle.upgrade}</span> : null}
          </div>
          <div className="car-bubble-vehicle__meta">
            {vehicle.eta ? <span>{vehicle.eta}</span> : null}
            {vehicle.subtitle ? <span>{vehicle.subtitle}</span> : null}
            {vehicle.hasArrow ? (
              <DirectionalIcon
                className="car-bubble-vehicle__meta-icon"
                name="icon/directional/chevron-right-small/outlined"
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className="car-bubble-vehicle__side">
        <div className="car-bubble-vehicle__prices">
          <div
            className="car-bubble-vehicle__price-row"
            data-columns={vehicle.priceParts.length}
          >
            {vehicle.priceParts.map((part, index) => (
              <PricePart
                key={`${vehicle.id}-${part.label}-${part.amount}`}
                part={part}
                withInfo={Boolean(vehicle.coupon) && index === 0}
              />
            ))}
          </div>
          {vehicle.coupon ? <span className="car-bubble-vehicle__coupon">{vehicle.coupon}</span> : null}
        </div>
        <span
          aria-hidden="true"
          className="car-bubble-vehicle__check"
          data-selected={vehicle.selected ? 'true' : 'false'}
        />
      </div>
    </button>
  )
}

export function CarBubbleVehiclePanel({ summary, vehicles }) {
  return (
    <section className="car-bubble-panel">
      <h2 className="car-bubble-panel__title">
        {summary.prefix}
        <span>{summary.rate}</span>
        ,{summary.suffix}
      </h2>
      <div className="car-bubble-panel__list">
        {vehicles.map((vehicle) => (
          <CarBubbleVehicleOption
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))}
      </div>
    </section>
  )
}

export function CarBubbleBottomEntries({ entries }) {
  return (
    <div className="car-bubble-bottom-entries">
      {entries.map((entry) => (
        <button
          className="car-bubble-bottom-entries__item"
          key={entry}
          type="button"
        >
          {entry}
          <DirectionalIcon
            className="car-bubble-bottom-entries__icon"
            name="icon/directional/chevron-right-small/outlined"
          />
        </button>
      ))}
    </div>
  )
}

export function CarBubbleCallCapsule({ callBar }) {
  return (
    <CarPaymentActionCapsule
      action={callBar.action}
      amount={callBar.amount}
      className="car-bubble-call"
      payType={callBar.payType}
      prefix={callBar.prefix}
      unit={callBar.unit}
      variant="wide"
    />
  )
}

export function CarBubbleBottomBar({ callBar, entries }) {
  return (
    <footer className="car-bubble-bottom">
      <div className="car-bubble-bottom__content">
        <CarBubbleBottomEntries entries={entries} />
        <CarBubbleCallCapsule callBar={callBar} />
      </div>
      <IPhoneFooter className="car-bubble-footer" />
    </footer>
  )
}

export function CarBubblePreviewFrame({ data }) {
  return (
    <div className="car-bubble-shell">
      <CarBubbleMapLayer />
      <CarBubbleTopChrome />
      <CarBubbleRouteLayer route={data.route} />
      <CarBubbleSafetyFloating />
      <CarBubbleVehiclePanel
        summary={data.summary}
        vehicles={data.vehicles}
      />
      <CarBubbleBottomBar
        callBar={data.callBar}
        entries={data.bottomEntries}
      />
    </div>
  )
}
