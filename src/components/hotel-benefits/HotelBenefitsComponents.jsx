import brandCardBg from '../../assets/hotel-benefits/brand-card-bg.png'
import coBrandCardBg from '../../assets/hotel-benefits/co-brand-card-bg.png'
import heroBg from '../../assets/hotel-benefits/hero-bg.png'
import sectionTitleBrandIcon from '../../assets/hotel-benefits/section-title-brand.png'
import sectionTitlePlatformIcon from '../../assets/hotel-benefits/section-title-platform.png'
import watermarkImage from '../../assets/hotel-benefits/watermark.png'
import detailHeroBg from '../../assets/hotel-benefits/detail-hero-bg.png'
import detailTitleIconLeft from '../../assets/hotel-benefits/detail-title-icon-left.svg'
import detailTitleIconRight from '../../assets/hotel-benefits/detail-title-icon-right.svg'
import benefitIconPoints from '../../assets/hotel-benefits/benefit-icon-points.svg'
import benefitIconLateCheckout from '../../assets/hotel-benefits/benefit-icon-late-checkout.svg'
import benefitIconBookingHold from '../../assets/hotel-benefits/benefit-icon-booking-hold.svg'
import benefitIconGift from '../../assets/hotel-benefits/benefit-icon-gift.svg'
import benefitIconMemberPoints from '../../assets/hotel-benefits/benefit-icon-member-points.svg'
import benefitIconMemberNights from '../../assets/hotel-benefits/benefit-icon-member-nights.svg'
import benefitIconInstantConfirm from '../../assets/hotel-benefits/benefit-icon-instant-confirm.svg'
import benefitIconBreakfast2 from '../../assets/hotel-benefits/benefit-icon-breakfast-2.svg'
import benefitIconBookingHold2 from '../../assets/hotel-benefits/benefit-icon-booking-hold-2.svg'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './hotel-benefits.css'

const benefitIconImages = {
  'benefit-icon-points': benefitIconPoints,
  'benefit-icon-late-checkout': benefitIconLateCheckout,
  'benefit-icon-booking-hold': benefitIconBookingHold,
  'benefit-icon-gift': benefitIconGift,
  'benefit-icon-member-points': benefitIconMemberPoints,
  'benefit-icon-member-nights': benefitIconMemberNights,
  'benefit-icon-instant-confirm': benefitIconInstantConfirm,
  'benefit-icon-breakfast-2': benefitIconBreakfast2,
  'benefit-icon-booking-hold-2': benefitIconBookingHold2,
}

