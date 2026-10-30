import { Img } from './TripImg'
import iconStatusInfoCircleImage from '../../assets/trip-page/icon-status-info_circle-outlined.svg'
import routeDotStartImage from '../../assets/trip-page/route-dot-start.svg'
import routeDotEndImage from '../../assets/trip-page/route-dot-end.svg'
import tripCardWatermarkImage from '../../assets/trip-page/trip-card-watermark.png'
import './trip-page.css'

/* ===== 差旅单外行程用车卡：Figma 2789:28426（主组件 2779:42204）—— 阴影主卡 + 标题(13/60+描边标签10+状态绿) + 24时刻 Medium + 起终点 Medium #333 + 乘车人 + 代叫行 ===== */
export function TripCarCard({ card }) {
  return (
    <article className="trip-page__car-card">
      <Img className="trip-page__car-watermark" src={tripCardWatermarkImage} />
      <div className="trip-page__car-title">
        <p className="trip-page__car-title-text">{card.title}</p>
        {card.tag && <span className="trip-page__car-tag">{card.tag}</span>}
        <p className="trip-page__car-status">{card.status}</p>
      </div>
      <div className="trip-page__car-info">
        <p className="trip-page__car-time">
          <span className="trip-page__car-time-num">{card.time}</span>
          <span className="trip-page__car-time-label">{card.timeLabel}</span>
        </p>
        {card.from && (
          <div className="trip-page__car-route">
            <Img className="trip-page__car-dot" src={routeDotStartImage} />
            <p className="trip-page__car-place">{card.from}</p>
          </div>
        )}
        {card.to && (
          <div className="trip-page__car-route">
            <Img className="trip-page__car-dot" src={routeDotEndImage} />
            <p className="trip-page__car-place">{card.to}</p>
          </div>
        )}
        <div className="trip-page__car-rider">
          <span className="trip-page__car-rider-label">{card.riderLabel}</span>
          <span className="trip-page__car-rider-value">{card.rider}</span>
        </div>
        {card.proxyName && (
          <div className="trip-page__car-proxy">
            <Img className="trip-page__car-proxy-icon" src={iconStatusInfoCircleImage} />
            <p className="trip-page__car-proxy-text">
              该用车由<span className="trip-page__car-proxy-name">{card.proxyName}</span>为您代叫
            </p>
          </div>
        )}
      </div>
    </article>
  )
}
