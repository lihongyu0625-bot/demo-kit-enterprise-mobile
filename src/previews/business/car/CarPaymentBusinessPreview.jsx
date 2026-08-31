import carPaymentData from '../../../mock-data/car-payment.mock.json'
import {
  CarPaymentActions,
  CarPaymentCard,
  CarPaymentFloatingSafety,
  CarPaymentMapStage,
  CarPaymentOrderDetails,
  CarPaymentPolicyBar,
  CarPaymentRouteOverlay,
  CarPaymentSubmitBar,
  CarPaymentSummary,
} from '../../../components/car-payment/CarPaymentComponents'

function ComponentSample({ children, tone }) {
  return <div className={`car-payment-business-sample car-payment-business-sample--${tone}`}>{children}</div>
}

const showcaseList = [
  {
    name: '待支付页 · 地图和路线',
    description: '包含地图背景、起终点标注和路线状态。',
    render: (
      <ComponentSample tone="map">
        <CarPaymentMapStage route={carPaymentData.route} />
      </ComponentSample>
    ),
  },
  {
    name: '待支付页 · 路线标注',
    description: '展示待支付页的起点、终点和路线图形。',
    render: (
      <ComponentSample tone="route">
        <CarPaymentRouteOverlay route={carPaymentData.route} />
      </ComponentSample>
    ),
  },
  {
    name: '待支付页 · 安全中心',
    description: '复用用车业务安全中心悬浮按钮。',
    render: (
      <ComponentSample tone="safety">
        <CarPaymentFloatingSafety />
      </ComponentSample>
    ),
  },
  {
    name: '待支付页 · 制度条',
    description: '展示企业办公区制度入口和右侧箭头。',
    render: (
      <ComponentSample tone="policy">
        <CarPaymentPolicyBar label={carPaymentData.policy.label} />
      </ComponentSample>
    ),
  },
  {
    name: '待支付页 · 费用信息',
    description: '包含实际花费、订单明细和费用操作入口。',
    render: (
      <ComponentSample tone="payment">
        <CarPaymentSummary payment={carPaymentData.payment} />
        <CarPaymentOrderDetails payment={carPaymentData.payment} />
        <CarPaymentActions payment={carPaymentData.payment} />
      </ComponentSample>
    ),
  },
  {
    name: '待支付页 · 支付确认',
    description: '包含企业支付金额、确认按钮和自动支付提示。',
    render: (
      <ComponentSample tone="submit">
        <CarPaymentSubmitBar payment={carPaymentData.payment} />
        <p className="car-payment-card__hint">{carPaymentData.payment.autoPayHint}</p>
      </ComponentSample>
    ),
  },
  {
    name: '待支付页 · 支付卡',
    description: '组合制度条、费用明细、支付方式和确认操作。',
    render: (
      <ComponentSample tone="payment">
        <CarPaymentCard
          payment={carPaymentData.payment}
          policy={carPaymentData.policy}
        />
      </ComponentSample>
    ),
  },
]

function CarPaymentBusinessPreview() {
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

CarPaymentBusinessPreview.showcaseList = showcaseList

export default CarPaymentBusinessPreview
