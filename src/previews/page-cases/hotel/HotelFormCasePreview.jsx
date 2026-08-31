import HotelFormPreviewPage from '../../../pages/HotelFormPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function HotelFormCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <HotelFormPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default HotelFormCasePreview
