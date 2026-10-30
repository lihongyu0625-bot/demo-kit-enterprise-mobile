import pageSpec from '../page-specs/train-order-detail.json'
import { TrainOrderDetailPreviewFrame } from '../components/train-order-detail/TrainOrderDetailComponents'

function TrainOrderDetailPreviewPage() {
  return (
    <section aria-label={pageSpec.pageTitle} className="train-order-detail-preview">
      <TrainOrderDetailPreviewFrame />
    </section>
  )
}

export default TrainOrderDetailPreviewPage
