import { IPhoneFooter } from '../common/IPhoneFooter'
import { MobileNavBar } from '../common/MobileNavBar'
import pageBg from '../../assets/points-super-save-detail/page-bg@3x.png'
import priceHero from '../../assets/points-super-save-detail/price-hero@3x.png'
import priceTable from '../../assets/points-super-save-detail/price-table@3x.png'
import applyStep1 from '../../assets/points-super-save-detail/apply-step-1@3x.png'
import applyStep2 from '../../assets/points-super-save-detail/apply-step-2@3x.png'
import applyConditions from '../../assets/points-super-save-detail/apply-conditions@3x.png'
import couponViewPersonal from '../../assets/points-super-save-detail/coupon-view-personal@3x.png'
import couponViewEnterprise from '../../assets/points-super-save-detail/coupon-view-enterprise@3x.png'
import iconTabTravel from '../../assets/points-super-save-detail/icon-tab-travel.svg'
import iconTabHotel from '../../assets/points-super-save-detail/icon-tab-hotel.svg'
import iconTabFlight from '../../assets/points-super-save-detail/icon-tab-flight.svg'
import iconTabArrow from '../../assets/points-super-save-detail/icon-tab-arrow.svg'
import iconBenefitActive from '../../assets/points-super-save-detail/icon-benefit-active.svg'
import iconCompare from '../../assets/points-super-save-detail/icon-compare.svg'
import iconConditionTime from '../../assets/points-super-save-detail/icon-condition-time.svg'
import iconConditionPlatform from '../../assets/points-super-save-detail/icon-condition-platform.svg'
import iconConditionHotel from '../../assets/points-super-save-detail/icon-condition-hotel.svg'
import iconConditionIdentity from '../../assets/points-super-save-detail/icon-condition-identity.svg'
import iconCarBlue from '../../assets/points-super-save-detail/icon-car-blue.svg'
import iconCarOrange from '../../assets/points-super-save-detail/icon-car-orange.svg'
import iconDividerBlue from '../../assets/points-super-save-detail/icon-divider-blue.svg'
import iconDividerOrange from '../../assets/points-super-save-detail/icon-divider-orange.svg'
import iconBadgeArrow from '../../assets/points-super-save-detail/icon-badge-arrow.svg'
import priceRow31 from '../../assets/points-super-save-detail/price-row-31.svg'
import priceRow50 from '../../assets/points-super-save-detail/price-row-50.svg'
import notchBlueA from '../../assets/points-super-save-detail/notch-blue-a.svg'
import notchBlueB from '../../assets/points-super-save-detail/notch-blue-b.svg'
import notchWarmA from '../../assets/points-super-save-detail/notch-warm-a.svg'
import notchWarmB from '../../assets/points-super-save-detail/notch-warm-b.svg'
import connector1 from '../../assets/points-super-save-detail/connector-1.svg'
import connector2 from '../../assets/points-super-save-detail/connector-2.svg'
import connector3 from '../../assets/points-super-save-detail/connector-3.svg'
import './points-super-save-detail.css'

const CONDITION_ICONS = {
  time: iconConditionTime,
  platform: iconConditionPlatform,
  hotel: iconConditionHotel,
  identity: iconConditionIdentity,
}

const CATEGORY_TAB_ICONS = {
  travel: iconTabTravel,
  hotel: iconTabHotel,
  flight: iconTabFlight,
}

