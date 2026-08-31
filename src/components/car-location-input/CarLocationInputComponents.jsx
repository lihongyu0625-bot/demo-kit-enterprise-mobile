import carMarkerTopImage from '../../assets/car-location-input/car-marker-top.png'
import locationIcon from '../../assets/car-location-input/location-icon.svg'
import mapBackgroundImage from '../../assets/car-location-input/map-background.jpeg'
import pickupPhotoImage from '../../assets/car-location-input/pickup-photo.png'
import safetyCenterIcon from '../../assets/car-location-input/safety-center-icon.svg'
import safetyGuideImage from '../../assets/car-location-input/safety-guide.png'
import { DirectionalIcon } from '../common/DirectionalIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './car-location-input.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function CarLocationDirectionalIcon({ className, name }) {
  return (
    <DirectionalIcon
      className={className}
      name={name}
    />
  )
}

export function CarLocationMapLayer() {
  return (
    <div className="car-location-input-map">
      <img
        alt=""
        src={mapBackgroundImage}
      />
    </div>
  )
}

export function CarLocationTopChrome() {
  return (
    <>
      <IPhoneBar
        className="car-location-input-statusbar"
        transparent
      />
      <button
        aria-label="返回"
        className="car-location-input-back"
        type="button"
      >
        <CarLocationDirectionalIcon
          className="car-location-input-back__icon"
          name="icon/directional/arrow-left/filled"
        />
      </button>
    </>
  )
}

export function CarLocationVehicleMarkers() {
  return (
    <>
      <img
        alt=""
        className="car-location-input-car car-location-input-car--left"
        src={carMarkerTopImage}
      />
      <img
        alt=""
        className="car-location-input-car car-location-input-car--right"
        src={carMarkerTopImage}
      />
      <img
        alt=""
        className="car-location-input-car car-location-input-car--top"
        src={carMarkerTopImage}
      />
    </>
  )
}

export function CarLocationPickupMarker({ pickup }) {
  return (
    <section className="car-location-input-pickup">
      <div className="car-location-input-pickup__bubble">
        <div className="car-location-input-pickup__badge">{pickup.badge}</div>
        <div className="car-location-input-pickup__content">
          <div className="car-location-input-pickup__photo">
            <img
              alt=""
              src={pickupPhotoImage}
            />
            <span>{pickup.photoLabel}</span>
          </div>
          <strong>{pickup.name}</strong>
          <CarLocationDirectionalIcon
            className="car-location-input-pickup__arrow"
            name="icon/directional/chevron-right-small/filled"
          />
        </div>
      </div>
      <span className="car-location-input-pickup__pin" />
    </section>
  )
}

export function CarLocationMapLabel({ label }) {
  return (
    <div className="car-location-input-map-label">
      <span className="car-location-input-map-label__dot" />
      <p>
        {label.name}
        <br />
        {label.detail}
      </p>
    </div>
  )
}

export function CarLocationFloatingActions() {
  return (
    <div className="car-location-input-floating-actions">
      <button
        aria-label="安全中心"
        className="car-location-input-floating-button car-location-input-floating-button--safety"
        type="button"
      >
        <img
          alt=""
          className="car-location-input-floating-button__icon"
          src={safetyCenterIcon}
        />
      </button>
      <button
        aria-label="定位"
        className="car-location-input-floating-button"
        type="button"
      >
        <img
          alt=""
          className="car-location-input-floating-button__icon"
          src={locationIcon}
        />
      </button>
    </div>
  )
}

export function CarLocationInputCard({ inputCard }) {
  return (
    <section className="car-location-input-card">
      <div className="car-location-input-card__tabs">
        {inputCard.tabs.map((item) => (
          <button
            className={cx('car-location-input-card__tab', item.active && 'car-location-input-card__tab--active')}
            key={item.label}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        className="car-location-input-card__origin"
        type="button"
      >
        <span className="car-location-input-card__origin-dot" />
        <span>{inputCard.originPrefix}</span>
        <strong>{inputCard.origin}</strong>
        <span>{inputCard.originSuffix}</span>
        <CarLocationDirectionalIcon
          className="car-location-input-card__origin-arrow"
          name="icon/directional/chevron-right-small/outlined"
        />
      </button>

      <div className="car-location-input-card__destination">
        <div className="car-location-input-card__destination-main">
          <span className="car-location-input-card__destination-dot" />
          <strong>{inputCard.destinationPlaceholder}</strong>
        </div>
        <button
          className="car-location-input-card__suggestion"
          type="button"
        >
          {inputCard.destinationSuggestion}
        </button>
      </div>
    </section>
  )
}

export function CarLocationSafetyGuide({ safetyGuide }) {
  return (
    <section className="car-location-input-safety">
      <div className="car-location-input-safety__body">
        <p>{safetyGuide.eyebrow}</p>
        <h2>
          {safetyGuide.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <img
          alt=""
          src={safetyGuideImage}
        />
      </div>
      <button
        className="car-location-input-safety__action"
        type="button"
      >
        {safetyGuide.action}
        <CarLocationDirectionalIcon
          className="car-location-input-safety__action-icon"
          name="icon/directional/arrow-right/outlined"
        />
      </button>
    </section>
  )
}

export function CarLocationInputPreviewFrame({ data }) {
  return (
    <div className="car-location-input-shell">
      <CarLocationMapLayer />
      <div className="car-location-input-bottom-mask" />
      <CarLocationTopChrome />
      <CarLocationVehicleMarkers />
      <CarLocationMapLabel label={data.mapLabel} />
      <CarLocationPickupMarker pickup={data.pickup} />

      <main className="car-location-input-main">
        <CarLocationFloatingActions />
        <CarLocationInputCard inputCard={data.inputCard} />
        <CarLocationSafetyGuide safetyGuide={data.safetyGuide} />
      </main>

      <IPhoneFooter className="car-location-input-footer" transparent />
    </div>
  )
}
