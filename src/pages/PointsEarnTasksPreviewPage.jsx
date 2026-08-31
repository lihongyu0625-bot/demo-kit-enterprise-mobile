import pageSpec from '../page-specs/points-earn-tasks.json'
import { PointsEarnTasksPreviewFrame } from '../components/points-earn-tasks/PointsEarnTasksComponents'

function PointsEarnTasksPreviewPage() {
  return (
    <section aria-label={pageSpec.pageTitle} className="points-earn-tasks-preview">
      <PointsEarnTasksPreviewFrame />
    </section>
  )
}

export default PointsEarnTasksPreviewPage
