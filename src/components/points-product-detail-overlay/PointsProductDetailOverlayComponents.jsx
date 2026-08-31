import heroImage from '../../assets/points-product-detail-overlay/hero.png'
import packageTicket1 from '../../assets/points-product-detail-overlay/ticket-1.png'
import packageTicket2 from '../../assets/points-product-detail-overlay/ticket-2.png'
import mockData from '../../mock-data/points-product-detail-overlay.mock.json'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './points-product-detail-overlay.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function Img({ src, alt = '', className }) {
  return <img alt={alt} className={className} draggable="false" src={src} />
}

function PriceLine({ price }) {
  return (
    <div className="points-product-detail-overlay__price-line">
      <span className="points-product-detail-overlay__price-amount">{price.points}</span>
      <span className="points-product-detail-overlay__price-unit">积分</span>
      <span className="points-product-detail-overlay__price-plus">+</span>
      <span className="points-product-detail-overlay__price-amount">{price.cash}</span>
      <span className="points-product-detail-overlay__price-unit">元</span>
    </div>
  )
}

function DetailCard({ children, className }) {
  return <article className={cx('points-product-detail-overlay__card', className)}>{children}</article>
}

function RuleList({ items }) {
  return (
    <div className="points-product-detail-overlay__rule-list">
      {items.map((item) => (
        <div className="points-product-detail-overlay__rule-item" key={item}>
          <span className="points-product-detail-overlay__rule-bullet" aria-hidden="true" />
          <p className="points-product-detail-overlay__rule-text">{item}</p>
        </div>
      ))}
    </div>
  )
}

function PackageItem({ item, image }) {
  return (
    <div className="points-product-detail-overlay__package-item">
      <Img alt="" className="points-product-detail-overlay__package-image" src={image} />
      <div className="points-product-detail-overlay__package-copy">
        <p className="points-product-detail-overlay__package-name">{item.name}</p>
        <p className="points-product-detail-overlay__package-desc">{item.desc}</p>
      </div>
    </div>
  )
}

export function PointsProductDetailOverlayPreviewFrame({ data = mockData }) {
  const packageImages = [packageTicket1, packageTicket2]

  return (
    <div className="points-product-detail-overlay">
      <div className="points-product-detail-overlay__mask" aria-hidden="true" />
      <IPhoneBar
        className="points-product-detail-overlay__statusbar"
        tone="light"
        transparent
      />

      <section className="points-product-detail-overlay__sheet" aria-label={data.pageTitle}>
        <div className="points-product-detail-overlay__hero">
          <Img alt="" className="points-product-detail-overlay__hero-image" src={heroImage} />
          <button aria-label="关闭" className="points-product-detail-overlay__close" type="button">
            <GlobalStyleIcon
              className="points-product-detail-overlay__close-icon"
              name="icon/action/close-large/outlined"
            />
          </button>
        </div>

        <main className="points-product-detail-overlay__content">
          <DetailCard className="points-product-detail-overlay__card--summary">
            <PriceLine price={data.price} />
            <p className="points-product-detail-overlay__summary">{data.summary}</p>
          </DetailCard>

          <DetailCard>
            <h2 className="points-product-detail-overlay__section-title">{data.package.title}</h2>
            <div className="points-product-detail-overlay__package-list">
              {data.package.items.map((item, index) => (
                <PackageItem image={packageImages[index]} item={item} key={item.name} />
              ))}
            </div>
          </DetailCard>

          <DetailCard>
            <h2 className="points-product-detail-overlay__section-title">{data.usage.title}</h2>
            <RuleList items={data.usage.items} />
          </DetailCard>

          <DetailCard>
            <h2 className="points-product-detail-overlay__section-title">{data.purchase.title}</h2>
            <RuleList items={data.purchase.items} />
          </DetailCard>
        </main>

        <footer className="points-product-detail-overlay__footer-dock">
          <div className="points-product-detail-overlay__cta-wrap">
            <button className="points-product-detail-overlay__cta" type="button">
              {data.cta}
            </button>
          </div>
          <IPhoneFooter className="points-product-detail-overlay__footer" />
        </footer>
      </section>
    </div>
  )
}
