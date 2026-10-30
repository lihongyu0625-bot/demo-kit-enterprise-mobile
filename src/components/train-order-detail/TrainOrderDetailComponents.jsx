import mockData from '../../mock-data/train-order-detail.mock.json'
import { TrainTopNav, TrainSectionCard, TrainFormRow, TrainTripCard, TrainProgressTimeline } from '../train/TrainSharedComponents'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './train-order-detail.css'

/* 蓝底头部：Figma 组 665 375×297 —— 线性渐变 #2B81FF→#1473FF + 白字状态区 */
export function TrainOrderDetailHeader({ header }) {
  return (
    <div className="train-detail-head">
      <div className="train-detail-topnav train-top--onblue">
        <TrainTopNav nav={{ title: header.orderNo, policyLabel: header.policyLabel }} statusbarTone="light" />
      </div>
      <div className="train-detail-head__status">
        <h1>{header.statusTitle}</h1>
        <p>{header.statusNote}</p>
      </div>
    </div>
  )
}

/* 操作按钮行：联系客服 / 我要退票 / 我要改签（112×40 白底） */
export function TrainOrderDetailActions({ actions }) {
  return (
    <div className="train-detail-actions">
      {actions.map((action) => (
        <button className="train-detail-actions__btn" key={action.label} type="button">
          {action.label}
        </button>
      ))}
    </div>
  )
}

/* 下单金额卡：title + ¥1600 + 交易记录 */
export function TrainOrderDetailAmountCard({ amountCard }) {
  return (
    <div className="train-detail-amount">
      <p className="train-detail-amount__title">{amountCard.title}</p>
      <p className="train-detail-amount__price">
        <span className="train-detail-amount__currency">¥</span>
        {amountCard.price}
      </p>
      <button className="train-detail-amount__link" type="button">{amountCard.detailLabel}</button>
    </div>
  )
}

/* 行程卡：行程 + 检票口 + 乘客行 */
export function TrainOrderDetailTripCard({ tripCard }) {
  return (
    <TrainSectionCard>
      <TrainTripCard classPrefix="train-trip" trip={tripCard} />
      {tripCard.gate ? <p className="train-detail-gate">{tripCard.gate}</p> : null}
      {tripCard.passengers.map((passenger) => (
        <div className="train-detail-passenger" key={passenger.name}>
          <div className="train-detail-passenger__row1">
            <p className="train-detail-passenger__name">{passenger.name}</p>
            <p className="train-detail-passenger__status">{passenger.status}</p>
            <p className="train-detail-passenger__price">{passenger.price}</p>
          </div>
          <p className="train-detail-passenger__seat">{passenger.seat}</p>
          <div className="train-detail-passenger__row3">
            <span className="train-detail-passenger__seat-tag">{passenger.seatTag}</span>
            <span className="train-detail-passenger__id">{passenger.idNumber}</span>
          </div>
        </div>
      ))}
    </TrainSectionCard>
  )
}

/* 出行尊享卡 */
export function TrainOrderDetailBenefitCard({ benefitCard }) {
  return (
    <TrainSectionCard title={benefitCard.title}>
      <p className="train-detail-benefit">{benefitCard.items.join('，')}</p>
    </TrainSectionCard>
  )
}

/* 联系信息卡（含发送确认单 action 行） */
export function TrainOrderDetailContactCard({ contactCard }) {
  return (
    <TrainSectionCard title={contactCard.title}>
      {contactCard.rows.map((row) => (
        <TrainFormRow action={row.action} key={row.label} label={row.label} value={row.value} />
      ))}
    </TrainSectionCard>
  )
}

/* 表单类卡片（费用归属/审批信息/报销信息） */
export function TrainOrderDetailFormCard({ card }) {
  return (
    <TrainSectionCard title={card.title}>
      {card.rows.map((row) => (
        <TrainFormRow key={row.label} label={row.label} value={row.value} />
      ))}
    </TrainSectionCard>
  )
}

/* 审批进度时间线卡 */
export function TrainOrderDetailProgressCard({ progressCard }) {
  return (
    <TrainSectionCard title={progressCard.title}>
      <TrainProgressTimeline timeline={progressCard.timeline} />
    </TrainSectionCard>
  )
}

/* 温馨提示卡 */
export function TrainOrderDetailNoticeCard({ noticeCard }) {
  return (
    <TrainSectionCard title={noticeCard.title}>
      <p className="train-detail-notice">{noticeCard.text}</p>
    </TrainSectionCard>
  )
}

/* 帧组装：蓝底头 297 + 卡片列 + footer */
export function TrainOrderDetailPreviewFrame({ data = mockData }) {
  return (
    <div className="train-detail-shell">
      <TrainOrderDetailHeader header={data.header} />
      <div className="train-detail-main">
        <TrainOrderDetailActions actions={data.actions} />
        <TrainOrderDetailAmountCard amountCard={data.amountCard} />
        <TrainOrderDetailTripCard tripCard={data.tripCard} />
        <TrainOrderDetailBenefitCard benefitCard={data.benefitCard} />
        <TrainOrderDetailContactCard contactCard={data.contactCard} />
        <TrainOrderDetailFormCard card={data.costCard} />
        <TrainOrderDetailFormCard card={data.approvalCard} />
        <TrainOrderDetailProgressCard progressCard={data.progressCard} />
        <TrainOrderDetailFormCard card={data.expenseCard} />
        <TrainOrderDetailNoticeCard noticeCard={data.noticeCard} />
      </div>
      <IPhoneFooter className="train-detail-shell__footer" />
    </div>
  )
}

export default TrainOrderDetailPreviewFrame
