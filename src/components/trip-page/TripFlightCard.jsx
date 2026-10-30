import { CarRideFooter } from './CarRideFooter'
import { Img } from './TripImg'
import airlineLogoAirChinaImage from '../../assets/trip-page/airline-logo-air-china.png'
import transportBadgeImage from '../../assets/trip-page/transport-badge.png'
import tripCardWatermarkImage from '../../assets/trip-page/trip-card-watermark.png'
import './trip-page.css'

/* ===== 已预订机票卡：Figma 2789:28725（主组件 2516:24539）—— 阴影主卡 + 标题(航司logo14+航班号13/60+状态绿) + 时刻28 SemiBold + 乘机人13 + 居中水印 + 用车推荐 ===== */
export function TripFlightCard({ card }) {
  return (
    <article className="trip-page__flight-card">
      <div className="trip-page__flight-main">
        <Img className="trip-page__flight-watermark" src={tripCardWatermarkImage} />
        <div className="trip-page__flight-title">
          <Img className="trip-page__flight-logo" src={airlineLogoAirChinaImage} />
          <p className="trip-page__flight-no">{card.airline}</p>
          <p className="trip-page__flight-status">{card.status}</p>
        </div>
        <div className="trip-page__flight-times">
          <div className="trip-page__flight-time-col">
            <p className="trip-page__flight-time">{card.departTime}</p>
            <p className="trip-page__flight-station">{card.departStation}</p>
          </div>
          <div className="trip-page__flight-mid">
            <Img className="trip-page__flight-badge" src={transportBadgeImage} />
            <p className="trip-page__flight-duration">{card.duration}</p>
          </div>
          <div className="trip-page__flight-time-col trip-page__flight-time-col--end">
            <p className="trip-page__flight-time">{card.arriveTime}</p>
            <p className="trip-page__flight-station">{card.arriveStation}</p>
          </div>
        </div>
        <div className="trip-page__flight-passengers">
          <span className="trip-page__flight-passenger-label">{card.passengerLabel}</span>
          <span className="trip-page__flight-passenger-value">{card.passengers}</span>
        </div>
      </div>
      <CarRideFooter action={card.rideAction} hint={card.rideHint} />
    </article>
  )
}
