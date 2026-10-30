import TrainRefundPreviewPage from '../../../pages/TrainRefundPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function TrainRefundCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <TrainRefundPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default TrainRefundCasePreview
