import bookingSuccessData from '../mock-data/flight-booking-success.mock.json'
import pageSpec from '../page-specs/flight-booking-success.json'
import {
  OrderSuccessFooter,
  OrderSuccessOrderCard,
  OrderSuccessPageBackground,
  OrderSuccessPageChrome,
  OrderSuccessStatus,
  OrderSuccessTips,
} from '../components/hotel-booking-success/HotelBookingSuccessComponents'

const sectionComponentMap = {
  status: <OrderSuccessStatus status={bookingSuccessData.status} />,
  'order-card': <OrderSuccessOrderCard order={bookingSuccessData.order} variant="flight" />,
  tips: <OrderSuccessTips tips={bookingSuccessData.tips} />,
  footer: <OrderSuccessFooter />,
}

function FlightBookingSuccessPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="hotel-booking-success-preview"
    >
      <div className="hotel-booking-success-shell">
        <OrderSuccessPageBackground />
        <OrderSuccessPageChrome />

        <div className="hotel-booking-success-main">
          <div className="hotel-booking-success-group hotel-booking-success-group--flight-primary">
            {sectionComponentMap.status}
            {sectionComponentMap['order-card']}
          </div>

          {sectionComponentMap.tips}
        </div>

        {sectionComponentMap.footer}
      </div>
    </section>
  )
}

export default FlightBookingSuccessPreviewPage
