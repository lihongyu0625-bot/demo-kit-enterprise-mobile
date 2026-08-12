import pageSpec from '../page-specs/flight-form.json'
import flightFormData from '../mock-data/flight-form.mock.json'
import { FlightFormPreviewFrame } from '../components/flight-form/FlightFormComponents'

function FlightFormPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="flight-form-page"
    >
      <FlightFormPreviewFrame data={flightFormData} />
    </section>
  )
}

export default FlightFormPreviewPage
