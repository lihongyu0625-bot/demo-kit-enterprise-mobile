import pageSpec from '../page-specs/points-mall.json'
import mockData from '../mock-data/points-mall.mock.json'
import { PointsMallPreviewFrame } from '../components/points-mall/PointsMallComponents'

function PointsMallPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="points-mall-preview"
    >
      <PointsMallPreviewFrame filters={mockData.filters} points={mockData.points} />
    </section>
  )
}

export default PointsMallPreviewPage
