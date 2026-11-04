import detailData from '../mock-data/hotel-benefits-detail.mock.json'
import pageSpec from '../page-specs/hotel-benefits-detail.json'
import { HotelBenefitsDetailPreviewFrame } from '../components/hotel-benefits/HotelBenefitsComponents'

function HotelBenefitsDetailPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="hotel-benefits-detail-preview"
    >
      <HotelBenefitsDetailPreviewFrame data={detailData} />
    </section>
  )
}

export default HotelBenefitsDetailPreviewPage
