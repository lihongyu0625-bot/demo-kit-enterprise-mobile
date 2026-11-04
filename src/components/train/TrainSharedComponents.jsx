import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import './train.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function TrainIcon({ className, name }) {
  return <GlobalStyleIcon className={className} name={name} />
}

/* ===== 顶部导航（Figma 品类首页/导航栏 + 航班列表页/导航栏同构）：
   iPhone bar 44 + 导航行 44；左侧返回 chevron24；
   中部：品类首页=标题(如「车次详情」18 Medium)，或列表页=城市对 18 Medium；
   右侧：差旅制度按钮（info16 + 12 Regular）浅底胶囊，深色页头用浅底白字变体 ===== */
/* reserveSpace 默认开：页面案例视口把状态栏钉为 fixed（App.css），
   需 44px spacer 占位，否则导航行上移与状态栏同带重叠。 */
export function TrainTopNav({ classPrefix = 'train', nav, statusbarTone = 'dark', reserveSpace = true }) {
  return (
    <header className={`${classPrefix}-top`}>
      <IPhoneBar
        className={`${classPrefix}-top__statusbar`}
        tone={statusbarTone}
        transparent
        reserveSpace={reserveSpace}
      />
      <div className={`${classPrefix}-top__bar`}>
        <button aria-label="返回" className={`${classPrefix}-top__back`} type="button">
          <TrainIcon
            className={`${classPrefix}-top__back-icon`}
            name="icon-directional-chevron_left_large-outlined"
          />
        </button>
        {nav.title ? <h1>{nav.title}</h1> : null}
        {nav.fromCity && nav.toCity ? (
          <div className={`${classPrefix}-top__title`}>
            <span>{nav.fromCity}</span>
            <TrainIcon
              className={`${classPrefix}-top__title-icon`}
              name="icon-directional-arrow_right2-filled"
            />
            <span>{nav.toCity}</span>
          </div>
        ) : null}
        {nav.policyLabel ? (
          <button className={`${classPrefix}-top__policy`} type="button">
            <TrainIcon
              className={`${classPrefix}-top__policy-icon`}
              name="icon-status-info_circle-outlined"
            />
            <span>{nav.policyLabel}</span>
          </button>
        ) : null}
        {nav.noticeLabel ? (
          <button className={`${classPrefix}-top__notice`} type="button">
            {nav.noticeLabel}
          </button>
        ) : null}
      </div>
    </header>
  )
}

/* ===== 通用章节卡：白底 r8 p12，标题 16 Medium 黑84，内容由调用方填 ===== */
export function TrainSectionCard({ title, className, children }) {
  return (
    <section className={cx('train-card', className)}>
      {title ? <h3 className="train-card__title">{title}</h3> : null}
      {children}
    </section>
  )
}

/* ===== 表单行：label 14 Regular 灰 + value 14 Regular 黑，h22 行 ===== */
export function TrainFormRow({ label, value, placeholder = false, action = false, valueClass }) {
  return (
    <div className="train-form-row">
      <span className="train-form-row__label">{label}</span>
      {action ? (
        <span className="train-form-row__action">{value || '发送确认单'}</span>
      ) : (
        <span className={cx('train-form-row__value', placeholder && 'train-form-row__value--placeholder', valueClass)}>
          {value}
        </span>
      )}
    </div>
  )
}

/* ===== 行程卡（报价/详情/退票共用）：日期小字 + 28px Barlow 时刻 + 站名 13 Medium + 过/终 徽标 + 车次/经停/时长中列 ===== */
export function TrainTripCard({ trip, classPrefix = 'train-trip', flat = false }) {
  return (
    <div className={cx(classPrefix, flat && 'train-card--flat')}>
      <div className={`${classPrefix}__col ${classPrefix}__col--from`}>
        <p className={`${classPrefix}__date`}>{trip.departDate}</p>
        <p className={`${classPrefix}__time`}>{trip.departTime}</p>
        <div className={`${classPrefix}__station`}>
          {trip.fromTag ? <span className={cx(`${classPrefix}__tag`, trip.fromTag === '终' && `${classPrefix}__tag--orange`)}>{trip.fromTag}</span> : null}
          <span className={`${classPrefix}__station-name`}>{trip.fromStation}</span>
        </div>
      </div>
      <div className={`${classPrefix}__mid`}>
        <p className={`${classPrefix}__code`}>{trip.trainCode}</p>
        <button className={`${classPrefix}__stops`} type="button">
          {trip.stopsLabel}
          <TrainIcon className={`${classPrefix}__stops-icon`} name="icon-directional-chevron_right_small-outlined" />
        </button>
        <p className={`${classPrefix}__duration`}>{trip.duration}</p>
      </div>
      <div className={`${classPrefix}__col ${classPrefix}__col--to`}>
        <p className={`${classPrefix}__date`}>{trip.arriveDate}</p>
        <p className={`${classPrefix}__time`}>{trip.arriveTime}</p>
        <div className={`${classPrefix}__station`}>
          {trip.toTag ? <span className={cx(`${classPrefix}__tag`, trip.toTag === '终' && `${classPrefix}__tag--orange`)}>{trip.toTag}</span> : null}
          <span className={`${classPrefix}__station-name`}>{trip.toStation}</span>
        </div>
      </div>
    </div>
  )
}

/* ===== 审批步骤条（填单/详情共用）：双条目圆点时间线 ===== */
export function TrainProgressTimeline({ timeline }) {
  return (
    <div className="train-progress">
      {timeline.map((item) => (
        <div className="train-progress__item" key={item.time + item.text}>
          <span className="train-progress__dot" />
          <div className="train-progress__body">
            <p className="train-progress__text">{item.text}</p>
            <p className="train-progress__time">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
