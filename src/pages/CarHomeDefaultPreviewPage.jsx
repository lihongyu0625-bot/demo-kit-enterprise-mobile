import pageSpec from '../page-specs/car-home-default.json'
import carHomeDefaultData from '../mock-data/car-home-default.mock.json'
import {
  CarHomeDefaultBottomNav,
  CarHomeDefaultFooterRules,
  CarHomeDefaultHero,
  CarHomeDefaultOperationsArea,
  CarHomeDefaultQuickActions,
  CarHomeCategoryTabs,
  CarHomePolicyPanel,
} from '../components/car-home-default/CarHomeDefaultComponents'

const sectionComponentMap = {
  'bottom-nav': <CarHomeDefaultBottomNav items={carHomeDefaultData.bottomTabs} />,
  'footer-rules': <CarHomeDefaultFooterRules links={carHomeDefaultData.footerLinks} />,
  'header-hero': <CarHomeDefaultHero hero={carHomeDefaultData.hero} />,
  'operations-area': <CarHomeDefaultOperationsArea />,
  'quick-actions': <CarHomeDefaultQuickActions items={carHomeDefaultData.quickActions} />,
  'service-card': (
    <section className="car-home-default-service-card">
      <CarHomeCategoryTabs categories={carHomeDefaultData.categories} />
      <CarHomePolicyPanel
        notice={carHomeDefaultData.notice}
        policyCards={carHomeDefaultData.policyCards}
      />
    </section>
  ),
}

function CarHomeDefaultPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="car-home-default-preview"
    >
      <div className="car-home-default-shell">
        {sectionComponentMap['header-hero']}

        <div className="car-home-default-main">
          <div className="car-home-default-main__primary-group">
            {sectionComponentMap['service-card']}
            {sectionComponentMap['quick-actions']}
            {sectionComponentMap['operations-area']}
          </div>
          {sectionComponentMap['footer-rules']}
        </div>

        <div className="car-home-default-bottom">
          {sectionComponentMap['bottom-nav']}
        </div>
      </div>
    </section>
  )
}

export default CarHomeDefaultPreviewPage
