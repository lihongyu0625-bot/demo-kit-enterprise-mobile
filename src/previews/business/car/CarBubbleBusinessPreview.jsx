import carBubbleData from '../../../mock-data/car-bubble.mock.json'
import {
  CarBubbleBottomBar,
  CarBubbleMapLayer,
  CarBubbleRouteLayer,
  CarBubbleVehiclePanel,
} from '../../../components/car-bubble/CarBubbleComponents'

function ComponentSample({ children, tone }) {
  return <div className={`car-bubble-business-sample car-bubble-business-sample--${tone}`}>{children}</div>
}

const showcaseList = [
  {
    name: '冒泡页 · 地图背景',
    description: '用车冒泡页的地图底层，用于承接路线、起终点气泡和浮动按钮。',
    render: (
      <ComponentSample tone="map">
        <CarBubbleMapLayer />
      </ComponentSample>
    ),
  },
  {
    name: '冒泡页 · 路线信息',
    description: '展示起终点气泡、路线线段和行程距离时间，不包含安全中心悬浮入口。',
    render: (
      <ComponentSample tone="route">
        <CarBubbleMapLayer />
        <CarBubbleRouteLayer route={carBubbleData.route} />
      </ComponentSample>
    ),
  },
  {
    name: '冒泡页 · 车型选择面板',
    description: '车型列表、预估价格、优惠标签和多选勾选态独立沉淀。',
    render: (
      <ComponentSample tone="panel">
        <CarBubbleVehiclePanel
          summary={carBubbleData.summary}
          vehicles={carBubbleData.vehicles}
        />
      </ComponentSample>
    ),
  },
  {
    name: '冒泡页 · 底部呼叫区',
    description: '预约出发、乘车人、用车备注入口和缺人呼叫胶囊作为吸底操作区复用。',
    render: (
      <ComponentSample tone="bottom">
        <CarBubbleBottomBar
          callBar={carBubbleData.callBar}
          entries={carBubbleData.bottomEntries}
        />
      </ComponentSample>
    ),
  },
]

function CarBubbleBusinessPreview() {
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

CarBubbleBusinessPreview.showcaseList = showcaseList

export default CarBubbleBusinessPreview
