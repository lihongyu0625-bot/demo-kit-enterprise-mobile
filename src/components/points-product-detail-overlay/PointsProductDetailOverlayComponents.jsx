import { Fragment } from 'react'
import heroImage from '../../assets/points-product-detail-overlay/hero.png'
import checkWhite from '../../assets/points-product-detail-overlay/check-white.svg'
import radioProtocol from '../../assets/points-product-detail-overlay/addr-radio-protocol.svg'
import radioSelected from '../../assets/points-product-detail-overlay/addr-radio-selected.svg'
import radioUnselected from '../../assets/points-product-detail-overlay/addr-radio-unselected.svg'
import optionFastCoupon from '../../assets/points-product-detail-overlay/option-fast-coupon.png'
import optionHotelCoupon from '../../assets/points-product-detail-overlay/option-hotel-coupon.png'
import optionVipLounge from '../../assets/points-product-detail-overlay/option-vip-lounge.png'
import packageTicket2 from '../../assets/points-product-detail-overlay/ticket-2.png'
import mockData from '../../mock-data/points-product-detail-overlay.mock.json'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './points-product-detail-overlay.css'

const optionImages = {
  'fast-coupon': optionFastCoupon,
  'hotel-coupon': optionHotelCoupon,
  'vip-lounge': optionVipLounge,
}

const variantLabels = {
  default: '默认',
  link: '商品带跳转',
  select: '商品选择',
  physical: '实物商品',
  'physical-empty': '实物商品-未添加地址',
  'address-list': '收货地址列表',
  'address-new-empty': '新增地址-未填写',
  'address-new-filled': '新增地址-已填写',
}

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
      <div className="points-product-detail-overlay__package-media">
        <Img alt="" className="points-product-detail-overlay__package-image" src={image} />
        {item.badge ? <span className="points-product-detail-overlay__package-badge">{item.badge}</span> : null}
      </div>
      <div className="points-product-detail-overlay__package-copy">
        <p className="points-product-detail-overlay__package-name">{item.name}</p>
        {item.desc ? <p className="points-product-detail-overlay__package-desc">{item.desc}</p> : null}
        {item.link ? (
          <button className="points-product-detail-overlay__package-link" type="button">
            <span>{item.link}</span>
            <GlobalStyleIcon
              className="points-product-detail-overlay__package-link-icon"
              name="icon-directional-chevron_right_small-outlined"
            />
          </button>
        ) : null}
      </div>
    </div>
  )
}

function SelectOptionCard({ option }) {
  return (
    <div
      aria-pressed={option.selected ? 'true' : 'false'}
      className={cx(
        'points-product-detail-overlay__option',
        option.selected && 'points-product-detail-overlay__option--selected',
      )}
      role="button"
    >
      <Img
        alt={option.label}
        className="points-product-detail-overlay__option-image"
        src={optionImages[option.image]}
      />
      <p className="points-product-detail-overlay__option-label">{option.label}</p>
      {option.selected ? (
        <span className="points-product-detail-overlay__option-check" aria-hidden="true">
          <Img className="points-product-detail-overlay__option-check-icon" src={checkWhite} />
        </span>
      ) : null}
    </div>
  )
}

function AddressCard({ item }) {
  return (
    <article className="points-product-detail-overlay__address-card">
      <Img
        alt=""
        className="points-product-detail-overlay__address-radio"
        src={item.selected ? radioSelected : radioUnselected}
      />
      <div className="points-product-detail-overlay__address-copy">
        <div className="points-product-detail-overlay__address-head">
          <p className="points-product-detail-overlay__address-name">{item.name}</p>
          <p className="points-product-detail-overlay__address-phone">{item.phone}</p>
        </div>
        <p className="points-product-detail-overlay__address-text">{item.text}</p>
      </div>
      <button aria-label="编辑地址" className="points-product-detail-overlay__address-edit" type="button">
        <GlobalStyleIcon name="icon-action-edit_underline-outlined" />
      </button>
    </article>
  )
}

