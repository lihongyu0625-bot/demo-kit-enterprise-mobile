import pageSpec from '../page-specs/train-home.json'
import { TrainHomePreviewFrame } from '../components/train-home/TrainHomeComponents'

function TrainHomePreviewPage() {
  return (
    <section aria-label={pageSpec.pageTitle} className="train-home-preview">
      <TrainHomePreviewFrame />
    </section>
  )
}

export default TrainHomePreviewPage
