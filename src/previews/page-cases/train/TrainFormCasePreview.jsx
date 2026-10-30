import TrainFormPreviewPage from '../../../pages/TrainFormPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function TrainFormCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <TrainFormPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default TrainFormCasePreview
