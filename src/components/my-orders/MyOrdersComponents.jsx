import { Fragment } from 'react'
import iconAirplaneImage from '../../assets/my-orders/icon-category-airplane.svg'
import iconBedImage from '../../assets/my-orders/icon-category-bed.svg'
import iconCarBlueImage from '../../assets/my-orders/icon-category-car-blue.svg'
import iconCarOrangeImage from '../../assets/my-orders/icon-category-car-orange.svg'
import iconCheckWhiteImage from '../../assets/my-orders/icon-check-white.svg'
import iconFilterImage from '../../assets/my-orders/icon-filter-outlined.svg'
import iconNoticeInfoImage from '../../assets/my-orders/icon-notice-info.svg'
import iconSearchImage from '../../assets/my-orders/icon-search-outlined.svg'
import iconTrainImage from '../../assets/my-orders/icon-category-train.svg'
import dotEndImage from '../../assets/my-orders/dot-end.svg'
import dotStartImage from '../../assets/my-orders/dot-start.svg'
import mockData from '../../mock-data/my-orders.mock.json'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { MobileNavBar } from '../common/MobileNavBar'
import './my-orders.css'

const categoryIconImages = {
  carOrange: iconCarOrangeImage,
  carBlue: iconCarBlueImage,
  bed: iconBedImage,
  airplane: iconAirplaneImage,
  train: iconTrainImage,
}

