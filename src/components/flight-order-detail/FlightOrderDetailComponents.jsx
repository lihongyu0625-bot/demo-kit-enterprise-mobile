import airlineLogoBlueRed from '../../assets/flight-list/airline-logo-blue-red.png'
import pageBgImage from '../../assets/flight-order-detail/page-bg.png'
import travelServiceTitle from '../../assets/flight-order-detail/travel-service-title.svg'
import { FlightNoticeBar, FlightTopNav } from '../flight/FlightSharedComponents'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { PriceDisplay } from '../common/PriceDisplay'
import './flight-order-detail.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function FlightOrderDetailIcon({ className, name }) {
  return (
    <GlobalStyleIcon
      className={className}
      name={name}
    />
  )
}

function Divider({ className, vertical = false }) {
  return <span className={cx('flight-order-detail-divider', vertical && 'flight-order-detail-divider--vertical', className)} />
}

function Card({ children, className }) {
  return <section className={cx('flight-order-detail-card', className)}>{children}</section>
}

function SectionTitle({ children }) {
  return <h2 className="flight-order-detail-card__title">{children}</h2>
}

export function FlightOrderDetailBackground({ className }) {
  return (
    <div className={cx('flight-order-detail-background', className)}>
      <img
        alt=""
        src={pageBgImage}
      />
    </div>
  )
}

export function FlightOrderDetailTopNav({ nav }) {
  return <FlightTopNav classPrefix="flight-order-detail" nav={nav} />
}

export function FlightOrderDetailNotice({ notice }) {
  return <FlightNoticeBar classPrefix="flight-order-detail" notice={notice} />
}

