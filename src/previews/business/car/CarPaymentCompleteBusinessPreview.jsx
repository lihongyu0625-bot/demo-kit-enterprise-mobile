import carPaymentCompleteData from '../../../mock-data/car-payment-complete.mock.json'
import {
  CarPaymentCompleteCard,
  CarPaymentRatingCard,
  CarPaymentRewardBenefits,
} from '../../../components/car-payment/CarPaymentCompleteComponents'
import { CarPaymentMapStage } from '../../../components/car-payment/CarPaymentComponents'

function ComponentSample({ children, tone }) {
  return <div className={`car-payment-complete-business-sample car-payment-complete-business-sample--${tone}`}>{children}</div>
}

const showcaseList = [
  {
    name: '支付完成页 · 地图和路线',
    description: '复用待支付页的地图背景、起终点标注和路线图形。',
    render: (
      <ComponentSample tone="map">
        <CarPaymentMapStage route={carPaymentCompleteData.route} />
      </ComponentSample>
    ),
  },
  {
    name: '支付完成页 · 评价卡',
    description: '展示行程完成后的评价入口。',
    render: (
      <ComponentSample tone="rating">
        <CarPaymentRatingCard />
      </ComponentSample>
    ),
  },
  {
    name: '支付完成页 · 会员权益',
    description: '展示会员里程值和本单积分两个权益卡片。',
    render: (
      <ComponentSample tone="rating">
        <CarPaymentRewardBenefits rewards={carPaymentCompleteData.rewards} />
      </ComponentSample>
    ),
  },
  {
    name: '支付完成页 · 支付完成卡',
    description: '组合制度条、费用明细、会员权益和费用明细入口。',
    render: (
      <ComponentSample tone="card">
        <CarPaymentCompleteCard
          payment={carPaymentCompleteData.payment}
          policy={carPaymentCompleteData.policy}
          rewards={carPaymentCompleteData.rewards}
        />
      </ComponentSample>
    ),
  },
]

function CarPaymentCompleteBusinessPreview() {
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

CarPaymentCompleteBusinessPreview.showcaseList = showcaseList

export default CarPaymentCompleteBusinessPreview
