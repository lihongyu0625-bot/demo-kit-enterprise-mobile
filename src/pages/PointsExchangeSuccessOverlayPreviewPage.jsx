import pageSpec from '../page-specs/points-exchange-success-overlay.json'
import { PointsExchangeSuccessOverlayPreviewFrame } from '../components/points-exchange-success-overlay/PointsExchangeSuccessOverlayComponents'

function PointsExchangeSuccessOverlayPreviewPage() {
  return (
    <section aria-label={pageSpec.pageTitle} className="points-exchange-success-overlay-preview">
      <PointsExchangeSuccessOverlayPreviewFrame />
    </section>
  )
}

export default PointsExchangeSuccessOverlayPreviewPage
