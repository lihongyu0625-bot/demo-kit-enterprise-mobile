import { Fragment } from 'react'
import headerBgImage from '../../assets/points-detail/header-bg.png'
import iconChevronDownImage from '../../assets/points-detail/icon-chevron-down.svg'
import iconChevronRightImage from '../../assets/points-detail/icon-chevron-right.svg'
import iconChevronUpImage from '../../assets/points-detail/icon-chevron-up.svg'
import iconInfoImage from '../../assets/points-detail/icon-info.svg'
import pointsIconImage from '../../assets/points-detail/points-icon.png'
import productDiningImage from '../../assets/points-detail/product-dining.png'
import productGymCardImage from '../../assets/points-detail/product-gym-card.png'
import productJuicePosterImage from '../../assets/points-detail/product-juice-poster.png'
import productPillowImage from '../../assets/points-detail/product-pillow.png'
import productRideCouponImage from '../../assets/points-detail/product-ride-coupon.png'
import productSuitcaseImage from '../../assets/points-detail/product-suitcase.png'
import tabUnderlineImage from '../../assets/points-detail/tab-underline.svg'
import mockData from '../../mock-data/points-detail.mock.json'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { MobileNavBar } from '../common/MobileNavBar'
import './points-detail.css'

const productImages = {
  gymCard: productGymCardImage,
  rideCoupon: productRideCouponImage,
  pillow: productPillowImage,
  juicePoster: productJuicePosterImage,
  dining: productDiningImage,
  suitcase: productSuitcaseImage,
}

