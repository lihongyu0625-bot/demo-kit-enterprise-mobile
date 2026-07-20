import heroImage from '../../assets/hotel-detail/hero-room.png'
import roomImage1 from '../../assets/hotel-detail/room-1.jpg'
import roomImage2 from '../../assets/hotel-detail/room-2.jpg'
import roomImage3 from '../../assets/hotel-detail/room-3.jpg'
import roomImage4 from '../../assets/hotel-detail/room-4.jpg'
import roomImage5 from '../../assets/hotel-detail/room-5.jpg'
import airplaneIcon from '../../assets/hotel-detail/icon-airplane.svg'
import addressCardBg from '../../assets/hotel-detail/address-card-bg.png'
import benefitFilledIcon from '../../assets/hotel-detail/icon-benefit-filled.svg'
import chevronCircleDownIcon from '../../assets/hotel-detail/icon-chevron-circle-down.svg'
import chevronCircleUpIcon from '../../assets/hotel-detail/icon-chevron-circle-up.svg'
import briefcaseFilledIcon from '../../assets/hotel-detail/icon-briefcase-filled.svg'
import chevronDownSmallIcon from '../../assets/hotel-detail/icon-chevron-down-small.svg'
import chevronLeftSmallIcon from '../../assets/hotel-detail/icon-chevron-left-small.svg'
import chevronRightSmallIcon from '../../assets/hotel-detail/icon-chevron-right-small.svg'
import destinationIcon from '../../assets/hotel-detail/icon-destination.svg'
import favoriteAddIcon from '../../assets/hotel-detail/icon-favorite-add.svg'
import imageAltIcon from '../../assets/hotel-detail/icon-image-alt.svg'
import locationMarkerIcon from '../../assets/hotel-detail/icon-location-marker.svg'
import luggageIcon from '../../assets/hotel-detail/icon-luggage.svg'
import moreIcon from '../../assets/hotel-detail/icon-more.svg'
import parkingIcon from '../../assets/hotel-detail/icon-parking.svg'
import phoneIcon from '../../assets/hotel-detail/icon-phone.svg'
import restaurantIcon from '../../assets/hotel-detail/icon-restaurant.svg'
import timeCircleIcon from '../../assets/hotel-detail/icon-time-circle.svg'
import userGroupIcon from '../../assets/hotel-detail/icon-user-group.svg'
import wifiIcon from '../../assets/hotel-detail/icon-wifi.svg'
import { HotelBenefitStrip } from '../hotel/HotelBenefitStrip'
import { HotelBookingButton } from '../hotel/HotelBookingButton'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './hotel-detail.css'

const roomImageMap = {
  'room-1': roomImage1,
  'room-2': roomImage2,
  'room-3': roomImage3,
  'room-4': roomImage4,
  'room-5': roomImage5,
}

