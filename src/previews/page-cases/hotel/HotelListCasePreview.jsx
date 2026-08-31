import HotelListPreviewPage from '../../../pages/HotelListPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function HotelListCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <HotelListPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default HotelListCasePreview
