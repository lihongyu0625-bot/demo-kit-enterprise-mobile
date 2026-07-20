import orderDetailData from '../../../mock-data/hotel-order-detail.mock.json'
import {
  HotelOrderDetailBenefitsCard,
  HotelOrderDetailBookingInfoCard,
  HotelOrderDetailHotelCard,
  HotelOrderDetailInvoiceCard,
  HotelOrderDetailNavBar,
  HotelOrderDetailPaymentCard,
  HotelOrderDetailStatusPanel,
  HotelOrderDetailStayInfoCard,
} from '../../../components/hotel-order-detail/HotelOrderDetailComponents'

const showcaseList = [
  {
    name: '订单导航栏',
    description: '展示酒店订单详情页顶部的返回、标题和差旅单分享操作。',
    render: <HotelOrderDetailNavBar nav={orderDetailData.nav} />,
  },
  {
    name: '预订成功状态区',
    description: '展示订单状态结果和修改订单、取消订单两个快捷操作。',
    render: <HotelOrderDetailStatusPanel status={orderDetailData.status} />,
  },
  {
    name: '支付信息卡片',
    description: '展示企业支付金额、订单号、取消规则和订房必读入口。',
    render: <HotelOrderDetailPaymentCard payment={orderDetailData.payment} />,
  },
  {
    name: '酒店信息卡片',
    description: '展示酒店图片、名称、地址以及地图和联系酒店操作。',
    render: <HotelOrderDetailHotelCard hotel={orderDetailData.hotel} />,
  },
  {
    name: '预订信息卡片',
    description: '展示入住人、联系手机、订单号和发送确认单操作。',
    render: <HotelOrderDetailBookingInfoCard bookingInfo={orderDetailData.bookingInfo} />,
  },
  {
    name: '入住信息卡片',
    description: '展示房型摘要、房型信息入口和入离店时间。',
    render: <HotelOrderDetailStayInfoCard stayInfo={orderDetailData.stayInfo} />,
  },
  {
    name: '发票提示卡片',
    description: '展示开票提示信息和开发票按钮。',
    render: <HotelOrderDetailInvoiceCard invoice={orderDetailData.invoice} />,
  },
  {
    name: '本单可享卡片',
    description: '展示企业版积分和专享权益两个权益模块。',
    render: <HotelOrderDetailBenefitsCard benefits={orderDetailData.benefits} />,
  },
]

function HotelOrderDetailBusinessPreview() {
  return (
    <section className="catalog-preview">
      <div className="catalog-preview__intro">
        <p className="catalog-preview__eyebrow">业务组件 / 酒店</p>
        <h3 className="catalog-preview__title">酒店订单详情页组件目录</h3>
        <p className="catalog-preview__summary">
          这里放的是从酒店订单详情页里拆出来的业务组件，方便后续按卡片和信息模块继续维护。
        </p>
      </div>

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

export default HotelOrderDetailBusinessPreview