export function FlightOrderDetailActionBar({ actions }) {
  return (
    <div className="flight-order-detail-actions">
      {actions.map((label) => (
        <button
          key={label}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export function FlightOrderDetailStatusPanel({ status }) {
  return (
    <section className="flight-order-detail-status-panel">
      <div className="flight-order-detail-status-panel__headline">
        <FlightOrderDetailIcon
          className="flight-order-detail-status-panel__icon"
          name="icon/status/success-circle/outlined"
        />
        <h1>{status.title}</h1>
      </div>
      <FlightOrderDetailNotice notice={status.notice} />
      <FlightOrderDetailActionBar actions={status.actions} />
    </section>
  )
}

function FlightRouteTimeline({ flight }) {
  return (
    <div className="flight-order-detail-route">
      <div className="flight-order-detail-route__times">
        <strong>{flight.departTime}</strong>
        <span>{flight.duration}</span>
        <strong>{flight.arriveTime}</strong>
      </div>
      <div className="flight-order-detail-route__line">
        <i />
        <span />
        <i />
      </div>
      <div className="flight-order-detail-route__content">
        <strong>{flight.departAirport}</strong>
        <div className="flight-order-detail-route__flight-meta">
          <img
            alt=""
            src={airlineLogoBlueRed}
          />
          <span>{flight.airline}</span>
          <Divider vertical />
          <span>{flight.aircraft}</span>
          <Divider vertical />
          <span>{flight.meal}</span>
        </div>
        <strong>{flight.arriveAirport}</strong>
      </div>
    </div>
  )
}

export function FlightOrderDetailPaymentCard({ payment }) {
  return (
    <Card className="flight-order-detail-payment-card">
      <div className="flight-order-detail-payment-card__top">
        <div className="flight-order-detail-payment-card__summary">
          <span>{payment.payLabel}</span>
          <PriceDisplay
            amount={payment.amount}
            className="flight-order-detail-payment-card__price"
          />
          <em>{payment.tag}</em>
        </div>
        <button
          className="flight-order-detail-link"
          type="button"
        >
          {payment.recordLabel}
          <FlightOrderDetailIcon
            className="flight-order-detail-link__icon"
            name="icon/directional/chevron-right-small/outlined"
          />
        </button>
      </div>

      <div className="flight-order-detail-payment-card__order">
        <span>订单号：{payment.orderNo}</span>
        <FlightOrderDetailIcon
          className="flight-order-detail-payment-card__copy"
          name="icon/action/copy/outlined"
        />
      </div>

      <div className="flight-order-detail-payment-card__flight-title">
        <span>{payment.flight.badge}</span>
        <strong>{payment.flight.date}</strong>
        <strong>{payment.flight.weekday}</strong>
        <strong>{payment.flight.fromCity}</strong>
        <FlightOrderDetailIcon
          className="flight-order-detail-payment-card__arrow"
          name="icon/directional/arrow-right2/filled"
        />
        <strong>{payment.flight.toCity}</strong>
      </div>

      <FlightRouteTimeline flight={payment.flight} />

      <button
        className="flight-order-detail-payment-card__carbon"
        type="button"
      >
        {payment.flight.carbon}
        <FlightOrderDetailIcon
          className="flight-order-detail-payment-card__carbon-icon"
          name="icon/directional/chevron-right-small/outlined"
        />
      </button>

      <Divider />

      <button
        className="flight-order-detail-payment-card__rule"
        type="button"
      >
        {payment.ruleLabel}
        <FlightOrderDetailIcon
          className="flight-order-detail-payment-card__rule-icon"
          name="icon/directional/chevron-right-small/outlined"
        />
      </button>
    </Card>
  )
}

export function FlightOrderDetailInfoCard({ card }) {
  return (
    <Card className={card.actions ? 'flight-order-detail-info-card flight-order-detail-info-card--with-actions' : 'flight-order-detail-info-card'}>
      <SectionTitle>{card.title}</SectionTitle>
      <Divider />
      <div className="flight-order-detail-info-card__rows">
        {card.rows.map((row) => (
          <div
            className="flight-order-detail-info-card__row"
            key={row.label}
          >
            <span>{row.label}</span>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
      {card.actions ? (
        <>
          <Divider />
          <div className="flight-order-detail-info-card__actions">
            {card.actions.map((label, index) => (
              <div
                className="flight-order-detail-info-card__action-wrap"
                key={label}
              >
                <button type="button">{label}</button>
                {index < card.actions.length - 1 ? <Divider vertical /> : null}
              </div>
            ))}
          </div>
        </>
      ) : null}
    </Card>
  )
}

export function FlightOrderDetailTravelService({ service }) {
  return (
    <section className="flight-order-detail-travel-service">
      <div className="flight-order-detail-travel-service__ribbon">
        <img
          alt={service.title}
          src={travelServiceTitle}
        />
      </div>
      <button
        className="flight-order-detail-travel-service__card"
        type="button"
      >
        <div>
          <div className="flight-order-detail-travel-service__title">
            <strong>{service.serviceName}</strong>
            <FlightOrderDetailIcon
              className="flight-order-detail-travel-service__info"
              name="icon/status/info-circle/outlined"
            />
          </div>
          <p>{service.description}</p>
        </div>
        <FlightOrderDetailIcon
          className="flight-order-detail-travel-service__chevron"
          name="icon/directional/chevron-right-small/outlined"
        />
      </button>
    </section>
  )
}

export function FlightOrderDetailPackageCard({ packageInfo }) {
  return (
    <Card className="flight-order-detail-package-card">
      <SectionTitle>{packageInfo.title}</SectionTitle>
      <Divider />
      <div className="flight-order-detail-package-card__main">
        <strong>{packageInfo.name}</strong>
        <div className="flight-order-detail-package-card__quantity">
          <FlightOrderDetailIcon
            name="icon/action/close/outlined"
          />
          <span>{packageInfo.quantity}</span>
          <em>份</em>
        </div>
      </div>
      <div className="flight-order-detail-package-card__rows">
        {packageInfo.rows.map((row) => (
          <span key={row.label}>{row.label}</span>
        ))}
      </div>
    </Card>
  )
}

export function FlightOrderDetailPreviewFrame({ data }) {
  return (
    <div className="flight-order-detail-preview">
      <div className="flight-order-detail-shell">
        <FlightOrderDetailBackground />
        <FlightOrderDetailTopNav nav={data.nav} />
        <main className="flight-order-detail-main">
          <FlightOrderDetailStatusPanel status={data.status} />
          <FlightOrderDetailPaymentCard payment={data.payment} />
          <FlightOrderDetailInfoCard card={data.tripInfo} />
          <FlightOrderDetailTravelService service={data.travelService} />
          <FlightOrderDetailPackageCard packageInfo={data.packageInfo} />
          <FlightOrderDetailInfoCard card={data.reimbursementInfo} />
          <FlightOrderDetailInfoCard card={data.approvalInfo} />
        </main>
        <IPhoneFooter className="flight-order-detail-footer" transparent />
      </div>
    </div>
  )
}
