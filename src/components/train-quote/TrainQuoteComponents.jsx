import mockData from '../../mock-data/train-quote.mock.json'
import { TrainTopNav, TrainTripCard } from '../train/TrainSharedComponents'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './train-quote.css'

/* 日期切换条：Figma Frame 117 351×34 —— 前一天 ‹ 12月13日 周三 › 后一天 */
export function TrainQuoteDateSwitch({ dateSwitch }) {
  return (
    <div className="train-quote-dateswitch">
      <button className="train-quote-dateswitch__btn" type="button">
        <span aria-hidden="true" className="train-quote-dateswitch__arrow train-quote-dateswitch__arrow--prev" />
        前一天
      </button>
      <p className="train-quote-dateswitch__current">{dateSwitch.current}</p>
      <button className="train-quote-dateswitch__btn" type="button">
        后一天
        <span aria-hidden="true" className="train-quote-dateswitch__arrow" />
      </button>
    </div>
  )
}

/* 行程卡：Frame 124 327×78 */
export function TrainQuoteTripCard({ trip }) {
  return <TrainTripCard classPrefix="train-trip" trip={trip} />
}

/* 座席选择列：Frame 129 352×68 —— 3 列 112×68 白底 r8；
   商务座=灰置(超出差标橙标)，一等座=蓝高亮，二等座=黑 */
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
          {seat.overBudget ? <span className="train-quote-seats__over">超出差标</span> : null}
        </button>
      ))}
    </div>
  )
}

/* 价格说明条：Frame 134 351×68 —— ¥460 需登陆12306账号 官方免费购票 */
export function TrainQuotePriceNote({ bottomBar }) {
  return (
    <div className="train-quote-pricenote">
      <div className="train-quote-pricenote__price">
        <span className="train-quote-pricenote__currency">¥</span>
        <span className="train-quote-pricenote__value">{bottomBar.price}</span>
      </div>
      <div className="train-quote-pricenote__info">
        <p>{bottomBar.hint}</p>
        <p className="train-quote-pricenote__free">{bottomBar.freeLabel}</p>
      </div>
      <button className="train-quote-pricenote__book" type="button">
        {bottomBar.buttonLabel}
      </button>
    </div>
  )
}

/* 吸底保障包条：Frame 144 351×97 —— ¥660 同结构 + 出行忧 包 + +¥10 */
export function TrainQuoteBottomBar({ bottomBar }) {
  const bundle = bottomBar.bundle
  return (
    <div className="train-quote-bottom">
      <div className="train-quote-bottom__card">
        <div className="train-quote-bottom__price">
          <span className="train-quote-bottom__currency">¥</span>
          <span className="train-quote-bottom__value">{bundle ? '660' : bottomBar.price}</span>
        </div>
        <div className="train-quote-bottom__info">
          <p>{bottomBar.hint}</p>
          <p className="train-quote-bottom__free">{bottomBar.freeLabel}</p>
        </div>
        <button className="train-quote-bottom__book" type="button">
          {bottomBar.buttonLabel}
        </button>
      </div>
      {bundle ? (
        <div className="train-quote-bottom__bundle">
          <span aria-hidden="true" className="train-quote-bottom__bundle-tag">
            {bundle.tag}
          </span>
          <p className="train-quote-bottom__bundle-copy">
            {bundle.benefits.join('，')}
            <span className="train-quote-bottom__bundle-price">{bundle.price}</span>
          </p>
        </div>
      ) : null}
      <IPhoneFooter className="train-quote-bottom__footer" />
    </div>
  )
}

/* 帧组装 */
export function TrainQuotePreviewFrame({ data = mockData }) {
  return (
    <div className="train-quote-shell">
      <TrainTopNav nav={data.nav} statusbarTone="dark" />
      <div className="train-quote-main">
        <TrainQuoteDateSwitch dateSwitch={data.dateSwitch} />
        <TrainQuoteTripCard trip={data.trip} />
        <TrainQuoteSeatRow seatClasses={data.seatClasses} />
        <TrainQuotePriceNote bottomBar={data.bottomBar} />
      </div>
      <TrainQuoteBottomBar bottomBar={data.bottomBar} />
    </div>
  )
}

export default TrainQuotePreviewFrame
