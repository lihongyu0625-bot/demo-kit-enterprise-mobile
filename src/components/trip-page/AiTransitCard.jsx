import {
  AiCardClose,
  AiCardDashBorder,
  AiCardFooter,
  AiDualPrice,
  AiDurationMid,
  AiMeta,
  AiPrice,
  AiStationCol,
} from './AiCardParts'
import './trip-page.css'

/* AI 机票/火车票推荐卡共用骨架：时刻行 + 中段 + 金额 + 小信息 + 推荐理由 */
export function AiTransitCard({ data, kind, tone = 'violet' }) {
  return (
    <article className={`trip-page__ai-card trip-page__ai-card--${tone} trip-page__ai-card--${kind}`}>
      {tone === 'violet' ? <AiCardDashBorder /> : null}
      <AiCardClose />
      <div className="trip-page__ai-route">
        <div className="trip-page__ai-times">
          <AiStationCol badge={data.departBadge} station={data.departStation} time={data.departTime} />
          <AiDurationMid duration={data.duration} transfer={data.transfer} />
          <AiStationCol badge={data.arriveBadge} end plusDay={data.plusDay} station={data.arriveStation} time={data.arriveTime} />
        </div>
        {data.prices ? <AiDualPrice corp={data.prices.corp} personal={data.prices.personal} /> : <AiPrice value={data.price} />}
      </div>
      <AiMeta items={data.meta} />
      <AiCardFooter action={data.action} reason={data.reason} />
    </article>
  )
}

/* AI 机票推荐卡：Figma 2789:27834 —— 默认/中转/经停/+1天/超标/字数过多 六态由数据驱动 */
export function AiFlightCard({ data, tone = 'violet' }) {
  return <AiTransitCard data={data} kind="flight" tone={tone} />
}

/* AI 火车票推荐卡：Figma 2789:27835 —— 场站带 始/终 角标，中转小信息带序号 */
export function AiTrainCard({ data, tone = 'violet' }) {
  return <AiTransitCard data={data} kind="train" tone={tone} />
}
