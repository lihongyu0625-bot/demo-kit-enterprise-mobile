import hotelDetailData from '../mock-data/hotel-detail.mock.json'
import pageSpec from '../page-specs/hotel-detail.json'
import {
  HotelDetailFacilitiesCard,
  HotelDetailFooter,
  HotelDetailHero,
  HotelDetailIntroductionCard,
  HotelDetailNameCard,
  HotelDetailPolicyCard,
  HotelDetailRoomList,
  HotelDetailSelector,
} from '../components/hotel-detail/HotelDetailComponents'

const sectionComponentMap = {
  hero: <HotelDetailHero hero={hotelDetailData.hero} />,
  'name-card': <HotelDetailNameCard hotel={hotelDetailData.hotel} />,
  selector: <HotelDetailSelector selector={hotelDetailData.selector} />,
  'room-list': <HotelDetailRoomList rooms={hotelDetailData.rooms} />,
  facilities: <HotelDetailFacilitiesCard facilities={hotelDetailData.facilities} />,
  introduction: <HotelDetailIntroductionCard introduction={hotelDetailData.introduction} />,
  policies: <HotelDetailPolicyCard policies={hotelDetailData.policies} />,
  footer: <HotelDetailFooter />,
}

function HotelDetailPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="hotel-detail-preview"
    >
      <div className="hotel-detail-shell">
        {sectionComponentMap.hero}

        <div className="hotel-detail-content">
          {sectionComponentMap['name-card']}
          {sectionComponentMap.selector}

          <div className="hotel-detail-sections">
            {pageSpec.sections
              .filter((sectionKey) => !['hero', 'name-card', 'selector', 'footer'].includes(sectionKey))
              .map((sectionKey) => (
                <div key={sectionKey}>{sectionComponentMap[sectionKey]}</div>
              ))}
          </div>

          {sectionComponentMap.footer}
        </div>
      </div>
    </section>
  )
}

export default HotelDetailPreviewPage
