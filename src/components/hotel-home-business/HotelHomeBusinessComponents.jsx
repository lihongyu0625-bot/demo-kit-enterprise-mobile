import { Fragment } from 'react'
import backIcon from '../../assets/hotel-home-business/icon-back-white.svg'
import chevronDownFilledIcon from '../../assets/hotel-home-business/icon-chevron-down-filled.svg'
import chevronDownIcon from '../../assets/hotel-home-business/icon-chevron-down.svg'
import detailChevronRightIcon from '../../assets/hotel-home-business/icon-detail-chevron-right.svg'
import chevronRightIcon from '../../assets/hotel-home-business/icon-chevron-right.svg'
import guaranteeDiscountIcon from '../../assets/hotel-home-business/icon-guarantee-discount.png'
import guaranteeFlightIcon from '../../assets/hotel-home-business/icon-guarantee-flight.png'
import guaranteeLogoIcon from '../../assets/hotel-home-business/icon-guarantee-logo.png'
import guaranteePriceDropIcon from '../../assets/hotel-home-business/icon-guarantee-price-drop.png'
import guaranteeShieldIcon from '../../assets/hotel-home-business/icon-guarantee-shield.png'
import guaranteeStampImage from '../../assets/hotel-home-business/guarantee-stamp.png'
import headerBgImage from '../../assets/hotel-home-business/header-bg.png'
import headphonesIcon from '../../assets/hotel-home-business/icon-headphones.svg'
import infoBlueIcon from '../../assets/hotel-home-business/icon-info-blue.svg'
import infoWhiteIcon from '../../assets/hotel-home-business/icon-info-white.svg'
import ordersIcon from '../../assets/hotel-home-business/icon-orders.svg'
import benefitsIcon from '../../assets/hotel-home-business/icon-benefits.svg'
import targetIcon from '../../assets/hotel-home-business/icon-target.svg'
import watermarkGroup451Image from '../../assets/hotel-home-business/watermark-group-451.svg'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './hotel-home-business.css'

const footerIconMap = {
  benefits: benefitsIcon,
  headphones: headphonesIcon,
  orders: ordersIcon,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function Divider({ vertical = false, className }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        vertical ? 'hotel-home-business-divider hotel-home-business-divider--vertical' : 'hotel-home-business-divider',
        className,
      )}
    />
  )
}

function GuaranteeShieldIcon() {
  return (
    <img
      alt=""
      aria-hidden="true"
      className="hotel-home-business-guarantee__inline-icon hotel-home-business-guarantee__inline-icon--shield"
      src={guaranteeShieldIcon}
    />
  )
}

function GuaranteeChartIcon() {
  return (
    <img
      alt=""
      aria-hidden="true"
      className="hotel-home-business-guarantee__inline-icon"
      src={guaranteePriceDropIcon}
    />
  )
}

function GuaranteeFlightIcon() {
  return (
    <img
      alt=""
      aria-hidden="true"
      className="hotel-home-business-guarantee__inline-icon hotel-home-business-guarantee__inline-icon--flight"
      src={guaranteeFlightIcon}
    />
  )
}

function GuaranteePriceIcon() {
  return (
    <img
      alt=""
      aria-hidden="true"
      className="hotel-home-business-guarantee__inline-icon"
      src={guaranteeDiscountIcon}
    />
  )
}

function GuaranteeLogoIcon() {
  return (
    <img
      alt=""
      aria-hidden="true"
      className="hotel-home-business-guarantee__logo"
      src={guaranteeLogoIcon}
    />
  )
}

