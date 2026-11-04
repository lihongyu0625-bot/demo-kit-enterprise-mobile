import mockData from '../../mock-data/train-order-detail.mock.json'
import { TrainTopNav, TrainFormRow, TrainTripCard } from '../train/TrainSharedComponents'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import travelServiceWord from '../../assets/train-order-detail/travel-service-word.svg'
import './train-order-detail.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function TrainDetailIcon({ className, name }) {
  return <GlobalStyleIcon className={className} name={name} />
}

/* 通用卡内分割线 */
function TrainDetailDivider() {
  return <div aria-hidden="true" className="train-detail-divider" />
}

/* 通用卡片壳：白卡 p16 12 + 标题（plain=无分割线变体，稿费用归属/审批信息） */
function TrainDetailCard({ children, plain = false, title }) {
  return (
    <section className={cx('train-detail-card', plain && 'train-detail-card--plain')}>
      <h3 className="train-detail-card__title">{title}</h3>
      {plain ? null : <TrainDetailDivider />}
      {children}
    </section>
  )
}

/* 蓝底头部：稿 2422:36295 渐变到 y220 —— 导航(订单号+差旅制度) + 已出票(白圈勾) + 副题 */
export function TrainOrderDetailHeader({ header }) {
  return (
    <div className="train-detail-head">
      <TrainTopNav nav={{ title: header.orderNo, policyLabel: header.policyLabel }} statusbarTone="light" />
      <div className="train-detail-head__status">
        <span className="train-detail-head__status-check" />
        <div className="train-detail-head__status-text">
          <p className="train-detail-head__status-title">{header.statusTitle}</p>
          <p className="train-detail-head__status-note">{header.statusNote}</p>
        </div>
      </div>
    </div>
  )
}

/* 操作按钮行：三枚 111×40 白底 space-between（稿 y163-203 x12..363） */
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

/* 下单金额条：纵向浅蓝渐变独立卡（稿 y227-277），左题右链 */
export function TrainOrderDetailAmountCard({ amountCard }) {
  return (
    <div className="train-detail-amount">
      <p className="train-detail-amount__title">
        {amountCard.title}
        <span className="train-detail-amount__price">
          <em className="train-detail-amount__currency">¥</em>
          <span className="train-detail-amount__price-number">{amountCard.price}</span>
        </span>
      </p>
      <button className="train-detail-amount__link" type="button">
        {amountCard.detailLabel}
        <TrainDetailIcon className="train-detail-amount__link-icon" name="icon-directional-chevron_right_small-outlined" />
      </button>
    </div>
  )
}

