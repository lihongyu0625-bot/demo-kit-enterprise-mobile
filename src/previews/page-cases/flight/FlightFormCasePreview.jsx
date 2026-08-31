import FlightFormPreviewPage from '../../../pages/FlightFormPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function FlightFormCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <FlightFormPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default FlightFormCasePreview
