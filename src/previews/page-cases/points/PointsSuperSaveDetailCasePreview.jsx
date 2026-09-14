import PointsSuperSaveDetailPreviewPage from '../../../pages/PointsSuperSaveDetailPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function PointsSuperSaveDetailCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <PointsSuperSaveDetailPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default PointsSuperSaveDetailCasePreview