/* 行程卡（稿 287-497）：TrainTripCard + 检票口 pill + divider + 两行乘客块 */
export function TrainOrderDetailTripCard({ tripCard }) {
  return (
    <section className="train-detail-trip">
      <TrainTripCard classPrefix="train-trip" trip={tripCard} />
      {tripCard.gate ? <p className="train-detail-gate">{tripCard.gate}</p> : null}
      <TrainDetailDivider />
      {tripCard.passengers.map((passenger) => (
        <div className="train-detail-passenger" key={passenger.name}>
          <div className="train-detail-passenger__col">
            <div className="train-detail-passenger__row1">
              <p className="train-detail-passenger__name">{passenger.name}</p>
              <p className="train-detail-passenger__seat">{passenger.seat}</p>
              <span className="train-detail-passenger__seat-tag">{passenger.seatTag}</span>
            </div>
            <p className="train-detail-passenger__id">{passenger.idNumber}</p>
          </div>
          <div className="train-detail-passenger__col train-detail-passenger__col--side">
            <p className="train-detail-passenger__status">{passenger.status}</p>
            <p className="train-detail-passenger__price">{passenger.price}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

/* 出行服务卡（稿 3677:58065）：渐变头带（58×22 矢量字标切图）+ 白体行 */
export function TrainOrderDetailBenefitCard({ benefitCard }) {
  return (
    <div className="train-detail-benefit">
      <p className="train-detail-benefit__title">
        <img alt="" className="train-detail-benefit__logo" src={travelServiceWord} />
      </p>
      <div className="train-detail-benefit__panel">
        <div className="train-detail-benefit__col">
          <p className="train-detail-benefit__name">
            {benefitCard.name}
            <TrainDetailIcon className="train-detail-benefit__info" name="icon-status-info_circle-outlined" />
          </p>
          <p className="train-detail-benefit__desc">{benefitCard.desc}</p>
        </div>
        <TrainDetailIcon className="train-detail-benefit__arrow" name="icon-directional-chevron_right_small-outlined" />
      </div>
    </div>
  )
}

/* 联系信息卡（稿 626-788）：title + rows + 分割线 + 居中蓝字「发送确认单」（无顶部分割线） */
export function TrainOrderDetailContactCard({ contactCard }) {
  return (
    <section className="train-detail-card train-detail-contact">
      <h3 className="train-detail-card__title train-detail-contact__title">{contactCard.title}</h3>
      <div className="train-detail-card__rows">
        {contactCard.rows.map((row) => (
          <TrainFormRow key={row.label} label={row.label} value={row.value} />
        ))}
      </div>
      <TrainDetailDivider />
      <div className="train-detail-contact__action-wrap">
        <button className="train-detail-contact__action" type="button">{contactCard.actionLabel}</button>
      </div>
    </section>
  )
}

/* 表单类卡片（费用归属/审批信息=plain；报销信息=带分割线） */
export function TrainOrderDetailFormCard({ card, plain = false }) {
  return (
    <TrainDetailCard plain={plain} title={card.title}>
      <div className="train-detail-card__rows">
        {card.rows.map((row) => (
          <TrainFormRow key={row.label} label={row.label} value={row.value} />
        ))}
      </div>
    </TrainDetailCard>
  )
}

/* 审批进度时间线条目：16×16 实底圆勾 mask 着色（进行=蓝 / 历史=黑36%），首条带连接线 */
function TrainDetailTimelineIcon({ active }) {
  return (
    <TrainDetailIcon
      className={cx('train-detail-timeline__dot', !active && 'train-detail-timeline__dot--inactive')}
      name="icon-status-success_circle-filled"
    />
  )
}

/* 审批进度卡（稿 3677:58069）：title + divider + 双条目时间线 */
export function TrainOrderDetailProgressCard({ progressCard }) {
  return (
    <TrainDetailCard title={progressCard.title}>
      <div className="train-detail-timeline">
        {progressCard.timeline.map((item, index) => (
          <div
            className={cx(
              'train-detail-timeline__item',
              !item.active && 'train-detail-timeline__item--inactive',
              index < progressCard.timeline.length - 1 && 'train-detail-timeline__item--tail',
            )}
            key={`${item.time}-${index}`}
          >
            <div className="train-detail-timeline__side">
              <TrainDetailTimelineIcon active={item.active} />
            </div>
            <div className="train-detail-timeline__body">
              <p className="train-detail-timeline__text">{item.text}</p>
              <p className="train-detail-timeline__time">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </TrainDetailCard>
  )
}

/* 温馨提示卡（稿 1420-1572）：title + divider + 12/20 四行文案 */
export function TrainOrderDetailNoticeCard({ noticeCard }) {
  return (
    <TrainDetailCard title={noticeCard.title}>
      <p className="train-detail-notice">{noticeCard.text}</p>
    </TrainDetailCard>
  )
}

/* 帧组装：蓝头 226 → 卡片列 gap10（actions y163）→ F5F5F5 底带 y1573 + home indicator */
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
        <TrainOrderDetailFormCard card={data.costCard} plain />
        <TrainOrderDetailFormCard card={data.approvalCard} plain />
        <TrainOrderDetailProgressCard progressCard={data.progressCard} />
        <TrainOrderDetailFormCard card={data.expenseCard} />
        <TrainOrderDetailNoticeCard noticeCard={data.noticeCard} />
      </div>
      <div className="train-detail-shell__footer-spacer" />
      <IPhoneFooter className="train-detail-shell__footer" transparent />
    </div>
  )
}

export default TrainOrderDetailPreviewFrame
