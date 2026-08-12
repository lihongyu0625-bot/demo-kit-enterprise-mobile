import carLocationInputData from '../../../mock-data/car-location-input.mock.json'
import {
  CarLocationFloatingActions,
  CarLocationInputCard,
  CarLocationMapLayer,
  CarLocationPickupMarker,
  CarLocationSafetyGuide,
} from '../../../components/car-location-input/CarLocationInputComponents'

function ComponentSample({ children, tone }) {
  return <div className={`car-location-input-business-sample car-location-input-business-sample--${tone}`}>{children}</div>
}

const showcaseList = [
  {
    name: '起终点输入页 · 地图背景',
    description: '用车地图页的底层地图背景，承接道路、区域和底部遮罩上的浮层内容。',
    render: (
      <ComponentSample tone="map">
        <CarLocationMapLayer />
      </ComponentSample>
    ),
  },
  {
    name: '起终点输入页 · 推荐上车点',
    description: '展示推荐上车点、图文步导缩略图和位置跳转入口。',
    render: (
      <ComponentSample tone="marker">
        <CarLocationPickupMarker pickup={carLocationInputData.pickup} />
      </ComponentSample>
    ),
  },
  {
    name: '起终点输入页 · 安全中心和定位',
    description: '地图页悬浮按钮组，左侧为安全中心，右侧为重新定位。',
    render: (
      <ComponentSample tone="floating">
        <CarLocationFloatingActions />
      </ComponentSample>
    ),
  },
  {
    name: '起终点输入页 · 起终点卡片',
    description: '核心输入卡片，支持现在、预约、接送机、接送站四个场景切换。',
    render: (
      <ComponentSample tone="card">
        <CarLocationInputCard inputCard={carLocationInputData.inputCard} />
      </ComponentSample>
    ),
  },
  {
    name: '起终点输入页 · 安全指南卡',
    description: '底部安全指南内容卡，包含安全文案、插画和查看教程动作。',
    render: (
      <ComponentSample tone="safety">
        <CarLocationSafetyGuide safetyGuide={carLocationInputData.safetyGuide} />
      </ComponentSample>
    ),
  },
]

function CarLocationInputBusinessPreview() {
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

export default CarLocationInputBusinessPreview
