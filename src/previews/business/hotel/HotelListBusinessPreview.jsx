import hotelListData from '../../../mock-data/hotel-list.mock.json'
import {
  HotelListBenefitStrip,
  HotelListCardList,
  HotelListHotelCard,
  HotelListPromoStrip,
  HotelListSortBar,
  HotelListTopBar,
} from '../../../components/hotel-list/HotelListComponents'

const componentShowcaseList = [
  {
    name: '搜索栏',
    description: '展示状态栏、返回、城市切换、日期和地图入口。',
    render: <HotelListTopBar search={hotelListData.search} />,
  },
  {
    name: '排序与快捷筛选',
    description: '展示顶部排序器和横向快捷筛选标签。',
    render: (
      <HotelListSortBar
        quickFilters={hotelListData.quickFilters}
        sortTabs={hotelListData.sortTabs}
      />
    ),
  },
  {
    name: '运营条',
    description: '展示酒店列表页的顶部运营信息条。',
    render: <HotelListPromoStrip promo={hotelListData.promo} />,
  },
  {
    name: '专享权益条',
    description: '展示酒店列表页和酒店详情页共用的专享权益条组件。',
    render: <HotelListBenefitStrip benefits={hotelListData.hotels[0].benefits} />,
  },
  {
    name: '酒店卡片',
    description: '展示单个酒店条目的图片、权益、标签和价格。',
    render: <HotelListHotelCard hotel={hotelListData.hotels[3]} />,
  },
  {
    name: '酒店列表',
    description: '展示完整的酒店卡片列表编排效果。',
    render: <HotelListCardList hotels={hotelListData.hotels.slice(0, 3)} />,
  },
]

function HotelListBusinessPreview() {
  return (
    <section className="catalog-preview">
      <div className="catalog-preview__intro">
        <p className="catalog-preview__eyebrow">业务组件 / 酒店</p>
        <h3 className="catalog-preview__title">酒店列表页组件目录</h3>
        <p className="catalog-preview__summary">
          这里放的是从酒店列表页里拆出来的业务组件，方便后续在酒店搜索和选型链路里持续复用。
        </p>
      </div>

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

export default HotelListBusinessPreview
