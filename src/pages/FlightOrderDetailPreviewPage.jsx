import pageSpec from '../page-specs/flight-order-detail.json'
import flightOrderDetailData from '../mock-data/flight-order-detail.mock.json'
import { FlightOrderDetailPreviewFrame } from '../components/flight-order-detail/FlightOrderDetailComponents'

function FlightOrderDetailPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="flight-order-detail-page"
    >
      <FlightOrderDetailPreviewFrame data={flightOrderDetailData} />
    </section>
  )
}

export default FlightOrderDetailPreviewPage