function AddressFieldRow({ row }) {
  return (
    <div className="points-product-detail-overlay__form-row">
      <span className="points-product-detail-overlay__form-label">{row.label}</span>
      <div className="points-product-detail-overlay__form-value">
        {row.value ? (
          <p className="points-product-detail-overlay__form-text">{row.value}</p>
        ) : (
          <p className="points-product-detail-overlay__form-placeholder">{row.placeholder}</p>
        )}
        {row.locate ? (
          <button className="points-product-detail-overlay__form-locate" type="button">
            <GlobalStyleIcon name="icon-travel-destination-filled" />
            <span>{row.locate}</span>
          </button>
        ) : null}
      </div>
    </div>
  )
}

function SheetTitleBar({ title }) {
  return (
    <header className="points-product-detail-overlay__sheet-title">
      <h2 className="points-product-detail-overlay__sheet-title-text">{title}</h2>
      <button aria-label="关闭" className="points-product-detail-overlay__close points-product-detail-overlay__close--bar" type="button">
        <GlobalStyleIcon className="points-product-detail-overlay__close-icon" name="icon-action-close_large-outlined" />
      </button>
    </header>
  )
}

function ProductDetailBody({ data }) {
  const packageImages = [packageTicket2, packageTicket2]

  return (
    <main className="points-product-detail-overlay__content">
      <DetailCard className="points-product-detail-overlay__card--summary">
        <PriceLine price={data.price} />
        <p className="points-product-detail-overlay__summary">{data.summary}</p>
      </DetailCard>

      {data.package ? (
        <DetailCard>
          <h3 className="points-product-detail-overlay__section-title">{data.package.title}</h3>
          <div className="points-product-detail-overlay__package-list">
            {data.package.items.map((item, index) => (
              <PackageItem image={packageImages[index % packageImages.length]} item={item} key={item.name} />
            ))}
          </div>
        </DetailCard>
      ) : null}

      {data.selection ? (
        <DetailCard>
          <h3 className="points-product-detail-overlay__section-title">{data.selection.title}</h3>
          <div className="points-product-detail-overlay__option-grid">
            {data.selection.options.map((option) => (
              <SelectOptionCard key={option.label} option={option} />
            ))}
          </div>
        </DetailCard>
      ) : null}

      {data.address !== undefined ? (
        data.address ? (
          <DetailCard className="points-product-detail-overlay__card--address">
            <div className="points-product-detail-overlay__address-line">
              <GlobalStyleIcon
                className="points-product-detail-overlay__address-icon"
                name="icon-file-link-outlined"
              />
              <div className="points-product-detail-overlay__address-line-copy">
                <p className="points-product-detail-overlay__address-line-text">{data.address.text}</p>
                <p className="points-product-detail-overlay__address-line-meta">
                  {data.address.name} · {data.address.phone}
                </p>
              </div>
            </div>
            <GlobalStyleIcon
              className="points-product-detail-overlay__address-chevron"
              name="icon-directional-chevron_right_small-outlined"
            />
          </DetailCard>
        ) : (
          <DetailCard className="points-product-detail-overlay__card--address-empty">
            <GlobalStyleIcon name="icon-action-add-outlined" />
            <span>添加收货地址</span>
          </DetailCard>
        )
      ) : null}

      <DetailCard>
        <h3 className="points-product-detail-overlay__section-title">{data.usage.title}</h3>
        <RuleList items={data.usage.items} />
      </DetailCard>

      <DetailCard>
        <h3 className="points-product-detail-overlay__section-title">{data.purchase.title}</h3>
        <RuleList items={data.purchase.items} />
      </DetailCard>
    </main>
  )
}

function AddressSheetBody({ data }) {
  return (
    <div className="points-product-detail-overlay__address-list">
      {data.list.map((item) => (
        <AddressCard item={item} key={`${item.name}-${item.text}`} />
      ))}
    </div>
  )
}

function AddressFormBody({ data }) {
  return (
    <div className="points-product-detail-overlay__form">
      {data.rows.map((row, index) => (
        <Fragment key={row.label}>
          {index > 0 ? <div aria-hidden="true" className="points-product-detail-overlay__form-divider" /> : null}
          <AddressFieldRow row={row} />
        </Fragment>
      ))}
    </div>
  )
}

