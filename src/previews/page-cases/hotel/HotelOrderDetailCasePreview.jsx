import HotelOrderDetailPreviewPage from '../../../pages/HotelOrderDetailPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function HotelOrderDetailCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <HotelOrderDetailPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default HotelOrderDetailCasePreview
