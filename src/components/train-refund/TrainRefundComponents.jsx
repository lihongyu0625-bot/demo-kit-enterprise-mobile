import mockData from '../../mock-data/train-refund.mock.json'
import { TrainTopNav, TrainSectionCard, TrainFormRow, TrainTripCard } from '../train/TrainSharedComponents'
import { Radio } from '../common/Radio'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './train-refund.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

/* 退票原因分组：Figma 因公/因私 tag + 选项（深色 Radio 18px）+ 输入框 */
function TrainRefundReasonGroup({ group }) {
  return (
    <div className="train-refund-group">
      <div className="train-refund-group__head">
        <span className={cx('train-refund-group__tag', group.tagTone === 'orange' && 'train-refund-group__tag--orange')}>
          {group.tag}
        </span>
        <p className="train-refund-group__title">{group.title}</p>
      </div>
      <div className="train-refund-group__options">
        {group.options.map((option) => (
          <div className="train-refund-option" key={option.label}>
            <span className="train-refund-option__label">{option.label}</span>
            <Radio checked={option.checked} label={option.label} tone="dark" />
          </div>
        ))}
      </div>
      {group.inputPlaceholder ? (
        <div className="train-refund-group__input">{group.inputPlaceholder}</div>
      ) : null}
    </div>
  )
}

/* 退票页帧组装：导航 → 行程卡 → 原因卡 → 审批卡 → 关于卡 → 吸底 */
export function TrainRefundPreviewFrame({ data = mockData }) {
  return (
    <div className="train-refund-shell">
      <TrainTopNav nav={data.nav} statusbarTone="dark" />
      <div className="train-refund-main">
        <TrainSectionCard>
          <TrainTripCard classPrefix="train-trip" trip={data.tripCard} />
          {data.tripCard.passengers.map((passenger) => (
            <div className="train-refund-passenger" key={passenger.name}>
              <div className="train-refund-passenger__row1">
                <p className="train-refund-passenger__name">{passenger.name}</p>
                <p className="train-refund-passenger__status">{passenger.status}</p>
                <p className="train-refund-passenger__price">{passenger.price}</p>
              </div>
              <p className="train-refund-passenger__seat">{passenger.seat}</p>
              <div className="train-refund-passenger__row3">
                <span className="train-refund-passenger__seat-tag">{passenger.seatTag}</span>
                <span className="train-refund-passenger__id">{passenger.idNumber}</span>
              </div>
            </div>
          ))}
        </TrainSectionCard>

        <TrainSectionCard title={data.reasonCard.title}>
          {data.reasonCard.groups.map((group) => (
            <TrainRefundReasonGroup group={group} key={group.title} />
          ))}
        </TrainSectionCard>

        <TrainSectionCard title={data.approvalCard.title}>
          <p className="train-refund-approval-note">{data.approvalCard.note}</p>
          {data.approvalCard.rows.map((row) => (
            <TrainFormRow key={row.label} label={row.label} value={row.value} />
          ))}
        </TrainSectionCard>

        <TrainSectionCard title={data.aboutCard.title}>
          <p className="train-refund-about">{data.aboutCard.text}</p>
        </TrainSectionCard>
      </div>

      <div className="train-refund-bottom">
        <div className="train-refund-bottom__content">
          <p className="train-refund-bottom__title">{data.bottomBar.refundTitle}</p>
          <p className="train-refund-bottom__price">
            <span className="train-refund-bottom__currency">¥</span>
            {data.bottomBar.price}
          </p>
          <p className="train-refund-bottom__detail">{data.bottomBar.priceDetail}</p>
        </div>
        <div className="train-refund-bottom__actions">
          <button className="train-refund-bottom__cancel" type="button">{data.bottomBar.cancelLabel}</button>
          <button className="train-refund-bottom__submit" type="button">{data.bottomBar.submitLabel}</button>
        </div>
        <IPhoneFooter className="train-refund-bottom__footer" />
      </div>
    </div>
  )
}

export default TrainRefundPreviewFrame
