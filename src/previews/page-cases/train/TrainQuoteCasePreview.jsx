import TrainQuotePreviewPage from '../../../pages/TrainQuotePreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function TrainQuoteCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <TrainQuotePreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default TrainQuoteCasePreview
