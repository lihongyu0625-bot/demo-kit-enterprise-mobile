import PointsExchangeSuccessOverlayPreviewPage from '../../../pages/PointsExchangeSuccessOverlayPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function PointsExchangeSuccessOverlayCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <PointsExchangeSuccessOverlayPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default PointsExchangeSuccessOverlayCasePreview
