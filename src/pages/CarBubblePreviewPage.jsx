import carBubbleData from '../mock-data/car-bubble.mock.json'
import pageSpec from '../page-specs/car-bubble.json'
import { CarBubblePreviewFrame } from '../components/car-bubble/CarBubbleComponents'

function CarBubblePreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="car-bubble-preview"
    >
      <CarBubblePreviewFrame data={carBubbleData} />
    </section>
  )
}

export default CarBubblePreviewPage
