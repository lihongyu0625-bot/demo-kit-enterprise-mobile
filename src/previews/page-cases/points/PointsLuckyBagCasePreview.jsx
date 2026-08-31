import PointsLuckyBagPreviewPage from '../../../pages/PointsLuckyBagPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function PointsLuckyBagCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <PointsLuckyBagPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default PointsLuckyBagCasePreview
