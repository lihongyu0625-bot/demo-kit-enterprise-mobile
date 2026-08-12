import pageSpec from '../page-specs/flight-home.json'
import flightHomeData from '../mock-data/flight-home.mock.json'
import {
  FlightHomeApplicationCard,
  FlightHomeBenefitStrip,
  FlightHomeBottomNav,
  FlightHomeGuaranteeCard,
  FlightHomeHeroBackground,
  FlightHomeHeroIntro,
  FlightHomeTopNav,
} from '../components/flight-home/FlightHomeComponents'

const sectionComponentMap = {
  'application-card': <FlightHomeApplicationCard application={flightHomeData.application} />,
  'benefit-strip': <FlightHomeBenefitStrip benefits={flightHomeData.benefits} />,
  'bottom-nav': <FlightHomeBottomNav items={flightHomeData.bottomTabs} />,
  'guarantee-card': <FlightHomeGuaranteeCard guarantee={flightHomeData.guarantee} />,
  'hero-background': <FlightHomeHeroBackground />,
  'hero-intro': <FlightHomeHeroIntro header={flightHomeData.header} />,
  'top-nav': <FlightHomeTopNav nav={flightHomeData.nav} />,
}

function FlightHomePreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="flight-home-preview"
    >
      <div className="flight-home-shell">
        {sectionComponentMap['hero-background']}
        {sectionComponentMap['top-nav']}

        <div className="flight-home-main">
          {sectionComponentMap['hero-intro']}
          {sectionComponentMap['application-card']}
          {sectionComponentMap['guarantee-card']}
          {sectionComponentMap['benefit-strip']}
        </div>

        {sectionComponentMap['bottom-nav']}
      </div>
    </section>
  )
}

export default FlightHomePreviewPage
