import pageSpec from '../page-specs/flight-list.json'
import flightListData from '../mock-data/flight-list.mock.json'
import {
  FlightListBottomSortBar,
  FlightListCardList,
  FlightListDateFilter,
  FlightListFilterBar,
  FlightListHeaderBackground,
  FlightListTopNav,
} from '../components/flight-list/FlightListComponents'

const sectionComponentMap = {
  'bottom-sort-bar': <FlightListBottomSortBar items={flightListData.bottomSortTabs} />,
  'card-list': <FlightListCardList cards={flightListData.cards} />,
  'date-filter': <FlightListDateFilter dateFilters={flightListData.dateFilters} />,
  'filter-bar': <FlightListFilterBar filters={flightListData.filters} />,
  'header-background': <FlightListHeaderBackground />,
  'top-nav': <FlightListTopNav nav={flightListData.nav} />,
}

function FlightListPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="flight-list-preview"
    >
      <div className="flight-list-shell">
        {sectionComponentMap['header-background']}
        {sectionComponentMap['top-nav']}

        <div className="flight-list-main">
          {sectionComponentMap['date-filter']}
          {sectionComponentMap['filter-bar']}
          {sectionComponentMap['card-list']}
        </div>

        {sectionComponentMap['bottom-sort-bar']}
      </div>
    </section>
  )
}

export default FlightListPreviewPage
