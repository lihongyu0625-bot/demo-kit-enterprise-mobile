import CarHomeDefaultPreviewPage from '../../../pages/CarHomeDefaultPreviewPage'
import CarHomeFullPreviewPage from '../../../pages/CarHomeFullPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function CarHomeDefaultCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__stack">
        <article className="case-preview__state-block">
          <div className="case-preview__state-meta">
            <p className="case-preview__state-label">状态一</p>
            <p className="case-preview__state-title">默认态</p>
            <p className="case-preview__state-description">展示首页基础首屏编排，包含头图区、制度卡片、金刚位和运营内容。</p>
          </div>
          <div className="case-preview__surface">
            <PageCaseViewport>
              <CarHomeDefaultPreviewPage />
            </PageCaseViewport>
          </div>
        </article>

        <article className="case-preview__state-block">
          <div className="case-preview__state-meta">
            <p className="case-preview__state-label case-preview__state-label--accent">状态二</p>
            <p className="case-preview__state-title">全态</p>
            <p className="case-preview__state-description">展示首页信息更完整的状态，补充申请单、行程、待支付提醒和营销卡片。</p>
          </div>
          <div className="case-preview__surface">
            <PageCaseViewport>
              <CarHomeFullPreviewPage />
            </PageCaseViewport>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CarHomeDefaultCasePreview
