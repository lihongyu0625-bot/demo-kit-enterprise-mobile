import mockData from '../../mock-data/train-form.mock.json'
import { TrainTopNav, TrainSectionCard, TrainFormRow } from '../train/TrainSharedComponents'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './train-form.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function TrainFormIcon({ className, name }) {
  return <GlobalStyleIcon className={className} name={name} />
}

/* 行程摘要卡：Frame 149 78 高 —— 单程 tag + 北京西→南昌西 12-10 11:30 + 详情 + 用时/座席 + 免登12306 tag */
export function TrainFormTripSummary({ summary }) {
  return (
    <section className="train-form-summary">
      <div className="train-form-summary__head">
        <span className="train-form-summary__tag">{summary.tag}</span>
        <p className="train-form-summary__route">
          {summary.fromStation}
          <TrainFormIcon className="train-form-summary__arrow" name="icon-directional-arrow_right2-filled" />
          {summary.toStation}
          <span className="train-form-summary__datetime">{summary.dateTime}</span>
        </p>
        <button className="train-form-summary__detail" type="button">{summary.detailLabel}</button>
      </div>
      <div className="train-form-summary__meta">
        <span>{summary.duration}</span>
        <span className="train-form-summary__divider">|</span>
        <span>{summary.seatInfo}</span>
        <span className="train-form-summary__free">
          <i aria-hidden="true" className="train-form-summary__free-badge">{summary.freeTagBadge}</i>
          {summary.freeTag}
        </span>
      </div>
    </section>
  )
}

/* 乘车人信息卡：Frame 149 内 293 高卡 —— 姓名/证件 + 添加/编辑 + 电话/邮箱 + 收集说明 */
export function TrainFormPassengerCard({ passenger }) {
  return (
    <TrainSectionCard title={passenger.title}>
      <div className="train-form-passenger">
        <p className="train-form-passenger__name">{passenger.name}</p>
        <p className="train-form-passenger__id">{passenger.idNumber}</p>
        <button className="train-form-passenger__edit" type="button">{passenger.editLabel}</button>
        <span aria-hidden="true" className="train-form-passenger__required">{passenger.requiredMark}</span>
      </div>
      <TrainFormRow label={passenger.phoneLabel} value={passenger.phoneValue} />
      <TrainFormRow label={passenger.emailLabel} value={passenger.emailValue} />
      <p className="train-form-passenger__note">{passenger.collectNote}</p>
    </TrainSectionCard>
  )
}

/* 座席选择卡：选择座席 —— 车厢座位格子（F D C B A 白字块）+ 行标（靠窗/过道/靠窗）+ 静音车厢说明 */
export function TrainFormSeatPicker({ seatPicker }) {
  return (
    <TrainSectionCard title={seatPicker.title}>
      <div className="train-form-seat">
        {seatPicker.rows.map((row, rowIndex) => (
          <div className="train-form-seat__row" key={rowIndex}>
            <div className="train-form-seat__cells">
              {row.cells.map((cell) => (
                <span className={cell.trim() ? 'train-form-seat__cell' : 'train-form-seat__cell train-form-seat__cell--empty'} key={`${rowIndex}-${cell}`}>
                  {cell.trim()}
                </span>
              ))}
            </div>
            <span className="train-form-seat__label">{seatPicker.rowLabels[rowIndex]}</span>
          </div>
        ))}
      </div>
      <div className="train-form-seat__quiet">
        <p className="train-form-seat__quiet-note">{seatPicker.quietNote}</p>
        <p className="train-form-seat__quiet-sub">{seatPicker.quietSubNote}</p>
      </div>
    </TrainSectionCard>
  )
}

