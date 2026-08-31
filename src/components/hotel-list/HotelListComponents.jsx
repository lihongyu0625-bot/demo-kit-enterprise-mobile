import promoBannerImage from '../../assets/hotel-list/promo-banner.png'
import hotelImage1 from '../../assets/hotel-list/hotel-1.png'
import hotelImage2 from '../../assets/hotel-list/hotel-2.png'
import hotelImage3 from '../../assets/hotel-list/hotel-3.png'
import businessBenefitIcon from '../../assets/hotel-list/icon-business-benefit.svg'
import { DirectionalIcon } from '../common/DirectionalIcon'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { IPhoneBar } from '../common/IPhoneBar'
import { Tag } from '../common/Tag'
import { HotelBenefitStrip } from '../hotel/HotelBenefitStrip'
import './hotel-list.css'

const hotelImageMap = {
  'hotel-1': hotelImage1,
  'hotel-2': hotelImage2,
  'hotel-3': hotelImage3,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function HotelListDirectionalIcon({ className, name }) {
  return (
    <DirectionalIcon
      className={className}
      name={name}
    />
  )
}

function HotelListGlobalIcon({ className, name }) {
  return (
    <GlobalStyleIcon
      className={className}
      name={name}
    />
  )
}

export function HotelListHeaderBackground() {
  return <div className="hotel-list-header-background" />
}

export function HotelListTopBar({ search }) {
  return (
    <header className="hotel-list-topbar">
      <IPhoneBar className="hotel-list-statusbar" reserveSpace />

      <div className="hotel-list-searchbar">
        <button
          aria-label="返回"
          className="hotel-list-searchbar__back"
          type="button"
        >
          <HotelListGlobalIcon
            className="hotel-list-searchbar__back-icon"
            name="icon/directional/chevron-left-large/outlined"
          />
        </button>

        <div className="hotel-list-searchbox">
          <div className="hotel-list-searchbox__city">
            <span>{search.city}</span>
            <HotelListDirectionalIcon
              className="hotel-list-searchbox__city-icon"
              name="icon/directional/caret-down/filled"
            />
          </div>

          <span className="hotel-list-searchbox__divider" />

          <div className="hotel-list-searchbox__dates">
            <div className="hotel-list-searchbox__date-row">
              <span>{search.checkInLabel}</span>
              <strong>{search.checkInDate}</strong>
            </div>
            <div className="hotel-list-searchbox__date-row">
              <span>{search.checkOutLabel}</span>
              <strong>{search.checkOutDate}</strong>
            </div>
          </div>

          <span className="hotel-list-searchbox__divider" />

          <div className="hotel-list-searchbox__placeholder">
            <HotelListGlobalIcon
              className="hotel-list-searchbox__placeholder-icon"
              name="icon/action/search/outlined"
            />
            <span>{search.placeholder}</span>
          </div>
        </div>

        <button
          className="hotel-list-searchbar__map"
          type="button"
        >
          <HotelListGlobalIcon
            className="hotel-list-searchbar__map-icon"
            name="icon/travel/map/outlined"
          />
          <span>{search.mapLabel}</span>
        </button>
      </div>
    </header>
  )
}

export function HotelListSortBar({ sortTabs, quickFilters }) {
  return (
    <section className="hotel-list-sort-panel">
      <div className="hotel-list-sort-tabs">
        {sortTabs.map((item) => (
          <button
            className={cx('hotel-list-sort-tab', item.active && 'hotel-list-sort-tab--active')}
            key={item.label}
            type="button"
          >
            <span>{item.label}</span>
            <HotelListDirectionalIcon
              className="hotel-list-sort-tab__icon"
              name="icon/directional/chevron-down-small/filled"
            />
          </button>
        ))}
      </div>

      <div className="hotel-list-filter-row">
        {quickFilters.map((item) => (
          <button
            className="hotel-list-filter-chip"
            key={item.label}
            type="button"
          >
            <Tag
              className="hotel-list-filter-chip__tag"
              icon={
                item.icon === 'benefit' ? (
                  <img
                    alt=""
                    className="hotel-list-filter-chip__icon"
                    src={businessBenefitIcon}
                  />
                ) : null
              }
              selectableStyle="light"
              selected={Boolean(item.checked || item.active)}
              variant="selectable"
            >
              {item.label}
            </Tag>
          </button>
        ))}
      </div>
    </section>
  )
}

export function HotelListPromoStrip({ promo }) {
  return (
    <section className="hotel-list-promo-strip">
      <img
        alt={promo.title}
        className="hotel-list-promo-strip__image"
        src={promoBannerImage}
      />
    </section>
  )
}

export function HotelListBenefitStrip({ benefits }) {
  return <HotelBenefitStrip items={benefits} />
}

function HotelTag({ tag }) {
  return (
    <span className={cx('hotel-list-tag', tag.tone === 'primary' && 'hotel-list-tag--primary')}>
      <span>{tag.label}</span>
      {tag.showInfo ? (
        <HotelListGlobalIcon
          className="hotel-list-tag__info"
          name="icon/status/info-circle/outlined"
        />
      ) : null}
    </span>
  )
}

function HotelPricePromo({ text }) {
  const items = text
    .split('|')
    .map((item) => item.trim())
    .filter(Boolean)

  return (
    <div className="hotel-list-card__promo">
      {items.map((item, index) => (
        <div
          className="hotel-list-card__promo-item"
          key={`${item}-${index}`}
        >
          <span>{item}</span>
          {index < items.length - 1 ? (
            <span className="hotel-list-card__promo-divider" />
          ) : (
            <HotelListDirectionalIcon
              className="hotel-list-card__promo-caret"
              name="icon/directional/caret-right/filled"
            />
          )}
        </div>
      ))}
    </div>
  )
}

export function HotelListHotelCard({ hotel }) {
  return (
    <article className="hotel-list-card">
      <div className="hotel-list-card__media">
        <img
          alt={hotel.name}
          className="hotel-list-card__image"
          src={hotelImageMap[hotel.image]}
        />
        <div className="hotel-list-card__agreement">
          <HotelListGlobalIcon
            className="hotel-list-card__agreement-icon"
            name="icon/travel/briefcase/filled"
          />
          <span>协议酒店</span>
        </div>
      </div>

      <div className="hotel-list-card__body">
        <div className="hotel-list-card__copy">
          <p className="hotel-list-card__title">
            <span className="hotel-list-card__title-text">{hotel.name}</span>
            <em>{hotel.level}</em>
          </p>

          <div className="hotel-list-card__rating">
            <strong>{hotel.score}</strong>
            <span className="hotel-list-card__rating-strong">{hotel.scoreLabel}</span>
            <span>{hotel.reviews}</span>
          </div>

          <HotelListBenefitStrip benefits={hotel.benefits} />

          <p className="hotel-list-card__location">{hotel.location}</p>

          <div className="hotel-list-card__tags">
            {hotel.tags.map((tag) => (
              <HotelTag
                key={tag.label}
                tag={tag}
              />
            ))}
          </div>
        </div>

        <div className="hotel-list-card__price-row">
          <div className="hotel-list-card__price-area">
            <div className="hotel-list-card__price">
              <span className="hotel-list-card__currency">¥</span>
              <span className="hotel-list-card__amount">{hotel.price}</span>
              <span className="hotel-list-card__price-suffix">起</span>
            </div>

            {hotel.priceTag ? (
              <HotelPricePromo text={hotel.priceTag} />
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

export function HotelListCardList({ hotels }) {
  return (
    <section className="hotel-list-card-list">
      {hotels.map((hotel) => (
        <HotelListHotelCard
          hotel={hotel}
          key={hotel.id ?? hotel.name}
        />
      ))}
    </section>
  )
}

export function HotelListFooter() {
  return (
    <footer className="hotel-list-footer">
      <IPhoneFooter transparent />
    </footer>
  )
}
