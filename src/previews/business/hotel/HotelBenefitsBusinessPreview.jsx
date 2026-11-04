import benefitsData from '../../../mock-data/hotel-benefits.mock.json'
import {
  HotelBenefitsBrandCard,
  HotelBenefitsFooterActions,
  HotelBenefitsNavBar,
  HotelBenefitsPlatformCard,
  HotelBenefitsSectionTitle,
} from '../../../components/hotel-benefits/HotelBenefitsComponents'

/* 深色衬底：品牌权益页为 #070a1f 暗底，组件自带 351px 卡宽 */
function DarkSlot({ children, height = 'auto' }) {
  return (
    <div
      className="catalog-surface catalog-surface--benefits-dark"
      style={{ height }}
    >
      {children}
    </div>
  )
}

const brandSection = benefitsData.sections[0]
const platformSection = benefitsData.sections[1]

const showcaseList = [
  {
    name: '品牌权益导航栏',
    description: '展示品牌权益页顶部的白色状态栏、返回按钮和居中标题。',
    render: (
      <DarkSlot height={92}>
        <HotelBenefitsNavBar title={benefitsData.navTitle} />
      </DarkSlot>
    ),
  },
  {
    name: '权益栏目标题',
    description: '展示精选品牌权益、平台联登权益两组栏目的图标加标题组合。',
    render: (
      <DarkSlot>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '12px' }}>
          <HotelBenefitsSectionTitle
            icon={brandSection.icon}
            title={brandSection.title}
          />
          <HotelBenefitsSectionTitle
            icon={platformSection.icon}
            title={platformSection.title}
          />
        </div>
      </DarkSlot>
    ),
  },
  {
    name: '品牌权益卡',
    description: '展示华住、洲际、如家、东呈四张品牌卡，含权益图标行与玻璃渐变底。',
    render: (
      <DarkSlot>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '12px' }}>
          {brandSection.cards.map((card) => (
            <HotelBenefitsBrandCard card={card} key={card.id} />
          ))}
        </div>
      </DarkSlot>
    ),
  },
  {
    name: '平台联登卡',
    description: '展示携程、美团两张联登权益卡，含右下角绑定按钮。',
    render: (
      <DarkSlot>
        <div style={{ display: 'flex', gap: 8, padding: '12px' }}>
          {platformSection.cards.map((card) => (
            <HotelBenefitsPlatformCard card={card} key={card.id} />
          ))}
        </div>
      </DarkSlot>
    ),
  },
  {
    name: '吸底操作区',
    description: '展示绑定管理和一键预订双按钮暗色吸底操作区。',
    render: (
      <DarkSlot>
        <div style={{ position: 'relative', height: 64 }}>
          <HotelBenefitsFooterActions buttons={benefitsData.footerButtons} />
        </div>
      </DarkSlot>
    ),
  },
]

function HotelBenefitsBusinessPreview() {
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

HotelBenefitsBusinessPreview.showcaseList = showcaseList

export default HotelBenefitsBusinessPreview
