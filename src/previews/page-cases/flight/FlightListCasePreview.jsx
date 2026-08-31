import FlightListPreviewPage from '../../../pages/FlightListPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function FlightListCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <FlightListPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default FlightListCasePreview
