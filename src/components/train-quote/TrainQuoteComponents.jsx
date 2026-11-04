import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import mockData from '../../mock-data/train-quote.mock.json'
import { TrainTopNav, TrainTripCard } from '../train/TrainSharedComponents'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './train-quote.css'

import freeIcon from '../../assets/train-quote/icon-brand-guanfangmianfei-colored.svg'
import bundleTagIcon from '../../assets/train-quote/icon-brand-chuxingwuyou-colored.png'
import bundleTitleIcon from '../../assets/train-quote/icon-brand-chuxingwuyou-title.svg'
import pinkCheckIcon from '../../assets/train-quote/icon-status-check-pink.svg'
import overTagIcon from '../../assets/train-quote/icon-symbol-chaochuchabiao-tag.svg'

/* 日期切换条：稿 2394:19117 351×34 药丸底 rgba(5,34,76,0.05) r8 —— caret12 + 14px 文案 */
export function TrainQuoteDateSwitch({ dateSwitch }) {
  return (
    <div className="train-quote-dateswitch">
      <button className="train-quote-dateswitch__btn" type="button">
        <GlobalStyleIcon className="train-quote-dateswitch__caret" name="icon-directional-caret_left-filled" />
        {dateSwitch.prev}
      </button>
      <span className="train-quote-dateswitch__current-wrap">
        <GlobalStyleIcon className="train-quote-dateswitch__cal" name="icon-file-calendar-outlined" />
        <p className="train-quote-dateswitch__current">{dateSwitch.current}</p>
      </span>
      <button className="train-quote-dateswitch__btn" type="button">
        {dateSwitch.next}
        <GlobalStyleIcon className="train-quote-dateswitch__caret" name="icon-directional-caret_right-filled" />
      </button>
    </div>
  )
}

/* 行程卡：稿 3662:49521 327×78（车站/时刻/车次中列） */
export function TrainQuoteTripCard({ trip }) {
  return <TrainTripCard classPrefix="train-trip" flat trip={trip} />
}

/* 座席选择列：稿 3662:55727 3×112 白底 r8；
   选中=1px 蓝边 #1473ff + 名称蓝 + 蓝底白勾右下角标；超差=58×16 橙角标图 */
export function TrainQuoteSeatRow({ seatClasses }) {
  return (
    <div className="train-quote-seats">
      {seatClasses.map((seat) => (
        <button
          className={
            seat.overBudget
              ? 'train-quote-seats__item train-quote-seats__item--disabled'
              : seat.highlight
                ? 'train-quote-seats__item train-quote-seats__item--highlight'
                : 'train-quote-seats__item'
          }
          key={seat.name}
          type="button"
        >
          <p className="train-quote-seats__name">{seat.name}</p>
          <p className="train-quote-seats__info">
            {seat.price}/{seat.status}
          </p>
          {seat.overBudget ? (
            <span className="train-quote-seats__over">
              <img alt="" className="train-quote-seats__over-img" src={overTagIcon} />
              <span className="train-quote-seats__over-text">{seat.overLabel}</span>
            </span>
          ) : null}
          {seat.highlight ? (
            <span className="train-quote-seats__check">
              <GlobalStyleIcon className="train-quote-seats__check-icon" name="icon-action-check-filled" />
            </span>
          ) : null}
        </button>
      ))}
    </div>
  )
}

/* 价格卡（稿 2394:19211 默认 / 2394:19365 增值收益 两种 variant）：
   ¥1350 + 官方免费购票(12 蓝徽) + 需登陆12306账号(11 灰) + 预订按钮 68×35 #1473ff r8；
   增值收益 variant 追加：出行无忧条 343×32（12 图 + 42×10 标题字 + 双权益 10px #7c4a28 + +¥10） */
export function TrainQuotePriceCard({ bottomBar, variant = 'default' }) {
  const bundle = bottomBar.bundle
  const isBundle = variant === 'bundle'
  return (
    <div className={isBundle ? 'train-quote-price train-quote-price--bundle' : 'train-quote-price'}>
      <div className="train-quote-price__row">
        <div className="train-quote-price__value">
          <span className="train-quote-price__currency">¥</span>
          <span className="train-quote-price__number">{bottomBar.price}</span>
        </div>
        <div className="train-quote-price__info">
          <p className="train-quote-price__free">
            <img alt="" className="train-quote-price__free-icon" src={freeIcon} />
            {bottomBar.freeLabel}
          </p>
          <p className="train-quote-price__hint">{bottomBar.hint}</p>
        </div>
        <button className="train-quote-price__book" type="button">
          {bottomBar.buttonLabel}
        </button>
      </div>
      {isBundle && bundle ? (
        <div className="train-quote-price__bundle">
          <span className="train-quote-price__bundle-left">
            <img alt="" className="train-quote-price__bundle-tag" src={bundleTagIcon} />
            <img alt="" className="train-quote-price__bundle-title" src={bundleTitleIcon} />
          </span>
          <span className="train-quote-price__bundle-benefits">
            {bundle.benefits.map((benefit) => (
              <span className="train-quote-price__bundle-benefit" key={benefit}>
                <img alt="" className="train-quote-price__bundle-check" src={pinkCheckIcon} />
                {benefit}
              </span>
            ))}
          </span>
          <span className="train-quote-price__bundle-more">
            {bundle.price}
            <GlobalStyleIcon className="train-quote-price__bundle-caret" name="icon-directional-chevron_right_small-outlined" />
          </span>
        </div>
      ) : null}
    </div>
  )
}

/* 保留旧导出名（页面/注册表链仍引用） */
export function TrainQuotePriceNote({ bottomBar }) {
  return <TrainQuotePriceCard bottomBar={bottomBar} />
}

export function TrainQuoteBottomBar({ bottomBar }) {
  return <TrainQuotePriceCard bottomBar={bottomBar} variant="bundle" />
}

/* 帧组装：渐变头 180（#d0e3ff→#f5f7fa）→ 导航 88 → 内容列 top104 px12 gap12 */
export function TrainQuotePreviewFrame({ data = mockData }) {
  return (
    <div className="train-quote-shell">
      <div aria-hidden="true" className="train-quote-hero" />
      <TrainTopNav nav={data.nav} statusbarTone="dark" />
      <div className="train-quote-main">
        <TrainQuoteDateSwitch dateSwitch={data.dateSwitch} />
        <TrainQuoteTripCard trip={data.trip} />
        <TrainQuoteSeatRow seatClasses={data.seatClasses} />
        <TrainQuotePriceCard bottomBar={data.bottomBar} />
        <TrainQuotePriceCard bottomBar={data.bottomBar} variant="bundle" />
      </div>
      <IPhoneFooter transparent />
    </div>
  )
}

export default TrainQuotePreviewFrame
