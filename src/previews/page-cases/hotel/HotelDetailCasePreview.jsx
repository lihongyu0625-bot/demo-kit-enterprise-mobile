import HotelDetailPreviewPage from '../../../pages/HotelDetailPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function HotelDetailCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <HotelDetailPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default HotelDetailCasePreview
