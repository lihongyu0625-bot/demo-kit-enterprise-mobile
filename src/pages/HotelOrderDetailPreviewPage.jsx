import orderDetailData from '../mock-data/hotel-order-detail.mock.json'
import pageSpec from '../page-specs/hotel-order-detail.json'
import {
  HotelOrderDetailBenefitsCard,
  HotelOrderDetailBookingInfoCard,
  HotelOrderDetailFooter,
  HotelOrderDetailHotelCard,
  HotelOrderDetailInvoiceCard,
  HotelOrderDetailNavBar,
  HotelOrderDetailPaymentCard,
  HotelOrderDetailStatusPanel,
  HotelOrderDetailStayInfoCard,
} from '../components/hotel-order-detail/HotelOrderDetailComponents'

const sectionComponentMap = {
  nav: <HotelOrderDetailNavBar nav={orderDetailData.nav} />,
  status: <HotelOrderDetailStatusPanel status={orderDetailData.status} />,
  payment: <HotelOrderDetailPaymentCard payment={orderDetailData.payment} />,
  'hotel-info': <HotelOrderDetailHotelCard hotel={orderDetailData.hotel} />,
  'booking-info': <HotelOrderDetailBookingInfoCard bookingInfo={orderDetailData.bookingInfo} />,
  'stay-info': <HotelOrderDetailStayInfoCard stayInfo={orderDetailData.stayInfo} />,
  invoice: <HotelOrderDetailInvoiceCard invoice={orderDetailData.invoice} />,
  benefits: <HotelOrderDetailBenefitsCard benefits={orderDetailData.benefits} />,
  footer: <HotelOrderDetailFooter />,
}

function HotelOrderDetailPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="hotel-order-detail-preview"
    >
      <div className="hotel-order-detail-shell">
        {sectionComponentMap.nav}

        <div className="hotel-order-detail-main">
          {pageSpec.sections
            .filter((sectionKey) => !['nav', 'footer'].includes(sectionKey))
            .map((sectionKey) => (
              <div key={sectionKey}>{sectionComponentMap[sectionKey]}</div>
            ))}
        </div>

        {sectionComponentMap.footer}
      </div>
    </section>
  )
}

export default HotelOrderDetailPreviewPage
