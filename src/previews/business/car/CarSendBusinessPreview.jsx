import carSendData from '../../../mock-data/car-send.mock.json'
import {
  CarSendCustomerServiceCard,
  CarSendDriverCard,
  CarSendFloatingControls,
  CarSendMapStage,
  CarSendNoticeBar,
} from '../../../components/car-send/CarSendComponents'

function ComponentSample({ children, tone }) {
  return <div className={`car-send-business-sample car-send-business-sample--${tone}`}>{children}</div>
}

const showcaseList = [
  {
    name: '送驾页 · 地图和距离标注',
    description: '包含地图背景、路线、车辆位置、乘客锚点和送驾状态标注。',
    render: (
      <ComponentSample tone="map">
        <CarSendMapStage distance={carSendData.distance} />
      </ComponentSample>
    ),
  },
  {
    name: '送驾页 · 悬浮操作',
    description: '复用用车业务悬浮按钮视觉，包含安全中心和定位按钮。',
    render: (
      <ComponentSample tone="floating">
        <CarSendFloatingControls />
      </ComponentSample>
    ),
  },
  {
    name: '送驾页 · 通知条',
    description: '展示行程开始后的安全带提醒，包含通知图标和单行提示文案。',
    render: (
      <ComponentSample tone="notice">
        <CarSendNoticeBar notice={carSendData.notice} />
      </ComponentSample>
    ),
  },
  {
    name: '送驾页 · 司机卡片',
    description: '展示车牌、车型、司机信息、车辆图和六个接驾操作入口。',
    render: (
      <ComponentSample tone="driver">
        <CarSendDriverCard
          actions={carSendData.actions}
          driver={carSendData.driver}
        />
      </ComponentSample>
    ),
  },
  {
    name: '送驾页 · 客服卡片',
    description: '包含客服头像、问题提示和 VIP 客服动作入口。',
    render: (
      <ComponentSample tone="service">
        <CarSendCustomerServiceCard service={carSendData.service} />
      </ComponentSample>
    ),
  },
]

function CarSendBusinessPreview() {
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

CarSendBusinessPreview.showcaseList = showcaseList

export default CarSendBusinessPreview
