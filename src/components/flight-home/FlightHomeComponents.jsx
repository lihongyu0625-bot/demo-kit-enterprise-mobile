import { Fragment } from 'react'
import guaranteeDiscountIcon from '../../assets/hotel-home-business/icon-guarantee-discount.png'
import guaranteeFlightIcon from '../../assets/hotel-home-business/icon-guarantee-flight.png'
import guaranteeLogoIcon from '../../assets/hotel-home-business/icon-guarantee-logo.png'
import guaranteePriceDropIcon from '../../assets/hotel-home-business/icon-guarantee-price-drop.png'
import guaranteeShieldIcon from '../../assets/hotel-home-business/icon-guarantee-shield.png'
import bottomWatermarkFlightImage from '../../assets/flight-home/bottom-watermark-flight.svg'
import headerBgImage from '../../assets/flight-home/header-bg.png'
import guaranteeWatermarkImage from '../../assets/flight-home/guarantee-watermark.png'
import routeSwapGradientIcon from '../../assets/flight-home/icon-route-swap-gradient.svg'
import { BottomWatermark } from '../common/BottomWatermark'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './flight-home.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function FlightHomeIcon({ className, name }) {
  return (
    <GlobalStyleIcon
      className={className}
      name={name}
    />
  )
}

function Divider({ className, vertical = false }) {
  return <span className={cx('flight-home-divider', vertical && 'flight-home-divider--vertical', className)} />
}

function GuaranteeFeatureIcon({ icon }) {
  const iconMap = {
    discount: guaranteeDiscountIcon,
    flight: guaranteeFlightIcon,
    priceDrop: guaranteePriceDropIcon,
    shield: guaranteeShieldIcon,
  }

  return (
    <img
      alt=""
      aria-hidden="true"
      className="flight-home-guarantee__feature-icon-image"
      src={iconMap[icon]}
    />
  )
}

export function FlightHomeHeroBackground() {
  return (
    <div className="flight-home-hero">
      <img
        alt=""
        className="flight-home-hero__image"
        src={headerBgImage}
      />
    </div>
  )
}

export function FlightHomeTopNav({ nav }) {
  return (
    <div className="flight-home-top">
      <IPhoneBar
        className="flight-home-top__statusbar"
        tone="light"
        transparent
      />

      <div className="flight-home-top__nav">
        <button
          aria-label="返回"
          className="flight-home-top__back"
          type="button"
        >
          <FlightHomeIcon
            className="flight-home-top__back-icon"
            name="icon/directional/chevron-left-large/outlined"
          />
        </button>

        <button
          className="flight-home-top__policy"
          type="button"
        >
          <FlightHomeIcon
            className="flight-home-top__policy-icon"
            name="icon/status/info-circle/outlined"
          />
          <span>{nav.policyLabel}</span>
        </button>
      </div>
    </div>
  )
}

