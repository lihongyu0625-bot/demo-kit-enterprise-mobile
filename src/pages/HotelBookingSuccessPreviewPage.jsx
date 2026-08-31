import bookingSuccessData from '../mock-data/hotel-booking-success.mock.json'
import pageSpec from '../page-specs/hotel-booking-success.json'
import {
  HotelBookingSuccessAirportTransferCard,
  HotelBookingSuccessFlightBenefitCard,
  HotelBookingSuccessFooter,
  HotelBookingSuccessOrderCard,
  HotelBookingSuccessPageBackground,
  HotelBookingSuccessPageChrome,
  HotelBookingSuccessStatus,
} from '../components/hotel-booking-success/HotelBookingSuccessComponents'

const sectionComponentMap = {
  status: <HotelBookingSuccessStatus status={bookingSuccessData.status} />,
  'order-card': <HotelBookingSuccessOrderCard order={bookingSuccessData.order} />,
  'flight-benefit': <HotelBookingSuccessFlightBenefitCard flightBenefit={bookingSuccessData.flightBenefit} />,
  'airport-transfer': (
    <HotelBookingSuccessAirportTransferCard airportTransfer={bookingSuccessData.airportTransfer} />
  ),
  footer: <HotelBookingSuccessFooter />,
}

function HotelBookingSuccessPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="hotel-booking-success-preview"
    >
      <div className="hotel-booking-success-shell">
        <HotelBookingSuccessPageBackground />
        <HotelBookingSuccessPageChrome />

        <div className="hotel-booking-success-main">
          <div className="hotel-booking-success-group">
            {sectionComponentMap.status}
            {sectionComponentMap['order-card']}
          </div>

          <div className="hotel-booking-success-group">
            {sectionComponentMap['flight-benefit']}
            {sectionComponentMap['airport-transfer']}
          </div>
        </div>

        {sectionComponentMap.footer}
      </div>
    </section>
  )
}

export default HotelBookingSuccessPreviewPage
