import { PointsBenefitCenterFrame } from '../components/points-benefit-center/PointsBenefitCenterComponents'
import mockData from '../mock-data/points-benefit-center.mock.json'
import pageSpec from '../page-specs/points-benefit-center.json'

function PointsBenefitCenterPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="points-benefit-center-preview"
    >
      <PointsBenefitCenterFrame data={mockData} />
    </section>
  )
}

export default PointsBenefitCenterPreviewPage
