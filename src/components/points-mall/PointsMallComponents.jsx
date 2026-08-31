import taskBanner from '../../assets/points-mall/task-banner.png'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { MobileNavBar } from '../common/MobileNavBar'
import { PointsBenefitBottomWatermark } from '../points-benefit-bottom-watermark/PointsBenefitBottomWatermark'
import { PointsBenefitHeader } from '../points-benefit-header/PointsBenefitHeader'
import { PointsBenefitTitle } from '../points-benefit-title/PointsBenefitTitle'
import {
  PointsCouponShowcase,
  PointsEarnMissionCard,
  PointsLuckyBagFlashSale,
  PointsLuckyBagGiftExchange,
} from '../points-lucky-bag/PointsLuckyBagComponents'
import './points-mall.css'

function Img({ src, alt = '', className }) {
  return <img alt={alt} className={className} draggable="false" src={src} />
}

export function PointsMallHero({ points = '376' }) {
  return (
    <section className="points-mall-hero" aria-label="积分商城头图">
      <PointsBenefitHeader className="points-mall-hero__bg" />
      <MobileNavBar
        className="points-mall-hero__nav"
        showRightIcon={false}
        showTitle={false}
        statusBarTone="dark"
        transparent
      />
      <PointsBenefitTitle className="points-mall-hero__title" points={points} />
      <button className="points-mall-record" type="button">
        <span>兑换</span>
        <span>记录</span>
      </button>
    </section>
  )
}

export function PointsMallSpecialDeals() {
  return <PointsCouponShowcase state="compact" />
}

export function PointsMallTaskCard() {
  return <PointsEarnMissionCard state="compact" />
}

export function PointsMallTaskBanner() {
  return (
    <div className="points-mall-task-banner">
      <Img src={taskBanner} />
    </div>
  )
}

export function PointsMallFooterWatermark() {
  return <PointsBenefitBottomWatermark className="points-mall-watermark" />
}

export function PointsMallContent({ filters }) {
  return (
    <main className="points-mall-content">
      <PointsLuckyBagFlashSale />
      <PointsMallSpecialDeals />
      <PointsMallTaskCard />
      <PointsMallTaskBanner />
      <PointsLuckyBagGiftExchange filters={filters} />
      <PointsMallFooterWatermark />
    </main>
  )
}

export function PointsMallPreviewFrame({ filters, points }) {
  return (
    <div className="points-mall-shell">
      <PointsMallHero points={points} />
      <PointsMallContent filters={filters} />
      <IPhoneFooter className="points-mall-footer" transparent />
    </div>
  )
}
