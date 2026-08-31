import CarSendPreviewPage from '../../../pages/CarSendPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function CarSendCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <CarSendPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default CarSendCasePreview