export function HotelHomeBusinessHeaderHero({ header, nav }) {
  return (
    <section className="hotel-home-business-hero">
      <img
        alt=""
        className="hotel-home-business-hero__background"
        src={headerBgImage}
      />

      <IPhoneBar
        className="hotel-home-business-statusbar"
        tone="light"
        transparent
      />

      <div className="hotel-home-business-nav">
        <button
          aria-label="返回"
          className="hotel-home-business-nav__back"
          type="button"
        >
          <img
            alt=""
            src={backIcon}
          />
        </button>

        <button
          className="hotel-home-business-nav__policy"
          type="button"
        >
          <img
            alt=""
            src={infoWhiteIcon}
          />
          <span>{nav.policyLabel}</span>
        </button>
      </div>
    </section>
  )
}

export function HotelHomeBusinessTitle({ header }) {
  return (
    <div className="hotel-home-business-hero__title">
      <h1>{header.title}</h1>
      <p>{header.subtitle}</p>
    </div>
  )
}

export function HotelHomeBusinessSwitch({ tabs }) {
  return (
    <div className="hotel-home-business-switch">
      {tabs.map((tab) => (
        <button
          className={cx('hotel-home-business-switch__tab', tab.active && 'hotel-home-business-switch__tab--active')}
          key={tab.label}
          type="button"
        >
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  )
}

export function HotelHomeBusinessHeroIntro({ header }) {
  return (
    <div className="hotel-home-business-hero-copy">
      <HotelHomeBusinessTitle header={header} />
      <div className="hotel-home-business-hero-copy__switch">
        <HotelHomeBusinessSwitch tabs={header.tabs} />
      </div>
    </div>
  )
}

export function HotelHomeBusinessApplicationCard({ application }) {
  return (
    <section className="hotel-home-business-application">
      <div className="hotel-home-business-application__block">
        <div className="hotel-home-business-application__plan-row">
          <div className="hotel-home-business-application__plan-main">
            <span className="hotel-home-business-application__plan-title">{application.planLabel}</span>
            <Divider vertical className="hotel-home-business-application__plan-divider" />
            <span className="hotel-home-business-application__plan-strong">{application.dateRange}</span>
            <div className="hotel-home-business-application__route">
              <span className="hotel-home-business-application__plan-strong">{application.fromCity}</span>
              <span className="hotel-home-business-application__route-arrow">→</span>
              <span className="hotel-home-business-application__plan-strong">{application.toCity}</span>
            </div>
          </div>

          <button
            className="hotel-home-business-icon-button"
            type="button"
          >
            <img
              alt=""
              src={chevronRightIcon}
            />
          </button>
        </div>

        <p className="hotel-home-business-application__subtext">{application.description}</p>
      </div>

      <Divider />

      <div className="hotel-home-business-application__block hotel-home-business-application__block--compact">
        <div className="hotel-home-business-application__location-row">
          <div className="hotel-home-business-application__location-main">
            <button
              className="hotel-home-business-application__location-trigger"
              type="button"
            >
              <span>{application.locationLabel}</span>
              <img
                alt=""
                src={chevronDownFilledIcon}
              />
            </button>
            <span className="hotel-home-business-application__placeholder">{application.searchPlaceholder}</span>
          </div>

          <button
            className="hotel-home-business-icon-button hotel-home-business-icon-button--target"
            type="button"
          >
            <img
              alt=""
              src={targetIcon}
            />
          </button>
        </div>
      </div>

      <Divider />

      <div className="hotel-home-business-application__dates">
        <div className="hotel-home-business-application__date">
          <strong>{application.checkInDate}</strong>
          <span>{application.checkInWeekday}</span>
        </div>

        <span className="hotel-home-business-application__stay-count">{application.stayCount}</span>

        <div className="hotel-home-business-application__date hotel-home-business-application__date--right">
          <strong>{application.checkOutDate}</strong>
          <span>{application.checkOutWeekday}</span>
        </div>
      </div>

      <Divider />

      <div className="hotel-home-business-application__guest-row">
        <span className="hotel-home-business-application__muted">{application.guestLabel}</span>
        <button
          className="hotel-home-business-application__tip"
          type="button"
        >
          <img
            alt=""
            src={infoBlueIcon}
          />
          <span>{application.guestTip}</span>
          <img
            alt=""
            src={chevronRightIcon}
          />
        </button>
      </div>

      <div className="hotel-home-business-application__filter-row">
        <span className="hotel-home-business-application__filter-text">{application.filterLabel}</span>
        <button
          className="hotel-home-business-application__occupancy"
          type="button"
        >
          <span>{application.roomCount}</span>
          <span>{application.adultCount}</span>
          <img
            alt=""
            src={chevronDownIcon}
          />
        </button>
      </div>

      <button
        className="hotel-home-business-application__submit"
        type="button"
      >
        {application.submitLabel}
      </button>
    </section>
  )
}

export function HotelHomeBusinessGuaranteeCard() {
  const benefits = [
    {
      description: '买贵赔双倍',
      icon: <GuaranteeShieldIcon />,
      title: '贵必赔',
    },
    {
      description: '降价自动赔',
      icon: <GuaranteeChartIcon />,
      title: '降价退',
    },
    {
      description: '航变免费退房',
      icon: <GuaranteeFlightIcon />,
      title: '航变无忧退',
    },
    {
      description: '超值酒店7折起',
      icon: <GuaranteePriceIcon />,
      title: '滴滴好价',
    },
  ]

  return (
    <section className="hotel-home-business-guarantee">
      <div className="hotel-home-business-guarantee__header">
        <div className="hotel-home-business-guarantee__title-wrap">
          <GuaranteeLogoIcon />
          <span className="hotel-home-business-guarantee__title">省心住·保障中</span>
        </div>

        <button
          className="hotel-home-business-guarantee__detail"
          type="button"
        >
          <span>详情</span>
          <img
            alt=""
            className="hotel-home-business-guarantee__detail-arrow"
            src={detailChevronRightIcon}
          />
        </button>
      </div>

      <div className="hotel-home-business-guarantee__benefits">
        {benefits.map((item, index) => (
          <Fragment key={item.title}>
            <div
              className={cx(
                'hotel-home-business-guarantee__benefit',
                index === benefits.length - 1 && 'hotel-home-business-guarantee__benefit--align-end',
              )}
            >
              <div className="hotel-home-business-guarantee__benefit-title">
                {item.icon}
                <span>{item.title}</span>
              </div>
              <p>{item.description}</p>
            </div>

            {index < benefits.length - 1 ? (
              <Divider
                vertical
                className="hotel-home-business-guarantee__benefit-divider"
              />
            ) : null}
          </Fragment>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="hotel-home-business-guarantee__stamp"
      >
        <img
          alt=""
          className="hotel-home-business-guarantee__stamp-image"
          src={guaranteeStampImage}
        />
      </div>
    </section>
  )
}

export function HotelHomeBusinessBottomWatermark() {
  return (
    <div className="hotel-home-business-watermark">
      <div className="hotel-home-business-watermark__headline">
        <img
          alt="订酒店·省心住"
          className="hotel-home-business-watermark__headline-image"
          src={watermarkGroup451Image}
        />
      </div>

      <div className="hotel-home-business-watermark__items">
        <span>贵必赔</span>
        <span aria-hidden="true" className="hotel-home-business-watermark__divider" />
        <span>降价退</span>
        <span aria-hidden="true" className="hotel-home-business-watermark__divider" />
        <span>省立返</span>
      </div>
    </div>
  )
}

export function HotelHomeBusinessBottomNav({ items }) {
  return (
    <div className="hotel-home-business-bottom-nav">
      {items.map((item) => (
        <button
          className="hotel-home-business-bottom-nav__item"
          key={item.label}
          type="button"
        >
          <img
            alt=""
            src={footerIconMap[item.icon]}
          />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  )
}

export function HotelHomeBusinessFooter() {
  return (
    <div className="hotel-home-business-footer">
      <IPhoneFooter />
    </div>
  )
}
