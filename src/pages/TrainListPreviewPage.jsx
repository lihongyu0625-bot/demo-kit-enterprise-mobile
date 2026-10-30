import pageSpec from '../page-specs/train-list.json'
import { TrainListPreviewFrame } from '../components/train-list/TrainListComponents'

function TrainListPreviewPage() {
  return (
    <section aria-label={pageSpec.pageTitle} className="train-list-preview">
      <TrainListPreviewFrame />
    </section>
  )
}

export default TrainListPreviewPage
