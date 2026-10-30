import { Img } from './TripImg'
import iconDirectionalChevronRightImage from '../../assets/trip-page/icon-directional-chevron_right_small-outlined.svg'
import iconTravelAirplaneFilledImage from '../../assets/trip-page/icon-travel-airplane-filled.svg'
import iconTravelCarFilledImage from '../../assets/trip-page/icon-travel-car_1-filled.svg'
import iconTravelHotelTower1FilledImage from '../../assets/trip-page/icon-travel-hotel_tower1-filled.svg'
import iconTravelTrain1FilledImage from '../../assets/trip-page/icon-travel-train_1-filled.svg'
import timelineDateDotFilledImage from '../../assets/trip-page/timeline-date-dot-filled.svg'
import timelineDateDotImage from '../../assets/trip-page/timeline-date-dot.svg'
import mockData from '../../mock-data/trip-page.mock.json'
import './trip-page.css'

const nodeIconMap = {
  airplane: iconTravelAirplaneFilledImage,
  hotel: iconTravelHotelTower1FilledImage,
  train: iconTravelTrain1FilledImage,
  car: iconTravelCarFilledImage,
}

/* ===== 时间轴日期行：Figma 2516 系「行程页-时间轴日期」—— dot9 + 日期 20/500 + 周几 14/22/60
   hollow=true 用空心环点（AI 大卡未预订态）；默认实心蓝点（行程页已预订，2516:21587 实测 #1473FF） ===== */
export function TripDateRow({ date, weekday, extra, hollow = false }) {
  return (
    <div className="trip-page__date-row">
      <Img className="trip-page__date-dot" src={hollow ? timelineDateDotImage : timelineDateDotFilledImage} />
      <p className="trip-page__date-text">{date}</p>
      <p className="trip-page__date-weekday">{weekday}</p>
      {extra}
    </div>
  )
}

/* ===== 品类节点：Figma 2516:21730 —— icon16(蓝描边圆角框内 12px icon) + 文案 12/20/60 + 更换 12/20/36 + chevron14 =====
   glyph 一律实心，与已预订时间轴统一（不区分已预订/未预订，空心资产已废弃） */
export function TripCategoryNode({ icon, label, changeable }) {
  const glyph = nodeIconMap[icon]
  return (
    <div className="trip-page__node">
      <span className="trip-page__node-icon">
        <Img className="trip-page__node-glyph" src={glyph} />
      </span>
      <p className="trip-page__node-label">{label}</p>
      {changeable ? (
        <span className="trip-page__node-change">
          <span className="trip-page__node-change-text">{mockData.nodes.change}</span>
          <Img className="trip-page__node-chevron" src={iconDirectionalChevronRightImage} />
        </span>
      ) : null}
    </div>
  )
}

/* ===== 时间轴组：日期行 + 连续虚线分割线 + 品类块列（块间 12，组间 24） =====
   blocks: [{ node, card }]；hollow=true 仅日期行用空心环点（AI 大卡内嵌时间轴），品类节点 icon 恒实心 */
export function TripTimelineGroup({ date, weekday, blocks, extra, gap = 12, hollow = false }) {
  return (
    <div className="trip-page__group">
      <TripDateRow date={date} extra={extra} hollow={hollow} weekday={weekday} />
      <span aria-hidden="true" className="trip-page__tl-line" />
      <div className="trip-page__blocks" style={{ '--trip-block-gap': `${gap}px` }}>
        {blocks.map((block, index) => (
          <div className="trip-page__block" key={index}>
            <TripCategoryNode {...block.node} />
            {block.cards.map((card, cardIndex) => (
              <div className="trip-page__block-card" key={cardIndex}>
                {card}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
