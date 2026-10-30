import TrainHomePreviewPage from '../../../pages/TrainHomePreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function TrainHomeCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <TrainHomePreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default TrainHomeCasePreview
