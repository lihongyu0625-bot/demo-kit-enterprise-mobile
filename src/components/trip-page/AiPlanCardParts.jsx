import { Img } from './TripImg'
import iconDirectionalChevronUpImage from '../../assets/trip-page/icon-directional-chevron_up_small-outlined.svg'
import iconDirectionalChevronUpToggleImage from '../../assets/trip-page/icon-directional-chevron_up_small-toggle.svg'
import xiaodiAvatarImage from '../../assets/trip-page/xiaodi-avatar.png'
import mockData from '../../mock-data/trip-page.mock.json'
import './trip-page.css'

/* ===== AI 规划大卡头部：渐变头图 + 小滴头像 + 标题 + 折叠 toggle ===== */
export function AiPlanCardHeader({ showToggle = true }) {
  return (
    <div className="trip-page__plan-header">
      <Img className="trip-page__plan-avatar" src={xiaodiAvatarImage} />
      <p className="trip-page__plan-title">
        <span className="trip-page__plan-title-main">{mockData.planHeader.title}</span>
        <span className="trip-page__plan-title-gradient">{mockData.planHeader.subtitle}</span>
      </p>
      {showToggle ? (
        <span aria-hidden="true" className="trip-page__plan-toggle">
          <Img className="trip-page__plan-toggle-icon" src={iconDirectionalChevronUpToggleImage} />
        </span>
      ) : null}
    </div>
  )
}

/* ===== AI 规划大卡合计与操作：Figma 2622:24380/24393 ===== */
export function AiPlanCardFooter({ footer, showTaxNote = true }) {
  return (
    <div className="trip-page__plan-footer">
      <div className="trip-page__plan-total">
        <p className="trip-page__plan-total-label">{footer.totalLabel}</p>
        <p className="trip-page__plan-total-price">
          <span className="trip-page__plan-total-unit">{footer.totalUnit}</span>
          <span className="trip-page__plan-total-num">{footer.total}</span>
        </p>
        {showTaxNote ? <p className="trip-page__plan-total-tax">{footer.taxNote}</p> : null}
        <span className="trip-page__plan-detail">
          <span className="trip-page__plan-detail-text">{footer.detailLabel}</span>
          <Img className="trip-page__plan-detail-chevron" src={iconDirectionalChevronUpImage} />
        </span>
      </div>
      <div className="trip-page__plan-buttons">
        <button className="trip-page__plan-replan" type="button">
          {footer.replan}
        </button>
        <button className="trip-page__plan-book" type="button">
          {footer.bookAll}
        </button>
      </div>
    </div>
  )
}
