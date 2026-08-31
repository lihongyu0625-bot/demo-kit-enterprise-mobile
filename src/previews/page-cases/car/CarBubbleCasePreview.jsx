import CarBubblePreviewPage from '../../../pages/CarBubblePreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function CarBubbleCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <CarBubblePreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default CarBubbleCasePreview
