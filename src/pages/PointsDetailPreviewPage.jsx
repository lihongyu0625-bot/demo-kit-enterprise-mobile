import pageSpec from '../page-specs/points-detail.json'
import { PointsDetailPreviewFrame } from '../components/points-detail/PointsDetailComponents'

function PointsDetailPreviewPage({ variant = 'income' }) {
  return (
    <section aria-label={pageSpec.pageTitle} className="points-detail-preview">
      <PointsDetailPreviewFrame variant={variant} />
    </section>
  )
}

export default PointsDetailPreviewPage
