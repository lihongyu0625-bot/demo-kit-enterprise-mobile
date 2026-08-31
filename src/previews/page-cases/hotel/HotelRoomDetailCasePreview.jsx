import HotelRoomDetailPreviewPage from '../../../pages/HotelRoomDetailPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function HotelRoomDetailCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <HotelRoomDetailPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default HotelRoomDetailCasePreview
