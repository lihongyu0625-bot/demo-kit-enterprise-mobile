import carPickupData from '../../../mock-data/car-pickup.mock.json'
import {
  CarPickupCustomerServiceCard,
  CarPickupDriverCard,
  CarPickupFloatingControls,
  CarPickupMapStage,
} from '../../../components/car-pickup/CarPickupComponents'

function ComponentSample({ children, tone }) {
  return <div className={`car-pickup-business-sample car-pickup-business-sample--${tone}`}>{children}</div>
}

const showcaseList = [
  {
    name: '等待接驾页 · 地图和距离标注',
    description: '包含地图背景、路线、车辆位置、乘客锚点和距您 1.5 公里状态标注。',
    render: (
      <ComponentSample tone="map">
        <CarPickupMapStage distance={carPickupData.distance} />
      </ComponentSample>
    ),
  },
  {
    name: '等待接驾页 · 悬浮操作',
    description: '复用用车业务悬浮按钮视觉，包含安全中心和定位按钮。',
    render: (
      <ComponentSample tone="floating">
        <CarPickupFloatingControls />
      </ComponentSample>
    ),
  },
  {
    name: '等待接驾页 · 司机卡片',
    description: '展示车牌、车型、司机信息、车辆图和六个接驾操作入口。',
    render: (
      <ComponentSample tone="driver">
        <CarPickupDriverCard
          actions={carPickupData.actions}
          driver={carPickupData.driver}
        />
      </ComponentSample>
    ),
  },
  {
    name: '等待接驾页 · 客服卡片',
    description: '包含客服头像、问题提示和 VIP 客服动作入口。',
    render: (
      <ComponentSample tone="service">
        <CarPickupCustomerServiceCard service={carPickupData.service} />
      </ComponentSample>
    ),
  },
]

function CarPickupBusinessPreview() {
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

CarPickupBusinessPreview.showcaseList = showcaseList

export default CarPickupBusinessPreview
