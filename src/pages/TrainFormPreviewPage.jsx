import pageSpec from '../page-specs/train-form.json'
import { TrainFormPreviewFrame } from '../components/train-form/TrainFormComponents'

function TrainFormPreviewPage() {
  return (
    <section aria-label={pageSpec.pageTitle} className="train-form-preview">
      <TrainFormPreviewFrame />
    </section>
  )
}

export default TrainFormPreviewPage
