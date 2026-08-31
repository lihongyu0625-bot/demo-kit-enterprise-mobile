import airlineLogoBlueRed from '../../assets/flight-list/airline-logo-blue-red.png'
import routePlaneImage from '../../assets/flight-quote/route-plane.png'
import { FlightNoticeBar, FlightTopNav } from '../flight/FlightSharedComponents'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './flight-quote.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function FlightQuoteIcon({ className, name, ...props }) {
  return (
    <GlobalStyleIcon
      {...props}
      className={className}
      name={name}
    />
  )
}

export function FlightQuoteBackground({ className }) {
  return <div className={cx('flight-quote-background', className)} />
}

export function FlightQuoteTopNav({ nav }) {
  return <FlightTopNav classPrefix="flight-quote" nav={nav} routeArrow="text" />
}

export function FlightQuoteNotice({ notice }) {
  return <FlightNoticeBar as="div" classPrefix="flight-quote" notice={notice} />
}

function FlightQuoteRoute({ flight }) {
  return (
    <div className="flight-quote-route">
      <div className="flight-quote-route__duration">{flight.duration}</div>
      <div className="flight-quote-route__track">
        <span className="flight-quote-route__line" />
        <img
          alt=""
          className="flight-quote-route__plane"
          src={routePlaneImage}
        />
        <span className="flight-quote-route__line flight-quote-route__line--reverse" />
      </div>
      <div className="flight-quote-route__carbon">
        碳排放量适中
        <FlightQuoteIcon
          name="icon/directional/chevron-right-small/outlined"
        />
      </div>
    </div>
  )
}

export function FlightQuoteFlightSummary({ flight }) {
  return (
    <section className="flight-quote-flight-summary">
      <div className="flight-quote-flight-summary__heading">
        <span className="flight-quote-flight-summary__badge">{flight.badge}</span>
        <span>{flight.date}</span>
      </div>

      <div className="flight-quote-flight-summary__route">
        <div className="flight-quote-flight-summary__time-block">
          <strong>{flight.departTime}</strong>
          <span>{flight.departAirport}</span>
        </div>
        <FlightQuoteRoute flight={flight} />
        <div className="flight-quote-flight-summary__time-block flight-quote-flight-summary__time-block--end">
          <strong>{flight.arriveTime}</strong>
          <span>{flight.arriveAirport}</span>
        </div>
      </div>

      <div className="flight-quote-flight-summary__meta">
        <img
          alt=""
          className="flight-quote-flight-summary__logo"
          src={airlineLogoBlueRed}
        />
        <span>{flight.airline}</span>
        <i />
        <span>{flight.aircraft}</span>
        <i />
        <span>{flight.punctuality}</span>
        {flight.meal ? (
          <>
            <i />
            <FlightQuoteIcon name="icon/travel/breakfast/outlined" />
          </>
        ) : null}
        {flight.wifi ? (
          <>
            <i />
            <FlightQuoteIcon name="icon/device/wifi/outlined" />
          </>
        ) : null}
        <i />
        <span>{flight.express}</span>
        <FlightQuoteIcon name="icon/directional/chevron-right-small/outlined" />
      </div>
    </section>
  )
}

export function FlightQuoteCabinTabs({ cabins }) {
  return (
    <div className="flight-quote-cabin-tabs">
      {cabins.map((cabin) => (
        <button
          className={cx('flight-quote-cabin-tab', cabin.active && 'flight-quote-cabin-tab--active')}
          key={cabin.label}
          type="button"
        >
          <strong>{cabin.label}</strong>
          <span>{cabin.price}<em>起</em></span>
        </button>
      ))}
    </div>
  )
}

export function FlightQuoteFilterBar({ filters }) {
  return (
    <div className="flight-quote-filter-bar">
      {filters.map((filter) => (
        <button
          className="flight-quote-filter"
          key={filter}
          type="button"
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

function FlightQuoteBenefits({ quote }) {
  if (!quote.benefits) {
    return null
  }

  return (
    <div className="flight-quote-benefits">
      <div className="flight-quote-benefits__left">
        <div className="flight-quote-benefits__title">
          <span>优</span>
          <span className="flight-quote-benefits__spark" />
        </div>
        <div className="flight-quote-benefits__change">
          <span>{quote.returnLabel}</span>
          <i />
          <span>{quote.returnAction}</span>
          <FlightQuoteIcon name="icon/action/change/outlined" />
        </div>
      </div>
      <div className="flight-quote-benefits__grid">
        {quote.benefits.map((benefit) => (
          <span key={benefit}>
            <FlightQuoteIcon name="icon/status/check/filled" />
            {benefit}
          </span>
        ))}
      </div>
    </div>
  )
}

export function FlightQuoteCard({ quote }) {
  const hasBenefits = Boolean(quote.benefits)

  return (
    <article className={cx('flight-quote-card', hasBenefits && 'flight-quote-card--with-benefits')}>
      {quote.badge ? <span className="flight-quote-card__badge">{quote.badge}</span> : null}
      <div className="flight-quote-card__body">
        <div className="flight-quote-card__price">
          <span>¥</span>
          <strong>{quote.price}</strong>
        </div>
        <div className="flight-quote-card__details">
          <p>{quote.cabin}</p>
          <div>
            <span>{quote.refund}</span>
            <i />
            <span>{quote.baggage}</span>
          </div>
          {quote.limitNote ? (
            <div className="flight-quote-card__limit">
              <b>限</b>
              <span>{quote.limitNote}</span>
            </div>
          ) : null}
        </div>
        {quote.buttonLabel ? (
          <button className="flight-quote-card__button" type="button">
            <strong>{quote.buttonLabel}</strong>
            {quote.buttonMeta ? <span>{quote.buttonMeta}</span> : null}
          </button>
        ) : null}
      </div>
      <FlightQuoteBenefits quote={quote} />
    </article>
  )
}

export function FlightQuoteCardList({ quotes }) {
  return (
    <section className="flight-quote-card-list">
      {quotes.map((quote, index) => (
        <FlightQuoteCard
          key={`${quote.price}-${index}`}
          quote={quote}
        />
      ))}
    </section>
  )
}

export function FlightQuotePreviewFrame({ data }) {
  return (
    <div className="flight-quote-preview">
      <div className="flight-quote-shell">
        <FlightQuoteBackground />
        <FlightQuoteTopNav nav={data.nav} />
        <main className="flight-quote-main">
          <FlightQuoteNotice notice={data.notice} />
          <FlightQuoteFlightSummary flight={data.flight} />
          <FlightQuoteCabinTabs cabins={data.cabins} />
          <FlightQuoteFilterBar filters={data.filters} />
          <FlightQuoteCardList quotes={data.quotes} />
        </main>
        <IPhoneFooter className="flight-quote-footer" transparent />
      </div>
    </div>
  )
}
