import pageSpec from '../page-specs/train-quote.json'
import { TrainQuotePreviewFrame } from '../components/train-quote/TrainQuoteComponents'

function TrainQuotePreviewPage() {
  return (
    <section aria-label={pageSpec.pageTitle} className="train-quote-preview">
      <TrainQuotePreviewFrame />
    </section>
  )
}

export default TrainQuotePreviewPage