const variantLabels = {
  all: '全部',
  car: '用车',
  hotel: '酒店',
  flight: '机票',
  train: '火车票',
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function Img({ src, alt = '', className }) {
  return <img alt={alt} className={className} draggable="false" src={src} />
}

/* 搜索栏：Figma 2921:52553 —— h54 白底 px16 py8 gap16；
   搜索 pill #f5f5f5 r8 px12 h36 flex-1（icon20 + placeholder 14px 黑36）+ 筛选（icon16 + 14px 黑84）gap4 */
function MyOrdersSearchBar({ filterLabel, placeholder }) {
  return (
    <div className="my-orders__search-bar">
      <div className="my-orders__search-pill">
        <Img className="my-orders__search-icon" src={iconSearchImage} />
        <p className="my-orders__search-placeholder">{placeholder}</p>
      </div>
      <div className="my-orders__search-filter">
        <Img className="my-orders__filter-icon" src={iconFilterImage} />
        <p className="my-orders__filter-label">{filterLabel}</p>
      </div>
    </div>
  )
}

/* 主选项卡：Figma 2921:52557 —— 白底 + 0.5px 下边框 rgba(0,0,0,0.06)；
   5 项 flex-1 h48 居中；激活 14px Medium #1473ff + 16×3 r999 track，未激活 14px Regular 黑60 */
function MyOrdersTabs({ activeTab, tabs }) {
  return (
    <div className="my-orders__tabs">
      {tabs.map((tab) => (
        <div
          className={cx(
            'my-orders__tab',
            tab.id === activeTab && 'my-orders__tab--active',
          )}
          key={tab.id}
        >
          <p className="my-orders__tab-label">{tab.label}</p>
          {tab.id === activeTab ? (
            <span aria-hidden="true" className="my-orders__tab-track" />
          ) : null}
        </div>
      ))}
    </div>
  )
}

/* 筛选标签：Figma 2921:52563 —— 62×26 r6；
   选中 = 白底 + 0.5px 边框 #1473ff + 12px Medium #1473ff + 右下角 6×6 蓝底对勾；
   未选中 = 白底 + 0.5px 边框 rgba(0,0,0,0.12) + 12px Regular 黑60 */
function MyOrdersChips({ chips }) {
  return (
    <div className="my-orders__chips">
      {chips.map((chip) => (
        <div
          className={cx(
            'my-orders__chip',
            chip.selected && 'my-orders__chip--selected',
          )}
          key={chip.id}
        >
          <p className="my-orders__chip-label">{chip.label}</p>
          {chip.selected ? (
            <Img
              className="my-orders__chip-check"
              src={iconCheckWhiteImage}
            />
          ) : null}
        </div>
      ))}
    </div>
  )
}

/* 卡片标题：Figma 2921:53794 —— 品类 icon14 + 12px 黑84 品类 + 3px 黑12 分隔点 + 12px 黑60 支付方式/代订（1×8 竖线分隔）；
   右侧 12px 黑60 状态 */
function MyOrdersCardTitle({ card }) {
  const segments = [card.typeLabel, card.payLabel]
  if (card.extraLabel) segments.push(card.extraLabel)

  return (
    <div className="my-orders__card-title">
      <div className="my-orders__card-title-left">
        <Img
          className="my-orders__card-title-icon"
          src={categoryIconImages[card.icon]}
        />
        {segments.map((segment, index) => (
          <Fragment key={segment}>
            {index > 0 ? (
              <span
                aria-hidden="true"
                className="my-orders__card-title-divider"
              />
            ) : null}
            <p
              className={cx(
                'my-orders__card-title-text',
                index > 0 && 'my-orders__card-title-text--sub',
              )}
            >
              {segment}
            </p>
          </Fragment>
        ))}
      </div>
      <p className="my-orders__card-status">{card.status}</p>
    </div>
  )
}

/* 蓝描边标签：0.5px #1473ff px3 r3 10px/16 #1473ff（升舱/超标/航变/改签） */
function MyOrdersTag({ label }) {
  return <span className="my-orders__tag">{label}</span>
}

/* 卡片底部：预订时间 11px 黑24 flex-1 + 描边按钮（0.5px 黑12 px12 py4 r6 12px/20 黑84）；
   去支付 = 0.5px #1473ff + #1473ff */
function MyOrdersCardFooter({ bookTime, actions, primaryAction }) {
  if (!bookTime && (!actions || actions.length === 0)) return null

  return (
    <div className="my-orders__card-footer">
      {bookTime ? (
        <p className="my-orders__card-book-time">{bookTime}</p>
      ) : (
        <span className="my-orders__card-footer-spacer" />
      )}
      {(actions || []).map((action) => (
        <button
          className={cx(
            'my-orders__card-action',
            primaryAction && 'my-orders__card-action--primary',
          )}
          key={action}
          type="button"
        >
          {action}
        </button>
      ))}
    </div>
  )
}

/* 用车卡：Figma 2921:53646 —— 起终点行（dot14 + 14px Medium 黑84 + 标签 / 右侧 16px Barlow 价格）+
   子行（pl20：13px 黑60 时间 ‖ 1×8 竖线 ‖ 乘车人）+ 可选车辆信息条（黑2% r4 px12 h36 13px 黑60，竖线分隔） */
function MyOrdersCarCard({ card }) {
  return (
    <article className={cx('my-orders__card', card.dimmed && 'my-orders__card--dimmed')}>
      <MyOrdersCardTitle card={card} />
      <div className="my-orders__car-route">
        <div className="my-orders__car-stop">
          <Img className="my-orders__car-dot" src={dotStartImage} />
          <p className="my-orders__car-stop-name">{card.from}</p>
          {card.fromTags?.map((tag) => <MyOrdersTag key={tag} label={tag} />)}
        </div>
        <p className="my-orders__car-price">{card.price}</p>
        <div className="my-orders__car-stop my-orders__car-stop--end">
          <Img className="my-orders__car-dot" src={dotEndImage} />
          <p className="my-orders__car-stop-name">{card.to}</p>
        </div>
      </div>
      <p className="my-orders__car-sub">
        {card.timeNote}
        <span aria-hidden="true" className="my-orders__sub-divider" />
        {card.riderNote}
      </p>
      {card.vehicle ? (
        <div className="my-orders__car-vehicle">
          {card.vehicle.map((item, index) => (
            <Fragment key={item}>
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="my-orders__sub-divider"
                />
              ) : null}
              <span>{item}</span>
            </Fragment>
          ))}
        </div>
      ) : null}
      <MyOrdersCardFooter
        actions={card.actions}
        bookTime={card.bookTime}
        primaryAction={card.primaryAction}
      />
    </article>
  )
}

/* 酒店卡：Figma 2921:53830 —— 酒店名 14px Medium 黑84（省略号）+ 标签 / 价格；
   日期 13px 黑60；房型 ‖ 入住人 13px 黑60 */
function MyOrdersHotelCard({ card }) {
  return (
    <article className={cx('my-orders__card', card.dimmed && 'my-orders__card--dimmed')}>
      <MyOrdersCardTitle card={card} />
      <div className="my-orders__hotel-head">
        <div className="my-orders__hotel-name-row">
          <p className="my-orders__hotel-name">{card.name}</p>
          {card.nameTags?.map((tag) => <MyOrdersTag key={tag} label={tag} />)}
        </div>
        <p className="my-orders__hotel-price">{card.price}</p>
      </div>
      <p className="my-orders__hotel-date">{card.dateRange}</p>
      <p className="my-orders__hotel-room">
        {card.room}
        <span aria-hidden="true" className="my-orders__sub-divider" />
        {card.guestNote}
      </p>
      <MyOrdersCardFooter
        actions={card.actions}
        bookTime={card.bookTime}
        primaryAction={card.primaryAction}
      />
    </article>
  )
}

/* 行程段：城市 14px Medium 黑84 + 实心右箭头16 + (中转xx) 12px 黑36 + 标签；
   出发时间 13px 黑60；航班/车次 ‖ 乘客 13px 黑60 */