const variantLabels = {
  income: '收支明细',
  exchange: '兑换记录',
  lottery: '抽奖记录',
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function Img({ src, alt = '', className }) {
  return <img alt={alt} className={className} draggable="false" src={src} />
}

/* 积分行：Figma 2306:79343 —— absolute top100 px12 两端对齐；
   左侧 积分icon30 + 数值28 Barlow + 「积分」16；右侧 info14 + 过期提醒 + 1×8 竖线 + 积分规则 */
function PointsDetailPointsRow({ points }) {
  return (
    <div className="points-detail__points-row">
      <div className="points-detail__points-main">
        <div className="points-detail__points-icon">
          <Img alt="" className="points-detail__points-icon-img" src={pointsIconImage} />
        </div>
        <p className="points-detail__points-value">{points.value}</p>
        <p className="points-detail__points-unit">积分</p>
      </div>
      <div className="points-detail__points-side">
        {points.showExpireNotice ? (
          <>
            <Img alt="" className="points-detail__points-notice-icon" src={iconInfoImage} />
            <p className="points-detail__points-notice">{points.expireNotice}</p>
            <span aria-hidden="true" className="points-detail__points-divider" />
          </>
        ) : null}
        <p className="points-detail__points-rule">{points.rulesText}</p>
      </div>
    </div>
  )
}

/* Tab 条：Figma 2306:81982 —— absolute top146 h102 px12 pb50 上圆角16 渐变卡；
   tab 项 px10 py13，选中 500/不选中 400 opacity70，文字均 #05224c，下划线 17×3 bottom6 居中 */
function PointsDetailTabs({ activeTab, tabs }) {
  return (
    <div className="points-detail__tabs">
      {tabs.map((tab) => (
        <div
          className={cx(
            'points-detail__tab',
            tab.id === activeTab && 'points-detail__tab--active',
          )}
          key={tab.id}
        >
          <p className="points-detail__tab-label">{tab.label}</p>
          {tab.id === activeTab ? (
            <Img alt="" className="points-detail__tab-underline" src={tabUnderlineImage} />
          ) : null}
        </div>
      ))}
    </div>
  )
}

/* 收支行：Figma 2306:79343 系 Component3 —— 左列标题+时间(获得态带 chevron、展开加到期时间行)，
   右侧金额 获得态蓝色/消耗态黑84，均 18 Barlow SemiCond Medium */
function PointsDetailIncomeRow({ row }) {
  const isGain = row.type === 'gain'
  return (
    <div className="points-detail__income-row">
      <div className="points-detail__income-main">
        <p className="points-detail__income-title">{row.title}</p>
        <div
          className={cx(
            'points-detail__income-time-line',
            isGain && 'points-detail__income-time-line--gain',
          )}
        >
          <p className="points-detail__income-time">
            {isGain ? `获取时间：${row.time}` : row.time}
          </p>
          {isGain ? (
            <Img
              alt=""
              className="points-detail__income-chevron"
              src={row.expanded ? iconChevronUpImage : iconChevronDownImage}
            />
          ) : null}
        </div>
        {isGain && row.expanded ? (
          <p className="points-detail__income-expire">到期时间：{row.expireTime}</p>
        ) : null}
      </div>
      <p
        className={cx(
          'points-detail__income-amount',
          isGain && 'points-detail__income-amount--gain',
        )}
      >
        {row.amount}
      </p>
    </div>
  )
}

/* 兑换行：Figma 2306:82395 —— 商品图 112×84 边框 r6 + 右列(标题两行截断/红字状态/
   橙色价格行「34积分+2元」/时间) */
function PointsDetailExchangeRow({ row }) {
  return (
    <div className="points-detail__exchange-row">
      <Img
        alt=""
        className="points-detail__exchange-image"
        src={productImages[row.image] ?? productGymCardImage}
      />
      <div className="points-detail__exchange-main">
        <div className="points-detail__exchange-copy">
          <p className="points-detail__exchange-title">{row.title}</p>
          {row.status ? <p className="points-detail__exchange-status">{row.status}</p> : null}
        </div>
        <div className="points-detail__exchange-price">
          <span className="points-detail__exchange-price-amount">{row.price.points}</span>
          <span className="points-detail__exchange-price-unit">积分</span>
          <span className="points-detail__exchange-price-plus">+</span>
          <span className="points-detail__exchange-price-amount">{row.price.cash}</span>
          <span className="points-detail__exchange-price-unit">元</span>
        </div>
        <p className="points-detail__exchange-time">{row.time}</p>
      </div>
    </div>
  )
}

/* 抽奖行：Figma 2306:82800 —— 标题+「抽奖时间：」时间(+可选蓝字链接行 chevron-right 14，
   链接行无间距) + 右侧金额 -1 黑84 */
function PointsDetailLotteryRow({ row }) {
  return (
    <div className="points-detail__lottery-row">
      <div className="points-detail__lottery-main">
        <p className="points-detail__lottery-title">{row.title}</p>
        <p className="points-detail__lottery-time">抽奖时间：{row.time}</p>
        {row.link ? (
          <div className="points-detail__lottery-link">
            <p className="points-detail__lottery-link-text">{row.link}</p>
            <Img alt="" className="points-detail__lottery-link-icon" src={iconChevronRightImage} />
          </div>
        ) : null}
      </div>
      <p className="points-detail__lottery-amount">{row.amount}</p>
    </div>
  )
}

/* 列表卡：Figma 2306:82270 容器1713 —— 白卡 p12 r8，行间 1px 分割线，行内 gap12 */
function PointsDetailListCard({ rowKind, rows }) {
  const RowComponent =
    rowKind === 'exchange'
      ? PointsDetailExchangeRow
      : rowKind === 'lottery'
        ? PointsDetailLotteryRow
        : PointsDetailIncomeRow

  return (
    <article className="points-detail__list-card">
      {rows.map((row, index) => (
        <Fragment key={index}>
          {index > 0 ? <span aria-hidden="true" className="points-detail__divider" /> : null}
          <RowComponent row={row} />
        </Fragment>
      ))}
    </article>
  )
}

export function PointsDetailPreviewFrame({ data = mockData, variant = 'income' }) {
  const variantData = data.variants ? data.variants[variant] : null
  const merged = variantData ? { ...data, ...variantData } : { ...data }

  return (
    <div className="points-detail">
      {/* 头图：Figma 2306:81981 —— absolute top0 375×200 object-cover */}
      <Img alt="" className="points-detail__header-bg" src={headerBgImage} />
      <MobileNavBar
        className="points-detail__navbar"
        showRightIcon={false}
        title={merged.navTitle}
        transparent
      />
      <PointsDetailPointsRow points={merged.points} />
      <PointsDetailTabs activeTab={merged.activeTab} tabs={merged.tabs} />
      {/* 列表区：Figma 2306:82269 —— absolute top202 left12 w351 gap16 + 尾部「没有更多了～」 */}
      <div className="points-detail__list">
        <PointsDetailListCard rowKind={merged.rowKind} rows={merged.rows} />
        <p className="points-detail__end">{merged.endText}</p>
      </div>
      <IPhoneFooter className="points-detail__iphone-footer" transparent />
    </div>
  )
}

export {
  PointsDetailExchangeRow,
  PointsDetailIncomeRow,
  PointsDetailListCard,
  PointsDetailLotteryRow,
  PointsDetailPointsRow,
  PointsDetailTabs,
  variantLabels,
}
