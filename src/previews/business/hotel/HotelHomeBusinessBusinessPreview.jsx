import homeBusinessData from '../../../mock-data/hotel-home-business.mock.json'
import {
  HotelHomeBusinessApplicationCard,
  HotelHomeBusinessBottomNav,
  HotelHomeBusinessBottomWatermark,
  HotelHomeBusinessGuaranteeCard,
  HotelHomeBusinessHeaderHero,
  HotelHomeBusinessHeroIntro,
} from '../../../components/hotel-home-business/HotelHomeBusinessComponents'

const showcaseList = [
  {
    name: '首页头部区域',
    description: '展示背景头图、顶部导航、标题和因公因私切换页签。',
    render: (
      <div className="hotel-home-business-preview">
        <div className="hotel-home-business-shell hotel-home-business-shell--hero-only">
          <HotelHomeBusinessHeaderHero header={homeBusinessData.header} nav={homeBusinessData.nav} />
          <div className="hotel-home-business-main hotel-home-business-main--hero-only">
            <div className="hotel-home-business-main__group">
              <HotelHomeBusinessHeroIntro header={homeBusinessData.header} />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: '填写卡片',
    description: '展示申请单、位置、日期、入住人和筛选条件的核心表单卡片。',
    render: <HotelHomeBusinessApplicationCard application={homeBusinessData.application} />,
  },
  {
    name: '省心住保障卡',
    description: '展示省心住保障权益模块。',
    render: <HotelHomeBusinessGuaranteeCard />,
  },
  {
    name: '底部水印',
    description: '展示酒店首页底部的省心住权益水印。',
    render: (
      <div style={{ padding: '16px 0' }}>
        <HotelHomeBusinessBottomWatermark />
      </div>
    ),
  },
  {
    name: '底部导航',
    description: '展示我的订单、品牌权益和联系客服入口。',
    render: <HotelHomeBusinessBottomNav items={homeBusinessData.footerNav} />,
  },
]

function HotelHomeBusinessBusinessPreview() {
  return (
    <section className="catalog-preview">
      <div className="catalog-preview__intro">
        <p className="catalog-preview__eyebrow">业务组件 / 酒店</p>
        <h3 className="catalog-preview__title">酒店首页-因公组件目录</h3>
        <p className="catalog-preview__summary">
          这里放的是酒店首页-因公里拆出来的业务组件，方便后续继续维护头部、填写卡片和底部权益模块。
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

export default HotelHomeBusinessBusinessPreview
