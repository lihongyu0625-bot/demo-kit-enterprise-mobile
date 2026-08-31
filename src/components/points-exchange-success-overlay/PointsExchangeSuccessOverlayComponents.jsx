import productCardImage from '../../assets/points-exchange-success-overlay/product-card.png'
import sheetBgImage from '../../assets/points-exchange-success-overlay/sheet-bg.png'
import mockData from '../../mock-data/points-exchange-success-overlay.mock.json'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './points-exchange-success-overlay.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function Img({ src, alt = '', className }) {
  return <img alt={alt} className={className} draggable="false" src={src} />
}

function PointsExchangeSuccessStatus({ status }) {
  return (
    <div className="points-exchange-success-overlay__status">
      <div className="points-exchange-success-overlay__status-title-row">
        <GlobalStyleIcon
          className="points-exchange-success-overlay__success-icon"
          name="icon/status/success-circle/filled"
        />
        <h1 className="points-exchange-success-overlay__title">{status.title}</h1>
      </div>
      <p className="points-exchange-success-overlay__hint">{status.hint}</p>
    </div>
  )
}

function PointsExchangeSuccessProductCard({ product }) {
  return (
    <article className="points-exchange-success-overlay__product-card">
      <Img
        alt=""
        className="points-exchange-success-overlay__product-image"
        src={productCardImage}
      />
      <div className="points-exchange-success-overlay__product-copy">
        <p className="points-exchange-success-overlay__product-title">{product.title}</p>
        <div className="points-exchange-success-overlay__product-meta">
          <p className="points-exchange-success-overlay__product-price">{product.price}</p>
          <p className="points-exchange-success-overlay__product-time">{product.time}</p>
        </div>
      </div>
    </article>
  )
}

function PointsExchangeSuccessFooter({ actions }) {
  return (
    <footer className="points-exchange-success-overlay__footer-dock">
      <div className="points-exchange-success-overlay__action-row">
        <button
          className={cx(
            'points-exchange-success-overlay__button',
            'points-exchange-success-overlay__button--secondary',
          )}
          type="button"
        >
          {actions.detail}
        </button>
        <button
          className={cx(
            'points-exchange-success-overlay__button',
            'points-exchange-success-overlay__button--primary',
          )}
          type="button"
        >
          {actions.use}
        </button>
      </div>
      <IPhoneFooter className="points-exchange-success-overlay__iphone-footer" />
    </footer>
  )
}

export function PointsExchangeSuccessOverlayPreviewFrame({ data = mockData }) {
  return (
    <div className="points-exchange-success-overlay">
      <div className="points-exchange-success-overlay__mask" aria-hidden="true" />
      <IPhoneBar
        className="points-exchange-success-overlay__statusbar"
        tone="light"
        transparent
      />

      <section className="points-exchange-success-overlay__sheet" aria-label={data.pageTitle}>
        <Img alt="" className="points-exchange-success-overlay__sheet-bg" src={sheetBgImage} />
        <button aria-label="关闭" className="points-exchange-success-overlay__close" type="button">
          <GlobalStyleIcon
            className="points-exchange-success-overlay__close-icon"
            name="icon/action/close-large/outlined"
          />
        </button>
        <PointsExchangeSuccessStatus status={data.status} />
        <PointsExchangeSuccessProductCard product={data.product} />
        <PointsExchangeSuccessFooter actions={data.actions} />
      </section>
    </div>
  )
}
