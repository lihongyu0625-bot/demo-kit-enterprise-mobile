import carSendData from '../mock-data/car-send.mock.json'
import pageSpec from '../page-specs/car-send.json'
import { CarSendPreviewFrame } from '../components/car-send/CarSendComponents'

function CarSendPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="car-send-preview"
    >
      <CarSendPreviewFrame data={carSendData} />
    </section>
  )
}

export default CarSendPreviewPage