/* 保障选项卡：添加保障更安心 —— 4 张保障卡（超值推荐橙标） */
export function TrainFormInsuranceCard({ insurance }) {
  return (
    <TrainSectionCard className="train-form-insurance" title={insurance.title}>
      <div className="train-form-insurance__list">
        {insurance.cards.map((card) => (
          <article className={cx('train-form-insurance__card', card.badge && 'train-form-insurance__card--featured')} key={card.name + card.features[0]}>
            <div className="train-form-insurance__head">
              <p className="train-form-insurance__name">{card.name}</p>
              {card.badge ? <span className="train-form-insurance__badge">{card.badge}</span> : null}
            </div>
            <p className="train-form-insurance__features">{card.features.join('，')}</p>
            <p className="train-form-insurance__price">
              {card.price}
              <span className="train-form-insurance__unit">{card.unit}</span>
            </p>
          </article>
        ))}
      </div>
      <p className="train-form-insurance__agreement">{insurance.agreement}</p>
    </TrainSectionCard>
  )
}

/* 审批进度卡 */
export function TrainFormApprovalCard({ approval }) {
  return (
    <TrainSectionCard title={approval.title}>
      {approval.rows.map((row) => (
        <TrainFormRow key={row.label} label={row.label} value={row.value} />
      ))}
    </TrainSectionCard>
  )
}

/* 差旅备注卡 */
export function TrainFormRemarkCard({ remarkCard }) {
  return (
    <TrainSectionCard title={remarkCard.title}>
      {remarkCard.rows.map((row) => (
        <TrainFormRow key={row.label} label={row.label} placeholder={row.placeholder} value={row.value} />
      ))}
    </TrainSectionCard>
  )
}

/* 支付报销卡 */
export function TrainFormPaymentCard({ payment }) {
  return (
    <TrainSectionCard title={payment.title}>
      {payment.rows.map((row) => (
        <TrainFormRow key={row.label} label={row.label} value={row.value} />
      ))}
    </TrainSectionCard>
  )
}

/* 温馨提示卡 */
export function TrainFormNoticeCard({ notice }) {
  return (
    <TrainSectionCard title={notice.title}>
      <p className="train-form-notice">{notice.text}</p>
    </TrainSectionCard>
  )
}

/* 吸底：条款行 50 + 提交条 98（企业支付 ¥600 明细 | 提交订单） */
export function TrainFormBottomBar({ bottomBar }) {
  return (
    <div className="train-form-bottom">
      <div className="train-form-bottom__agreement">
        <TrainFormIcon className="train-form-bottom__agreement-icon" name="icon-status-checkbox_checked-filled" />
        <p>{bottomBar.agreementText}</p>
      </div>
      <div className="train-form-bottom__bar">
        <div className="train-form-bottom__pay">
          <p className="train-form-bottom__pay-label">{bottomBar.payLabel}</p>
          <p className="train-form-bottom__price">
            <span className="train-form-bottom__currency">¥</span>
            {bottomBar.price}
          </p>
          <button className="train-form-bottom__detail" type="button">{bottomBar.detailLabel}</button>
        </div>
        <button className="train-form-bottom__submit" type="button">{bottomBar.buttonLabel}</button>
      </div>
      <IPhoneFooter className="train-form-bottom__footer" />
    </div>
  )
}

/* 帧组装：1977 高长页 */
export function TrainFormPreviewFrame({ data = mockData }) {
  return (
    <div className="train-form-shell">
      <div className="train-form-sticky">
        <TrainTopNav nav={data.nav} statusbarTone="dark" />
      </div>
      <div className="train-form-main">
        <TrainFormTripSummary summary={data.tripSummary} />
        <TrainFormPassengerCard passenger={data.passengerCard} />
        <TrainFormSeatPicker seatPicker={data.seatPicker} />
        <TrainFormInsuranceCard insurance={data.insurance} />
        <TrainFormApprovalCard approval={data.approval} />
        <TrainFormRemarkCard remarkCard={data.remarkCard} />
        <TrainFormPaymentCard payment={data.payment} />
        <TrainFormNoticeCard notice={data.notice} />
      </div>
      <TrainFormBottomBar bottomBar={data.bottomBar} />
    </div>
  )
}

export default TrainFormPreviewFrame
