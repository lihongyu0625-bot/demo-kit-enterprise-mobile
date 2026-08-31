import bookingSuccessData from '../../../mock-data/flight-booking-success.mock.json'
import {
  OrderSuccessOrderCard,
  OrderSuccessStatus,
  OrderSuccessTips,
} from '../../../components/hotel-booking-success/HotelBookingSuccessComponents'

const showcaseList = [
  {
    name: '下单成功页 · 状态区',
    description: '酒店和机票下单成功页共用的状态模块，机票场景展示等待出票文案。',
    render: <OrderSuccessStatus status={bookingSuccessData.status} />,
  },
  {
    name: '下单成功页 · 机票订单卡片',
    description: '复用下单成功页订单卡片能力，支持行程标签、积分入口和三按钮操作区。',
    render: <OrderSuccessOrderCard order={bookingSuccessData.order} variant="flight" />,
  },
  {
    name: '下单成功页 · 温馨提示',
    description: '成功页通用提示区，机票场景承接出票或购票规则说明。',
    render: <OrderSuccessTips tips={bookingSuccessData.tips} />,
  },
]

function FlightBookingSuccessBusinessPreview() {
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

FlightBookingSuccessBusinessPreview.showcaseList = showcaseList

export default FlightBookingSuccessBusinessPreview
