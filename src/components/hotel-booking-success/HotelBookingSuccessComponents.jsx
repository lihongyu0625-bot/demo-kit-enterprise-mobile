import chevronDownIcon from '../../assets/hotel-booking-success/icon-chevron-down.svg'
import checkIcon from '../../assets/hotel-booking-success/icon-check.svg'
import clipboardIcon from '../../assets/hotel-booking-success/icon-clipboard.svg'
import carIcon from '../../assets/hotel-booking-success/icon-car.svg'
import flightBannerImage from '../../assets/hotel-booking-success/flight-banner.png'
import flightRouteIcon from '../../assets/hotel-booking-success/icon-flight-route.png'
import giftIcon from '../../assets/hotel-booking-success/icon-gift.png'
import homeIcon from '../../assets/hotel-booking-success/icon-home.svg'
import pendingIcon from '../../assets/hotel-booking-success/icon-status-pending.svg'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './hotel-booking-success.css'

const orderActionIconMap = {
  clipboard: clipboardIcon,
  home: homeIcon,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function SuccessCard({ children, className }) {
  return <section className={cx('hotel-booking-success-card', className)}>{children}</section>
}

export function HotelBookingSuccessStatus({ status }) {
  return (
    <section className="hotel-booking-success-status">
      <div className="hotel-booking-success-status__headline">
        <img
          alt=""
          src={pendingIcon}
        />
        <h1>{status.title}</h1>
      </div>

      <p className="hotel-booking-success-status__description">{status.description}</p>
    </section>
  )
}

export function HotelBookingSuccessOrderCard({ order }) {
  return (
    <SuccessCard className="hotel-booking-success-order">
      <h2 className="hotel-booking-success-order__title">{order.hotelName}</h2>

      <div className="hotel-booking-success-order__rows">
        {order.rows.map((row) => (
          <div
            className="hotel-booking-success-order__row"
            key={row.label}
          >
            <span className="hotel-booking-success-order__label">{row.label}：</span>
            <span className="hotel-booking-success-order__value">{row.value}</span>
          </div>
        ))}
      </div>

      <button
        className="hotel-booking-success-order__points"
        type="button"
      >
        <div className="hotel-booking-success-order__points-left">
          <span className="hotel-booking-success-order__points-badge">返</span>
          <span className="hotel-booking-success-order__points-label">{order.pointsLabel}</span>
        </div>

        <div className="hotel-booking-success-order__points-right">
          <span className="hotel-booking-success-order__points-value">{order.pointsValue}</span>
          <img
            alt=""
            src={chevronDownIcon}
          />
        </div>
      </button>

      <div className="hotel-booking-success-order__separator" />

      <div className="hotel-booking-success-order__actions">
        {order.actions.map((item, index) => (
          <div
            className="hotel-booking-success-order__action-wrap"
            key={item.label}
          >
            <button
              className="hotel-booking-success-order__action"
              type="button"
            >
              <img
                alt=""
                src={orderActionIconMap[item.icon]}
              />
              <span>{item.label}</span>
            </button>
            {index === 0 ? <span className="hotel-booking-success-order__divider" /> : null}
          </div>
        ))}
      </div>
    </SuccessCard>
  )
}

export function HotelBookingSuccessFlightBenefitCard({ flightBenefit }) {
  return (
    <section className="hotel-booking-success-flight">
      <div className="hotel-booking-success-flight__banner">
        <img
          alt=""
          className="hotel-booking-success-flight__banner-image"
          src={flightBannerImage}
        />

        <div className="hotel-booking-success-flight__banner-copy">
          <div className="hotel-booking-success-flight__banner-title-row">
            <img
              alt=""
              className="hotel-booking-success-flight__banner-gift"
              src={giftIcon}
            />
            <h3>{flightBenefit.bannerTitle}</h3>
          </div>
          <p>{flightBenefit.bannerDescription}</p>
        </div>
      </div>

      <SuccessCard className="hotel-booking-success-flight__body">
        <div className="hotel-booking-success-flight__trip-head">
          <h3>{flightBenefit.tripType}</h3>
          <span>{flightBenefit.tripDate}</span>
        </div>

        <div className="hotel-booking-success-flight__route">
          <div className="hotel-booking-success-flight__city hotel-booking-success-flight__city--left">
            <span>{flightBenefit.fromLabel}</span>
            <strong>{flightBenefit.fromCity}</strong>
          </div>

          <img
            alt=""
            className="hotel-booking-success-flight__route-icon"
            src={flightRouteIcon}
          />

          <div className="hotel-booking-success-flight__city hotel-booking-success-flight__city--right">
            <span>{flightBenefit.toLabel}</span>
            <strong>{flightBenefit.toCity}</strong>
          </div>
        </div>

        <button
          className="hotel-booking-success-flight__button"
          type="button"
        >
          {flightBenefit.buttonLabel}
        </button>
      </SuccessCard>
    </section>
  )
}

export function HotelBookingSuccessAirportTransferCard({ airportTransfer }) {
  return (
    <SuccessCard className="hotel-booking-success-transfer">
      <div className="hotel-booking-success-transfer__main">
        <div className="hotel-booking-success-transfer__icon-wrap">
          <img
            alt=""
            src={carIcon}
          />
        </div>

        <div className="hotel-booking-success-transfer__copy">
          <h3>{airportTransfer.title}</h3>
          <div className="hotel-booking-success-transfer__highlights">
            {airportTransfer.highlights.map((item) => (
              <div
                className="hotel-booking-success-transfer__highlight"
                key={item}
              >
                <img
                  alt=""
                  src={checkIcon}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="hotel-booking-success-transfer__button"
        type="button"
      >
        {airportTransfer.buttonLabel}
      </button>
    </SuccessCard>
  )
}

export function HotelBookingSuccessPageChrome({ children }) {
  return (
    <>
      <IPhoneBar className="hotel-booking-success-statusbar" transparent />
      {children}
    </>
  )
}

export function HotelBookingSuccessFooter({ className }) {
  return (
    <div className={cx('hotel-booking-success-footer', className)}>
      <IPhoneFooter />
    </div>
  )
}
