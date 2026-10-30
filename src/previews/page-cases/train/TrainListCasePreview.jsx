import TrainListPreviewPage from '../../../pages/TrainListPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function TrainListCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <TrainListPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default TrainListCasePreview