const detailIconMap = {
  airplane: airplaneIcon,
  benefit: benefitFilledIcon,
  destination: destinationIcon,
  location: locationMarkerIcon,
  luggage: luggageIcon,
  more: moreIcon,
  parking: parkingIcon,
  phone: phoneIcon,
  restaurant: restaurantIcon,
  time: timeCircleIcon,
  user: userGroupIcon,
  wifi: wifiIcon,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function PriceDisplay({
  amount,
  mutedSuffix = false,
  showSuffix = false,
  tone = 'blue',
}) {
  return (
    <div className={cx('hotel-detail-price', tone === 'orange' && 'hotel-detail-price--orange')}>
      <span className="hotel-detail-price__currency">¥</span>
      <span className="hotel-detail-price__amount">{amount}</span>
      {showSuffix ? (
        <span className={cx('hotel-detail-price__suffix', mutedSuffix && 'hotel-detail-price__suffix--muted')}>
          起
        </span>
      ) : null}
    </div>
  )
}

function AgreementBadge() {
  return (
    <span className="hotel-detail-agreement-badge">
      <img
        alt=""
        src={briefcaseFilledIcon}
      />
      <span>协议酒店</span>
    </span>
  )
}

function RoomTag({ tag }) {
  const primary = tag === '立即确认'

  return (
    <span className={cx('hotel-detail-room-tag', primary && 'hotel-detail-room-tag--primary')}>
      {tag}
    </span>
  )
}

function RoomBenefitStrip({ items }) {
  return <HotelBenefitStrip items={items} />
}

function HotelDetailCard({ children, className, title }) {
  return (
    <section className={cx('hotel-detail-card', className)}>
      {title ? <h3 className="hotel-detail-card__title">{title}</h3> : null}
      {children}
    </section>
  )
}

export function HotelDetailHero({ hero }) {
  return (
    <section className="hotel-detail-hero">
      <img
        alt="酒店头图"
        className="hotel-detail-hero__image"
        src={heroImage}
      />

      <div className="hotel-detail-hero__chrome">
        <IPhoneBar
          className="hotel-detail-hero__statusbar"
          transparent
        />

        <div className="hotel-detail-hero__nav">
          <button
            aria-label="返回"
            className="hotel-detail-hero__back"
            type="button"
          >
            <img
              alt=""
              src={chevronLeftSmallIcon}
            />
          </button>

          <button
            className="hotel-detail-hero__favorite"
            type="button"
          >
            <img
              alt=""
              className="hotel-detail-hero__favorite-icon"
              src={favoriteAddIcon}
            />
            <span>{hero.favoriteLabel}</span>
          </button>
        </div>
      </div>

      <div className="hotel-detail-hero__counter">
        <img
          alt=""
          src={imageAltIcon}
        />
        <span className="hotel-detail-hero__counter-text">{hero.imageCount}</span>
      </div>
    </section>
  )
}

export function HotelDetailNameCard({ hotel }) {
  return (
    <section className="hotel-detail-name-card">
      <p className="hotel-detail-name-card__title">
        <span>{hotel.name}</span>
        <em>{hotel.level}</em>
      </p>

      <div className="hotel-detail-name-card__meta">
        <div className="hotel-detail-name-card__score-row">
          <div className="hotel-detail-name-card__score-area">
            <div className="hotel-detail-score-pill">
              <span className="hotel-detail-score-pill__value">{hotel.score}</span>
              <span className="hotel-detail-score-pill__label">{hotel.scoreLabel}</span>
            </div>
            <button
              className="hotel-detail-name-card__reviews"
              type="button"
            >
              <span>{hotel.reviews}</span>
              <img
                alt=""
                src={chevronRightSmallIcon}
              />
            </button>
          </div>

          <div className="hotel-detail-name-card__highlights">
            {hotel.highlights.map((item, index) => (
              <span
                className="hotel-detail-name-card__highlight"
                key={item}
              >
                {index > 0 ? <span className="hotel-detail-name-card__divider" /> : null}
                <span>{item}</span>
              </span>
            ))}
            <img
              alt=""
              className="hotel-detail-name-card__highlights-arrow"
              src={chevronRightSmallIcon}
            />
          </div>
        </div>
      </div>

      <div className="hotel-detail-address-card">
        <img
          alt=""
          className="hotel-detail-address-card__background"
          src={addressCardBg}
        />

        <div className="hotel-detail-address-card__copy">
          <p className="hotel-detail-address-card__title">{hotel.address}</p>

          {hotel.transit.map((item) => (
            <div
              className="hotel-detail-address-card__row"
              key={item.text}
            >
              <img
                alt=""
                src={detailIconMap[item.icon]}
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="hotel-detail-address-card__actions">
          {hotel.actions.map((action) => (
            <button
              className="hotel-detail-address-card__action"
              key={action.label}
              type="button"
            >
              <span className="hotel-detail-address-card__action-icon">
                <img
                  alt=""
                  src={detailIconMap[action.icon]}
                />
              </span>
              <span className="hotel-detail-address-card__action-label">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HotelDetailSelector({ selector }) {
  return (
    <section className="hotel-detail-selector">
      <div className="hotel-detail-selector__summary">
        <div className="hotel-detail-selector__dates">
          <div className="hotel-detail-selector__date-block">
            <strong>{selector.checkInDate}</strong>
            <span>{selector.checkInWeekday}</span>
          </div>
          <span className="hotel-detail-selector__slash">/</span>
          <div className="hotel-detail-selector__date-block">
            <strong>{selector.checkOutDate}</strong>
            <span>{selector.checkOutWeekday}</span>
          </div>
        </div>

        <button
          className="hotel-detail-selector__guest"
          type="button"
        >
          <span>{selector.guestSummary}</span>
          <img
            alt=""
            src={chevronRightSmallIcon}
          />
        </button>
      </div>

      <div className="hotel-detail-selector__chips">
        {selector.chips.map((chip) => (
          <button
            className={cx(
              'hotel-detail-selector__chip',
              chip.tone === 'muted' && 'hotel-detail-selector__chip--muted',
            )}
            key={chip.label}
            type="button"
          >
            {chip.icon ? (
              <img
                alt=""
                className="hotel-detail-selector__chip-icon"
                src={detailIconMap[chip.icon]}
              />
            ) : null}
            <span>{chip.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function HotelDetailRoomSummary({
  room,
  expandIcon = 'small-down',
  price = room.startPrice ?? room.price,
}) {
  const expandIconSrc = {
    'small-down': chevronDownSmallIcon,
    'circle-down': chevronCircleDownIcon,
    'circle-up': chevronCircleUpIcon,
  }[expandIcon]

  return (
    <div className="hotel-detail-room-summary">
      <div className="hotel-detail-room-summary__media">
        <img
          alt={room.name}
          className="hotel-detail-room-summary__image"
          src={roomImageMap[room.image]}
        />
        <AgreementBadge />
      </div>

      <div className="hotel-detail-room-summary__body">
        <div className="hotel-detail-room-summary__header">
          <button
            className="hotel-detail-room-summary__title"
            type="button"
          >
            <span>{room.name}</span>
            <img
              alt=""
              src={chevronRightSmallIcon}
            />
          </button>

          <button
            className="hotel-detail-room-summary__expand"
            type="button"
          >
            <img
              alt=""
              src={expandIconSrc}
            />
          </button>
        </div>

        <p className="hotel-detail-room-summary__meta">{room.summary}</p>

        <div className="hotel-detail-room-summary__footer">
          <PriceDisplay
            amount={price}
            mutedSuffix
            showSuffix
          />
        </div>
      </div>
    </div>
  )
}

function HotelDetailRatePlan({ rate }) {
  return (
    <div className="hotel-detail-rate-plan">
      <button
        className="hotel-detail-rate-plan__title"
        type="button"
      >
        <span className="hotel-detail-rate-plan__title-copy">
          {rate.titleSegments
            ? rate.titleSegments.map((segment, index) => (
                <span
                  className={cx(
                    'hotel-detail-rate-plan__title-segment',
                    segment.tone === 'primary'
                      ? 'hotel-detail-rate-plan__title-segment--primary'
                      : 'hotel-detail-rate-plan__title-segment--default',
                  )}
                  key={`${segment.text}-${index}`}
                >
                  {segment.text}
                </span>
              ))
            : rate.title}
        </span>
        <img
          alt=""
          src={chevronRightSmallIcon}
        />
      </button>

      {rate.benefits ? <RoomBenefitStrip items={rate.benefits.slice(1)} /> : null}

      <div className="hotel-detail-rate-plan__tags">
        {rate.tags.map((tag) => (
          <RoomTag
            key={tag}
            tag={tag}
          />
        ))}
      </div>

      <div className="hotel-detail-rate-plan__footer">
        <div className="hotel-detail-rate-plan__action">
          <PriceDisplay
            amount={rate.price}
            tone={rate.buttonTone === 'orange' ? 'orange' : 'blue'}
          />
          <HotelBookingButton
            className="hotel-detail-booking-button"
            hint={rate.buttonHint}
            label={rate.buttonLabel}
            variant={rate.buttonTone === 'orange' ? 'enterprise-personal' : 'enterprise'}
          />
        </div>
      </div>
    </div>
  )
}

export function HotelDetailMultiRateCard({
  room,
  expanded = true,
}) {
  if (!expanded) {
    return (
      <HotelDetailCard className="hotel-detail-room-card hotel-detail-room-card--multi-collapsed">
        <HotelDetailRoomSummary
          expandIcon="circle-down"
          price={room.collapsedPrice ?? room.startPrice}
          room={room}
        />
      </HotelDetailCard>
    )
  }

  return (
    <div className="hotel-detail-multi-rate-card">
      <HotelDetailCard className="hotel-detail-room-card hotel-detail-room-card--multi-summary">
        <HotelDetailRoomSummary
          expandIcon="circle-up"
          price={room.startPrice}
          room={room}
        />
      </HotelDetailCard>

      <HotelDetailCard className="hotel-detail-room-card hotel-detail-room-card--multi-rates">
        <div className="hotel-detail-room-card__rates">
          {room.rates.map((rate, index) => (
            <div
              className="hotel-detail-room-card__rate-item"
              key={`${rate.title}-${index}`}
            >
              <HotelDetailRatePlan rate={rate} />
            </div>
          ))}
        </div>
      </HotelDetailCard>
    </div>
  )
}

export function HotelDetailCompactRoomCard({ room }) {
  return (
    <HotelDetailCard className="hotel-detail-room-card hotel-detail-room-card--compact">
      <div className="hotel-detail-room-summary">
        <div className="hotel-detail-room-summary__media">
          <img
            alt={room.name}
            className="hotel-detail-room-summary__image"
            src={roomImageMap[room.image]}
          />
          <AgreementBadge />
        </div>

        <div className="hotel-detail-room-summary__body">
          <div className="hotel-detail-room-summary__header">
            <button
              className="hotel-detail-room-summary__title"
              type="button"
            >
              <span>{room.name}</span>
              <img
                alt=""
                src={chevronRightSmallIcon}
              />
            </button>

            <button
              className="hotel-detail-room-summary__expand"
              type="button"
            >
              <img
                alt=""
                src={chevronCircleDownIcon}
              />
            </button>
          </div>

          <p className="hotel-detail-room-summary__meta">{room.summary}</p>

          <div className="hotel-detail-room-summary__footer hotel-detail-room-summary__footer--right">
            <PriceDisplay
              amount={room.price}
              mutedSuffix
              showSuffix
            />
          </div>
        </div>
      </div>
    </HotelDetailCard>
  )
}

export function HotelDetailBookableRoomCard({ room }) {
  return (
    <HotelDetailCard className="hotel-detail-room-card hotel-detail-room-card--bookable">
      <div className="hotel-detail-room-summary hotel-detail-room-summary--bookable">
        <div className="hotel-detail-room-summary__media">
          <img
            alt={room.name}
            className="hotel-detail-room-summary__image"
            src={roomImageMap[room.image]}
          />
          <AgreementBadge />
        </div>

        <div className="hotel-detail-bookable-card__body">
          <div className="hotel-detail-bookable-card__content">
            <button
              className="hotel-detail-room-summary__title hotel-detail-room-summary__title--large"
              type="button"
            >
              <span>{room.name}</span>
              <img
                alt=""
                src={chevronRightSmallIcon}
              />
            </button>

            <div className="hotel-detail-bookable-card__copy">
              <p className="hotel-detail-bookable-card__breakfast">
                <span>{room.breakfast}</span>
                <span>{room.summary}</span>
              </p>
              <p className="hotel-detail-bookable-card__cancel">{room.cancelText}</p>
            </div>

            <div className="hotel-detail-bookable-card__badges">
              <RoomBenefitStrip items={room.benefitText} />

              <div className="hotel-detail-rate-plan__tags">
                {room.tags.map((tag) => (
                  <RoomTag
                    key={tag}
                    tag={tag}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hotel-detail-bookable-card__footer">
            <div className="hotel-detail-rate-plan__action">
              <PriceDisplay amount={room.price} />
              <HotelBookingButton
                className="hotel-detail-booking-button"
                hint={room.buttonHint}
                label={room.buttonLabel}
              />
            </div>
          </div>
        </div>
      </div>
    </HotelDetailCard>
  )
}

export function HotelDetailRoomList({ rooms }) {
  return (
    <div className="hotel-detail-room-list">
      {rooms.map((room, index) => {
        if (room.type === 'multi-rate') {
          return (
            <HotelDetailMultiRateCard
              expanded
              key={`${room.name}-${index}`}
              room={room}
            />
          )
        }

        if (room.type === 'compact') {
          return (
            <HotelDetailCompactRoomCard
              key={`${room.name}-${index}`}
              room={room}
            />
          )
        }

        return (
          <HotelDetailBookableRoomCard
            key={`${room.name}-${index}`}
            room={room}
          />
        )
      })}
    </div>
  )
}

export function HotelDetailFacilitiesCard({ facilities }) {
  return (
    <HotelDetailCard title={facilities.title}>
      <div className="hotel-detail-facilities">
        {facilities.items.map((item) => (
          <div
            className="hotel-detail-facility"
            key={item.label}
          >
            <div className="hotel-detail-facility__icon">
              <img
                alt=""
                src={detailIconMap[item.icon]}
              />
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </HotelDetailCard>
  )
}

export function HotelDetailIntroductionCard({ introduction }) {
  return (
    <HotelDetailCard title={introduction.title}>
      <p className="hotel-detail-introduction__content">{introduction.content}</p>

      <button
        className="hotel-detail-introduction__action"
        type="button"
      >
        <span>{introduction.actionLabel}</span>
        <img
          alt=""
          src={chevronDownSmallIcon}
        />
      </button>
    </HotelDetailCard>
  )
}

export function HotelDetailPolicyCard({ policies }) {
  return (
    <HotelDetailCard title={policies.title}>
      <div className="hotel-detail-policy">
        {policies.items.map((item) => (
          <div
            className="hotel-detail-policy__item"
            key={item.title}
          >
            <div className="hotel-detail-policy__header">
              <img
                alt=""
                src={detailIconMap[item.icon]}
              />
              <h4>{item.title}</h4>
            </div>

            {item.columns ? (
              <div className="hotel-detail-policy__columns">
                {item.columns.map((column) => (
                  <span key={column}>{column}</span>
                ))}
              </div>
            ) : (
              <p className="hotel-detail-policy__content">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </HotelDetailCard>
  )
}

export function HotelDetailFooter() {
  return <IPhoneFooter className="hotel-detail-footer" />
}
