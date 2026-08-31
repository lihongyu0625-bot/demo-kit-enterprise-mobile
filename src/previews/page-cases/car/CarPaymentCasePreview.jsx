import CarPaymentPreviewPage from '../../../pages/CarPaymentPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function CarPaymentCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <CarPaymentPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default CarPaymentCasePreview
