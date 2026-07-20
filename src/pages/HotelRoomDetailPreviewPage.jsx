import pageSpec from '../page-specs/hotel-room-detail.json'
import roomDetailData from '../mock-data/hotel-room-detail.mock.json'
import { IPhoneBar } from '../components/common/IPhoneBar'
import {
  HotelRoomDetailBackdrop,
  HotelRoomDetailBenefitCard,
  HotelRoomDetailFacilityCard,
  HotelRoomDetailFeeCard,
  HotelRoomDetailHeroCard,
  HotelRoomDetailPolicyCard,
  HotelRoomDetailPromoCard,
  HotelRoomDetailProviderCard,
  HotelRoomDetailSubmitBar,
} from '../components/hotel-room-detail/HotelRoomDetailComponents'

const topSectionComponentMap = {
  backdrop: <HotelRoomDetailBackdrop />,
  'hero-card': <HotelRoomDetailHeroCard hero={roomDetailData.hero} />,
}

const contentSectionComponentMap = {
  'facility-card': (
    <HotelRoomDetailFacilityCard facilityIntro={roomDetailData.facilityIntro} />
  ),
  'benefit-card': <HotelRoomDetailBenefitCard benefits={roomDetailData.benefits} />,
  'policy-card': <HotelRoomDetailPolicyCard policy={roomDetailData.policy} />,
  'provider-card': <HotelRoomDetailProviderCard provider={roomDetailData.provider} />,
  'promo-card': <HotelRoomDetailPromoCard promotions={roomDetailData.promotions} />,
  'fee-card': <HotelRoomDetailFeeCard feeDetail={roomDetailData.feeDetail} />,
}

const footerSectionComponentMap = {
  'submit-bar': <HotelRoomDetailSubmitBar submitBar={roomDetailData.submitBar} />,
}

function HotelRoomDetailPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="hotel-room-detail-preview"
    >
      <div className="hotel-room-detail-shell">
        <IPhoneBar
          className="room-detail-statusbar"
          transparent
        />

        <div className="room-detail-screen">
          {pageSpec.topSections.map((sectionKey) => (
            <div key={sectionKey}>{topSectionComponentMap[sectionKey]}</div>
          ))}

          <div className="room-detail-sheet">
            <HotelRoomDetailHeroCard hero={roomDetailData.hero} />

            <div className="room-detail-scroll">
              {pageSpec.contentSections.map((sectionKey) => (
                <div key={sectionKey}>{contentSectionComponentMap[sectionKey]}</div>
              ))}
            </div>

            <div className="room-detail-footer">
              {pageSpec.footerSections.map((sectionKey) => (
                <div key={sectionKey}>{footerSectionComponentMap[sectionKey]}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HotelRoomDetailPreviewPage
