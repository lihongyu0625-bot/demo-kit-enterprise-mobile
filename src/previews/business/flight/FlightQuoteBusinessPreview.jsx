import flightQuoteData from '../../../mock-data/flight-quote.mock.json'
import {
  FlightQuoteBackground,
  FlightQuoteCabinTabs,
  FlightQuoteCard,
  FlightQuoteFlightSummary,
  FlightQuoteFilterBar,
  FlightQuoteNotice,
  FlightQuoteTopNav,
} from '../../../components/flight-quote/FlightQuoteComponents'

function ComponentSample({ children, tone }) {
  return (
    <div className={`flight-quote-business-sample flight-quote-business-sample--${tone}`}>
      {children}
    </div>
  )
}

const showcaseList = [
  {
    name: '航班报价页 · 顶部背景',
    description: '单独维护报价页顶部蓝色渐变背景，供整页头部区域复用。',
    render: (
      <ComponentSample tone="background">
        <FlightQuoteBackground />
      </ComponentSample>
    ),
  },
  {
    name: '航班报价页 · 顶部导航',
    description: '单独展示返回、城市航线标题和差旅制度入口。',
    render: (
      <ComponentSample tone="nav">
        <FlightQuoteTopNav nav={flightQuoteData.nav} />
      </ComponentSample>
    ),
  },
  {
    name: '航班报价页 · 温馨提示',
    description: '单独展示页面顶部通知条，可替换图标、文案和跳转入口。',
    render: (
      <ComponentSample tone="notice">
        <FlightQuoteNotice notice={flightQuoteData.notice} />
      </ComponentSample>
    ),
  },
  {
    name: '航班报价页 · 航班概要卡片',
    description: '单独展示航班时间、机场、航司、机型和航班辅助信息。',
    render: (
      <ComponentSample tone="summary">
        <FlightQuoteFlightSummary flight={flightQuoteData.flight} />
      </ComponentSample>
    ),
  },
  {
    name: '航班报价页 · 舱等切换',
    description: '单独展示经济舱、超级经济舱、公务/头等舱的切换状态。',
    render: (
      <ComponentSample tone="tabs">
        <FlightQuoteCabinTabs cabins={flightQuoteData.cabins} />
      </ComponentSample>
    ),
  },
  {
    name: '航班报价页 · 报价筛选标签',
    description: '单独展示赠送里程、赠打车券、免费退改和有行李额筛选。',
    render: (
      <ComponentSample tone="filter">
        <FlightQuoteFilterBar filters={flightQuoteData.filters} />
      </ComponentSample>
    ),
  },
  {
    name: '航班报价页 · 报价卡片',
    description: '展示标准态、协议价态和权益包态报价卡片。',
    render: (
      <ComponentSample tone="cards">
        <FlightQuoteCard quote={flightQuoteData.quotes[0]} />
        <FlightQuoteCard quote={flightQuoteData.quotes[1]} />
        <FlightQuoteCard quote={flightQuoteData.quotes[2]} />
      </ComponentSample>
    ),
  },
]

function FlightQuoteBusinessPreview() {
  return (
    <section className="catalog-preview">
      <div className="catalog-preview__grid">
        {showcaseList.map((item) => (
          <article className="catalog-block" key={item.name}>
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

export default FlightQuoteBusinessPreview
