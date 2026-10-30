import TrainOrderDetailPreviewPage from '../../../pages/TrainOrderDetailPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function TrainOrderDetailCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <TrainOrderDetailPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default TrainOrderDetailCasePreview