function MyOrdersSegment({ segment }) {
  return (
    <div className="my-orders__segment">
      <div className="my-orders__segment-cities">
        <p className="my-orders__segment-city">{segment.from}</p>
        <GlobalStyleIcon
          className="my-orders__segment-arrow"
          name="icon-directional-arrow_right2-filled"
        />
        <p className="my-orders__segment-city">{segment.to}</p>
        {segment.transfer ? (
          <p className="my-orders__segment-transfer">{segment.transfer}</p>
        ) : null}
        {segment.tags?.map((tag) => <MyOrdersTag key={tag} label={tag} />)}
      </div>
      <p className="my-orders__segment-depart">{segment.departTime}</p>
      <p className="my-orders__segment-note">
        {segment.tripNote}
        <span aria-hidden="true" className="my-orders__sub-divider" />
        {segment.passengerNote}
      </p>
    </div>
  )
}

/* 公告栏：#fff2ec r8 px12 h32 gap8（info icon16×18 + 12px/20 #fe7016）—— 航变卡顶部 */
function MyOrdersNoticeBar({ text }) {
  return (
    <div className="my-orders__notice">
      <Img className="my-orders__notice-icon" src={iconNoticeInfoImage} />
      <p className="my-orders__notice-text">{text}</p>
    </div>
  )
}

/* 机票/火车票卡：多段 gap12；顶部价格与卡头同行；四段卡底部隐藏行（1px 黑6 线 flex-1 + 10px/16 黑36 提示） */
function MyOrdersTransitCard({ card }) {
  return (
    <article className={cx('my-orders__card', card.dimmed && 'my-orders__card--dimmed')}>
      {card.notice ? <MyOrdersNoticeBar text={card.notice} /> : null}
      <MyOrdersCardTitle card={card} />
      <div className="my-orders__transit-body">
        <div className="my-orders__transit-segments">
          {card.segments.map((segment, index) => (
            <MyOrdersSegment key={index} segment={segment} />
          ))}
        </div>
        <p className="my-orders__transit-price">{card.price}</p>
      </div>
      {card.hiddenNote ? (
        <div className="my-orders__transit-hidden">
          <span aria-hidden="true" className="my-orders__transit-hidden-line" />
          <p className="my-orders__transit-hidden-text">{card.hiddenNote}</p>
          <span aria-hidden="true" className="my-orders__transit-hidden-line" />
        </div>
      ) : null}
      <MyOrdersCardFooter
        actions={card.actions}
        bookTime={card.bookTime}
        primaryAction={card.primaryAction}
      />
    </article>
  )
}

function MyOrdersCard({ card }) {
  if (card.kind === 'car') return <MyOrdersCarCard card={card} />
  if (card.kind === 'hotel') return <MyOrdersHotelCard card={card} />
  return <MyOrdersTransitCard card={card} />
}

export function MyOrdersPreviewFrame({ data = mockData, variant = 'all' }) {
  const variantData = data.variants ? data.variants[variant] : null
  const merged = variantData ? { ...data, ...variantData } : { ...data }

  return (
    <div className="my-orders" style={merged.frameHeight ? { height: merged.frameHeight } : undefined}>
      {/* 顶部：Figma 2921:52538 —— 导航栏92（含状态栏，右侧文案「叫车凭证」）+ 搜索栏54 + 选项卡48 */}
      <div className="my-orders__header">
        <MobileNavBar
          className="my-orders__navbar"
          showRightIcon={false}
          showRightText
          rightText={merged.navRightText}
          title={merged.navTitle}
        />
        <MyOrdersSearchBar
          filterLabel={merged.filterLabel}
          placeholder={merged.searchPlaceholder}
        />
        <MyOrdersTabs activeTab={merged.activeTab} tabs={merged.tabs} />
      </div>
      {/* 主体：top206 px12 flex-col gap8 —— 筛选标签行26 + 卡片列 */}
      <div className="my-orders__body">
        <MyOrdersChips chips={merged.chips} />
        {merged.cards.map((card, index) => (
          <MyOrdersCard card={card} key={index} />
        ))}
      </div>
      <IPhoneFooter className="my-orders__iphone-footer" transparent />
    </div>
  )
}

export {
  MyOrdersCarCard,
  MyOrdersCardFooter,
  MyOrdersCardTitle,
  MyOrdersChips,
  MyOrdersHotelCard,
  MyOrdersNoticeBar,
  MyOrdersSearchBar,
  MyOrdersSegment,
  MyOrdersTabs,
  MyOrdersTag,
  MyOrdersTransitCard,
  variantLabels,
}

export default MyOrdersPreviewFrame
