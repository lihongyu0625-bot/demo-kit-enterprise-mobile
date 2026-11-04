import mockData from '../../mock-data/train-form.mock.json'
import { TrainTopNav } from '../train/TrainSharedComponents'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { MultiSelect } from '../common/MultiSelect'
import routeArrowIcon from '../../assets/train-form/icon-directional-route-arrow.png'
import logo12306Icon from '../../assets/train-form/icon-brand-12306-logo.png'
import decor12306Icon from '../../assets/train-form/icon-brand-12306-free-decor.png'
import seatAOffIcon from '../../assets/train-form/seat-icons/seat-a-off.svg'
import seatAOnIcon from '../../assets/train-form/seat-icons/seat-a-on.png'
import seatBOffIcon from '../../assets/train-form/seat-icons/seat-b-off.svg'
import seatBOnIcon from '../../assets/train-form/seat-icons/seat-b-on.png'
import seatCOffIcon from '../../assets/train-form/seat-icons/seat-c-off.svg'
import seatCOnIcon from '../../assets/train-form/seat-icons/seat-c-on.png'
import seatDOffIcon from '../../assets/train-form/seat-icons/seat-d-off.svg'
import seatDOnIcon from '../../assets/train-form/seat-icons/seat-d-on.png'
import seatFOffIcon from '../../assets/train-form/seat-icons/seat-f-off.png'
import seatFOnIcon from '../../assets/train-form/seat-icons/seat-f-on.svg'
import quietInfoIcon from '../../assets/train-form/icon-status-info-quiet.svg'
import protectionBasicIcon from '../../assets/train-form/icon-protection-basic.svg'
import protectionProIcon from '../../assets/train-form/icon-protection-pro.svg'
import travelServiceBg from '../../assets/train-form/travel-service-bg.png'
import travelServiceLogo from '../../assets/train-form/travel-service-logo.svg'
import './train-form.css'

