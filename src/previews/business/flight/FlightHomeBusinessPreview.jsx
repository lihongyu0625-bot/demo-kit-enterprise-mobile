import flightHomeData from '../../../mock-data/flight-home.mock.json'
import {
  FlightHomeApplicationCard,
  FlightHomeBenefitStrip,
  FlightHomeBottomNav,
  FlightHomeGuaranteeCard,
  FlightHomeHeroBackground,
  FlightHomeHeroIntro,
  FlightHomeTopNav,
} from '../../../components/flight-home/FlightHomeComponents'

const showcaseList = [
  {
    name: '通用复用 · 顶部头图区',
    description: '展示机票首页的头图背景、顶部导航、标题和因公因私切换。',
    render: (
      <div className="flight-home-preview">
        <div className="flight-home-shell" style={{ minHeight: 230 }}>
          <FlightHomeHeroBackground />
          <FlightHomeTopNav nav={flightHomeData.nav} />
          <div className="flight-home-main" style={{ paddingBottom: 0 }}>
            <FlightHomeHeroIntro header={flightHomeData.header} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: '机票首页 · 填写卡片',
    description: '展示感知条、申请单制度入口、往返日期、出行人和主按钮。',
    render: <FlightHomeApplicationCard application={flightHomeData.application} />,
  },
  {
    name: '机票首页 · 省心飞保障卡',
    description: '展示保障标题、四项权益和底部高亮权益摘要。',
    render: <FlightHomeGuaranteeCard guarantee={flightHomeData.guarantee} />,
  },
  {
    name: '机票首页 · 底部权益条',
    description: '展示页面主权益标题和下方三项弱感知利益点。',
    render: <FlightHomeBenefitStrip benefits={flightHomeData.benefits} />,
  },
  {
    name: '机票首页 · 底部导航',
    description: '展示机票首页底部两个入口和 iPhone 底部指示条。',
    render: (
      <div className="flight-home-preview">
        <div
          className="flight-home-shell"
          style={{ minHeight: 84 }}
        >
          <FlightHomeBottomNav items={flightHomeData.bottomTabs} />
        </div>
      </div>
    ),
  },
]

function FlightHomeBusinessPreview() {
  return (
    <section className="catalog-preview">
      <div className="catalog-preview__grid">
        {showcaseList.map((item) => (
          <article
            className="catalog-block"
            key={item.name}
          >
            <div className="catalog-block__header">
              <div>
                <p className="catalog-block__title">{item.name}</p>
                <p className="catalog-block__description">{item.description}</p>
              </div>
            </div>
            <div className="catalog-block__surface">
              <div className="catalog-device-frame">{item.render}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FlightHomeBusinessPreview
