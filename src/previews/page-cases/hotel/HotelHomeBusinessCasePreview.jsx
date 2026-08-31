import HotelHomeBusinessPreviewPage from '../../../pages/HotelHomeBusinessPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function HotelHomeBusinessCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <HotelHomeBusinessPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default HotelHomeBusinessCasePreview
