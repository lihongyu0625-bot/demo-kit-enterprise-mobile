import pageSpec from '../page-specs/my-coupons.json'
import { MyCouponsPreviewFrame } from '../components/my-coupons/MyCouponsComponents'

function MyCouponsPreviewPage({ variant = 'default' }) {
  return (
    <section aria-label={pageSpec.pageTitle} className="my-coupons-preview">
      <MyCouponsPreviewFrame variant={variant} />
    </section>
  )
}

export default MyCouponsPreviewPage
