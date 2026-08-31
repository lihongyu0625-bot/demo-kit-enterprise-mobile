import CarPaymentCompletePreviewPage from '../../../pages/CarPaymentCompletePreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function CarPaymentCompleteCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <CarPaymentCompletePreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default CarPaymentCompleteCasePreview
