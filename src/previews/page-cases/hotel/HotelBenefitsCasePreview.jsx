import HotelBenefitsDetailPreviewPage from '../../../pages/HotelBenefitsDetailPreviewPage'
import HotelBenefitsPreviewPage from '../../../pages/HotelBenefitsPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

const pageStates = [
  {
    label: '状态一',
    title: '品牌权益主页',
    description: '精选品牌权益四张品牌卡（华住/洲际/如家/东呈）+ 平台联登权益两张卡 + 吸底「绑定管理/一键预订」。',
  },
  {
    label: '状态二',
    title: '品牌权益详情',
    description: '东呈酒店集团介绍卡 + 会员权益五档表格（企业会员至呈旅黑金）+ 入住礼遇两列网格。',
  },
]

function HotelBenefitsCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__stack">
        {[
          { key: 'main', Page: HotelBenefitsPreviewPage },
          { key: 'detail', Page: HotelBenefitsDetailPreviewPage },
        ].map(({ key, Page }, index) => (
          <article className="case-preview__state-block" key={key}>
            <div className="case-preview__state-meta">
              <p
                className={`case-preview__state-label${
                  index > 0 ? ' case-preview__state-label--accent' : ''
                }`}
              >
                {pageStates[index].label}
              </p>
              <p className="case-preview__state-title">{pageStates[index].title}</p>
              <p className="case-preview__state-description">
                {pageStates[index].description}
              </p>
            </div>
            <div className="case-preview__surface">
              <PageCaseViewport>
                <Page />
              </PageCaseViewport>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HotelBenefitsCasePreview
