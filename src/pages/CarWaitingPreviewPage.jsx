import carWaitingData from '../mock-data/car-waiting.mock.json'
import pageSpec from '../page-specs/car-waiting.json'
import { CarWaitingPreviewFrame } from '../components/car-waiting/CarWaitingComponents'

function CarWaitingPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="car-waiting-preview"
    >
      <CarWaitingPreviewFrame data={carWaitingData} />
    </section>
  )
}

export default CarWaitingPreviewPage
