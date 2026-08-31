import HotelBookingSuccessPreviewPage from '../../../pages/HotelBookingSuccessPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function HotelBookingSuccessCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <HotelBookingSuccessPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default HotelBookingSuccessCasePreview
