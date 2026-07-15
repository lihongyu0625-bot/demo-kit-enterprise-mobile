import pageSpec from '../page-specs/hotel-form.json'
import hotelFormData from '../mock-data/hotel-form.mock.json'
import {
  HotelBenefitCard,
  HotelContactInfoCard,
  HotelCostCenterCard,
  HotelFormGradientBackground,
  HotelFormNavBar,
  HotelInvoiceTipCard,
  HotelRoomInfoCard,
  HotelStayInfoCard,
  HotelSubmitBar,
  HotelTermsBar,
  HotelTripNoteCard,
  HotelApprovalInfoCard,
} from '../components/hotel-form/HotelFormComponents'

const cardSectionComponentMap = {
  'room-info-card': <HotelRoomInfoCard room={hotelFormData.room} />,
  'stay-info-card': <HotelStayInfoCard stayInfo={hotelFormData.stayInfo} />,
  'contact-info-card': <HotelContactInfoCard contactInfo={hotelFormData.contactInfo} />,
  'approval-info-card': <HotelApprovalInfoCard approvalInfo={hotelFormData.approvalInfo} />,
  'cost-center-card': <HotelCostCenterCard costCenter={hotelFormData.costCenter} />,
  'trip-note-card': <HotelTripNoteCard tripNote={hotelFormData.tripNote} />,
  'benefit-card': <HotelBenefitCard benefits={hotelFormData.benefits} />,
  'invoice-tip-card': <HotelInvoiceTipCard invoiceTip={hotelFormData.invoiceTip} />,
}

const footerSectionComponentMap = {
  'terms-bar': <HotelTermsBar terms={hotelFormData.terms} />,
  'submit-bar': <HotelSubmitBar payment={hotelFormData.payment} />,
}

function HotelFormPreviewPage() {
  return (
    <section className="hotel-form-preview" aria-label={pageSpec.pageTitle}>
      <div className="hotel-form-shell">
        <HotelFormGradientBackground />
        <HotelFormNavBar
          title={hotelFormData.hotelName}
          actionLabel={hotelFormData.navAction}
        />

        <div className="hotel-form-content">
          {pageSpec.cardSections.map((sectionKey) => (
            <div key={sectionKey}>{cardSectionComponentMap[sectionKey]}</div>
          ))}
        </div>

        <div className="hotel-form-footer">
          {pageSpec.footerSections.map((sectionKey) => (
            <div key={sectionKey}>{footerSectionComponentMap[sectionKey]}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HotelFormPreviewPage
