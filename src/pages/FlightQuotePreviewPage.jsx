import pageSpec from '../page-specs/flight-quote.json'
import flightQuoteData from '../mock-data/flight-quote.mock.json'
import { FlightQuotePreviewFrame } from '../components/flight-quote/FlightQuoteComponents'

function FlightQuotePreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="flight-quote-page"
    >
      <FlightQuotePreviewFrame data={flightQuoteData} />
    </section>
  )
}

export default FlightQuotePreviewPage
