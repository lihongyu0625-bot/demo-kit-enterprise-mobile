import detailData from '../../../mock-data/hotel-benefits-detail.mock.json'
import {
  HotelBenefitsDetailHospitalityTable,
  HotelBenefitsDetailNavBar,
  HotelBenefitsDetailTable,
} from '../../../components/hotel-benefits/HotelBenefitsComponents'

const showcaseList = [
  {
    name: '权益详情导航栏',
    description: '展示权益详情页顶部的白色状态栏、返回按钮和居中的集团名称标题。',
    render: (
      <div
        className="catalog-surface catalog-surface--benefits-hero"
        style={{ height: 92 }}
      >
        <HotelBenefitsDetailNavBar title={detailData.navTitle} />
      </div>
    ),
  },
  {
    name: '集团介绍卡',
    description: '展示深色渐变玻璃底的集团介绍两段文案。',
    render: (
      <div className="catalog-surface catalog-surface--benefits-light" style={{ padding: 12 }}>
        <section className="hotel-benefits-detail__group-intro">
          {detailData.groupIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </div>
    ),
  },
  {
    name: '会员权益表格',
    description: '展示企业会员到呈旅黑金五个档位的价格、早餐、预订保留等权益矩阵。',
    render: (
      <div className="catalog-surface catalog-surface--benefits-light" style={{ padding: 12 }}>
        <HotelBenefitsDetailTable
          benefitRows={detailData.benefitRows}
          tiers={detailData.tiers}
        />
      </div>
    ),
  },
  {
    name: '入住礼遇表格',
    description: '展示入住礼遇两列网格，含跨列标题行。',
    render: (
      <div className="catalog-surface catalog-surface--benefits-light" style={{ padding: 12 }}>
        <HotelBenefitsDetailHospitalityTable
          hospitalityRows={detailData.hospitalityRows}
        />
      </div>
    ),
  },
]

function HotelBenefitsDetailBusinessPreview() {
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

HotelBenefitsDetailBusinessPreview.showcaseList = showcaseList

export default HotelBenefitsDetailBusinessPreview
