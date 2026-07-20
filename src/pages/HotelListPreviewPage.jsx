import hotelListData from '../mock-data/hotel-list.mock.json'
import pageSpec from '../page-specs/hotel-list.json'
import {
  HotelListCardList,
  HotelListFooter,
  HotelListHeaderBackground,
  HotelListPromoStrip,
  HotelListSortBar,
  HotelListTopBar,
} from '../components/hotel-list/HotelListComponents'

const sectionComponentMap = {
  'search-bar': <HotelListTopBar search={hotelListData.search} />,
  'filter-bar': (
    <HotelListSortBar
      quickFilters={hotelListData.quickFilters}
      sortTabs={hotelListData.sortTabs}
    />
  ),
  'promo-strip': <HotelListPromoStrip promo={hotelListData.promo} />,
  'hotel-card-list': <HotelListCardList hotels={hotelListData.hotels} />,
  footer: <HotelListFooter />,
}

function HotelListPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="hotel-list-preview"
    >
      <div className="hotel-list-shell">
        <HotelListHeaderBackground />
        {pageSpec.sections.map((sectionKey) => (
          <div key={sectionKey}>{sectionComponentMap[sectionKey]}</div>
        ))}
      </div>
    </section>
  )
}

export default HotelListPreviewPage
