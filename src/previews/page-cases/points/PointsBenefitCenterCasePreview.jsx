import PointsBenefitCenterPreviewPage from '../../../pages/PointsBenefitCenterPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function PointsBenefitCenterCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <PointsBenefitCenterPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default PointsBenefitCenterCasePreview