const seatAssetMap = {
  A: {
    off: seatAOffIcon,
    on: seatAOnIcon,
  },
  B: {
    off: seatBOffIcon,
    on: seatBOnIcon,
  },
  C: {
    off: seatCOffIcon,
    on: seatCOnIcon,
  },
  D: {
    off: seatDOffIcon,
    on: seatDOnIcon,
  },
  F: {
    off: seatFOffIcon,
    on: seatFOnIcon,
  },
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function TrainFormIcon({ className, name }) {
  return <GlobalStyleIcon className={className} name={name} />
}

/* 表单信息条：label 56 宽灰 + value 黑（占位灰 #ccc）+ 可选右向小箭头 */
function TrainFormInfoRow({ label, value, placeholder = false, chevron = false }) {
  return (
    <div className="train-form-inforow">
      <span className="train-form-inforow__label">{label}</span>
      <span className="train-form-inforow__valuewrap">
        <span className={cx('train-form-inforow__value', placeholder && 'train-form-inforow__value--placeholder')}>
          {value}
        </span>
        {chevron ? (
          <TrainFormIcon className="train-form-inforow__chevron" name="icon-directional-chevron_right_small-outlined" />
        ) : null}
      </span>
    </div>
  )
}

/* 18×18 勾选框：统一复用通用多选组件（Figma 2299:65186） */
function TrainFormCheckbox({ checked = false }) {
  return <MultiSelect aria-hidden="true" className="train-form-checkbox18" checked={checked} label="选择" />
}

/* 行程摘要卡：稿 2415:3237 351×78 白卡 p12 —— 单程 tag + 路线（12×4 箭头图）+ 详情 + meta 行 */
export function TrainFormTripSummary({ summary }) {
  return (
    <section className="train-form-summary">
      <div className="train-form-summary__head">
        <span className="train-form-summary__tag">{summary.tag}</span>
        <p className="train-form-summary__route">
          {summary.fromStation}
          <img alt="" className="train-form-summary__arrow" src={routeArrowIcon} />
          {summary.toStation}
          <span className="train-form-summary__datetime">{summary.dateTime}</span>
        </p>
        <button className="train-form-summary__detail" type="button">{summary.detailLabel}</button>
      </div>
      <div className="train-form-summary__meta">
        <span>{summary.duration}</span>
        <span aria-hidden="true" className="train-form-summary__divider" />
        <span>{summary.seatInfo}</span>
      </div>
    </section>
  )
}

/* 免登 12306 条：稿 2415:3267 351×40 白→浅蓝渐变，右侧免角标装饰溢出裁切 */
export function TrainFormFreeLoginBar() {
  return (
    <div className="train-form-miandeng">
      <img alt="" className="train-form-miandeng__logo" src={logo12306Icon} />
      <p className="train-form-miandeng__text">免登12306购票</p>
      <img alt="" className="train-form-miandeng__decor" src={decor12306Icon} />
    </div>
  )
}

/* 乘车人信息卡：稿 2415:14944 351×293 —— 姓名+铅笔、证件、蓝勾选框、浅蓝添加按钮、电话/邮箱字段、收集说明 */
export function TrainFormPassengerCard({ passenger }) {
  return (
    <section className="train-form-passenger">
      <h3 className="train-form-card-title">{passenger.title}</h3>
      <div aria-hidden="true" className="train-form-card-divider" />
      <div className="train-form-passenger__person">
        <div className="train-form-passenger__idcol">
          <p className="train-form-passenger__name">
            {passenger.name}
            <TrainFormIcon className="train-form-passenger__pencil" name="icon-action-edit_underline-outlined" />
          </p>
          <p className="train-form-passenger__idnumber">{passenger.idNumber}</p>
        </div>
        <TrainFormCheckbox checked />
      </div>
      <button className="train-form-passenger__add" type="button">
        <TrainFormIcon className="train-form-passenger__add-icon" name="icon-action-add_circle-outlined" />
        {passenger.editLabel}
      </button>
      <div className="train-form-passenger__fieldrow">
        <span className="train-form-passenger__label">
          <i aria-hidden="true" className="train-form-passenger__required">*</i>
          {passenger.phoneLabel}
        </span>
        <span className="train-form-passenger__value">{passenger.phoneValue}</span>
      </div>
      <div aria-hidden="true" className="train-form-card-divider" />
      <div className="train-form-passenger__fieldrow">
        <span className="train-form-passenger__label">{passenger.emailLabel}</span>
        <span className="train-form-passenger__value">{passenger.emailValue}</span>
      </div>
      <div aria-hidden="true" className="train-form-card-divider" />
      <p className="train-form-passenger__note">{passenger.collectNote}</p>
    </section>
  )
}

/* 座席选择卡：稿 3665:57921 351×154 —— 靠窗/过道竖标(渐变底) + A/B/C/D/F 两态坐椅图标(36×36) + 静音车厢浅蓝条 */
function TrainFormSeatIcon({ letter, selected }) {
  const asset = seatAssetMap[letter]?.[selected ? 'on' : 'off']

  if (!asset) return null

  return (
    <img
      alt={`${letter}席${selected ? '已选' : '未选'}`}
      className="train-form-seat__cell"
      key={`${letter}-${selected ? 'on' : 'off'}`}
      src={asset}
    />
  )
}

export function TrainFormSeatPicker({ seatPicker }) {
  return (
    <section className="train-form-seat">
      <h3 className="train-form-seat__title">{seatPicker.title}</h3>
      <div className="train-form-seat__map">
        <span className="train-form-seat__sidelabel">{seatPicker.leftLabel}</span>
        {seatPicker.leftGroup.map((seat) => (
          <TrainFormSeatIcon key={`left-${seat.letter}`} letter={seat.letter} selected={seat.selected} />
        ))}
        <span className="train-form-seat__sidelabel">{seatPicker.midLabel}</span>
        {seatPicker.rightGroup.map((seat) => (
          <TrainFormSeatIcon key={`right-${seat.letter}`} letter={seat.letter} selected={seat.selected} />
        ))}
        <span className="train-form-seat__sidelabel">{seatPicker.rightLabel}</span>
      </div>
      <div className="train-form-seat__quiet">
        <div className="train-form-seat__quiet-main">
          <div className="train-form-seat__quiet-head">
            <p className="train-form-seat__quiet-note">{seatPicker.quietNote}</p>
            <img alt="" className="train-form-seat__quiet-info" src={quietInfoIcon} />
          </div>
          <p className="train-form-seat__quiet-sub">{seatPicker.quietSubNote}</p>
        </div>
        <TrainFormCheckbox checked className="train-form-seat__quiet-check" />
      </div>
    </section>
  )
}

/* 出行服务卡：稿 3665:57600 351×411 ——
   渐变壳(右上装饰图 + pill 标签图/副题) → 白 panel(头部行/推荐横幅/三卡横滑 132×180/分割线/条款) */
const protectionIconMap = {
  基础保障: protectionBasicIcon,
  专业保障: protectionProIcon,
}

function TrainFormProtectionOption({ option }) {
  return (
    <article className={cx('train-form-protection-option', option.selected && 'train-form-protection-option--selected')}>
      <div className="train-form-protection-option__title">
        <img alt="" className="train-form-protection-option__icon" src={protectionIconMap[option.title] || protectionProIcon} />
        <strong>{option.title}</strong>
      </div>
      <div className="train-form-protection-option__features">
        {option.features.map((feature) => (
          <span key={feature}>
            <TrainFormIcon className="train-form-protection-option__check" name="icon-status-check-filled" />
            {feature}
          </span>
        ))}
      </div>
      <div className="train-form-protection-option__bottom">
        <div className="train-form-protection-option__price">
          <span>{option.price}</span>
          <em>/人</em>
        </div>
        <TrainFormCheckbox checked={option.selected} />
      </div>
    </article>
  )
}

export function TrainFormInsuranceCard({ insurance }) {
  return (
    <section className="train-form-travel-service">
      <img alt="" className="train-form-travel-service__bg" src={travelServiceBg} />
      <div className="train-form-travel-service__heading">
        <img alt={insurance.title} className="train-form-travel-service__pill" src={travelServiceLogo} />
        <p className="train-form-travel-service__subtitle">{insurance.subtitle}</p>
      </div>
      <div className="train-form-travel-service__panel">
        <div className="train-form-travel-service__head-group">
          <div className="train-form-travel-service__panel-header">
            <div className="train-form-travel-service__panel-title">
              <strong>{insurance.insuranceHead.title}</strong>
              <TrainFormIcon className="train-form-travel-service__info" name="icon-status-info_circle-outlined" />
            </div>
            <div className="train-form-travel-service__panel-price">
              <span>{insurance.insuranceHead.price}</span>
              <em>{insurance.insuranceHead.unit}</em>
              <TrainFormCheckbox checked />
            </div>
          </div>
          <div className="train-form-travel-service__recommend">
            <span>{insurance.insuranceHead.recommendTag}</span>
            <p>{insurance.insuranceHead.recommendText}</p>
          </div>
        </div>
        <div className="train-form-protection-list">
          {insurance.options.map((option, index) => (
            <TrainFormProtectionOption key={`${option.title}-${index}`} option={option} />
          ))}
        </div>
        <div aria-hidden="true" className="train-form-travel-service__divider" />
        <p className="train-form-travel-service__footer">{insurance.footerText}</p>
      </div>
    </section>
  )
}

/* 通用表单卡：白卡 + 标题 + 分割线 + 信息条（可带 chevron） */
function TrainFormCard({ rows, title }) {
  return (
    <section className="train-form-formcard">
      <h3 className="train-form-card-title">{title}</h3>
      <div aria-hidden="true" className="train-form-card-divider" />
      <div className="train-form-formcard__rows">
        {rows.map((row) => (
          <TrainFormInfoRow
            chevron={row.action}
            key={row.label}
            label={row.label}
            placeholder={row.placeholder}
            value={row.value}
          />
        ))}
      </div>
    </section>
  )
}

/* 审批进度卡：稿 2422:15525 163 高 */
export function TrainFormApprovalCard({ approval }) {
  return <TrainFormCard rows={approval.rows} title={approval.title} />
}

/* 差旅备注卡：稿 2422:15526 129 高 */
export function TrainFormRemarkCard({ remarkCard }) {
  return <TrainFormCard rows={remarkCard.rows} title={remarkCard.title} />
}

/* 支付报销卡：稿 2422:15527 197 高 */
export function TrainFormPaymentCard({ payment }) {
  return <TrainFormCard rows={payment.rows} title={payment.title} />
}

/* 温馨提示卡：稿 2422:15609 153 高 —— 12px/20 行高四行说明 */
export function TrainFormNoticeCard({ notice }) {
  return (
    <section className="train-form-formcard">
      <h3 className="train-form-card-title">{notice.title}</h3>
      <div aria-hidden="true" className="train-form-card-divider" />
      <p className="train-form-notice">{notice.text}</p>
    </section>
  )
}

/* 吸底：稿 2422:15682-84 375×148 —— 条款行（渐变底）+ 提交条（企业支付 ¥600 明细 | 104×48 蓝按钮）+ footer 34 */
export function TrainFormBottomBar({ bottomBar }) {
  return (
    <div className="train-form-bottom">
      <div className="train-form-bottom__agreement">
        <span aria-hidden="true" className="train-form-bottom__agreement-box" />
        <p className="train-form-bottom__agreement-text">
          {bottomBar.agreementText}
          <span className="train-form-bottom__agreement-links">{bottomBar.agreementLinks}</span>
        </p>
      </div>
      <div className="train-form-bottom__bar">
        <div className="train-form-bottom__pay">
          <p className="train-form-bottom__pay-label">{bottomBar.payLabel}</p>
          <p className="train-form-bottom__price">
            <span className="train-form-bottom__currency">¥</span>
            {bottomBar.price}
          </p>
        </div>
        <div className="train-form-bottom__submitgroup">
          <button className="train-form-bottom__detail" type="button">
            {bottomBar.detailLabel}
            <TrainFormIcon className="train-form-bottom__detail-caret" name="icon-directional-caret_up-filled" />
          </button>
          <button className="train-form-bottom__submit" type="button">{bottomBar.buttonLabel}</button>
        </div>
      </div>
      <IPhoneFooter className="train-form-bottom__footer" />
    </div>
  )
}

/* 帧组装：稿 2422:15705 375×1977 —— 导航 92 → 内容列 gap10（78/40/293/156/416/163/129/197/153）→ 吸底 148 */
export function TrainFormPreviewFrame({ data = mockData }) {
  return (
    <div className="train-form-shell">
      <div className="train-form-sticky">
        <TrainTopNav nav={data.nav} statusbarTone="dark" />
      </div>
      <div className="train-form-main">
        <TrainFormTripSummary summary={data.tripSummary} />
        <TrainFormFreeLoginBar />
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
