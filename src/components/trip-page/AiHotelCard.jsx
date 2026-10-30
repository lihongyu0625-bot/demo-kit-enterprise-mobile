import { AiCardClose, AiCardDashBorder, AiCardFooter } from './AiCardParts'
import { AiSweep, Skel } from './AiSkeletonParts'
import { Img } from './TripImg'
import hotelPhoto1Image from '../../assets/trip-page/hotel-photo-1.png'
import hotelPhotoAiImage from '../../assets/trip-page/hotel-photo-ai.png'
import hotelPhoto2Image from '../../assets/trip-page/hotel-photo-2.png'
import hotelPhoto3Image from '../../assets/trip-page/hotel-photo-3.png'
import iconActionRefreshBlueImage from '../../assets/trip-page/icon-action-refresh-blue.svg'
import mockData from '../../mock-data/trip-page.mock.json'
import './trip-page.css'

const hotelPhotoMap = {
  hotelPhoto1: hotelPhoto1Image,
  hotelPhoto2: hotelPhoto2Image,
  hotelPhoto3: hotelPhoto3Image,
  hotelPhotoAi: hotelPhotoAiImage,
}

/* AI 酒店推荐卡：Figma 2789:27836 —— 照片46×56 + 名/址 + 金额(单值/超标橙+注脚) + 房型 + 理由 */
export function AiHotelCard({ data, tone = 'violet', footer = true }) {
  return (
    <article className={`trip-page__ai-card trip-page__ai-card--${tone} trip-page__ai-card--hotel`}>
      {tone === 'violet' ? <AiCardDashBorder /> : null}
      <AiCardClose />
      <div className="trip-page__ai-hotel-body">
        <Img className="trip-page__ai-hotel-photo" src={hotelPhotoMap[data.photo]} />
        <div className="trip-page__ai-hotel-main">
          <div className="trip-page__ai-hotel-head">
            <div className="trip-page__ai-hotel-info">
              <p className="trip-page__ai-hotel-name">{data.name}</p>
              <p className="trip-page__ai-hotel-address">{data.address}</p>
            </div>
            <div className="trip-page__ai-hotel-price">
              <p
                className={
                  data.priceTone === 'orange' ? 'trip-page__ai-price trip-page__ai-price--orange' : 'trip-page__ai-price'
                }
              >
                <span className="trip-page__ai-price-unit">￥</span>
                <span className="trip-page__ai-price-num">{data.price}</span>
              </p>
              {data.priceNote ? <p className="trip-page__ai-price-note">{data.priceNote}</p> : null}
            </div>
          </div>
          <p className="trip-page__ai-hotel-specs">{data.specs}</p>
        </div>
      </div>
      {footer ? <AiCardFooter action={data.action} reason={data.reason} /> : null}
    </article>
  )
}

/* AI 酒店暂无资源卡：Figma 2711:26797 —— 335×128，标题组[暂无资源+刷新+重新推荐]居左，
   内容区与正常酒店卡同构（照片+名/址+金额右上+房型）+ 标准 footer，二者整体 50% 透明 */
export function AiHotelNoResourceCard({ data }) {
  return (
    <article className="trip-page__ai-card trip-page__ai-card--violet trip-page__ai-card--hotel trip-page__ai-card--no-resource">
      <AiCardDashBorder />
      <AiCardClose />
      <div className="trip-page__ai-nr-title">
        <p className="trip-page__ai-nr-text">{data.title}</p>
        <span className="trip-page__ai-nr-refresh-group">
          <Img className="trip-page__ai-nr-refresh" src={iconActionRefreshBlueImage} />
          <p className="trip-page__ai-nr-action">{data.action}</p>
        </span>
      </div>
      <div className="trip-page__ai-nr-body">
        <div className="trip-page__ai-hotel-body">
          <Img className="trip-page__ai-hotel-photo" src={hotelPhoto1Image} />
          <div className="trip-page__ai-hotel-main">
            <div className="trip-page__ai-hotel-head">
              <div className="trip-page__ai-hotel-info">
                <p className="trip-page__ai-hotel-name">{data.name}</p>
                <p className="trip-page__ai-hotel-address">{data.address}</p>
              </div>
              <p className="trip-page__ai-price">
                <span className="trip-page__ai-price-unit">￥</span>
                <span className="trip-page__ai-price-num">{data.price}</span>
              </p>
            </div>
            <p className="trip-page__ai-hotel-specs">{data.specs}</p>
          </div>
        </div>
      </div>
      <div className="trip-page__ai-nr-body">
        <AiCardFooter action={mockData.aiFlight.action} reason={mockData.aiFlight.reason} />
      </div>
    </article>
  )
}

/* AI 酒店加载卡：Figma 24589 —— 虚线壳 h102 + 骨架块 + 扫光 */
export function AiHotelLoadingCard() {
  return (
    <article className="trip-page__ai-card trip-page__ai-card--violet trip-page__ai-card--hotel trip-page__ai-card--loading">
      <AiCardDashBorder />
      <AiSweep />
      <div className="trip-page__ai-hotel-body">
        <Skel height={56} width={46} />
        <div className="trip-page__skel-col">
          <Skel height={17} width={141} />
          <Skel height={13} width={87} />
          <Skel height={22} width={42} />
        </div>
        <Skel height={24} width={125} />
      </div>
      <div className="trip-page__skel-row">
        <Skel height={17} width={173} />
        <Skel height={24} width={60} />
      </div>
    </article>
  )
}
