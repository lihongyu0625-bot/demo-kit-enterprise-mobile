import benefitBadgeImage from '../../assets/hotel-order-detail/benefit-badge-shengliban.png'
import benefitHeaderBg from '../../assets/hotel-order-detail/benefit-header-bg.png'
import backIcon from '../../assets/hotel-order-detail/icon-back.svg'
import copyIcon from '../../assets/hotel-order-detail/icon-copy.svg'
import mailIcon from '../../assets/hotel-order-detail/icon-mail.svg'
import mapIcon from '../../assets/hotel-order-detail/icon-map.svg'
import phoneIcon from '../../assets/hotel-order-detail/icon-phone.svg'
import shareIcon from '../../assets/hotel-order-detail/icon-share.svg'
import statusSuccessIcon from '../../assets/hotel-order-detail/icon-status-success.svg'
import ticketIcon from '../../assets/hotel-order-detail/icon-ticket.svg'
import tripIcon from '../../assets/hotel-order-detail/icon-trip.svg'
import hotelCardBg from '../../assets/hotel-order-detail/hotel-card-bg.png'
import hotelCardImage from '../../assets/hotel-order-detail/hotel-card.png'
import chevronRightSmallIcon from '../../assets/hotel-detail/icon-chevron-right-small.svg'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './hotel-order-detail.css'

const navIconMap = {
  share: shareIcon,
  trip: tripIcon,
}

const infoIconMap = {
  map: mapIcon,
  phone: phoneIcon,
}