export function PointsProductDetailOverlayPreviewFrame({ data = mockData, variant = 'default' }) {
  const variantData = data.variants ? data.variants[variant] : null
  const merged = variantData ? { ...data, ...variantData } : { ...data }
  const isAddressForm = variant === 'address-new-empty' || variant === 'address-new-filled'
  const isAddressList = variant === 'address-list'

  // 地址类浮层无商品头图，sheet 从标题栏起始
  if (isAddressList || isAddressForm) {
    return (
      <div className="points-product-detail-overlay points-product-detail-overlay--address">
        <div className="points-product-detail-overlay__mask" aria-hidden="true" />
        <IPhoneBar className="points-product-detail-overlay__statusbar" tone="light" transparent />
        <section className="points-product-detail-overlay__sheet points-product-detail-overlay__sheet--address" aria-label={merged.pageTitle}>
          <SheetTitleBar title={merged.title || '收货地址'} />
          {isAddressList ? <AddressSheetBody data={merged} /> : <AddressFormBody data={merged} />}
          <footer className="points-product-detail-overlay__footer-dock points-product-detail-overlay__footer-dock--address">
            {isAddressList ? (
              <div className="points-product-detail-overlay__cta-wrap points-product-detail-overlay__cta-wrap--address">
                <button className="points-product-detail-overlay__cta points-product-detail-overlay__cta--secondary" type="button">
                  {merged.addLabel}
                </button>
              </div>
            ) : (
              <>
                <div className="points-product-detail-overlay__protocol">
                  <Img alt="" className="points-product-detail-overlay__protocol-radio" src={radioProtocol} />
                  <p className="points-product-detail-overlay__protocol-text">{merged.protocol}</p>
                </div>
                <div className="points-product-detail-overlay__cta-wrap points-product-detail-overlay__cta-wrap--address">
                  <button className="points-product-detail-overlay__cta points-product-detail-overlay__cta--primary" type="button">
                    {merged.submitLabel}
                  </button>
                </div>
              </>
            )}
            <IPhoneFooter className="points-product-detail-overlay__footer" />
          </footer>
        </section>
      </div>
    )
  }

  // 商品类浮层（default/link/select/physical/physical-empty）：hero 起始
  const productData = { ...merged }
  if (productData.hidePackage) {
    delete productData.package
  }
  if (variant === 'physical-empty') {
    // physical-empty 显式置 address 为 null（mock 已是 null，双保险）
    productData.address = productData.address ?? null
  }
  // default 变体不注入 address 字段，避免误渲染地址卡
  if (variant === 'default' || variant === 'link' || variant === 'select') {
    delete productData.address
  }
  // select 变体用商品选择卡替代套餐卡（设计证据 2321:44503：价格卡+选择卡+两规则卡，无套餐卡）
  if (variant === 'select') {
    delete productData.package
  }

  return (
    <div className="points-product-detail-overlay">
      <div className="points-product-detail-overlay__mask" aria-hidden="true" />
      <IPhoneBar className="points-product-detail-overlay__statusbar" tone="light" transparent />

      <section className="points-product-detail-overlay__sheet" aria-label={productData.pageTitle}>
        <div className="points-product-detail-overlay__hero">
          <Img alt="" className="points-product-detail-overlay__hero-image" src={heroImage} />
          <button aria-label="关闭" className="points-product-detail-overlay__close" type="button">
            <GlobalStyleIcon
              className="points-product-detail-overlay__close-icon"
              name="icon-action-close_large-outlined"
            />
          </button>
        </div>

        <ProductDetailBody data={productData} />
      </section>

      {/* 吸底占位：把 dock 的正常流位置推到总高末端（1268 = 1328 总高 - 60 dock 高）。
          不能用 dock 自身 margin-top 实现同一几何——sticky 元素的大正值 margin 会让它
          恒无位移需求、全程不吸附（CDP 实测），占位元素则全程 sticky 吸底 */}
      <div aria-hidden="true" className="points-product-detail-overlay__dock-spacer" />

      <footer className="points-product-detail-overlay__footer-dock">
        <div className="points-product-detail-overlay__cta-wrap">
          <button className="points-product-detail-overlay__cta" type="button">
            {productData.cta}
          </button>
        </div>
        <IPhoneFooter className="points-product-detail-overlay__footer" />
      </footer>
    </div>
  )
}

export {
  AddressCard,
  AddressFieldRow,
  PackageItem,
  ProductDetailBody,
  SelectOptionCard,
  SheetTitleBar,
  variantLabels,
}
