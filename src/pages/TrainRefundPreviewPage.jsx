import pageSpec from '../page-specs/train-refund.json'
import { TrainRefundPreviewFrame } from '../components/train-refund/TrainRefundComponents'

function TrainRefundPreviewPage() {
  return (
    <section aria-label={pageSpec.pageTitle} className="train-refund-preview">
      <TrainRefundPreviewFrame />
    </section>
  )
}

export default TrainRefundPreviewPage