const STEP_IMAGES = {
  'apply-step-1': applyStep1,
  'apply-step-2': applyStep2,
  'apply-conditions': applyConditions,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function Rich({ parts }) {
  return parts.map((part, index) =>
    part.bold ? (
      <strong key={index}>{part.text}</strong>
    ) : (
      <span key={index}>{part.text}</span>
    ),
  )
}

function SectionHeader({ number, title }) {
  return (
    <header className="points-super-save-section__header">
      <span className="points-super-save-section__number">{number}</span>
      <h2 className="points-super-save-section__title">{title}</h2>
    </header>
  )
}

function PriceCompareBlock({ block }) {
  return (
    <div className="points-super-save-price">
      <img
        className="points-super-save-price__hero"
        src={priceHero}
        alt="贵必赔权益票券示意"
      />
      <div className="points-super-save-price__panel">
        <div className="points-super-save-price__head">
          <span className="points-super-save-price__head-title">
            <img src={iconCompare} alt="" />
            {block.panelTitle}
          </span>
          <p className="points-super-save-price__desc">
            <Rich parts={block.panelRich} />
          </p>
        </div>
        <div className="points-super-save-price__table">
          <img className="points-super-save-price__table-bg" src={priceTable} alt="" />
          <div className="points-super-save-price__cols">
            <div className="points-super-save-price__col">
              <span className="points-super-save-price__pill points-super-save-price__pill--low">
                <img src={priceRow31} alt="" />
                <em>{block.labelOther}</em>
              </span>
            </div>
            <div className="points-super-save-price__col">
              <span className="points-super-save-price__badge">
                {block.badge}
                <img src={iconBadgeArrow} alt="" />
              </span>
              <span className="points-super-save-price__pill points-super-save-price__pill--high">
                <img src={priceRow50} alt="" />
                <em>{block.labelDidi}</em>
              </span>
            </div>
          </div>
          <i className="points-super-save-price__divider" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

function ApplyStepsBlock({ block }) {
  return (
    <div className="points-super-save-apply">
      {block.steps.map((step) => (
        <section className="points-super-save-apply-step" key={step.number}>
          <div className="points-super-save-apply-step__title">
            <span className="points-super-save-apply-step__chip">{step.number}</span>
            <p>
              <Rich parts={step.titleRich} />
            </p>
          </div>
          {step.descRich ? (
            <p className="points-super-save-apply-step__desc">
              <Rich parts={step.descRich} />
            </p>
          ) : null}
          {step.tip ? (
            <p className="points-super-save-apply-step__tip">{step.tip}</p>
          ) : null}
          {step.conditions ? (
            <div className="points-super-save-conditions">
              <ul className="points-super-save-conditions__list">
                {step.conditions.map((item) => (
                  <li className="points-super-save-conditions__item" key={item.title}>
                    <span className="points-super-save-conditions__title">
                      <img src={CONDITION_ICONS[item.icon]} alt="" />
                      {item.title}
                    </span>
                    <div className="points-super-save-conditions__lines">
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {step.finalRich ? (
            <p className="points-super-save-apply-step__desc points-super-save-apply-step__desc--final">
              <Rich parts={step.finalRich} />
            </p>
          ) : null}
          {step.image ? (
            <img
              className={cx(
                'points-super-save-apply-step__image',
                step.imageClass && `points-super-save-apply-step__image--${step.imageClass}`,
              )}
              src={STEP_IMAGES[step.image]}
              alt={step.imageAlt || ''}
            />
          ) : null}
        </section>
      ))}
      <img className="points-super-save-apply-step__connector points-super-save-apply-step__connector--1" src={connector1} alt="" />
      <img className="points-super-save-apply-step__connector points-super-save-apply-step__connector--2" src={connector2} alt="" />
      <img className="points-super-save-apply-step__connector points-super-save-apply-step__connector--3" src={connector3} alt="" />
    </div>
  )
}

function CouponCardsBlock({ block }) {
  return (
    <div className="points-super-save-coupons">
      <p className="points-super-save-coupon-intro">
        <Rich parts={block.intro} />
      </p>
      <div className="points-super-save-coupon-cards">
        {block.cards.map((card) => (
          <div className="points-super-save-coupon-card-wrap" key={card.label}>
            <span
              className={cx(
                'points-super-save-coupon-card',
                `points-super-save-coupon-card--${card.tone}`,
              )}
            >
              <i className="points-super-save-coupon-card__chip">
                <img src={card.tone === 'blue' ? iconCarBlue : iconCarOrange} alt="" />
              </i>
              <b className="points-super-save-coupon-card__amount">
                <span className="points-super-save-coupon-card__currency">¥</span>
                {card.amount}
              </b>
              <img className="points-super-save-coupon-card__divider" src={card.tone === 'blue' ? iconDividerBlue : iconDividerOrange} alt="" />
              <span className="points-super-save-coupon-card__label">{card.label}</span>
              {card.tone === 'blue' ? (
                <>
                  <img className="points-super-save-coupon-card__notch points-super-save-coupon-card__notch--top" src={notchBlueA} alt="" />
                  <img className="points-super-save-coupon-card__notch points-super-save-coupon-card__notch--bottom" src={notchBlueB} alt="" />
                </>
              ) : (
                <>
                  <img className="points-super-save-coupon-card__notch points-super-save-coupon-card__notch--top" src={notchWarmA} alt="" />
                  <img className="points-super-save-coupon-card__notch points-super-save-coupon-card__notch--bottom" src={notchWarmB} alt="" />
                </>
              )}
            </span>
            <span className="points-super-save-coupon-card__count">{card.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CouponViewBlock({ block }) {
  return (
    <div className="points-super-save-coupon-view">
      <p>{block.textTop}</p>
      <div className="points-super-save-coupon-view__images">
        <img src={couponViewPersonal} alt="个人快车支付券查看路径示意" />
        <img src={couponViewEnterprise} alt="企业快车支付券查看路径示意" />
      </div>
      <p>{block.textBottom}</p>
    </div>
  )
}

const BLOCK_RENDERERS = {
  paragraph: (block) => (
    <p className="points-super-save-section__paragraph">
      <Rich parts={block.rich} />
    </p>
  ),
  priceCompare: (block) => <PriceCompareBlock block={block} />,
  applySteps: (block) => <ApplyStepsBlock block={block} />,
  couponCards: (block) => <CouponCardsBlock block={block} />,
  couponView: (block) => <CouponViewBlock block={block} />,
}

export function PointsSuperSaveCategoryTabs({ items = [] }) {
  return (
    <nav className="points-super-save-category-tabs" aria-label="超级省品类导航">
      {items.map((item) => (
        <button
          className={cx(
            'points-super-save-category-tabs__item',
            item.active && 'points-super-save-category-tabs__item--active',
          )}
          key={item.label}
          type="button"
        >
          <span className="points-super-save-category-tabs__head">
            <img src={CATEGORY_TAB_ICONS[item.icon]} alt="" />
            <span className="points-super-save-category-tabs__name">{item.label}</span>
          </span>
          <span className="points-super-save-category-tabs__meta">
            <b>{item.count}</b>
            <i>项</i>
            <span>企业权益</span>
          </span>
          {item.active ? <img className="points-super-save-category-tabs__arrow" src={iconTabArrow} alt="" /> : null}
        </button>
      ))}
    </nav>
  )
}

export function PointsSuperSaveBenefitTabs({ items = [] }) {
  return (
    <nav className="points-super-save-benefit-tabs" aria-label="超级省权益导航">
      {items.map((item) => (
        <button
          className={cx(
            'points-super-save-benefit-tabs__item',
            item.active && 'points-super-save-benefit-tabs__item--active',
          )}
          key={item.label}
          type="button"
        >
          <span className="points-super-save-benefit-tabs__label">{item.label}</span>
          {item.active ? (
            <img className="points-super-save-benefit-tabs__indicator" src={iconBenefitActive} alt="" />
          ) : null}
        </button>
      ))}
    </nav>
  )
}

export function PointsSuperSaveIntroCard({ section }) {
  return (
    <article className="points-super-save-section">
      <SectionHeader number={section.number} title={section.title} />
      {section.blocks.map((block, index) => {
        const render = BLOCK_RENDERERS[block.type]
        return render ? (
          <div className="points-super-save-section__block" key={index}>
            {render(block)}
          </div>
        ) : null
      })}
    </article>
  )
}

export function PointsSuperSaveRuleList({ rules = [] }) {
  return (
    <section className="points-super-save-rules">
      <h2 className="points-super-save-rules__title">详细规则</h2>
      <div className="points-super-save-rules__list">
        {rules.map((rule) => (
          <article className="points-super-save-rule" key={rule.title}>
            <h3>{rule.title}</h3>
            <p>{rule.content}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function PointsSuperSaveDetailFrame({ data }) {
  return (
    <div className="points-super-save-detail-shell">
      <MobileNavBar
        className="points-super-save-detail__nav"
        showRightIcon={false}
        showTitle={false}
        statusBarTone="dark"
        transparent
      />
      <img className="points-super-save-detail__background" src={pageBg} alt="" aria-hidden="true" />
      <main className="points-super-save-detail__content">
        <PointsSuperSaveCategoryTabs items={data.categoryTabs} />
        <PointsSuperSaveBenefitTabs items={data.benefitTabs} />
        <div className="points-super-save-detail__intro-list">
          {data.introSections.map((section) => (
            <PointsSuperSaveIntroCard key={section.number} section={section} />
          ))}
        </div>
        <PointsSuperSaveRuleList rules={data.rules} />
      </main>
      <IPhoneFooter className="points-super-save-detail__footer" transparent />
    </div>
  )
}