import { PageBottomNav } from '../common/PageBottomNav'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { DirectionalIcon } from '../common/DirectionalIcon'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import applyCarImage from '../../assets/car-home-default/apply-car.png'
import applyTravelImage from '../../assets/car-home-default/apply-travel.png'
import flightPlaneIcon from '../../assets/hotel-booking-success/icon-flight-plane.svg'
import carActionIcon from '../../assets/hotel-booking-success/icon-car.svg'
import quickBenefitImage from '../../assets/car-home-default/quick-benefit.png'
import quickChauffeurImage from '../../assets/car-home-default/quick-chauffeur.png'
import quickFlightImage from '../../assets/car-home-default/quick-flight.png'
import quickHotelImage from '../../assets/car-home-default/quick-hotel.png'
import quickTrainImage from '../../assets/car-home-default/quick-train.png'

const driverBannerCarImage = 'https://www.figma.com/api/mcp/asset/c5d6c7f4-1823-4b8b-88b0-5d4cc1427218'
const driverBannerBackgroundImage = 'https://www.figma.com/api/mcp/asset/d47d688a-a28b-40e9-8803-a75e5f51b631'
const driverBannerTitleLineImage = 'https://www.figma.com/api/mcp/asset/369e6f66-3545-4254-85ba-e3f6480c6533'
const carApplicationPatternImage = 'https://www.figma.com/api/mcp/asset/ff32988a-28a8-442c-a61e-39a4ccb421db'
const tripPlaneLineImage = 'https://www.figma.com/api/mcp/asset/57a6d3d4-df10-4573-86de-d32e1b3474d3'
const hotelPromoImage = 'https://www.figma.com/api/mcp/asset/34e50ecb-abbb-4ea8-b551-6bcc92e8c882'
const couponImage = 'https://www.figma.com/api/mcp/asset/bdfbbcd5-6aff-4225-8449-df81525b3fe8'
const benefitCardImage = 'https://www.figma.com/api/mcp/asset/4250ce86-96ae-4997-86ec-8961da9e7f2a'
const feedbackCardImage = 'https://www.figma.com/api/mcp/asset/5ea19e9a-68e8-4709-bbf3-c5843b8c525e'

