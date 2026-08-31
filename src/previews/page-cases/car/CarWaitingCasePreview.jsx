import CarWaitingPreviewPage from '../../../pages/CarWaitingPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function CarWaitingCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <CarWaitingPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default CarWaitingCasePreview
