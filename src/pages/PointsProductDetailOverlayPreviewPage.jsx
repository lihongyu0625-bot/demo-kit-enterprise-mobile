import pageSpec from '../page-specs/points-product-detail-overlay.json'
import { PointsProductDetailOverlayPreviewFrame } from '../components/points-product-detail-overlay/PointsProductDetailOverlayComponents'

function PointsProductDetailOverlayPreviewPage() {
  return (
    <section aria-label={pageSpec.pageTitle} className="points-product-detail-overlay-preview">
      <PointsProductDetailOverlayPreviewFrame />
    </section>
  )
}

export default PointsProductDetailOverlayPreviewPage
