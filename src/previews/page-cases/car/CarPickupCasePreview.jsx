import CarPickupPreviewPage from '../../../pages/CarPickupPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function CarPickupCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <CarPickupPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default CarPickupCasePreview