const sectionTitleIconImages = {
  'section-title-brand': sectionTitleBrandIcon,
  'section-title-platform': sectionTitlePlatformIcon,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

/* 导航栏：Figma 3483:64627 —— 375×92；IPhoneBar light 透明 + 48 高标题行；
   chevron_left_large 24×24 白（left12 top12），标题 16px Medium 白 lh24 居中 */
export function HotelBenefitsNavBar({ title }) {
  return (
    <header className="hotel-benefits-nav">
      <IPhoneBar
        className="hotel-benefits-nav__statusbar"
        reserveSpace
        transparent
        tone="light"
      />
      <div className="hotel-benefits-nav__bar">
        <button aria-label="返回" className="hotel-benefits-nav__back" type="button">
          <GlobalStyleIcon
            className="hotel-benefits-nav__back-icon"
            name="icon-directional-chevron_left_large-outlined"
          />
        </button>
        <h2 className="hotel-benefits-nav__title">{title}</h2>
      </div>
    </header>
  )
}

/* 栏目标题：24×24 icon + 16px Medium #d9e2ee lh24，gap6 */
export function HotelBenefitsSectionTitle({ icon, title }) {
  return (
    <div className="hotel-benefits-section-title">
      <img
        alt=""
        className="hotel-benefits-section-title__icon"
        src={sectionTitleIconImages[icon]}
      />
      <h3 className="hotel-benefits-section-title__text">{title}</h3>
    </div>
  )
}

/* 品牌权益卡：Figma 3483:64733 —— 351×122；白 1px 边框 r8 p12 flex-col gap10 overflow-clip；
   标题 20px Medium 黑84 lh28 + chevron_right_small 20×20 gap4；
   权益行 gap8，每项 flex-1 flex-col gap2：icon 容器 p6 r13.714 渐变玻璃 + 24×24 icon，label 12px/20 黑84 */
export function HotelBenefitsBrandCard({ card }) {
  return (
    <article className="hotel-benefits-brand-card">
      <div className="hotel-benefits-brand-card__head">
        <h4 className="hotel-benefits-brand-card__name">{card.name}</h4>
        <GlobalStyleIcon
          className="hotel-benefits-brand-card__chevron"
          name="icon-directional-chevron_right_small-outlined"
        />
      </div>
      <div className="hotel-benefits-brand-card__benefits">
        {card.benefits.map((benefit) => (
          <div className="hotel-benefits-brand-card__benefit" key={benefit.label}>
            <span className="hotel-benefits-brand-card__benefit-icon-wrap">
              <img
                alt=""
                className="hotel-benefits-brand-card__benefit-icon"
                src={benefitIconImages[benefit.icon]}
              />
            </span>
            <p className="hotel-benefits-brand-card__benefit-label">{benefit.label}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

/* 联登权益卡：Figma 3483:64995 —— 171.5×94；白边框 r8 p12 flex-col gap8；
   文本块（标题 14px Medium #061014 lh22 + gap4 + 副题两项 12px #20304d gap8）；
   绑定按钮文档流右对齐（0.5px 白边 r4 pl6 pr4 + caret_right 8px） */
export function HotelBenefitsPlatformCard({ card }) {
  return (
    <article className="hotel-benefits-platform-card">
      <div className="hotel-benefits-platform-card__text">
        <h4 className="hotel-benefits-platform-card__title">{card.title}</h4>
        <div className="hotel-benefits-platform-card__subtitle">
          {card.subtitle.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className="hotel-benefits-platform-card__action-row">
        <button className="hotel-benefits-platform-card__action" type="button">
          <span>{card.action}</span>
          <GlobalStyleIcon
            className="hotel-benefits-platform-card__action-icon"
            name="icon-directional-caret_right-filled"
          />
        </button>
      </div>
    </article>
  )
}

/* 吸底操作区：Figma 3483:64922 —— 375×98；#070a1f + 顶部投影；两按钮 flex-1 gap8 px20 py12 r8 16px Medium lh24 */
export function HotelBenefitsFooterActions({ buttons }) {
  return (
    <div className="hotel-benefits-footer-actions">
      {buttons.map((button) => (
        <button
          className={cx(
            'hotel-benefits-footer-actions__button',
            button.variant === 'primary' &&
              'hotel-benefits-footer-actions__button--primary',
          )}
          key={button.id}
          type="button"
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

/* ============ 主页面（暗色 #070a1f，375×980） ============ */
export function HotelBenefitsPreviewFrame({ data }) {
  return (
    <div
      className="hotel-benefits"
      style={data.frameHeight ? { height: data.frameHeight } : undefined}
    >
      <img
        alt=""
        aria-hidden="true"
        className="hotel-benefits__hero"
        src={heroBg}
      />
      <HotelBenefitsNavBar title={data.navTitle} />
      <div className="hotel-benefits__content">
        {data.sections.map((section) => (
          <section className="hotel-benefits__section" key={section.id}>
            <HotelBenefitsSectionTitle icon={section.icon} title={section.title} />
            {section.id === 'platform' ? (
              <div className="hotel-benefits__platform-cards">
                {section.cards.map((card) => (
                  <HotelBenefitsPlatformCard card={card} key={card.id} />
                ))}
              </div>
            ) : (
              <div className="hotel-benefits__brand-cards">
                {section.cards.map((card) => (
                  <HotelBenefitsBrandCard card={card} key={card.id} />
                ))}
              </div>
            )}
          </section>
        ))}
        <div className="hotel-benefits__watermark">
          <img alt="" aria-hidden="true" src={watermarkImage} />
        </div>
      </div>
      <div className="hotel-benefits-bottom">
        <HotelBenefitsFooterActions buttons={data.footerButtons} />
        <IPhoneFooter className="hotel-benefits__iphone-footer" transparent />
      </div>
    </div>
  )
}

/* ============ 权益详情页（浅色 #f5f7fa，375×812） ============ */

/* 详情页导航：头图上白字状态栏 + 居中标题 18px Medium 白 lh26 */
export function HotelBenefitsDetailNavBar({ title }) {
  return (
    <header className="hotel-benefits-detail-nav">
      <IPhoneBar
        className="hotel-benefits-detail-nav__statusbar"
        reserveSpace
        transparent
        tone="light"
      />
      <div className="hotel-benefits-detail-nav__bar">
        <button aria-label="返回" className="hotel-benefits-detail-nav__back" type="button">
          <GlobalStyleIcon
            className="hotel-benefits-detail-nav__back-icon"
            name="icon-directional-chevron_left_large-outlined"
          />
        </button>
        <h2 className="hotel-benefits-detail-nav__title">{title}</h2>
      </div>
    </header>
  )
}

/* 会员权益表格：5 列 —— 表头 5 个档位 title 样式；数据行 = 权益名 + 4 值；
   单元格 p8 flex-1 居中 0.5px rgba(0,0,0,0.12) 边框（末行去底边、末列去右边） */
export function HotelBenefitsDetailTable({ tiers, benefitRows }) {
  return (
    <div className="hotel-benefits-detail-table">
      <div className="hotel-benefits-detail-table__row">
        {tiers.map((tier) => (
          <span
            className="hotel-benefits-detail-table__cell hotel-benefits-detail-table__cell--title"
            key={tier}
          >
            {tier}
          </span>
        ))}
      </div>
      {benefitRows.map((row) => (
        <div className="hotel-benefits-detail-table__row" key={row.name}>
          <span className="hotel-benefits-detail-table__cell hotel-benefits-detail-table__cell--title">
            {row.name}
          </span>
          {row.values.map((value, index) => (
            <span className="hotel-benefits-detail-table__cell" key={index}>
              {value}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

/* 入住礼遇表格：首行「入住礼遇」跨 2 列标题 + 3 行 × 2 值，同款边框 r6 */
export function HotelBenefitsDetailHospitalityTable({ hospitalityRows }) {
  return (
    <div className="hotel-benefits-hospitality-table">
      {hospitalityRows.map((row, index) => (
        <div className="hotel-benefits-hospitality-table__row" key={index}>
          {row.name ? (
            <span className="hotel-benefits-hospitality-table__cell hotel-benefits-hospitality-table__cell--title hotel-benefits-hospitality-table__cell--span">
              {row.name}
            </span>
          ) : (
            row.values.map((value, cellIndex) => (
              <span className="hotel-benefits-hospitality-table__cell" key={cellIndex}>
                {value}
              </span>
            ))
          )}
        </div>
      ))}
    </div>
  )
}

/* 详情页整页：头图 375×280 → 导航 → 介绍卡（351×160 渐变玻璃）→ 权益卡（351 白底）→ 页脚 */
export function HotelBenefitsDetailPreviewFrame({ data }) {
  return (
    <div
      className="hotel-benefits-detail"
      style={data.frameHeight ? { height: data.frameHeight } : undefined}
    >
      <img
        alt=""
        aria-hidden="true"
        className="hotel-benefits-detail__hero"
        src={detailHeroBg}
      />
      <HotelBenefitsDetailNavBar title={data.navTitle} />
      <div className="hotel-benefits-detail__content">
        <section className="hotel-benefits-detail__group-intro">
          {data.groupIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        <section className="hotel-benefits-detail__benefit-card">
          <div className="hotel-benefits-detail__benefit-card-head">
            <img
              alt=""
              className="hotel-benefits-detail__title-icon"
              src={detailTitleIconLeft}
            />
            <h3 className="hotel-benefits-detail__card-title">{data.cardTitle}</h3>
            <img
              alt=""
              className="hotel-benefits-detail__title-icon"
              src={detailTitleIconRight}
            />
          </div>
          <HotelBenefitsDetailTable
            benefitRows={data.benefitRows}
            tiers={data.tiers}
          />
          <HotelBenefitsDetailHospitalityTable
            hospitalityRows={data.hospitalityRows}
          />
        </section>
      </div>
      <IPhoneFooter className="hotel-benefits-detail__iphone-footer" transparent />
    </div>
  )
}

export default HotelBenefitsPreviewFrame
