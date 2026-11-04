import midArrowImage from '../../assets/train-list/mid-arrow.svg'
import mockData from '../../mock-data/train-list.mock.json'
import { TrainTopNav } from '../train/TrainSharedComponents'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './train-list.css'

function TrainListIcon({ className, name }) {
  return <GlobalStyleIcon className={className} name={name} />
}

/* 渐变背景：Figma 2394:9030 —— 375×180 线性渐变 #D0E3FF → #F5F7FA（CSS 绘制） */
export function TrainListHeaderBackground() {
  return <div aria-hidden="true" className="train-list-hero" />
}

/* 日期筛选条：Figma 航班列表页/日期筛选 351×40 —— 5 项 60×40 pill + 日历按钮 44×40；
   选中项：渐变 #7BB3FF→#0373FF 白字，r8 */
export function TrainListDateFilter({ items }) {
  return (
    <div className="train-list-dates">
      <div className="train-list-dates__items">
        {items.map((item) => (
          <button
            className={item.active ? 'train-list-dates__item train-list-dates__item--active' : 'train-list-dates__item'}
            key={item.label}
            type="button"
          >
            <span className="train-list-dates__label">{item.label}</span>
            <span className="train-list-dates__date">{item.date}</span>
          </button>
        ))}
      </div>
      <button aria-label="选择日期" className="train-list-dates__calendar" type="button">
        <TrainListIcon className="train-list-dates__calendar-icon" name="icon-file-calendar-outlined" />
      </button>
    </div>
  )
}

/* 车站筛选 chips（Figma 1353:16315）：r6 白底标签 + 0.5px 边框；选中蓝边 Medium + 右下角勾标 */
export function TrainListStationChips({ chips }) {
  return (
    <div className="train-list-chips">
      {chips.map((chip) => (
        <button
          className={
            chip.active
              ? 'train-list-chips__chip train-list-chips__chip--active'
              : 'train-list-chips__chip'
          }
          key={chip.label}
          type="button"
        >
          {chip.label}
          {chip.active ? (
            <span className="train-list-chips__check">
              <TrainListIcon className="train-list-chips__check-icon" name="icon-action-check-filled" />
            </span>
          ) : null}
        </button>
      ))}
    </div>
  )
}

/* 车次卡片：Figma 1353:16669 351×88 —— 上行 44（时刻 22 Barlow；站名+浅底描边始/终徽标；中列 用时+箭头+车次+静徽标；价格）
   + 下行 20 座席 4 项两端分布（有票深 / 候补浅） */
function TrainListCard({ trip }) {
  return (
    <article className="train-list-card">
      <div className="train-list-card__top">
        <div className="train-list-card__group">
          <div className="train-list-card__col">
            <p className="train-list-card__time">{trip.departTime}</p>
            <div className="train-list-card__station">
              <span className="train-list-card__station-name">{trip.fromStation}</span>
              <span aria-hidden="true" className="train-list-card__badge">始</span>
            </div>
          </div>
          <div className="train-list-card__mid">
            <p className="train-list-card__duration">{trip.duration}</p>
            <img alt="" aria-hidden="true" className="train-list-card__mid-arrow" src={midArrowImage} />
            <p className="train-list-card__code">
              {trip.trainCode}
              {trip.quiet ? <span className="train-list-card__quiet">静</span> : null}
            </p>
          </div>
          <div className="train-list-card__col train-list-card__col--end">
            <p className="train-list-card__time">{trip.arriveTime}</p>
            <div className="train-list-card__station">
              <span aria-hidden="true" className="train-list-card__badge">终</span>
              <span className="train-list-card__station-name">{trip.toStation}</span>
            </div>
          </div>
        </div>
        <div className="train-list-card__price">
          <span className="train-list-card__price-currency">¥</span>
          <span className="train-list-card__price-value">{trip.price}</span>
        </div>
      </div>
      <div className="train-list-card__seats">
        {trip.seats.map((seat) => (
          <span
            className={seat.status === '候补' ? 'train-list-card__seat train-list-card__seat--disabled' : 'train-list-card__seat'}
            key={seat.name}
          >
            {seat.name} {seat.status}
          </span>
        ))}
      </div>
    </article>
  )
}

export function TrainListCardList({ trips }) {
  return (
    <div className="train-list-cards">
      {trips.map((trip) => (
        <TrainListCard key={trip.departTime + trip.arriveTime} trip={trip} />
      ))}
    </div>
  )
}

/* 底部条件筛选条：白底 r12 悬浮，4 项 + 筛选徽标2 */
export function TrainListFilterBar({ sortBar }) {
  return (
    <div className="train-list-filter-bar">
      {sortBar.options.map((option) => (
        <button className="train-list-filter-bar__option" key={option} type="button">
          {option}
        </button>
      ))}
      <button className="train-list-filter-bar__filter" type="button">
        <TrainListIcon className="train-list-filter-bar__filter-icon" name="icon-action-filter-outlined" />
        <span>{sortBar.filterLabel}</span>
        <span className="train-list-filter-bar__badge">{sortBar.filterBadge}</span>
      </button>
    </div>
  )
}

/* 帧组装：渐变 bg → 导航 92 → 日期条 → chips → 卡片列 → 条件筛选悬浮 → footer 吸底 */
export function TrainListPreviewFrame({ data = mockData }) {
  return (
    <div className="train-list-shell">
      <TrainListHeaderBackground />
      <TrainTopNav nav={data.nav} statusbarTone="dark" />
      <div className="train-list-main">
        <TrainListDateFilter items={data.dateFilter.items} />
        <TrainListStationChips chips={data.stationChips} />
        <TrainListCardList trips={data.trips} />
      </div>
      <TrainListFilterBar sortBar={data.sortBar} />
      <IPhoneFooter className="train-list-shell__footer" transparent />
    </div>
  )
}

export default TrainListPreviewFrame
