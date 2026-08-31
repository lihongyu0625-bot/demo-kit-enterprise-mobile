import PointsEarnTasksPreviewPage from '../../../pages/PointsEarnTasksPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function PointsEarnTasksCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <PointsEarnTasksPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default PointsEarnTasksCasePreview
