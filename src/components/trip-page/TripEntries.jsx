import { Radio } from '../common/Radio'
import { Img } from './TripImg'
/* 品类入口 icon 用黑色变体（与文案 --trip-text-84 同 tone）；
   蓝色原版 #1473FF 仍被 hotel-detail / car-home 等经 GlobalStyleIcon 共享，不能直接改原资产 */
import iconTravelAirplaneOutlinedBlackImage from '../../assets/trip-page/icon-travel-airplane-outlined-black.svg'
import iconTravelHotelTower2OutlinedBlackImage from '../../assets/trip-page/icon-travel-hotel_tower2-outlined-black.svg'
import iconTravelTrain2OutlinedBlackImage from '../../assets/trip-page/icon-travel-train_2-outlined-black.svg'
import emptyIllustrationImage from '../../assets/trip-page/empty-illustration.png'
import './trip-page.css'

const entryIconMap = {
  订机票: iconTravelAirplaneOutlinedBlackImage,
  订酒店: iconTravelHotelTower2OutlinedBlackImage,
  订火车票: iconTravelTrain2OutlinedBlackImage,
}

/* ===== 品类入口：Figma 2516 系 351×78 —— 提示行 + 订机票/订酒店/订火车票 =====
   exclude: 场景语义下未开通的品类（如 no-hotel 未开通酒店 / hotel-only 只开通酒店），
   对应入口整体删除展示 */
export function TripEntries({ entries, exclude = [] }) {
  const items = entries.items.filter((item) => !exclude.includes(item))
  return (
    <div className="trip-page__entries">
      <p className="trip-page__entries-hint">{entries.hint}</p>
      <div className="trip-page__entries-row">
        {items.map((item, index) => (
          <div className="trip-page__entry" key={item}>
            <Img className="trip-page__entry-icon" src={entryIconMap[item]} />
            <p className="trip-page__entry-label">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ===== 空态：Figma Frame158 —— 标题 + 说明 + 插画 ===== */
export function TripEmptyState({ empty }) {
  return (
    <div className="trip-page__empty">
      <p className="trip-page__empty-title">{empty.title}</p>
      <p className="trip-page__empty-desc">{empty.desc}</p>
      <Img className="trip-page__empty-illustration" src={emptyIllustrationImage} />
    </div>
  )
}

/* ===== 差旅单信息行右侧「仅看与我相关的行程」：单选圆点在左、文案在右（Figma 2516:21587 / 单选 2299:65333） ===== */
export function RelatedOnlyToggle({ label }) {
  return (
    <span className="trip-page__related-only">
      <Radio label={label} />
      <span className="trip-page__related-only-text">{label}</span>
    </span>
  )
}
