import PointsProductDetailOverlayPreviewPage from '../../../pages/PointsProductDetailOverlayPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function PointsProductDetailOverlayCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <PointsProductDetailOverlayPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default PointsProductDetailOverlayCasePreview