const travelLinkIconMap = {
  '市内用车': quickChauffeurImage,
  '接送机': quickBenefitImage,
  '订机票': quickFlightImage,
  '订火车票': quickTrainImage,
  '订酒店': quickHotelImage,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function CarHomeFullDirectionalIcon({ className, name }) {
  return (
    <DirectionalIcon
      className={className}
      name={name}
    />
  )
}

function CarHomeFullGlobalIcon({ className, name }) {
  return (
    <GlobalStyleIcon
      className={className}
      name={name}
    />
  )
}

function splitDriverPlate(plate) {
  const prefix = plate.slice(0, 1)
  const suffix = plate.slice(1)

  return { prefix, suffix }
}

function splitDriverDistance(distance) {
  const match = distance.match(/^(\d+)(米)(\d+)(分钟)$/)

  if (!match) {
    return null
  }

  return {
    first: match[1],
    firstUnit: match[2],
    second: match[3],
    secondUnit: match[4],
  }
}

function CarHomeFullActionItem({ item }) {
  return (
    <button
      className="car-home-full-actions__item"
      type="button"
    >
      <span className="car-home-full-actions__icon-wrap">
        <img
          alt=""
          className="car-home-full-actions__icon"
          src={item.icon === 'car' ? applyCarImage : applyTravelImage}
        />
      </span>
      <span className="car-home-full-actions__label">{item.label}</span>
    </button>
  )
}

function CarHomeFullSummary({ summary }) {
  return (
    <div className="car-home-full-summary">
      <p className="car-home-full-summary__title">{summary.title}</p>
      <button
        className="car-home-full-summary__action"
        type="button"
      >
        <span className="car-home-full-summary__count-prefix">{summary.countText}</span>
        <span className="car-home-full-summary__count-value">{summary.count}</span>
        <CarHomeFullDirectionalIcon
          className="car-home-full-summary__chevron"
          name="icon/directional/chevron-right-small/outlined"
        />
      </button>
    </div>
  )
}

function CarHomeFullApplicationField({ field }) {
  const isSplit = field.value.length > 1 && field.label === '额度'

  return (
    <div className="car-home-full-application-card__field">
      <span className="car-home-full-application-card__field-label">{field.label}</span>
      {isSplit ? (
        <span className="car-home-full-application-card__field-values car-home-full-application-card__field-values--inline">
          <span>{field.value[0]}</span>
          <span className="car-home-full-application-card__field-divider" />
          <span>{field.value[1]}</span>
        </span>
      ) : (
        <span className="car-home-full-application-card__field-values">
          {field.value.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </span>
      )}
    </div>
  )
}

function CarHomeFullTravelLink({ label }) {
  return (
    <div className="car-home-full-travel-links__item">
      <img
        alt=""
        className="car-home-full-travel-links__icon"
        src={travelLinkIconMap[label]}
      />
      <span className="car-home-full-travel-links__label">{label}</span>
    </div>
  )
}

function CarHomeFullPromoSideCard({ item, index }) {
  return (
    <article className={cx('car-home-full-promo__side-card', `car-home-full-promo__side-card--${index}`)}>
      <div>
        <p className="car-home-full-promo__side-title">{item.title}</p>
        <p className="car-home-full-promo__side-subtitle">{item.subtitle}</p>
      </div>
      <img
        alt=""
        className="car-home-full-promo__side-figure"
        src={index === 0 ? couponImage : index === 1 ? benefitCardImage : feedbackCardImage}
      />
    </article>
  )
}

export function CarHomeFullRideNotice({ notice }) {
  return (
    <section className="car-home-full-ride-notice">
      <div className="car-home-full-ride-notice__header">
        <span className="car-home-full-ride-notice__badge">{notice.badge}</span>
        <button
          aria-label="关闭"
          className="car-home-full-ride-notice__close"
          type="button"
        >
          <CarHomeFullGlobalIcon
            className="car-home-full-ride-notice__close-icon"
            name="icon/action/close-large/outlined"
          />
        </button>
      </div>
      <div className="car-home-full-ride-notice__body">
        <div className="car-home-full-ride-notice__locations">
          <div className="car-home-full-ride-notice__content">
            <div className="car-home-full-ride-notice__dot" />
            <span className="car-home-full-ride-notice__destination">{notice.origin}</span>
          </div>
          <div className="car-home-full-ride-notice__content car-home-full-ride-notice__content--destination">
            <div className="car-home-full-ride-notice__dot car-home-full-ride-notice__dot--accent" />
            <span className="car-home-full-ride-notice__destination car-home-full-ride-notice__destination--strong">
              {notice.destination}
            </span>
            <span className="car-home-full-ride-notice__price-tip">{notice.priceTip}</span>
          </div>
        </div>
        <button
          className="car-home-full-ride-notice__action"
          type="button"
        >
          {notice.actionText}
        </button>
      </div>
    </section>
  )
}

export function CarHomeFullActions({ items }) {
  return (
    <section className="car-home-full-actions">
      {items.map((item) => (
        <CarHomeFullActionItem
          item={item}
          key={item.label}
        />
      ))}
    </section>
  )
}

export function CarHomeFullDriverBanner({ banner }) {
  const plate = splitDriverPlate(banner.plate)
  const distance = splitDriverDistance(banner.distance)

  return (
    <section className="car-home-full-driver-banner">
      <div
        aria-hidden="true"
        className="car-home-full-driver-banner__background"
      >
        <img
          alt=""
          className="car-home-full-driver-banner__background-image"
          src={driverBannerBackgroundImage}
        />
      </div>
      <div className="car-home-full-driver-banner__media">
        <img
          alt=""
          className="car-home-full-driver-banner__car"
          src={driverBannerCarImage}
        />
      </div>
      <div className="car-home-full-driver-banner__content">
        <div className="car-home-full-driver-banner__title-wrap">
          <p className="car-home-full-driver-banner__title">{banner.title}</p>
          <img
            alt=""
            aria-hidden="true"
            className="car-home-full-driver-banner__title-line"
            src={driverBannerTitleLineImage}
          />
        </div>
        <div className="car-home-full-driver-banner__meta">
          <span className="car-home-full-driver-banner__plate">
            <span className="car-home-full-driver-banner__plate-prefix">{plate.prefix}</span>
            <span className="car-home-full-driver-banner__plate-suffix">{plate.suffix}</span>
          </span>
          {distance ? (
            <span className="car-home-full-driver-banner__distance">
              <span className="car-home-full-driver-banner__distance-number">{distance.first}</span>
              <span className="car-home-full-driver-banner__distance-unit">{distance.firstUnit}</span>
              <span className="car-home-full-driver-banner__distance-number">{distance.second}</span>
              <span className="car-home-full-driver-banner__distance-unit">{distance.secondUnit}</span>
            </span>
          ) : (
            <span className="car-home-full-driver-banner__distance">{banner.distance}</span>
          )}
        </div>
      </div>
      <button
        className="car-home-full-driver-banner__action"
        type="button"
      >
        {banner.actionText}
      </button>
    </section>
  )
}

export function CarHomeFullPendingNotice({ notice }) {
  return (
    <section className="car-home-full-pending-notice">
      <span className="car-home-full-pending-notice__status">{notice.status}</span>
      <span className="car-home-full-pending-notice__text">{notice.text}</span>
      <button
        className="car-home-full-pending-notice__action"
        type="button"
      >
        {notice.actionText}
      </button>
    </section>
  )
}

export function CarHomeFullApplications({ applications, summary }) {
  return (
    <section className="car-home-full-applications">
      <CarHomeFullSummary summary={summary} />

      <article className="car-home-full-application-card car-home-full-application-card--blue">
        <img
          alt=""
          className="car-home-full-application-card__pattern"
          src={carApplicationPatternImage}
        />
        <div className="car-home-full-application-card__header">
          <div className="car-home-full-application-card__header-main">
            <span className="car-home-full-application-card__badge">{applications[0].badge}</span>
            <span className="car-home-full-application-card__badge-divider" />
            <span className="car-home-full-application-card__title">{applications[0].title}</span>
          </div>
          <span className="car-home-full-application-card__status">{applications[0].status}</span>
        </div>
        <div className="car-home-full-application-card__body">
          <div className="car-home-full-application-card__fields">
            {applications[0].lines.map((field) => (
              <CarHomeFullApplicationField
                field={field}
                key={field.label}
              />
            ))}
          </div>
          <button
            className="car-home-full-application-card__cta"
            type="button"
          >
            <img
              alt=""
              className="car-home-full-application-card__cta-icon"
              src={carActionIcon}
            />
            {applications[0].actionText}
          </button>
        </div>
      </article>

      <article className="car-home-full-application-card car-home-full-application-card--green">
        <div className="car-home-full-application-card__header">
          <div className="car-home-full-application-card__header-main">
            <span className="car-home-full-application-card__badge">{applications[1].badge}</span>
            <span className="car-home-full-application-card__badge-divider" />
            <span className="car-home-full-application-card__title">{applications[1].title}</span>
          </div>
        </div>
        <div className="car-home-full-application-card__fields">
          {applications[1].lines.map((field) => (
            <CarHomeFullApplicationField
              field={field}
              key={field.label}
            />
          ))}
        </div>
        <div className="car-home-full-travel-links">
          {applications[1].links.map((label) => (
            <CarHomeFullTravelLink
              key={label}
              label={label}
            />
          ))}
        </div>
      </article>
    </section>
  )
}

export function CarHomeFullTrips({ summary, tripCard }) {
  return (
    <section className="car-home-full-trips">
      <CarHomeFullSummary summary={summary} />

      <article className="car-home-full-trip-card">
        <div className="car-home-full-trip-card__top">
          <div className="car-home-full-trip-card__date">
            <img
              alt=""
              className="car-home-full-trip-card__date-icon"
              src={flightPlaneIcon}
            />
            <span>{tripCard.date}</span>
          </div>
          <span className="car-home-full-trip-card__status">{tripCard.status}</span>
        </div>

        <div className="car-home-full-trip-card__route">
          <div className="car-home-full-trip-card__airport car-home-full-trip-card__airport--left">
            <span className="car-home-full-trip-card__time">{tripCard.fromTime}</span>
            <span className="car-home-full-trip-card__place">{tripCard.fromPlace}</span>
          </div>

          <div className="car-home-full-trip-card__flight">
            <span className="car-home-full-trip-card__flight-no">{tripCard.flightNo}</span>
            <img
              alt=""
              className="car-home-full-trip-card__flight-line"
              src={tripPlaneLineImage}
            />
            <span className="car-home-full-trip-card__duration">{tripCard.duration}</span>
          </div>

          <div className="car-home-full-trip-card__airport car-home-full-trip-card__airport--right">
            <span className="car-home-full-trip-card__time">{tripCard.toTime}</span>
            <span className="car-home-full-trip-card__place">{tripCard.toPlace}</span>
          </div>
        </div>

        <div className="car-home-full-trip-card__bottom">
          <div className="car-home-full-trip-card__passengers">
            <span className="car-home-full-trip-card__passengers-label">{tripCard.passengersLabel}</span>
            <span className="car-home-full-trip-card__passengers-value">{tripCard.passengers}</span>
          </div>
          <div className="car-home-full-trip-card__benefits">
            {tripCard.benefits.map((item) => (
              <span
                className="car-home-full-trip-card__benefit"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <button
            className="car-home-full-trip-card__cta"
            type="button"
          >
            <img
              alt=""
              className="car-home-full-trip-card__cta-icon"
              src={carActionIcon}
            />
            {tripCard.actionText}
          </button>
        </div>
      </article>
    </section>
  )
}

export function CarHomeFullPromoCards({ cards }) {
  return (
    <section className="car-home-full-promo">
      <article className="car-home-full-promo__main-card">
        <div className="car-home-full-promo__main-copy">
          <p className="car-home-full-promo__main-title">{cards.main.title}</p>
          <p className="car-home-full-promo__main-subtitle">{cards.main.subtitle}</p>
        </div>
        <img
          alt=""
          className="car-home-full-promo__main-figure"
          src={hotelPromoImage}
        />
        <button
          className="car-home-full-promo__main-action"
          type="button"
        >
          {cards.main.actionText}
        </button>
      </article>

      <div className="car-home-full-promo__side">
        {cards.secondary.map((item, index) => (
          <CarHomeFullPromoSideCard
            index={index}
            item={item}
            key={item.title}
          />
        ))}
      </div>
    </section>
  )
}

export function CarHomeFullBottomNav({ items }) {
  return (
    <div className="car-home-default-bottom-tab">
      <PageBottomNav items={items} />
      <IPhoneFooter className="car-home-default-bottom-tab__footer" />
    </div>
  )
}
