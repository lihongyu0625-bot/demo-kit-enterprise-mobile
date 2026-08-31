import hotelDetailData from '../../../mock-data/hotel-detail.mock.json'
import { HotelBookingButton } from '../../../components/hotel/HotelBookingButton'
import {
  HotelDetailBookableRoomCard,
  HotelDetailFacilitiesCard,
  HotelDetailHero,
  HotelDetailIntroductionCard,
  HotelDetailMultiRateCard,
  HotelDetailNameCard,
  HotelDetailPolicyCard,
  HotelDetailSelector,
} from '../../../components/hotel-detail/HotelDetailComponents'

const componentShowcaseList = [
  {
    name: '酒店预订按钮',
    description: '展示酒店详情页和房型详情页共用的酒店预订按钮组件。',
    render: (
      <div style={{ display: 'flex', gap: '16px', padding: '12px' }}>
        <HotelBookingButton
          hint="企业支付"
          label="预订"
        />
        <HotelBookingButton
          hint="企业+个人"
          label="预订"
          variant="enterprise-personal"
        />
      </div>
    ),
  },
  {
    name: '头图与导航',
    description: '展示酒店详情页头图、状态栏、返回入口和收藏操作。',
    render: <HotelDetailHero hero={hotelDetailData.hero} />,
  },
  {
    name: '酒店名称卡',
    description: '展示酒店标题、评分、亮点和地址电话信息。',
    render: <HotelDetailNameCard hotel={hotelDetailData.hotel} />,
  },
  {
    name: '入住选择器',
    description: '展示入住离店日期、住客摘要和快捷筛选标签。',
    render: <HotelDetailSelector selector={hotelDetailData.selector} />,
  },
  {
    name: '多渠道房型卡（展开）',
    description: '展示房型概览和多个价格方案列表的展开状态。',
    render: (
      <HotelDetailMultiRateCard
        expanded
        room={hotelDetailData.rooms[0]}
      />
    ),
  },
  {
    name: '多渠道房型卡（收起）',
    description: '展示多渠道房型卡只保留摘要信息的收起状态。',
    render: (
      <HotelDetailMultiRateCard
        expanded={false}
        room={hotelDetailData.rooms[0]}
      />
    ),
  },
  {
    name: '单渠道房型卡',
    description: '展示可直接预订的房型信息、权益和价格按钮。',
    render: <HotelDetailBookableRoomCard room={hotelDetailData.rooms[3]} />,
  },
  {
    name: '服务设施',
    description: '展示酒店详情页里的服务设施图标列表。',
    render: <HotelDetailFacilitiesCard facilities={hotelDetailData.facilities} />,
  },
  {
    name: '酒店简介',
    description: '展示酒店简介摘要和展开入口。',
    render: <HotelDetailIntroductionCard introduction={hotelDetailData.introduction} />,
  },
  {
    name: '酒店政策',
    description: '展示入离时间和可接待人群等政策信息。',
    render: <HotelDetailPolicyCard policies={hotelDetailData.policies} />,
  },
]

function HotelDetailBusinessPreview() {
  return (
    <section className="catalog-preview">
      <div className="catalog-preview__grid">
        {componentShowcaseList.map((item) => (
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

HotelDetailBusinessPreview.showcaseList = componentShowcaseList

export default HotelDetailBusinessPreview
