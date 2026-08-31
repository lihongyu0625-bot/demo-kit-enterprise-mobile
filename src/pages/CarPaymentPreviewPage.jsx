import carPaymentData from '../mock-data/car-payment.mock.json'
import pageSpec from '../page-specs/car-payment.json'
import { CarPaymentPreviewFrame } from '../components/car-payment/CarPaymentComponents'

function CarPaymentPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="car-payment-preview"
    >
      <CarPaymentPreviewFrame data={carPaymentData} />
    </section>
  )
}

export default CarPaymentPreviewPage
