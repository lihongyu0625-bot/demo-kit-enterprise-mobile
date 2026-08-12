import flightListData from '../../../mock-data/flight-list.mock.json'
import {
  FlightListBottomSortBar,
  FlightListCard,
  FlightListCardList,
  FlightListDateFilter,
  FlightListFilterBar,
  FlightListHeaderBackground,
  FlightListTopNav,
} from '../../../components/flight-list/FlightListComponents'

const showcaseList = [
  {
    name: '航班列表页 · 顶部导航区',
    description: '展示渐变头图、状态栏、往返城市标题和差旅制度入口。',
    render: (
      <div className="flight-list-preview">
        <div
          className="flight-list-shell"
          style={{ minHeight: 140 }}
        >
          <FlightListHeaderBackground />
          <FlightListTopNav nav={flightListData.nav} />
          <div className="flight-list-main" style={{ paddingBottom: 0 }}>
            <FlightListDateFilter dateFilters={flightListData.dateFilters} />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: '航班列表页 · 筛选条',
    description: '展示筛选、多选标签和直飞选中态。',
    render: <FlightListFilterBar filters={flightListData.filters} />,
  },
  {
    name: '航班列表页 · 航班卡片（标准态）',
    description: '展示同一航班卡片组件的标准状态，包含时间、场站、价格和信息行。',
    render: <FlightListCard card={flightListData.cards[0]} />,
  },
  {
    name: '航班列表页 · 航班卡片（带标签态）',
    description: '展示同一航班卡片组件的带标签状态，在标准态基础上增加权益标签与补充信息。',
    render: <FlightListCard card={flightListData.cards[1]} />,
  },
  {
    name: '航班列表页 · 航班列表',
    description: '展示整组航班卡片在列表中的编排关系。',
    render: <FlightListCardList cards={flightListData.cards} />,
  },
  {
    name: '航班列表页 · 底部排序栏',
    description: '展示吸底排序筛选区和 iPhone 底部指示条。',
    render: (
      <div className="flight-list-preview">
        <div
          className="flight-list-shell"
          style={{ minHeight: 66 }}
        >
          <FlightListBottomSortBar items={flightListData.bottomSortTabs} />
        </div>
      </div>
    ),
  },
]

function FlightListBusinessPreview() {
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

export default FlightListBusinessPreview
