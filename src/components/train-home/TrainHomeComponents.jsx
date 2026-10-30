import bannerImage from '../../assets/train-home/banner.png'
import bottomWatermarkTrainImage from '../../assets/train-home/bottom-watermark-train.svg'
import headerBgImage from '../../assets/train-home/header-bg.png'
import routeSwapGradientIcon from '../../assets/train-home/icon-route-swap-gradient.svg'
import mockData from '../../mock-data/train-home.mock.json'
import { TrainTopNav } from '../train/TrainSharedComponents'
import { BottomWatermark } from '../common/BottomWatermark'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { MultiSelect } from '../common/MultiSelect'
import './train-home.css'

function TrainHomeIcon({ className, name }) {
  return <GlobalStyleIcon className={className} name={name} />
}

/* 背景头图：Figma 商旅-因公-背景头图 375×230（品类=火车票 主组件 1071:20743） */
export function TrainHomeHeroBackground() {
  return (
    <div className="train-home-hero">
      <img alt="" className="train-home-hero__image" src={headerBgImage} />
    </div>
  )
}

/* 顶部导航：iPhone bar(浅色透明) + 返回 + 差旅制度（白底半透明胶囊，同机票首页） */
export function TrainHomeTopNav({ nav }) {
  return (
    <div className="train-home-top train-top--light">
      <TrainTopNav nav={nav} statusbarTone="light" />
    </div>
  )
}

/* 标题区：火车票 24 Medium 黑 + 副标题 14 Regular #09397f */
export function TrainHomeHeroIntro({ header }) {
  return (
    <div className="train-home-intro">
      <h1>{header.title}</h1>
      <p>{header.subtitle}</p>
    </div>
  )
}

/* 填写卡片：Figma 火车票首页-填写卡片 351×285 —— 申请单行/城市对/日期/选项行/提交按钮 */
export function TrainHomeApplicationCard({ application }) {
  return (
    <section className="train-home-application">
      <button className="train-home-application__plan" type="button">
        <span className="train-home-application__plan-title">{application.plan.title}</span>
        <span aria-hidden="true" className="train-home-application__plan-divider" />
        <span className="train-home-application__plan-placeholder">{application.plan.placeholder}</span>
        <TrainHomeIcon
          className="train-home-application__chevron"
          name="icon-directional-chevron_right_small-outlined"
        />
      </button>

      <span aria-hidden="true" className="train-home-divider" />

      <div className="train-home-application__route">
        <span>{application.route.fromCity}</span>
        <button aria-label="交换出发到达城市" className="train-home-application__swap" type="button">
          <img alt="" aria-hidden="true" className="train-home-application__swap-icon" src={routeSwapGradientIcon} />
        </button>
        <span>{application.route.toCity}</span>
      </div>

      <span aria-hidden="true" className="train-home-divider" />

      <div className="train-home-application__date">
        <strong>{application.date.departDate}</strong>
        <span>{application.date.departWeekday}</span>
      </div>

      <span aria-hidden="true" className="train-home-divider" />

      <div className="train-home-application__options">
        {application.options.map((option) => (
          <label className="train-home-application__option" key={option.label}>
            <MultiSelect
              checked={option.checked}
              className="train-home-application__option-check"
              label={option.label}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      <button className="train-home-application__submit" type="button">
        {application.buttonLabel}
      </button>
    </section>
  )
}

/* 运营 banner：351×90 整图 */
export function TrainHomeBanner({ alt }) {
  return <img alt={alt} className="train-home-banner" src={bannerImage} />
}

/* 底部水印条：351×16 SVG 标题 + 权益点 */
export function TrainHomeWatermark({ watermark }) {
  return (
    <BottomWatermark
      className="train-home-watermark"
      headlineAlt={watermark.headlineAlt}
      headlineSrc={bottomWatermarkTrainImage}
      items={watermark.items}
      tone="train"
    />
  )
}

/* 底部标签栏：4 项（我的订单/联系客服/取票授权/我的12306）+ iPhone footer */
export function TrainHomeBottomNav({ items }) {
  return (
    <footer className="train-home-bottom-nav">
      <div className="train-home-bottom-nav__bar">
        {items.map((item) => (
          <button className="train-home-bottom-nav__item" key={item.label} type="button">
            <TrainHomeIcon className="train-home-bottom-nav__icon" name={item.iconName} />
            <span className="train-home-bottom-nav__label">{item.label}</span>
          </button>
        ))}
      </div>
      <IPhoneFooter className="train-home-bottom-nav__footer" />
    </footer>
  )
}

/* 帧组装：bg 375×230 → 顶部导航 88 → 主列 pt94（标题/填写卡/banner/水印）→ 底部标签栏吸底 */
export function TrainHomePreviewFrame({ data = mockData }) {
  return (
    <div className="train-home-shell">
      <TrainHomeHeroBackground />
      <TrainHomeTopNav nav={data.nav} />
      <div className="train-home-main">
        <TrainHomeHeroIntro header={data.header} />
        <TrainHomeApplicationCard application={data.application} />
        <TrainHomeBanner alt={data.bannerAlt} />
        <TrainHomeWatermark watermark={data.watermark} />
      </div>
      <TrainHomeBottomNav items={data.bottomTabs} />
    </div>
  )
}

export default TrainHomePreviewFrame
