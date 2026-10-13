import iconCopyImage from '../../assets/points-order-detail/icon-copy.svg'
import iconTransportImage from '../../assets/points-order-detail/icon-transport.svg'
import productChipsImage from '../../assets/points-order-detail/product-chips.png'
import productIqiyiImage from '../../assets/points-order-detail/product-iqiyi.png'
import productRailCouponImage from '../../assets/points-order-detail/product-rail-coupon.png'
import productTeaCouponImage from '../../assets/points-order-detail/product-tea-coupon.png'
import mockData from '../../mock-data/points-order-detail.mock.json'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { MobileNavBar } from '../common/MobileNavBar'
import './points-order-detail.css'

const productImages = {
  iqiyi: productIqiyiImage,
  railCoupon: productRailCouponImage,
  teaCoupon: productTeaCouponImage,
  chips: productChipsImage,
}

const variantLabels = {
  member: '会员卡类',
  benefit: '权益类',
  code: '带券码类',
  physical: '实物商品类',
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function Img({ src, alt = '', className }) {
  return <img alt={alt} className={className} draggable="false" src={src} />
}

/* 地址卡：Figma 2407:36567 —— px12 py16；状态行 icon20 + 状态文字 16/500/24 蓝色 +
   快递单号 14/22 黑84 flex-1 + 复制 icon16；地址与收件人两行紧凑排列 */
function PointsOrderDetailAddressCard({ address }) {
  return (
    <article className="points-order-detail__address-card">
      <div className="points-order-detail__address-main">
        <div className="points-order-detail__address-status-row">
          <div className="points-order-detail__address-status">
            <Img alt="" className="points-order-detail__address-status-icon" src={iconTransportImage} />
            <p className="points-order-detail__address-status-text">{address.status}</p>
          </div>
          <p className="points-order-detail__address-carrier">{address.carrier}</p>
          <button
            aria-label="复制快递单号"
            className="points-order-detail__address-copy"
            type="button"
          >
            <Img alt="" className="points-order-detail__address-copy-icon" src={iconCopyImage} />
          </button>
        </div>
        <div className="points-order-detail__address-lines">
          <p className="points-order-detail__address-detail">{address.detail}</p>
          <p className="points-order-detail__address-contact">
            <span>{address.name}</span>
            <span>{address.phone}</span>
          </p>
        </div>
      </div>
    </article>
  )
}

/* 商品信息卡：兑换成功浮层-商品信息卡片 instance（此处图带 0.5px 边框、价格数字 20px） */
function PointsOrderDetailProductCard({ product }) {
  return (
    <article className="points-order-detail__product-card">
      <Img
        alt=""
        className="points-order-detail__product-image"
        src={productImages[product.image] ?? productIqiyiImage}
      />
      <div className="points-order-detail__product-copy">
        <p className="points-order-detail__product-title">{product.title}</p>
        <div className="points-order-detail__price-line">
          <span className="points-order-detail__price-amount">{product.price.points}</span>
          <span className="points-order-detail__price-unit">积分</span>
          <span className="points-order-detail__price-plus">+</span>
          <span className="points-order-detail__price-amount">{product.price.cash}</span>
          <span className="points-order-detail__price-unit">元</span>
        </div>
      </div>
    </article>
  )
}

/* 信息条三形态：text（默认）/ link（蓝色链接文案）/ button（去使用小按钮）/
   code（券码 + 1px 分割线 + 复制链接） */
function PointsOrderDetailFormRow({ row }) {
  if (row.type === 'code') {
    return (
      <div className="points-order-detail__form-row">
        <p className="points-order-detail__form-label">{row.label}</p>
        <div className="points-order-detail__form-code">
          <p className="points-order-detail__form-value">{row.value}</p>
          <span aria-hidden="true" className="points-order-detail__form-divider" />
          <button className="points-order-detail__form-link-action" type="button">
            {row.action}
          </button>
        </div>
      </div>
    )
  }

  if (row.type === 'button') {
    return (
      <div className="points-order-detail__form-row">
        <p className="points-order-detail__form-label">{row.label}</p>
        <div className="points-order-detail__form-button-slot">
          <button className="points-order-detail__form-button" type="button">
            {row.value}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="points-order-detail__form-row">
      <p className="points-order-detail__form-label">{row.label}</p>
      <p
        className={cx(
          'points-order-detail__form-value',
          row.type === 'link' && 'points-order-detail__form-value--link',
        )}
      >
        {row.value}
      </p>
    </div>
  )
}

/* 表单卡：Figma 2407:36983/36984 —— 白卡 p12/r8，标题 16/500/24 + 信息条列 gap12 */
function PointsOrderDetailFormCard({ form }) {
  return (
    <article className="points-order-detail__form-card">
      <p className="points-order-detail__form-title">{form.title}</p>
      <div className="points-order-detail__form-rows">
        {form.rows.map((row) => (
          <PointsOrderDetailFormRow key={row.label} row={row} />
        ))}
      </div>
    </article>
  )
}

/* 规则卡：商品详情浮层-规则卡 instance —— 标题 16/500/24，条目 gap8，bullet 4×13 */
function PointsOrderDetailRuleCard({ ruleCard }) {
  return (
    <article className="points-order-detail__rule-card">
      <h2 className="points-order-detail__rule-title">{ruleCard.title}</h2>
      <div className="points-order-detail__rule-list">
        {ruleCard.items.map((item) => (
          <div className="points-order-detail__rule-item" key={item}>
            <span aria-hidden="true" className="points-order-detail__rule-bullet" />
            <p className="points-order-detail__rule-text">{item}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export function PointsOrderDetailPreviewFrame({ data = mockData, variant = 'member' }) {
  const variantData = data.variants ? data.variants[variant] : null
  const merged = variantData ? { ...data, ...variantData } : { ...data }

  return (
    <div className="points-order-detail">
      <MobileNavBar
        className="points-order-detail__navbar"
        showRightIcon={false}
        title={merged.navTitle}
      />
      {/* 内容列：Figma 2407:36981/37124/37267/37405 —— top104 left12 w351 纵向 gap8 */}
      <div className="points-order-detail__content">
        {merged.address ? <PointsOrderDetailAddressCard address={merged.address} /> : null}
        <PointsOrderDetailProductCard product={merged.product} />
        {merged.forms.map((form) => (
          <PointsOrderDetailFormCard form={form} key={form.title} />
        ))}
        <PointsOrderDetailRuleCard ruleCard={merged.usage} />
      </div>
      <IPhoneFooter className="points-order-detail__iphone-footer" transparent />
    </div>
  )
}

export {
  PointsOrderDetailAddressCard,
  PointsOrderDetailFormCard,
  PointsOrderDetailProductCard,
  PointsOrderDetailRuleCard,
  variantLabels,
}
