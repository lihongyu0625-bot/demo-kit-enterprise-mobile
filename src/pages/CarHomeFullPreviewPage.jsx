import carHomeFullData from '../mock-data/car-home-full.mock.json'
import {
  CarHomeDefaultBottomNav,
  CarHomeDefaultFooterRules,
  CarHomeDefaultHero,
  CarHomeCategoryTabs,
  CarHomePolicyPanel,
} from '../components/car-home-default/CarHomeDefaultComponents'
import {
  CarHomeFullActions,
  CarHomeFullApplications,
  CarHomeFullDriverBanner,
  CarHomeFullPendingNotice,
  CarHomeFullPromoCards,
  CarHomeFullRideNotice,
  CarHomeFullTrips,
} from '../components/car-home-default/CarHomeFullComponents'

function CarHomeFullPreviewPage() {
  return (
    <section
      aria-label="首页-全态"
      className="car-home-default-preview"
    >
      <div className="car-home-full-shell">
        <CarHomeDefaultHero hero={carHomeFullData.hero} />

        <div className="car-home-full-main">
          <div className="car-home-full-main__group">
            <section className="car-home-default-service-card">
              <CarHomeCategoryTabs categories={carHomeFullData.categories} />
              <CarHomePolicyPanel
                notice={carHomeFullData.notice}
                policyCards={carHomeFullData.policyCards}
              >
                <CarHomeFullRideNotice notice={carHomeFullData.rideNotice} />
              </CarHomePolicyPanel>
            </section>

            <CarHomeFullActions items={carHomeFullData.applyActions} />
            <CarHomeFullDriverBanner banner={carHomeFullData.driverBanner} />
            <CarHomeFullPendingNotice notice={carHomeFullData.pendingNotice} />
            <CarHomeFullApplications
              applications={carHomeFullData.applications}
              summary={carHomeFullData.applicationsSummary}
            />
            <CarHomeFullTrips
              summary={carHomeFullData.tripsSummary}
              tripCard={carHomeFullData.tripCard}
            />
            <CarHomeFullPromoCards cards={carHomeFullData.promoCards} />
          </div>

          <CarHomeDefaultFooterRules links={carHomeFullData.footerLinks} />
        </div>

        <div className="car-home-full-bottom">
          <CarHomeDefaultBottomNav items={carHomeFullData.bottomTabs} />
        </div>
      </div>
    </section>
  )
}

export default CarHomeFullPreviewPage
