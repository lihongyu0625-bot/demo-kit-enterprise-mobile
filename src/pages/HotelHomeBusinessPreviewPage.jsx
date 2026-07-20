import homeBusinessData from '../mock-data/hotel-home-business.mock.json'
import pageSpec from '../page-specs/hotel-home-business.json'
import {
  HotelHomeBusinessApplicationCard,
  HotelHomeBusinessBottomNav,
  HotelHomeBusinessBottomWatermark,
  HotelHomeBusinessFooter,
  HotelHomeBusinessGuaranteeCard,
  HotelHomeBusinessHeaderHero,
  HotelHomeBusinessHeroIntro,
} from '../components/hotel-home-business/HotelHomeBusinessComponents'

const sectionComponentMap = {
  'application-card': <HotelHomeBusinessApplicationCard application={homeBusinessData.application} />,
  'bottom-nav': <HotelHomeBusinessBottomNav items={homeBusinessData.footerNav} />,
  'bottom-watermark': <HotelHomeBusinessBottomWatermark />,
  'guarantee-card': <HotelHomeBusinessGuaranteeCard />,
  'header-hero': <HotelHomeBusinessHeaderHero header={homeBusinessData.header} nav={homeBusinessData.nav} />,
  'header-intro': <HotelHomeBusinessHeroIntro header={homeBusinessData.header} />,
  footer: <HotelHomeBusinessFooter />,
}

function HotelHomeBusinessPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="hotel-home-business-preview"
    >
      <div className="hotel-home-business-shell">
        {sectionComponentMap['header-hero']}

        <div className="hotel-home-business-main">
          <div className="hotel-home-business-main__group">
            {sectionComponentMap['header-intro']}
            {sectionComponentMap['application-card']}
            {sectionComponentMap['guarantee-card']}
          </div>
        </div>

        <div className="hotel-home-business-watermark-wrap">
          {sectionComponentMap['bottom-watermark']}
        </div>

        <div className="hotel-home-business-bottom">
          {sectionComponentMap['bottom-nav']}
          {sectionComponentMap.footer}
        </div>
      </div>
    </section>
  )
}

export default HotelHomeBusinessPreviewPage
