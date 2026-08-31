import pageSpec from '../page-specs/points-lucky-bag.json'
import { PointsLuckyBagPreviewFrame } from '../components/points-lucky-bag/PointsLuckyBagComponents'

function PointsLuckyBagPreviewPage() {
  return (
    <section
      aria-label={pageSpec.pageTitle}
      className="points-lucky-bag-preview"
    >
      <PointsLuckyBagPreviewFrame />
    </section>
  )
}

export default PointsLuckyBagPreviewPage
