import carWaitingData from '../../../mock-data/car-waiting.mock.json'
import {
  CarWaitingAddMoreCard,
  CarWaitingBenefitCard,
  CarWaitingStatusHero,
  CarWaitingTopChrome,
} from '../../../components/car-waiting/CarWaitingComponents'

function ComponentSample({ children, tone }) {
  return <div className={`car-waiting-business-sample car-waiting-business-sample--${tone}`}>{children}</div>
}

const showcaseList = [
  {
    name: '等待应答页 · 顶部状态区',
    description: '包含返回、起终点摘要、寻找司机状态、取消叫车和呼叫中提示。',
    render: (
      <ComponentSample tone="hero">
        <CarWaitingTopChrome route={carWaitingData.route} />
        <CarWaitingStatusHero status={carWaitingData.status} />
      </ComponentSample>
    ),
  },
  {
    name: '等待应答页 · 加速权益卡',
    description: 'V6 加速权益入口，包含快速应答和优惠坐特快两个权益动作。',
    render: (
      <ComponentSample tone="benefit">
        <CarWaitingBenefitCard benefits={carWaitingData.benefits} />
      </ComponentSample>
    ),
  },
  {
    name: '等待应答页 · 追加更快车型',
    description: '复用冒泡页车型预估价格列表，并补充卡内确认追加底部操作。',
    render: (
      <ComponentSample tone="add">
        <CarWaitingAddMoreCard addMore={carWaitingData.addMore} />
      </ComponentSample>
    ),
  },
]

function CarWaitingBusinessPreview() {
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

CarWaitingBusinessPreview.showcaseList = showcaseList

export default CarWaitingBusinessPreview
