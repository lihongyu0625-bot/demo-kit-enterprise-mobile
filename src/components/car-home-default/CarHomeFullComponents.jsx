import { PageBottomNav } from '../common/PageBottomNav'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { DirectionalIcon } from '../common/DirectionalIcon'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import applyCarImage from '../../assets/car-home-default/apply-car.png'
import applyTravelImage from '../../assets/car-home-default/apply-travel.png'
import carApplicationBadgeImage from '../../assets/car-home-default/car-application-badge.png'
import carApplicationPatternImage from '../../assets/car-home-default/car-application-pattern.png'
import carApplicationStatusRibbonImage from '../../assets/car-home-default/car-application-status-ribbon.svg'
import driverBannerCarLocalImage from '../../assets/car-home-default/driver-banner-car.png'
import driverBannerBackgroundImage from '../../assets/car-home-default/driver-banner-background.png'
import driverBannerTitleLineImage from '../../assets/car-home-default/driver-banner-title-line.svg'
import promoBenefitImage from '../../assets/car-home-default/promo-side-benefit.svg'
import promoCouponImage from '../../assets/car-home-default/promo-side-coupon.svg'
import promoFeedbackImage from '../../assets/car-home-default/promo-side-feedback.svg'
import promoHotelImage from '../../assets/car-home-default/promo-main-hotel.svg'
import tripCardDateIconImage from '../../assets/car-home-default/trip-card-date-icon.svg'
import tripCardRouteImage from '../../assets/car-home-default/trip-card-route.svg'
import tripCardTextureImage from '../../assets/car-home-default/trip-card-texture.svg'

