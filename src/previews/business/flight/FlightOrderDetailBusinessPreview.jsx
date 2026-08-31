import flightOrderDetailData from '../../../mock-data/flight-order-detail.mock.json'
import {
  FlightOrderDetailActionBar,
  FlightOrderDetailBackground,
  FlightOrderDetailInfoCard,
  FlightOrderDetailNotice,
  FlightOrderDetailPackageCard,
  FlightOrderDetailPaymentCard,
  FlightOrderDetailStatusPanel,
  FlightOrderDetailTopNav,
  FlightOrderDetailTravelService,
} from '../../../components/flight-order-detail/FlightOrderDetailComponents'

function ComponentSample({ children, tone }) {
  return (
    <div className={`flight-order-detail-business-sample flight-order-detail-business-sample--${tone}`}>
      {children}
    </div>
  )
}

const showcaseList = [
  {
    name: '机票订单详情页 · 顶部背景',
    description: '单独维护订单详情页顶部蓝色渐变背景，供详情类页面复用。',
    render: (
      <ComponentSample tone="background">
        <FlightOrderDetailBackground />
      </ComponentSample>
    ),
  },
  {
    name: '机票订单详情页 · 顶部导航',
    description: '单独展示返回按钮和订单详情标题。',
    render: (
      <ComponentSample tone="nav">
        <FlightOrderDetailTopNav nav={flightOrderDetailData.nav} />
      </ComponentSample>
    ),
  },
  {
    name: '机票订单详情页 · 出票状态区',
    description: '展示出票状态、反诈提醒和订单操作按钮组。',
    render: (
      <ComponentSample tone="status">
        <FlightOrderDetailStatusPanel status={flightOrderDetailData.status} />
      </ComponentSample>
    ),
  },
  {
    name: '机票订单详情页 · 反诈提醒',
    description: '单独展示详情页提示通知条，可替换图标、文案和跳转入口。',
    render: (
      <ComponentSample tone="status">
        <FlightOrderDetailNotice notice={flightOrderDetailData.status.notice} />
      </ComponentSample>
    ),
  },
  {
    name: '机票订单详情页 · 操作按钮组',
    description: '单独展示联系客服、退票、改签等详情页操作。',
    render: (
      <ComponentSample tone="status">
        <FlightOrderDetailActionBar actions={flightOrderDetailData.status.actions} />
      </ComponentSample>
    ),
  },
  {
    name: '机票订单详情页 · 支付航班卡',
    description: '核心卡片，承接企业支付金额、订单号、航程、航司信息和规则入口。',
    render: (
      <ComponentSample tone="payment">
        <FlightOrderDetailPaymentCard payment={flightOrderDetailData.payment} />
      </ComponentSample>
    ),
  },
  {
    name: '机票订单详情页 · 出行信息',
    description: '信息表单卡支持底部多操作入口。',
    render: (
      <ComponentSample tone="info">
        <FlightOrderDetailInfoCard card={flightOrderDetailData.tripInfo} />
      </ComponentSample>
    ),
  },
  {
    name: '机票订单详情页 · 出行服务',
    description: '单独展示出行尊享服务入口，可作为订单增值服务模块复用。',
    render: (
      <ComponentSample tone="service">
        <FlightOrderDetailTravelService service={flightOrderDetailData.travelService} />
      </ComponentSample>
    ),
  },
  {
    name: '机票订单详情页 · 套餐信息',
    description: '单独展示套餐名称、份数和报销相关占位行。',
    render: (
      <ComponentSample tone="package">
        <FlightOrderDetailPackageCard packageInfo={flightOrderDetailData.packageInfo} />
      </ComponentSample>
    ),
  },
  {
    name: '机票订单详情页 · 报销与审批信息',
    description: '统一展示报销信息、审批信息等标准信息表单卡。',
    render: (
      <ComponentSample tone="info">
        <FlightOrderDetailInfoCard card={flightOrderDetailData.reimbursementInfo} />
        <FlightOrderDetailInfoCard card={flightOrderDetailData.approvalInfo} />
      </ComponentSample>
    ),
  },
]

function FlightOrderDetailBusinessPreview() {
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

FlightOrderDetailBusinessPreview.showcaseList = showcaseList

export default FlightOrderDetailBusinessPreview
