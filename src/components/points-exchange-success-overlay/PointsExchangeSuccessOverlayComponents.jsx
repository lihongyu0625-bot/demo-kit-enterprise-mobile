import productCardImage from '../../assets/points-exchange-success-overlay/product-card.png'
import productLoungeImage from '../../assets/points-exchange-success-overlay/product-lounge.png'
import productPackageImage from '../../assets/points-exchange-success-overlay/product-package.png'
import productPillowImage from '../../assets/points-exchange-success-overlay/product-pillow.png'
import productTeaImage from '../../assets/points-exchange-success-overlay/product-tea.png'
import sheetBgImage from '../../assets/points-exchange-success-overlay/sheet-bg.png'
import mockData from '../../mock-data/points-exchange-success-overlay.mock.json'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './points-exchange-success-overlay.css'

const productImages = {
  coupon: productCardImage,
  tea: productTeaImage,
  pillow: productPillowImage,
  lounge: productLoungeImage,
  package: productPackageImage,
}

const variantLabels = {
  default: '默认',
  code: '带券码类',
  physical: '实物类',
  benefit: '权益类',
  package: '权益包类',
}

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
          name="icon-status-success_circle-filled"
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
        src={productImages[product.image] ?? productCardImage}
      />
      <div className="points-exchange-success-overlay__product-copy">
        <p className="points-exchange-success-overlay__product-title">{product.title}</p>
        <div className="points-exchange-success-overlay__product-meta">
          <div className="points-exchange-success-overlay__price-line">
            <span className="points-exchange-success-overlay__price-amount">{product.price.points}</span>
            <span className="points-exchange-success-overlay__price-unit">积分</span>
            <span className="points-exchange-success-overlay__price-plus">+</span>
            <span className="points-exchange-success-overlay__price-amount">{product.price.cash}</span>
            <span className="points-exchange-success-overlay__price-unit">元</span>
          </div>
          <p className="points-exchange-success-overlay__product-time">{product.time}</p>
        </div>
      </div>
    </article>
  )
}

/* 兑换券码卡：Figma 2299:74606 —— 白卡 p12/r8，行内 flex gap8：
   「兑换券码」14/22 · 券码 16/22 Barlow · 复制 14/22 #1473ff */
function PointsExchangeSuccessRedeemCodeCard({ redeemCode }) {
  return (
    <article className="points-exchange-success-overlay__code-card">
      <p className="points-exchange-success-overlay__code-label">{redeemCode.label}</p>
      <p className="points-exchange-success-overlay__code-value">{redeemCode.code}</p>
      <button className="points-exchange-success-overlay__code-action" type="button">
        {redeemCode.action}
      </button>
    </article>
  )
}

/* 规则卡：与商品详情浮层同构（Figma 73193/73194/75911/75912）——
   白卡 p12/r8，标题 16/500/24，列表 gap8 + 标题距 12，bullet 4×13 底部 r2 #E1E1E1 圆点 */
function PointsExchangeSuccessRuleCard({ ruleCard }) {
  return (
    <article className="points-exchange-success-overlay__rule-card">
      <h2 className="points-exchange-success-overlay__rule-title">{ruleCard.title}</h2>
      <div className="points-exchange-success-overlay__rule-list">
        {ruleCard.items.map((item) => (
          <div className="points-exchange-success-overlay__rule-item" key={item}>
            <span aria-hidden="true" className="points-exchange-success-overlay__rule-bullet" />
            <p className="points-exchange-success-overlay__rule-text">{item}</p>
          </div>
        ))}
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
        {actions.use ? (
          <button
            className={cx(
              'points-exchange-success-overlay__button',
              'points-exchange-success-overlay__button--primary',
            )}
            type="button"
          >
            {actions.use}
          </button>
        ) : null}
      </div>
      <IPhoneFooter className="points-exchange-success-overlay__iphone-footer" />
    </footer>
  )
}

export function PointsExchangeSuccessOverlayPreviewFrame({ data = mockData, variant = 'default' }) {
  const variantData = data.variants ? data.variants[variant] : null
  const merged = variantData ? { ...data, ...variantData } : { ...data }

  return (
    <div className="points-exchange-success-overlay">
      <div className="points-exchange-success-overlay__mask" aria-hidden="true" />
      <IPhoneBar
        className="points-exchange-success-overlay__statusbar"
        tone="light"
        transparent
      />

      <section
        aria-label={merged.pageTitle}
        className={cx(
          'points-exchange-success-overlay__sheet',
          variant === 'code' && 'points-exchange-success-overlay__sheet--tall',
        )}
      >
        <Img alt="" className="points-exchange-success-overlay__sheet-bg" src={sheetBgImage} />
        <button aria-label="关闭" className="points-exchange-success-overlay__close" type="button">
          <GlobalStyleIcon
            className="points-exchange-success-overlay__close-icon"
            name="icon-action-close_large-outlined"
          />
        </button>
        {/* 内容列：Figma 2301:75866/75906 —— top36 left12 w351，纵向 gap20 居中；
            带券码类在此基础上追加券码卡与两张规则卡（子列 gap8） */}
        <div className="points-exchange-success-overlay__content">
          <PointsExchangeSuccessStatus status={merged.status} />
          <div className="points-exchange-success-overlay__content-stack">
            <PointsExchangeSuccessProductCard product={merged.product} />
            {merged.redeemCode ? <PointsExchangeSuccessRedeemCodeCard redeemCode={merged.redeemCode} /> : null}
            {merged.usage ? <PointsExchangeSuccessRuleCard ruleCard={merged.usage} /> : null}
            {merged.purchase ? <PointsExchangeSuccessRuleCard ruleCard={merged.purchase} /> : null}
          </div>
        </div>
        <PointsExchangeSuccessFooter actions={merged.actions} />
      </section>
    </div>
  )
}

export {
  PointsExchangeSuccessProductCard,
  PointsExchangeSuccessRedeemCodeCard,
  PointsExchangeSuccessRuleCard,
  PointsExchangeSuccessStatus,
  variantLabels,
}
