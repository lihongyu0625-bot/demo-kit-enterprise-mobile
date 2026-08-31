import actionAlarmIcon from '../../assets/car-pickup/action-alarm.svg'
import actionCancelIcon from '../../assets/car-pickup/action-cancel.svg'
import actionMessageIcon from '../../assets/car-pickup/action-message.svg'
import actionMoreIcon from '../../assets/car-pickup/action-more.svg'
import actionPhoneIcon from '../../assets/car-pickup/action-phone.svg'
import actionShareIcon from '../../assets/car-pickup/action-share.svg'
import backIcon from '../../assets/car-pickup/back.svg'
import bannerImage from '../../assets/car-pickup/banner.png'
import carMarkerImage from '../../assets/car-pickup/car-marker.png'
import distancePointerIcon from '../../assets/car-pickup/distance-pointer.svg'
import mapBackgroundImage from '../../assets/car-pickup/map-background.png'
import personAnchorMask from '../../assets/car-pickup/person-anchor-mask.svg'
import personAnchorTriangle from '../../assets/car-pickup/person-anchor-triangle.svg'
import starIcon from '../../assets/car-pickup/star.svg'
import vehicleImage from '../../assets/car-pickup/vehicle.png'
import { CarLocationFloatingActions } from '../car-location-input/CarLocationInputComponents'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { Fragment } from 'react'
import './car-ride-status.css'

const actionIcons = {
  'action-alarm.svg': actionAlarmIcon,
  'action-cancel.svg': actionCancelIcon,
  'action-message.svg': actionMessageIcon,
  'action-more.svg': actionMoreIcon,
  'action-phone.svg': actionPhoneIcon,
  'action-share.svg': actionShareIcon,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function DriverAction({ action, variant }) {
  const className = cx(
    'car-ride-driver-action',
    `car-ride-driver-action--${variant}`,
    action.id === 'more' && 'car-ride-driver-action--more',
  )

  return (
    <button
      className={className}
      type="button"
    >
      {action.iconName ? (
        <GlobalStyleIcon
          className="car-ride-driver-action__icon"
          name={action.iconName}
        />
      ) : (
        <img
          alt=""
          className="car-ride-driver-action__icon"
          src={actionIcons[action.icon]}
        />
      )}
      <span>{action.label}</span>
    </button>
  )
}

export function CarRideTopChrome({ className }) {
  return (
    <>
      <IPhoneBar
        className={cx('car-ride-statusbar', className)}
        transparent
      />
      <button
        aria-label="返回"
        className={cx('car-ride-back', className)}
        type="button"
      >
        <img
          alt=""
          src={backIcon}
        />
      </button>
    </>
  )
}

export function CarRideDistanceMarker({ distance }) {
  return (
    <div className="car-ride-distance">
      <div className="car-ride-distance__bubble">
        <span className="car-ride-distance__tag">{distance.tag}</span>
        <div className="car-ride-distance__content">
          <span className="car-ride-distance__label">{distance.label}</span>
          <strong>{distance.time}</strong>
        </div>
      </div>
      <img
        alt=""
        className="car-ride-distance__pointer"
        src={distancePointerIcon}
      />
    </div>
  )
}

export function CarRideRouteOverlay({ distance, label = '用车路线' }) {
  return (
    <section
      aria-label={label}
      className="car-ride-route"
    >
      <div className="car-ride-route__line" />
      <span className="car-ride-route__dot car-ride-route__dot--near" />
      <span className="car-ride-route__dot car-ride-route__dot--middle" />
      <span className="car-ride-route__dot car-ride-route__dot--start" />
      <div className="car-ride-route__origin">
        <span>起</span>
      </div>
      <div className="car-ride-route__person">
        <img
          alt=""
          className="car-ride-route__person-triangle"
          src={personAnchorTriangle}
        />
        <img
          alt=""
          className="car-ride-route__person-mask"
          src={personAnchorMask}
        />
      </div>
      <img
        alt=""
        className="car-ride-route__car"
        src={carMarkerImage}
      />
      <CarRideDistanceMarker distance={distance} />
    </section>
  )
}

export function CarRideMapStage({ distance, className, label }) {
  return (
    <section className={cx('car-ride-map-stage', className)}>
      <img
        alt=""
        className="car-ride-map-stage__image"
        src={mapBackgroundImage}
      />
      <div className="car-ride-map-stage__mask" />
      <CarRideRouteOverlay
        distance={distance}
        label={label}
      />
    </section>
  )
}

export function CarRideFloatingControls({ className }) {
  return (
    <div className={cx('car-ride-floating', className)}>
      <CarLocationFloatingActions />
    </div>
  )
}

export function CarRideNoticeBar({ notice, className }) {
  return (
    <section className={cx('car-ride-notice', className)}>
      <GlobalStyleIcon
        className="car-ride-notice__icon"
        name={notice.iconName}
      />
      <p>{notice.text}</p>
    </section>
  )
}

export function CarRideDriverCard({ driver, actions, variant = 'pickup', className }) {
  const isSend = variant === 'send'

  return (
    <section className={cx('car-ride-driver-card', `car-ride-driver-card--${variant}`, className)}>
      <img
        alt=""
        className="car-ride-driver-card__banner"
        src={bannerImage}
      />
      <div className="car-ride-driver-card__info">
        <div className="car-ride-driver-card__content">
          <div className="car-ride-driver-card__text">
            {isSend ? (
              <div className="car-ride-driver-card__title">
                <div className="car-ride-driver-card__plate">
                  <span>{driver.plateProvince}</span>
                  <strong>{driver.plateNumber}</strong>
                </div>
                <span className="car-ride-driver-card__service-tag">{driver.serviceTag}</span>
              </div>
            ) : (
              <>
                <div className="car-ride-driver-card__plate">
                  <span>{driver.plateProvince}</span>
                  <strong>{driver.plateNumber}</strong>
                </div>
                <div className="car-ride-driver-card__vehicle">
                  <span>{driver.serviceTag}</span>
                  <strong>{driver.vehicle}</strong>
                </div>
              </>
            )}
            <div className="car-ride-driver-card__meta">
              <span>{driver.name}</span>
              <span className="car-ride-driver-card__rating">
                <img
                  alt=""
                  src={starIcon}
                />
                {driver.rating}
              </span>
              <span>{driver.orders}</span>
            </div>
          </div>
          <img
            alt=""
            className="car-ride-driver-card__vehicle-image"
            src={vehicleImage}
          />
        </div>
      </div>
      <div className="car-ride-driver-card__actions">
        {actions.map((action, index) => (
          <Fragment key={action.id}>
            {index > 0 ? <span className="car-ride-driver-card__divider" /> : null}
            <DriverAction
              action={action}
              variant={variant}
            />
          </Fragment>
        ))}
      </div>
    </section>
  )
}
