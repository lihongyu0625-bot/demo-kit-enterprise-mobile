import footerWatermark from '../../assets/points-mall/footer-watermark.png'
import './points-benefit-bottom-watermark.css'

export function PointsBenefitBottomWatermark({ className = '' }) {
  return (
    <div className={`points-benefit-bottom-watermark ${className}`.trim()}>
      <img alt="" src={footerWatermark} />
    </div>
  )
}
