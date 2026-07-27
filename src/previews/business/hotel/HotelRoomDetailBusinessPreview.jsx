import roomDetailData from '../../../mock-data/hotel-room-detail.mock.json'
import {
  HotelRoomDetailBenefitCard,
  HotelRoomDetailFacilityCard,
  HotelRoomDetailFeeCard,
  HotelRoomDetailHeroCard,
  HotelRoomDetailPolicyCard,
  HotelRoomDetailPromoCard,
  HotelRoomDetailProviderCard,
  HotelRoomDetailSubmitBar,
} from '../../../components/hotel-room-detail/HotelRoomDetailComponents'

const showcaseList = [
  {
    name: '房型头图',
    description: '展示房间图片、关闭按钮和图片计数。',
    render: <HotelRoomDetailHeroCard hero={roomDetailData.hero} />,
  },
  {
    name: '房间设施介绍',
    description: '展示房间设施标签和房间基础信息。',
    render: <HotelRoomDetailFacilityCard facilityIntro={roomDetailData.facilityIntro} />,
  },
  {
    name: '专享权益',
    description: '展示早餐、延迟退房和住就送券包。',
    render: <HotelRoomDetailBenefitCard benefits={roomDetailData.benefits} />,
  },
  {
    name: '预订政策',
    description: '展示取消规则、确认方式和入住时间。',
    render: <HotelRoomDetailPolicyCard policy={roomDetailData.policy} />,
  },
  {
    name: '服务方',
    description: '展示酒店直营信息和服务承诺。',
    render: <HotelRoomDetailProviderCard provider={roomDetailData.provider} />,
  },
  {
    name: '优惠及权益',
    description: '展示企业立减、返券和早餐权益。',
    render: <HotelRoomDetailPromoCard promotions={roomDetailData.promotions} />,
  },
  {
    name: '费用明细',
    description: '展示房费、优惠和到店支付总额。',
    render: <HotelRoomDetailFeeCard feeDetail={roomDetailData.feeDetail} />,
  },
  {
    name: '吸底提单操作',
    description: '展示支付金额和立即预订按钮。',
    render: <HotelRoomDetailSubmitBar submitBar={roomDetailData.submitBar} />,
  },
]

function HotelRoomDetailBusinessPreview() {
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

export default HotelRoomDetailBusinessPreview
