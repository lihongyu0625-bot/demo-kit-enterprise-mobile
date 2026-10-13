import pageSpec from '../page-specs/points-order-detail.json'
import { PointsOrderDetailPreviewFrame } from '../components/points-order-detail/PointsOrderDetailComponents'

function PointsOrderDetailPreviewPage({ variant = 'member' }) {
  return (
    <section aria-label={pageSpec.pageTitle} className="points-order-detail-preview">
      <PointsOrderDetailPreviewFrame variant={variant} />
    </section>
  )
}

export default PointsOrderDetailPreviewPage
