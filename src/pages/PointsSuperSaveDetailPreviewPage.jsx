import pageSpec from '../page-specs/points-super-save-detail.json'
import mockData from '../mock-data/points-super-save-detail.mock.json'
import { PointsSuperSaveDetailFrame } from '../components/points-super-save-detail/PointsSuperSaveDetailComponents'

function PointsSuperSaveDetailPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="points-super-save-detail-preview"
    >
      <PointsSuperSaveDetailFrame data={mockData} />
    </section>
  )
}

export default PointsSuperSaveDetailPreviewPage
