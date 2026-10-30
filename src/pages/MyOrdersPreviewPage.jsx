import pageSpec from '../page-specs/my-orders.json'
import { MyOrdersPreviewFrame } from '../components/my-orders/MyOrdersComponents'

function MyOrdersPreviewPage({ variant = 'all' }) {
  return (
    <section aria-label={pageSpec.pageTitle} className="my-orders-preview">
      <MyOrdersPreviewFrame variant={variant} />
    </section>
  )
}

export default MyOrdersPreviewPage
