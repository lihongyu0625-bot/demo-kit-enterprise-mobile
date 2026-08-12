import airlineLogoBlueRed from '../../assets/flight-list/airline-logo-blue-red.png'
import airlineLogoRed from '../../assets/flight-list/airline-logo-red.png'
import headerBgImage from '../../assets/flight-list/header-bg.png'
import routeArrowImage from '../../assets/flight-list/route-arrow.svg'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { PriceDisplay } from '../common/PriceDisplay'
import { Tag } from '../common/Tag'
import './flight-list.css'

const airlineLogoMap = {
  'blue-red': airlineLogoBlueRed,
  red: airlineLogoRed,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function FlightListIcon({ className, name, ...props }) {
  return (
    <GlobalStyleIcon
      {...props}
      className={className}
      name={name}
    />
  )
}

export function FlightListHeaderBackground() {
  return (
    <div className="flight-list-header-background">
      <img
        alt=""
        className="flight-list-header-background__image"
        src={headerBgImage}
      />
    </div>
  )
}

export function FlightListTopNav({ nav }) {
  return (
    <header className="flight-list-top">
      <IPhoneBar className="flight-list-top__statusbar" />

      <div className="flight-list-top__bar">
        <button
          aria-label="返回"
          className="flight-list-top__back"
          type="button"
        >
          <FlightListIcon
            className="flight-list-top__back-icon"
            name="icon/directional/chevron-left-large/outlined"
          />
        </button>

        <div className="flight-list-top__title">
          <span>{nav.fromCity}</span>
          <FlightListIcon
            className="flight-list-top__title-icon"
            name="icon/directional/arrow-right2/filled"
          />
          <span>{nav.toCity}</span>
        </div>

        <button
          className="flight-list-top__policy"
          type="button"
        >
          <FlightListIcon
            className="flight-list-top__policy-icon"
            name="icon/status/info-circle/outlined"
          />
          <span>{nav.policyLabel}</span>
        </button>
      </div>
    </header>
  )
}

export function FlightListDateFilter({ dateFilters }) {
  return (
    <section className="flight-list-date-filter">
      <div className="flight-list-date-filter__scroller">
        {dateFilters.items.map((item) => (
          <button
            className={cx('flight-list-date-filter__item', item.active && 'flight-list-date-filter__item--active')}
            key={`${item.label}-${item.date}`}
            type="button"
          >
            <span className="flight-list-date-filter__label">{item.label}</span>
            <strong className="flight-list-date-filter__date">{item.date}</strong>
          </button>
        ))}
        <span
          aria-hidden="true"
          className="flight-list-date-filter__fade"
        />
      </div>

      <button
        aria-label={dateFilters.calendarLabel}
        className="flight-list-date-filter__calendar"
        type="button"
      >
        <FlightListIcon
          className="flight-list-date-filter__calendar-icon"
          name="icon/file/calendar/outlined"
        />
        <FlightListIcon
          className="flight-list-date-filter__calendar-caret"
          name="icon/directional/chevron-down-small/outlined"
        />
      </button>
    </section>
  )
}

export function FlightListFilterBar({ filters }) {
  return (
    <section className="flight-list-filter-bar">
      {filters.map((item) => (
        <button
          className="flight-list-filter-bar__chip"
          key={item.label}
          type="button"
        >
          <Tag
            className="flight-list-filter-bar__tag"
            iconName={item.iconName}
            selectableStyle={item.selected ? 'outline' : 'light'}
            selected={Boolean(item.selected)}
            variant={item.type === 'filter' ? 'multi-select' : 'selectable'}
          >
            {item.label}
          </Tag>
        </button>
      ))}
    </section>
  )
}

function FlightListCardTopBadge({ badge }) {
  if (!badge) {
    return null
  }

  return (
    <span
      className={cx(
        'flight-list-card__top-badge',
        badge.tone === 'agreement' && 'flight-list-card__top-badge--agreement',
        badge.tone === 'warning' && 'flight-list-card__top-badge--warning',
      )}
    >
      {badge.label}
    </span>
  )
}

function FlightListCardPromo({ tags, note }) {
  if ((!tags || tags.length === 0) && !note) {
    return null
  }

  return (
    <div className="flight-list-card__promo">
      {tags?.map((item) => (
        <span
          className={cx(
            'flight-list-card__promo-tag',
            item.tone === 'blue' && 'flight-list-card__promo-tag--blue',
            item.tone === 'orange' && 'flight-list-card__promo-tag--orange',
            item.tone === 'red' && 'flight-list-card__promo-tag--red',
            item.tone === 'outline-blue' && 'flight-list-card__promo-tag--outline-blue',
          )}
          key={item.label}
        >
          {item.label}
        </span>
      ))}
      {note ? <span className="flight-list-card__promo-note">{note}</span> : null}
    </div>
  )
}

function FlightListCardRoute({ duration }) {
  return (
    <div className="flight-list-card__route">
      <span className="flight-list-card__route-duration">{duration}</span>
      <img
        alt=""
        aria-hidden="true"
        className="flight-list-card__route-line"
        src={routeArrowImage}
      />
    </div>
  )
}

function FlightListCardMetaItem({ children }) {
  return <span className="flight-list-card__meta-item">{children}</span>
}

function FlightListCardMeta({ card }) {
  return (
    <div className="flight-list-card__meta">
      <FlightListCardMetaItem>{card.flightNo}</FlightListCardMetaItem>
      <span className="flight-list-card__meta-divider" />
      <FlightListCardMetaItem>{card.aircraft}</FlightListCardMetaItem>
      {card.meal ? (
        <>
          <span className="flight-list-card__meta-divider" />
          <FlightListIcon
            className="flight-list-card__meta-icon"
            name="icon/travel/breakfast/outlined"
          />
        </>
      ) : null}
      {card.wifi ? (
        <>
          <span className="flight-list-card__meta-divider" />
          <FlightListIcon
            className="flight-list-card__meta-icon"
            name="icon/device/wifi/outlined"
          />
        </>
      ) : null}
      <span className="flight-list-card__meta-divider" />
      <FlightListCardMetaItem>{card.punctuality}</FlightListCardMetaItem>
      {card.codeshare ? (
        <>
          <span className="flight-list-card__meta-divider" />
          <span className="flight-list-card__meta-share">
            <FlightListCardMetaItem>含共享</FlightListCardMetaItem>
            <FlightListIcon
              className="flight-list-card__meta-share-icon"
              name="icon/directional/chevron-down-small/outlined"
            />
          </span>
        </>
      ) : null}
    </div>
  )
}

export function FlightListCard({ card }) {
  const airlineLogoSrc = airlineLogoMap[card.airlineLogo]
  const hasPromo = Boolean((card.promoTags && card.promoTags.length) || card.promoNote)
  const hasTopBadge = Boolean(card.topBadge)

  return (
    <article
      className={cx(
        'flight-list-card',
        hasPromo && 'flight-list-card--with-promo',
        hasTopBadge && 'flight-list-card--with-badge',
      )}
    >
      <FlightListCardTopBadge badge={card.topBadge} />

      <div className="flight-list-card__summary">
        <img
          alt=""
          className="flight-list-card__logo"
          src={airlineLogoSrc}
        />
        <div className="flight-list-card__timeline">
          <div className="flight-list-card__time-block">
            <strong>{card.departTime}</strong>
            <span>{card.departAirport}</span>
          </div>

          <FlightListCardRoute duration={card.duration} />

          <div className="flight-list-card__time-block">
            <strong>{card.arriveTime}</strong>
            <span>{card.arriveAirport}</span>
          </div>
        </div>

        <div className="flight-list-card__price-area">
          <PriceDisplay
            amount={card.price}
            className="flight-list-card__price"
          />
          <span className="flight-list-card__cabin">{card.cabin}</span>
        </div>
      </div>

      <FlightListCardMeta card={card} />
      <FlightListCardPromo note={card.promoNote} tags={card.promoTags} />
    </article>
  )
}

export function FlightListCardList({ cards }) {
  return (
    <section className="flight-list-card-list">
      {cards.map((card) => (
        <FlightListCard
          card={card}
          key={`${card.departTime}-${card.arriveTime}-${card.price}`}
        />
      ))}
    </section>
  )
}

export function FlightListBottomSortBar({ items }) {
  return (
    <footer className="flight-list-bottom-sort">
      <div className="flight-list-bottom-sort__bar">
        {items.map((item, index) => (
          <div
            className="flight-list-bottom-sort__item"
            key={item.label}
          >
            <button type="button">{item.label}</button>
            {index < items.length - 1 ? <span className="flight-list-bottom-sort__divider" /> : null}
          </div>
        ))}
      </div>
      <IPhoneFooter className="flight-list-bottom-sort__footer" />
    </footer>
  )
}