export function FlightHomeHeroIntro({ header }) {
  return (
    <div className="flight-home-intro">
      <div className="flight-home-intro__title">
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
      </div>

      <div className="flight-home-switch">
        {header.tabs.map((tab) => (
          <button
            className={cx('flight-home-switch__tab', tab.active && 'flight-home-switch__tab--active')}
            key={tab.label}
            type="button"
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function FlightHomeApplicationCard({ application }) {
  return (
    <section className="flight-home-application">
      <div className="flight-home-application__notice">
        <span className="flight-home-application__notice-badge">{application.notice.badge}</span>
        <span className="flight-home-application__notice-text">{application.notice.text}</span>
        <FlightHomeIcon
          className="flight-home-application__notice-icon"
          name="icon/directional/chevron-right-small/outlined"
        />
      </div>

      <div className="flight-home-application__row flight-home-application__row--plan">
        <div className="flight-home-application__plan-main">
          <span className="flight-home-application__plan-title">{application.plan.title}</span>
          <Divider
            className="flight-home-application__plan-divider"
            vertical
          />
          <span className="flight-home-application__plan-placeholder">{application.plan.placeholder}</span>
        </div>
        <FlightHomeIcon
          className="flight-home-application__chevron"
          name="icon/directional/chevron-right-small/outlined"
        />
      </div>

      <Divider />

      <div className="flight-home-application__route">
        <span>{application.route.fromCity}</span>
        <button
          className="flight-home-application__swap"
          type="button"
        >
          <img
            alt=""
            aria-hidden="true"
            className="flight-home-application__swap-icon"
            src={routeSwapGradientIcon}
          />
        </button>
        <span>{application.route.toCity}</span>
      </div>

      <Divider />

      <div className="flight-home-application__row flight-home-application__row--dates">
        <div className="flight-home-application__dates">
          <div className="flight-home-application__date">
            <strong>{application.dates.departDate}</strong>
            <span>{application.dates.departWeekday}</span>
          </div>
          <Divider className="flight-home-application__date-divider" />
          <div className="flight-home-application__date">
            <strong>{application.dates.returnDate}</strong>
            <span>{application.dates.returnWeekday}</span>
          </div>
        </div>

        <div className="flight-home-application__trip-types">
          {application.tripTypes.map((item) => (
            <button
              className={cx('flight-home-application__trip-type', item.active && 'flight-home-application__trip-type--active')}
              key={item.label}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <Divider />

      <button
        className="flight-home-application__row flight-home-application__row--field"
        type="button"
      >
        <span>{application.travelerLabel}</span>
        <FlightHomeIcon
          className="flight-home-application__chevron"
          name="icon/directional/chevron-right-small/outlined"
        />
      </button>

      <Divider />

      <div className="flight-home-application__cabin">{application.cabinLabel}</div>

      <button
        className="flight-home-application__submit"
        type="button"
      >
        {application.buttonLabel}
      </button>
    </section>
  )
}

export function FlightHomeGuaranteeCard({ guarantee }) {
  return (
    <section className="flight-home-guarantee">
      <img
        alt=""
        className="flight-home-guarantee__watermark"
        src={guaranteeWatermarkImage}
      />

      <div className="flight-home-guarantee__header">
        <div className="flight-home-guarantee__title-group">
          <img
            alt=""
            aria-hidden="true"
            className="flight-home-guarantee__logo"
            src={guaranteeLogoIcon}
          />
          <p className="flight-home-guarantee__title">{guarantee.title}</p>
        </div>

        <button
          className="flight-home-guarantee__detail"
          type="button"
        >
          <span>{guarantee.detailLabel}</span>
          <FlightHomeIcon
            className="flight-home-guarantee__detail-icon"
            name="icon/directional/chevron-right-small/outlined"
          />
        </button>
      </div>

      <div className="flight-home-guarantee__features">
        {guarantee.features.map((item, index) => (
          <Fragment key={item.title}>
            <div
              className={cx(
                'flight-home-guarantee__feature',
                index === guarantee.features.length - 1 && 'flight-home-guarantee__feature--align-end',
              )}
            >
              <div className="flight-home-guarantee__feature-title-row">
                <GuaranteeFeatureIcon icon={item.icon} />
                <span className="flight-home-guarantee__feature-title">{item.title}</span>
              </div>
              <p className="flight-home-guarantee__feature-copy">{item.description}</p>
            </div>

            {index < guarantee.features.length - 1 ? (
              <Divider
                className="flight-home-guarantee__feature-divider"
                vertical
              />
            ) : null}
          </Fragment>
        ))}
      </div>

      <div className="flight-home-guarantee__footer">
        {guarantee.highlights.map((item) => (
          <div
            className="flight-home-guarantee__footer-item"
            key={item}
          >
            <span className="flight-home-guarantee__footer-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function FlightHomeBenefitStrip({ benefits }) {
  return (
    <BottomWatermark
      className="flight-home-benefit-strip"
      headlineAlt={benefits.title}
      headlineSrc={bottomWatermarkFlightImage}
      items={benefits.items}
      tone="flight"
    />
  )
}

export function FlightHomeBottomNav({ items }) {
  return (
    <footer className="flight-home-bottom-nav">
      <div className="flight-home-bottom-nav__bar">
        {items.map((item) => (
          <button
            className="flight-home-bottom-nav__item"
            key={item.label}
            type="button"
          >
            <FlightHomeIcon
              className="flight-home-bottom-nav__icon"
              name={item.iconName}
              style={{ color: 'var(--color-alpha-black-84)' }}
            />
            <span className="flight-home-bottom-nav__label">{item.label}</span>
          </button>
        ))}
      </div>
      <IPhoneFooter className="flight-home-bottom-nav__footer" />
    </footer>
  )
}
