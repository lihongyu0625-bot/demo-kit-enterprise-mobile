import CarLocationInputPreviewPage from '../../../pages/CarLocationInputPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function CarLocationInputCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <CarLocationInputPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default CarLocationInputCasePreview
