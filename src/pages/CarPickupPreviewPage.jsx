import carPickupData from '../mock-data/car-pickup.mock.json'
import pageSpec from '../page-specs/car-pickup.json'
import { CarPickupPreviewFrame } from '../components/car-pickup/CarPickupComponents'

function CarPickupPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="car-pickup-preview"
    >
      <CarPickupPreviewFrame data={carPickupData} />
    </section>
  )
}

export default CarPickupPreviewPage
