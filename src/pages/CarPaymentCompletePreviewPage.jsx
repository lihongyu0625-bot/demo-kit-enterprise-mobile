import carPaymentCompleteData from '../mock-data/car-payment-complete.mock.json'
import pageSpec from '../page-specs/car-payment-complete.json'
import { CarPaymentCompletePreviewFrame } from '../components/car-payment/CarPaymentCompleteComponents'

function CarPaymentCompletePreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="car-payment-preview"
    >
      <CarPaymentCompletePreviewFrame data={carPaymentCompleteData} />
    </section>
  )
}

export default CarPaymentCompletePreviewPage
