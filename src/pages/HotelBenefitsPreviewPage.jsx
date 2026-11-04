import benefitsData from '../mock-data/hotel-benefits.mock.json'
import pageSpec from '../page-specs/hotel-benefits.json'
import { HotelBenefitsPreviewFrame } from '../components/hotel-benefits/HotelBenefitsComponents'

function HotelBenefitsPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="hotel-benefits-preview"
    >
      <HotelBenefitsPreviewFrame data={benefitsData} />
    </section>
  )
}

export default HotelBenefitsPreviewPage
