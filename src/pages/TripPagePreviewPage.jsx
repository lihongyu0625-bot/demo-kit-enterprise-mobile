import pageSpec from '../page-specs/trip-page.json'
import { TripPagePreviewFrame } from '../components/trip-page/TripPagePreviewFrame'

function TripPagePreviewPage({ variant = 'booked-partial' }) {
  return (
    <section aria-label={pageSpec.pageTitle} className="trip-page-preview">
      <TripPagePreviewFrame variant={variant} />
    </section>
  )
}

export default TripPagePreviewPage