const travelLinkConfigMap = {
  '订机票': { name: 'icon/travel/airplane/outlined', tone: 'plane' },
  '订酒店': { name: 'icon/travel/hotel-tower2/outlined', tone: 'hotel' },
  '订火车票': { name: 'icon/travel/train-2/outlined', tone: 'train' },
  '市内用车': { name: 'icon/travel/car2/outlined', tone: 'car' },
  '接送机': { name: 'icon/travel/transfer/outlined', tone: 'transfer' },
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

function CarHomeFullTaxiButton({ className, text }) {
  return (
    <button
      className={cx('car-home-full-taxi-button', className)}
      type="button"
    >
      <CarHomeFullGlobalIcon
        className="car-home-full-taxi-button__icon"
        name="icon/travel/car2/outlined"
      />
      <span>{text}</span>
    </button>
  )
}

function splitPendingNoticeText(text) {
  const match = text.match(/^(.*?)(\d+)(.*)$/)

  if (!match) {
    return {
      beforeCount: text,
      count: '',
      afterCount: '',
    }
  }

  return {
    beforeCount: match[1],
    count: match[2],
    afterCount: match[3],
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
  const config = travelLinkConfigMap[label]

  return (
    <div className="car-home-full-travel-links__item">
      <CarHomeFullGlobalIcon
        className={cx('car-home-full-travel-links__icon', config && `car-home-full-travel-links__icon--${config.tone}`)}
        name={config?.name}
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
        src={index === 0 ? promoCouponImage : index === 1 ? promoBenefitImage : promoFeedbackImage}
      />
    </article>
  )
}

function CarHomeFullTravelBadge({ label }) {
  return <span className="car-home-full-travel-application-card__badge">{label}</span>
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
          src={driverBannerCarLocalImage}
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
  const textParts = splitPendingNoticeText(notice.text)

  return (
    <section className="car-home-full-pending-notice">
      <div className="car-home-full-pending-notice__content">
        <span className="car-home-full-pending-notice__status">{notice.status}</span>
        <span
          aria-hidden="true"
          className="car-home-full-pending-notice__divider"
        />
        <p className="car-home-full-pending-notice__text">
          <span>{textParts.beforeCount}</span>
          {textParts.count ? <span className="car-home-full-pending-notice__count">{textParts.count}</span> : null}
          <span>{textParts.afterCount}</span>
        </p>
      </div>
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

      <CarHomeFullCarApplicationCard application={applications[0]} />
      <CarHomeFullTravelApplicationCard application={applications[1]} />
    </section>
  )
}

export function CarHomeFullCarApplicationCard({ application }) {
  return (
    <article className="car-home-full-application-card car-home-full-application-card--blue">
      <img
        alt=""
        className="car-home-full-application-card__pattern"
        src={carApplicationPatternImage}
      />
      <div className="car-home-full-car-application-card__status-corner">
        <img
          alt=""
          className="car-home-full-car-application-card__status-corner-image"
          src={carApplicationStatusRibbonImage}
        />
        <span className="car-home-full-car-application-card__status-corner-text">{application.status}</span>
      </div>
      <div className="car-home-full-application-card__header">
        <div className="car-home-full-application-card__header-main">
          <img
            alt={application.badge}
            className="car-home-full-car-application-card__badge-image"
            src={carApplicationBadgeImage}
          />
          <span className="car-home-full-application-card__badge-divider" />
          <span className="car-home-full-application-card__title">{application.title}</span>
        </div>
      </div>
      <div className="car-home-full-application-card__body">
        <div className="car-home-full-application-card__fields">
          {application.lines.map((field) => (
            <CarHomeFullApplicationField
              field={field}
              key={field.label}
            />
          ))}
        </div>
        <CarHomeFullTaxiButton
          className="car-home-full-car-application-card__cta"
          text={application.actionText}
        />
      </div>
    </article>
  )
}

export function CarHomeFullTravelApplicationCard({ application }) {
  return (
    <article className="car-home-full-application-card car-home-full-application-card--green car-home-full-travel-application-card">
      <div className="car-home-full-application-card__header">
        <div className="car-home-full-application-card__header-main">
          <CarHomeFullTravelBadge label={application.badge} />
          <span className="car-home-full-application-card__badge-divider" />
          <span className="car-home-full-application-card__title">{application.title}</span>
        </div>
      </div>
      <div className="car-home-full-application-card__fields car-home-full-travel-application-card__fields">
        {application.lines.map((field) => (
          <CarHomeFullApplicationField
            field={field}
            key={field.label}
          />
        ))}
      </div>
      <div className="car-home-full-travel-links">
        {application.links.map((label) => (
          <CarHomeFullTravelLink
            key={label}
            label={label}
          />
        ))}
      </div>
    </article>
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
              src={tripCardDateIconImage}
            />
            <span>{tripCard.date}</span>
          </div>
          <span className="car-home-full-trip-card__status">{tripCard.status}</span>
        </div>

        <div className="car-home-full-trip-card__content">
          <div
            aria-hidden="true"
            className="car-home-full-trip-card__texture"
          >
            <img
              alt=""
              className="car-home-full-trip-card__texture-image"
              src={tripCardTextureImage}
            />
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
                src={tripCardRouteImage}
              />
              <span className="car-home-full-trip-card__duration">{tripCard.duration}</span>
            </div>

            <div className="car-home-full-trip-card__airport car-home-full-trip-card__airport--right">
              <span className="car-home-full-trip-card__time">{tripCard.toTime}</span>
              <span className="car-home-full-trip-card__place">{tripCard.toPlace}</span>
            </div>
          </div>

          <div className="car-home-full-trip-card__passengers">
            <span className="car-home-full-trip-card__passengers-label">{tripCard.passengersLabel}</span>
            <span className="car-home-full-trip-card__passengers-value">{tripCard.passengers}</span>
          </div>

          <div className="car-home-full-trip-card__benefit-strip">
            <div className="car-home-full-trip-card__benefits">
              {tripCard.benefits.map((item, index) => (
                <span
                  className="car-home-full-trip-card__benefit-item"
                  key={item}
                >
                  {index > 0 ? <span aria-hidden="true" className="car-home-full-trip-card__benefit-divider" /> : null}
                  <span className="car-home-full-trip-card__benefit">{item}</span>
                </span>
              ))}
            </div>
            <CarHomeFullTaxiButton
              className="car-home-full-trip-card__cta"
              text={tripCard.actionText}
            />
          </div>
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
          src={promoHotelImage}
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
