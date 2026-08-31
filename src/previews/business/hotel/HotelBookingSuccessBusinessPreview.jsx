import bookingSuccessData from '../../../mock-data/hotel-booking-success.mock.json'
import {
  HotelBookingSuccessAirportTransferCard,
  HotelBookingSuccessFlightBenefitCard,
  HotelBookingSuccessOrderCard,
  HotelBookingSuccessStatus,
} from '../../../components/hotel-booking-success/HotelBookingSuccessComponents'

const showcaseList = [
  {
    name: '下单状态区',
    description: '展示等待酒店确认的状态图标、标题和说明文案。',
    render: <HotelBookingSuccessStatus status={bookingSuccessData.status} />,
  },
  {
    name: '订单卡片',
    description: '展示酒店名称、入住信息、积分入口和返回首页、订单详情操作。',
    render: <HotelBookingSuccessOrderCard order={bookingSuccessData.order} />,
  },
  {
    name: '机票联订福利卡片',
    description: '展示联订福利头图、差旅机票行程信息和订机票按钮。',
    render: <HotelBookingSuccessFlightBenefitCard flightBenefit={bookingSuccessData.flightBenefit} />,
  },
  {
    name: '接送机卡片',
    description: '展示接送机用车权益说明和快捷预定入口。',
    render: <HotelBookingSuccessAirportTransferCard airportTransfer={bookingSuccessData.airportTransfer} />,
  },
]

function HotelBookingSuccessBusinessPreview() {
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

HotelBookingSuccessBusinessPreview.showcaseList = showcaseList

export default HotelBookingSuccessBusinessPreview
