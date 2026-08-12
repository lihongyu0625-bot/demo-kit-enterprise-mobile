import flightFormData from '../../../mock-data/flight-form.mock.json'
import {
  FlightFormAgreementBar,
  FlightFormBackground,
  FlightFormFlightCard,
  FlightFormInfoCard,
  FlightFormNotice,
  FlightFormPassengerCard,
  FlightFormSubmitBar,
  FlightFormTopNav,
  FlightFormTravelService,
} from '../../../components/flight-form/FlightFormComponents'

function ComponentSample({ children, tone }) {
  return (
    <div className={`flight-form-business-sample flight-form-business-sample--${tone}`}>
      {children}
    </div>
  )
}

const showcaseList = [
  {
    name: '机票填单页 · 顶部背景',
    description: '单独维护订单填写页顶部蓝色渐变背景，供页面头部复用。',
    render: (
      <ComponentSample tone="background">
        <FlightFormBackground />
      </ComponentSample>
    ),
  },
  {
    name: '机票填单页 · 顶部导航',
    description: '单独展示返回按钮和订单填写标题。',
    render: (
      <ComponentSample tone="nav">
        <FlightFormTopNav nav={flightFormData.nav} />
      </ComponentSample>
    ),
  },
  {
    name: '机票填单页 · 温馨提示',
    description: '单独展示页面顶部通知条，可替换图标、文案和跳转入口。',
    render: (
      <ComponentSample tone="notice">
        <FlightFormNotice notice={flightFormData.notice} />
      </ComponentSample>
    ),
  },
  {
    name: '机票填单页 · 机票费用信息卡',
    description: '单独展示航线、出行时间、票价组成和规则入口。',
    render: (
      <ComponentSample tone="flight">
        <FlightFormFlightCard flight={flightFormData.flight} />
      </ComponentSample>
    ),
  },
  {
    name: '机票填单页 · 乘机人信息',
    description: '单独展示乘机人、联系人、邮箱和选择乘机人入口。',
    render: (
      <ComponentSample tone="passenger">
        <FlightFormPassengerCard passenger={flightFormData.passenger} />
      </ComponentSample>
    ),
  },
  {
    name: '机票填单页 · 出行服务',
    description: '单独展示航意保障和延误、退改类服务配置。',
    render: (
      <ComponentSample tone="service">
        <FlightFormTravelService service={flightFormData.travelService} />
      </ComponentSample>
    ),
  },
  {
    name: '机票填单页 · 表单信息卡',
    description: '统一承接审批信息、差旅备注、支付报销等信息型表单卡。',
    render: (
      <ComponentSample tone="form">
        {flightFormData.formCards.map((card) => (
          <FlightFormInfoCard
            card={card}
            key={card.title}
          />
        ))}
      </ComponentSample>
    ),
  },
  {
    name: '机票填单页 · 阅读条款',
    description: '单独维护吸底提交前的协议确认条。',
    render: (
      <ComponentSample tone="agreement">
        <FlightFormAgreementBar agreement={flightFormData.agreement} />
      </ComponentSample>
    ),
  },
  {
    name: '机票填单页 · 底部提交栏',
    description: '单独维护企业支付金额、明细入口和提交订单按钮。',
    render: (
      <ComponentSample tone="submit">
        <FlightFormSubmitBar submit={flightFormData.submit} />
      </ComponentSample>
    ),
  },
]

function FlightFormBusinessPreview() {
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

export default FlightFormBusinessPreview
