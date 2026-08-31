import PointsMallPreviewPage from '../../../pages/PointsMallPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function PointsMallCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <PointsMallPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default PointsMallCasePreview
