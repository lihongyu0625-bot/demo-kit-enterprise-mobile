import { AiPlanCardFooter, AiPlanCardHeader } from './AiPlanCardParts'
import { AiSweep, Skel } from './AiSkeletonParts'
import { TripCategoryNode, TripDateRow, TripTimelineGroup } from './TripTimeline'
import { Img } from './TripImg'
import cardTopGradientImage from '../../assets/trip-page/card-top-gradient.png'
import iconDirectionalChevronUpToggleImage from '../../assets/trip-page/icon-directional-chevron_up_small-toggle.svg'
import iconStatusLoadingImage from '../../assets/trip-page/icon-status-loading_2-outlined.png'
import tripOrderLabelImage from '../../assets/trip-page/trip-order-label.svg'
import xiaodiAvatarImage from '../../assets/trip-page/xiaodi-avatar.png'
import mockData from '../../mock-data/trip-page.mock.json'
import './trip-page.css'

/* ===== AI 规划大卡：Figma 25098 351×654 —— 头部(可选差旅单信息行) + 内嵌时间轴(组间16) + 合计/操作 ===== */
export function AiPlanCard({ showOrderInfo = false, groups, footer, footerProps }) {
  return (
    <article className="trip-page__plan-card">
      <Img className="trip-page__plan-gradient" src={cardTopGradientImage} />
      <AiPlanCardHeader />
      {showOrderInfo ? (
        <div className="trip-page__plan-order">
          <Img className="trip-page__plan-order-label" src={tripOrderLabelImage} />
          <span aria-hidden="true" className="trip-page__plan-order-divider" />
          <p className="trip-page__plan-order-text">{mockData.orderInfo}</p>
        </div>
      ) : null}
      <div className="trip-page__plan-sections">
        {groups.map((group) => (
          <TripTimelineGroup
            blocks={group.blocks}
            date={group.date}
            gap={group.gap}
            hollow
            key={group.date}
            weekday={group.weekday}
          />
        ))}
      </div>
      {footer ? <AiPlanCardFooter footer={footer} {...footerProps} /> : null}
    </article>
  )
}

/* ===== 大卡加载态占位（stub）：Figma 26470 351×56，尾部 loading 或展开 chevron ===== */
export function AiPlanCardStub({ trailing = 'loading' }) {
  return (
    <article className="trip-page__plan-card trip-page__plan-card--stub">
      <Img className="trip-page__plan-gradient" src={cardTopGradientImage} />
      <AiPlanCardHeader showToggle={false} />
      <span className={`trip-page__plan-stub-${trailing === 'loading' ? 'loading' : 'expand'}`}>
        {trailing === 'loading' ? (
          <Img className="trip-page__plan-loading-icon" src={iconStatusLoadingImage} />
        ) : (
          <span aria-hidden="true" className="trip-page__plan-toggle trip-page__plan-toggle--down">
            <Img
              className="trip-page__plan-toggle-icon trip-page__plan-toggle-icon--down"
              src={iconDirectionalChevronUpToggleImage}
            />
          </span>
        )}
      </span>
    </article>
  )
}

/* ===== 大卡骨架屏：Figma 26619 554 —— 头部骨架 + 时间轴骨架，无差旅单信息无底部 ===== */
export function AiPlanCardSkeleton() {
  return (
    <article className="trip-page__plan-card trip-page__plan-card--skeleton">
      <AiSweep />
      <Img className="trip-page__plan-gradient" src={cardTopGradientImage} />
      <div className="trip-page__plan-header">
        <Img className="trip-page__plan-avatar" src={xiaodiAvatarImage} />
        <div className="trip-page__skel-col trip-page__skel-col--header">
          <Skel height={14} width={120} />
          <Skel height={14} width={96} />
        </div>
        <span aria-hidden="true" className="trip-page__plan-toggle">
          <Img className="trip-page__plan-toggle-icon" src={iconDirectionalChevronUpToggleImage} />
        </span>
      </div>
      <div className="trip-page__plan-sections">
        <div className="trip-page__group">
          <TripDateRow date="11月1日" weekday="周五" />
          <span aria-hidden="true" className="trip-page__tl-line" />
          <div className="trip-page__blocks">
            <div className="trip-page__block">
              <TripCategoryNode icon="airplane" label="机票" />
              <div className="trip-page__skel-card">
                <div className="trip-page__skel-row">
                  <Skel height={18} width={64} />
                  <Skel height={14} width={95} />
                  <Skel height={18} width={64} />
                </div>
                <Skel height={22} width={42} />
                <div className="trip-page__skel-row">
                  <Skel height={17} width={173} />
                  <Skel height={24} width={60} />
                </div>
              </div>
            </div>
            <div className="trip-page__block">
              <TripCategoryNode icon="hotel" label="酒店" />
              <div className="trip-page__skel-card trip-page__skel-card--hotel">
                <Skel height={56} width={46} />
                <div className="trip-page__skel-col">
                  <Skel height={17} width={141} />
                  <Skel height={13} width={87} />
                  <Skel height={22} width={42} />
                </div>
                <Skel height={24} width={60} />
              </div>
            </div>
          </div>
        </div>
        <div className="trip-page__group">
          <TripDateRow date="11月4日" weekday="周一" />
          <span aria-hidden="true" className="trip-page__tl-line" />
          <div className="trip-page__blocks">
            <div className="trip-page__block">
              <TripCategoryNode icon="train" label="火车票" />
              <div className="trip-page__skel-card">
                <div className="trip-page__skel-row">
                  <Skel height={18} width={64} />
                  <Skel height={14} width={95} />
                  <Skel height={18} width={64} />
                </div>
                <Skel height={22} width={42} />
                <div className="trip-page__skel-row">
                  <Skel height={17} width={173} />
                  <Skel height={24} width={60} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
