import FlightQuotePreviewPage from '../../../pages/FlightQuotePreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function FlightQuoteCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <FlightQuotePreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default FlightQuoteCasePreview
