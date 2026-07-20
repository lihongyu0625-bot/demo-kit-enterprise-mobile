import heroImage from '../../assets/hotel-room-detail/hero.jpg'
import benefitIcon from '../../assets/hotel-room-detail/icon-benefit.svg'
import bedIcon from '../../assets/hotel-room-detail/icon-bed.svg'
import caretRightFilledIcon from '../../assets/hotel-room-detail/icon-caret-right-filled.svg'
import chevronRightIcon from '../../assets/hotel-room-detail/icon-chevron-right.svg'
import closeIcon from '../../assets/hotel-room-detail/icon-close.svg'
import imageAltIcon from '../../assets/hotel-room-detail/icon-image-alt.svg'
import restaurantIcon from '../../assets/hotel-room-detail/icon-restaurant.svg'
import smokingIcon from '../../assets/hotel-room-detail/icon-smoking.svg'
import squareIcon from '../../assets/hotel-room-detail/icon-square.svg'
import stairIcon from '../../assets/hotel-room-detail/icon-stair.svg'
import userIcon from '../../assets/hotel-room-detail/icon-user.svg'
import windowIcon from '../../assets/hotel-room-detail/icon-window.svg'
import { HotelBookingButton } from '../hotel/HotelBookingButton'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './hotel-room-detail.css'

const facilityIconMap = {
  bed: bedIcon,
  restaurant: restaurantIcon,
  smoking: smokingIcon,
  square: squareIcon,
  stair: stairIcon,
  user: userIcon,
  window: windowIcon,
}

function DetailCard({ children, gradient, title }) {
  return (
    <section className={`room-detail-card${gradient ? ' room-detail-card--gradient' : ''}`}>
      <h3 className="room-detail-card__title">{title}</h3>
      {children}
    </section>
  )
}

export function HotelRoomDetailBackdrop() {
  return <div className="room-detail-backdrop" />
}

export function HotelRoomDetailHeroCard({ hero }) {
  return (
    <section className="room-detail-hero">
      <img
        alt={hero.title}
        className="room-detail-hero__image"
        src={heroImage}
      />
      <button
        aria-label="关闭"
        className="room-detail-hero__close"
        type="button"
      >
        <img
          alt=""
          src={closeIcon}
        />
      </button>
      <div className="room-detail-hero__counter">
        <img
          alt=""
          src={imageAltIcon}
        />
        <span>{hero.imageCount}</span>
      </div>
    </section>
  )
}

export function HotelRoomDetailFacilityCard({ facilityIntro }) {
  return (
    <DetailCard title={facilityIntro.title}>
      <div className="room-detail-facility-grid">
        {facilityIntro.items.map((item) => (
          <div
            className="room-detail-facility-grid__item"
            key={`${item.icon}-${item.label}`}
          >
            <img
              alt=""
              className="room-detail-facility-grid__icon"
              src={facilityIconMap[item.icon]}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="room-detail-remark">
        <p className="room-detail-remark__title">{facilityIntro.remarkTitle}</p>
        <p className="room-detail-remark__text">{facilityIntro.remark}</p>
      </div>
    </DetailCard>
  )
}

export function HotelRoomDetailBenefitCard({ benefits }) {
  return (
    <DetailCard
      gradient
      title={benefits.title}
    >
      <div className="room-detail-benefit-list">
        {benefits.items.map((item) => (
          <div
            className="room-detail-benefit-item"
            key={item.title}
          >
            <div className="room-detail-benefit-item__header">
              <div className="room-detail-benefit-item__title-wrap">
                <img
                  alt=""
                  className="room-detail-benefit-item__icon"
                  src={benefitIcon}
                />
                <p className="room-detail-benefit-item__title">{item.title}</p>
              </div>

              {item.linkLabel ? (
                <button
                  className="room-detail-benefit-item__link"
                  type="button"
                >
                  <span>{item.linkLabel}</span>
                  <img
                    alt=""
                    src={chevronRightIcon}
                  />
                </button>
              ) : null}
            </div>

            <p className="room-detail-benefit-item__description">{item.description}</p>

            {item.bullets ? (
              <div className="room-detail-benefit-item__bullets">
                {item.bullets.map((bullet) => (
                  <div
                    className="room-detail-benefit-item__bullet-row"
                    key={bullet}
                  >
                    <span className="room-detail-benefit-item__bullet-dot" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </DetailCard>
  )
}

export function HotelRoomDetailPolicyCard({ policy }) {
  return (
    <DetailCard title={policy.title}>
      <div className="room-detail-policy">
        {policy.paragraphs.map((paragraph, index) => (
          <p
            className="room-detail-policy__text"
            key={paragraph}
          >
            {index === 0 ? (
              <>
                预订成功后，
                <span className="room-detail-policy__highlight">订单不可取消</span>
                ，请谨慎预定。
              </>
            ) : index === 1 ? (
              <>
                下单后不支持修改订单，
                <span className="room-detail-policy__highlight">提前退房不支持退换费用</span>
                ，如行程可能变更，建议缩短订单时长。延住需提交新订单。
              </>
            ) : (
              paragraph
            )}
          </p>
        ))}
      </div>
    </DetailCard>
  )
}

export function HotelRoomDetailProviderCard({ provider }) {
  return (
    <DetailCard title={provider.title}>
      <p className="room-detail-provider__text">{provider.content}</p>
    </DetailCard>
  )
}

export function HotelRoomDetailPromoCard({ promotions }) {
  return (
    <DetailCard title={promotions.title}>
      <div className="room-detail-promo-list">
        {promotions.items.map((item) => (
          <div
            className="room-detail-promo-item"
            key={item.tag}
          >
            <span className="room-detail-promo-item__tag">{item.tag}</span>
            <p className="room-detail-promo-item__description">{item.description}</p>
          </div>
        ))}
      </div>
    </DetailCard>
  )
}

export function HotelRoomDetailFeeCard({ feeDetail }) {
  return (
    <DetailCard title={feeDetail.title}>
      <div className="room-detail-fee-list">
        {feeDetail.items.map((item) => (
          <div
            className="room-detail-fee-row"
            key={item.label}
          >
            <span className="room-detail-fee-row__label">{item.label}</span>
            <span className={`room-detail-fee-row__value${item.emphasis ? ' room-detail-fee-row__value--accent' : ''}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </DetailCard>
  )
}

function SubmitTags({ tags }) {
  return (
    <div className="room-detail-submit-tags">
      {tags.map((tag, index) => (
        <div
          className="room-detail-submit-tags__item"
          key={tag}
        >
          <span>{tag}</span>
          {index < tags.length - 1 ? <span className="room-detail-submit-tags__divider" /> : null}
          {index === tags.length - 1 ? (
            <img
              alt=""
              className="room-detail-submit-tags__caret"
              src={caretRightFilledIcon}
            />
          ) : null}
        </div>
      ))}
    </div>
  )
}

export function HotelRoomDetailSubmitBar({ submitBar }) {
  return (
    <div className="room-detail-submit">
      <div className="room-detail-submit__inner">
        <div className="room-detail-submit__price-block">
          <div className="room-detail-submit__price">
            <span className="room-detail-submit__currency">¥</span>
            <span className="room-detail-submit__amount">{submitBar.price}</span>
          </div>
          <SubmitTags tags={submitBar.tags} />
        </div>

        <HotelBookingButton
          className="room-detail-submit__booking-button"
          hint={submitBar.buttonHint}
          label={submitBar.buttonLabel}
        />
      </div>
      <IPhoneFooter />
    </div>
  )
}
