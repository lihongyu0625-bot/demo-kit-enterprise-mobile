import carLocationInputData from '../mock-data/car-location-input.mock.json'
import pageSpec from '../page-specs/car-location-input.json'
import { CarLocationInputPreviewFrame } from '../components/car-location-input/CarLocationInputComponents'

function CarLocationInputPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="car-location-input-preview"
    >
      <CarLocationInputPreviewFrame data={carLocationInputData} />
    </section>
  )
}

export default CarLocationInputPreviewPage