const imageMap = {
  'hotel-card': hotelCardImage,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function OrderDetailCard({ children, className }) {
  return <section className={cx('hotel-order-detail-card', className)}>{children}</section>
}

function OrderDetailSectionTitle({ children }) {
  return <h3 className="hotel-order-detail-card__title">{children}</h3>
}

export function HotelOrderDetailNavBar({ nav }) {
  return (
    <header className="hotel-order-detail-nav">
      <IPhoneBar className="hotel-order-detail-nav__statusbar" transparent />

      <div className="hotel-order-detail-nav__bar">
        <button
          aria-label="返回"
          className="hotel-order-detail-nav__back"
          type="button"
        >
          <img
            alt=""
            src={backIcon}
          />
        </button>

        <h2 className="hotel-order-detail-nav__title">{nav.title}</h2>

        <div className="hotel-order-detail-nav__actions">
          {nav.actions.map((item) => (
            <button
              className="hotel-order-detail-nav__action"
              key={item.label}
              type="button"
            >
              <img
                alt=""
                src={navIconMap[item.icon]}
              />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export function HotelOrderDetailStatusPanel({ status }) {
  return (
    <section className="hotel-order-detail-status">
      <div className="hotel-order-detail-status__headline">
        <img
          alt=""
          src={statusSuccessIcon}
        />
        <h1>{status.title}</h1>
      </div>

      <div className="hotel-order-detail-status__actions">
        {status.actions.map((label) => (
          <button
            className="hotel-order-detail-status__button"
            key={label}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  )
}

export function HotelOrderDetailPaymentCard({ payment }) {
  return (
    <OrderDetailCard className="hotel-order-detail-payment">
      <div className="hotel-order-detail-payment__header">
        <div className="hotel-order-detail-payment__summary">
          <h3 className="hotel-order-detail-payment__title">{payment.title}</h3>
          <div className="hotel-order-detail-payment__amount">
            <span className="hotel-order-detail-payment__currency">¥</span>
            <span className="hotel-order-detail-payment__number">{payment.amount}</span>
          </div>
          <span className="hotel-order-detail-payment__tag">{payment.tag}</span>
        </div>

        <button
          className="hotel-order-detail-link"
          type="button"
        >
          <span>{payment.detailLabel}</span>
          <img
            alt=""
            src={chevronRightSmallIcon}
          />
        </button>
      </div>

      <p className="hotel-order-detail-payment__hint">{payment.hint}</p>

      <div className="hotel-order-detail-payment__order-row">
        <span className="hotel-order-detail-payment__order-text">订单号: {payment.orderNo}</span>
        <img
          alt=""
          className="hotel-order-detail-payment__copy"
          src={copyIcon}
        />
      </div>

      <div className="hotel-order-detail-payment__footer">
        <div className="hotel-order-detail-payment__bullet-list">
          {payment.bullets.map((item) => (
            <div
              className="hotel-order-detail-payment__bullet-row"
              key={item}
            >
              <span className="hotel-order-detail-dot hotel-order-detail-dot--small" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button
          className="hotel-order-detail-link hotel-order-detail-link--side"
          type="button"
        >
          <span>{payment.linkLabel}</span>
          <img
            alt=""
            src={chevronRightSmallIcon}
          />
        </button>
      </div>
    </OrderDetailCard>
  )
}

export function HotelOrderDetailHotelCard({ hotel }) {
  return (
    <OrderDetailCard>
      <div className="hotel-order-detail-hotel">
        <img
          alt={hotel.name}
          className="hotel-order-detail-hotel__image"
          src={imageMap[hotel.image]}
        />

        <div className="hotel-order-detail-hotel__body">
          <img
            alt=""
            className="hotel-order-detail-hotel__background"
            src={hotelCardBg}
          />

          <div className="hotel-order-detail-hotel__name-row">
            <h3>{hotel.name}</h3>
            <img
              alt=""
              src={chevronRightSmallIcon}
            />
          </div>

          <div className="hotel-order-detail-hotel__address">
            <span>{hotel.address}</span>
            <img
              alt=""
              src={copyIcon}
            />
          </div>
        </div>
      </div>

      <div className="hotel-order-detail-hotel__actions">
        {hotel.actions.map((item, index) => (
          <div
            className="hotel-order-detail-hotel__action-wrap"
            key={item.label}
          >
            <button
              className="hotel-order-detail-hotel__action"
              type="button"
            >
              <img
                alt=""
                src={infoIconMap[item.icon]}
              />
              <span>{item.label}</span>
            </button>
            {index === 0 ? <span className="hotel-order-detail-hotel__divider" /> : null}
          </div>
        ))}
      </div>
    </OrderDetailCard>
  )
}

export function HotelOrderDetailBookingInfoCard({ bookingInfo }) {
  return (
    <OrderDetailCard>
      <OrderDetailSectionTitle>{bookingInfo.title}</OrderDetailSectionTitle>
      <div className="hotel-order-detail-card__separator" />

      <div className="hotel-order-detail-info-list">
        {bookingInfo.rows.map((row) => (
          <div
            className="hotel-order-detail-info-row"
            key={row.label}
          >
            <span className="hotel-order-detail-info-row__label">{row.label}</span>
            <div className="hotel-order-detail-info-row__value">
              <strong>{row.value}</strong>
              {row.copy ? (
                <img
                  alt=""
                  src={copyIcon}
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <button
        className="hotel-order-detail-inline-action"
        type="button"
      >
        <img
          alt=""
          src={mailIcon}
        />
        <span>{bookingInfo.actionLabel}</span>
      </button>
    </OrderDetailCard>
  )
}

export function HotelOrderDetailStayInfoCard({ stayInfo }) {
  return (
    <OrderDetailCard>
      <OrderDetailSectionTitle>{stayInfo.title}</OrderDetailSectionTitle>
      <div className="hotel-order-detail-card__separator" />

      <div className="hotel-order-detail-stay__room-row">
        <div>
          <h4>{stayInfo.roomTitle}</h4>
          <div className="hotel-order-detail-stay__facility-row">
            {stayInfo.facilities.map((item, index) => (
              <div
                className="hotel-order-detail-stay__facility-item"
                key={item}
              >
                {index > 0 ? <span className="hotel-order-detail-dot" /> : null}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          className="hotel-order-detail-link"
          type="button"
        >
          <span>{stayInfo.roomLinkLabel}</span>
          <img
            alt=""
            src={chevronRightSmallIcon}
          />
        </button>
      </div>

      <div className="hotel-order-detail-stay__date-row">
        <div className="hotel-order-detail-stay__date-block">
          <strong>{stayInfo.checkIn.date}</strong>
          <span>{stayInfo.checkIn.timeHint}</span>
        </div>

        <span className="hotel-order-detail-stay__line" />

        <div className="hotel-order-detail-stay__date-block">
          <strong>{stayInfo.checkOut.date}</strong>
          <span>{stayInfo.checkOut.timeHint}</span>
        </div>
      </div>
    </OrderDetailCard>
  )
}

export function HotelOrderDetailInvoiceCard({ invoice }) {
  return (
    <OrderDetailCard>
      <OrderDetailSectionTitle>{invoice.title}</OrderDetailSectionTitle>
      <div className="hotel-order-detail-card__separator" />

      <p className="hotel-order-detail-invoice__message">{invoice.message}</p>

      <button
        className="hotel-order-detail-inline-action"
        type="button"
      >
        <img
          alt=""
          src={ticketIcon}
        />
        <span>{invoice.actionLabel}</span>
      </button>
    </OrderDetailCard>
  )
}

export function HotelOrderDetailBenefitsCard({ benefits }) {
  return (
    <section className="hotel-order-detail-benefits">
      <div className="hotel-order-detail-benefits__header">
        <img
          alt=""
          className="hotel-order-detail-benefits__header-bg"
          src={benefitHeaderBg}
        />
        <h3>{benefits.title}</h3>
      </div>

      <div className="hotel-order-detail-benefits__body">
        <div className="hotel-order-detail-benefits__title-row">
          <div className="hotel-order-detail-benefits__title-wrap">
            <span className="hotel-order-detail-benefits__badge hotel-order-detail-benefits__badge--orange">返</span>
            <strong>{benefits.points.title}</strong>
            <img
              alt=""
              className="hotel-order-detail-benefits__title-image"
              src={benefitBadgeImage}
            />
          </div>
          <span className="hotel-order-detail-benefits__count">{benefits.points.total}</span>
        </div>

        <div className="hotel-order-detail-benefits__panel">
          {benefits.points.items.map((item) => (
            <div
              className="hotel-order-detail-benefits__point-row"
              key={item.label}
            >
              <div className="hotel-order-detail-benefits__point-copy">
                <div className="hotel-order-detail-benefits__point-head">
                  <span>{item.label}</span>
                  <small>·{item.hint}</small>
                </div>
                {item.description ? <p>{item.description}</p> : null}
              </div>
              <strong className="hotel-order-detail-benefits__point-value">{item.value}</strong>
            </div>
          ))}
        </div>

        <div className="hotel-order-detail-benefits__title-row hotel-order-detail-benefits__title-row--top-gap">
          <div className="hotel-order-detail-benefits__title-wrap">
            <span className="hotel-order-detail-benefits__badge hotel-order-detail-benefits__badge--dark">享</span>
            <strong>{benefits.privileges.title}</strong>
          </div>
          <div className="hotel-order-detail-benefits__privilege-count">
            <span>{benefits.privileges.count}</span>
            <em>{benefits.privileges.unit}</em>
          </div>
        </div>

        <div className="hotel-order-detail-benefits__privilege-list">
          {benefits.privileges.items.map((item) => (
            <div
              className="hotel-order-detail-benefits__privilege-card"
              key={item.title}
            >
              <div className="hotel-order-detail-benefits__privilege-head">
                <strong>{item.title}</strong>
                {item.linkLabel ? (
                  <button
                    className="hotel-order-detail-benefits__detail-link"
                    type="button"
                  >
                    <span>{item.linkLabel}</span>
                    <img
                      alt=""
                      src={chevronRightSmallIcon}
                    />
                  </button>
                ) : null}
              </div>

              <p className="hotel-order-detail-benefits__privilege-desc">{item.description}</p>

              {item.bullets ? (
                <div className="hotel-order-detail-benefits__bullet-list">
                  {item.bullets.map((bullet) => (
                    <div
                      className="hotel-order-detail-benefits__bullet-row"
                      key={bullet.text}
                    >
                      <div className="hotel-order-detail-benefits__bullet-copy">
                        <span className="hotel-order-detail-dot" />
                        <span>{bullet.text}</span>
                      </div>
                      <span>{bullet.status}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HotelOrderDetailFooter({ className }) {
  return (
    <div className={cx('hotel-order-detail-footer', className)}>
      <IPhoneFooter />
    </div>
  )
}
