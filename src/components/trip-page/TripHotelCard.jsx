import { CarRideFooter } from './CarRideFooter'
import { Img } from './TripImg'
import hotelPillBgImage from '../../assets/trip-page/hotel-pill-bg.png'
import hotelTitleArrowImage from '../../assets/trip-page/hotel-title-arrow.svg'
import iconDevicePhoneImage from '../../assets/trip-page/icon-device-phone_2-filled.svg'
import iconTravelDestinationImage from '../../assets/trip-page/icon-travel-destination-filled.svg'
import tripCardWatermarkImage from '../../assets/trip-page/trip-card-watermark.png'
import './trip-page.css'

/* ===== 已预订酒店卡：Figma 2789:28727（主组件 2519:25532）—— 标题(入住→3晚描边胶囊→离店) + 店名16/500 + 地址行(导航/电话 pill) + 房间/入住人13 + 用车推荐 ===== */
export function TripHotelCard({ card }) {
  return (
    <article className="trip-page__hotel-card">
      <div className="trip-page__hotel-main">
        <Img className="trip-page__hotel-watermark" src={tripCardWatermarkImage} />
        <div className="trip-page__hotel-title">
          <p className="trip-page__hotel-title-text">{card.checkin}</p>
          <span className="trip-page__hotel-nights-group">
            <Img className="trip-page__hotel-title-arrow" src={hotelTitleArrowImage} />
            <span className="trip-page__hotel-nights">{card.nights}</span>
            <Img className="trip-page__hotel-title-arrow" src={hotelTitleArrowImage} />
          </span>
          <p className="trip-page__hotel-title-text">{card.checkout}</p>
          <p className="trip-page__hotel-status">{card.status}</p>
        </div>
        <p className="trip-page__hotel-name">{card.name}</p>
        <div className="trip-page__hotel-address-row">
          <p className="trip-page__hotel-address">{card.address}</p>
          <span className="trip-page__hotel-pill trip-page__hotel-pill--nav">
            <Img className="trip-page__hotel-pill-bg" src={hotelPillBgImage} />
            <Img className="trip-page__hotel-pill-icon" src={iconTravelDestinationImage} />
          </span>
          <span className="trip-page__hotel-pill">
            <Img className="trip-page__hotel-pill-icon" src={iconDevicePhoneImage} />
          </span>
        </div>
        <div className="trip-page__hotel-info-row">
          <span className="trip-page__hotel-info-label">{card.roomLabel}</span>
          <span className="trip-page__hotel-info-value">{card.room}</span>
        </div>
        <div className="trip-page__hotel-info-row">
          <span className="trip-page__hotel-info-label">{card.guestLabel}</span>
          <span className="trip-page__hotel-info-value">{card.guest}</span>
        </div>
      </div>
      <CarRideFooter action={card.rideAction} hint={card.rideHint} />
    </article>
  )
}
