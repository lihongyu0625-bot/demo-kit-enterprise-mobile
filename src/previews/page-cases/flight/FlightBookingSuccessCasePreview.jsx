import FlightBookingSuccessPreviewPage from '../../../pages/FlightBookingSuccessPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function FlightBookingSuccessCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <FlightBookingSuccessPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default FlightBookingSuccessCasePreview
