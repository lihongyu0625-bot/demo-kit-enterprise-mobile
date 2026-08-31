import FlightHomePreviewPage from '../../../pages/FlightHomePreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function FlightHomeCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <FlightHomePreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default FlightHomeCasePreview
