import pageSpec from '../page-specs/points-exchange-success-overlay.json'
import { PointsExchangeSuccessOverlayPreviewFrame } from '../components/points-exchange-success-overlay/PointsExchangeSuccessOverlayComponents'

function PointsExchangeSuccessOverlayPreviewPage({ variant = 'default' }) {
  return (
    <section aria-label={pageSpec.pageTitle} className="points-exchange-success-overlay-preview">
      <PointsExchangeSuccessOverlayPreviewFrame variant={variant} />
    </section>
  )
}

export default PointsExchangeSuccessOverlayPreviewPage
