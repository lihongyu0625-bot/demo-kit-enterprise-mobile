import pageSpec from '../page-specs/points-product-detail-overlay.json'
import { PointsProductDetailOverlayPreviewFrame } from '../components/points-product-detail-overlay/PointsProductDetailOverlayComponents'

function PointsProductDetailOverlayPreviewPage({ variant = 'default' }) {
  return (
    <section aria-label={pageSpec.pageTitle} className="points-product-detail-overlay-preview">
      <PointsProductDetailOverlayPreviewFrame variant={variant} />
    </section>
  )
}

export default PointsProductDetailOverlayPreviewPage
