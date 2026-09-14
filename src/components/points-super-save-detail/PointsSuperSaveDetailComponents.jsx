import { IPhoneFooter } from '../common/IPhoneFooter'
import { MobileNavBar } from '../common/MobileNavBar'
import './points-super-save-detail.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function PriceBar() {
  return (
    <div className="points-super-save-price-bar" aria-label="贵必赔价格对比示意">
      <div className="points-super-save-price-bar__row">
        <span>特定平台价格</span>
        <strong>¥ 388</strong>
      </div>
      <div className="points-super-save-price-bar__row points-super-save-price-bar__row--active">
        <span>滴滴企业版价格</span>
        <strong>¥ 368</strong>
      </div>
      <span className="points-super-save-price-bar__badge">低至 ¥368</span>
    </div>
  )
}

function ApplicationFlow() {
  return (
    <div className="points-super-save-application-flow">
      <div className="points-super-save-flow-step">
        <span className="points-super-save-flow-step__number">1</span>
        <div>
          <strong>绑定美团和携程联合会员</strong>
          <p>绑定后才可享受贵必赔保障</p>
        </div>
      </div>
      <div className="points-super-save-flow-line" />
      <div className="points-super-save-flow-step">
        <span className="points-super-save-flow-step__number">2</span>
        <div>
          <strong>确认订单并正常入住</strong>
          <p>订单确认成功后可申请赔付</p>
        </div>
      </div>
      <div className="points-super-save-flow-line" />
      <div className="points-super-save-flow-step">
        <span className="points-super-save-flow-step__number">3</span>
        <div>
          <strong>在订单详情页提交申请</strong>
          <p>提供有效凭证，审核通过后获得赔偿</p>
        </div>
      </div>
    </div>
  )
}

function CompensationCards() {
  return (
    <div className="points-super-save-compensation">
      <div className="points-super-save-compensation-card">
        <span className="points-super-save-compensation-card__icon">企</span>
        <strong>赔给企业</strong>
        <p>企业支付券</p>
      </div>
      <div className="points-super-save-compensation-card">
        <span className="points-super-save-compensation-card__icon">人</span>
        <strong>赔给个人</strong>
        <p>个人支付券</p>
      </div>
    </div>
  )
}

function CouponLocation() {
  return (
    <div className="points-super-save-coupon-location">
      <div className="points-super-save-coupon-location__item">
        <span className="points-super-save-coupon-location__number">1</span>
        <div>
          <strong>个人快车支付券</strong>
          <p>可在「我的-优惠卡券」查看</p>
        </div>
        <span className="points-super-save-coupon-location__tab">我的</span>
      </div>
      <div className="points-super-save-coupon-location__item">
        <span className="points-super-save-coupon-location__number">2</span>
        <div>
          <strong>企业快车支付券</strong>
          <p>可在PC管理后台「尊享卡」查看</p>
        </div>
        <span className="points-super-save-coupon-location__tab">后台</span>
      </div>
    </div>
  )
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
          <span className="points-super-save-category-tabs__badge">{item.badge}</span>
          <span>{item.label}</span>
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
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export function PointsSuperSaveIntroCard({ section }) {
  return (
    <article className="points-super-save-intro-card">
      <header className="points-super-save-intro-card__header">
        <span className="points-super-save-intro-card__number">{section.number}</span>
        <h2>{section.title}</h2>
      </header>
      <div className="points-super-save-intro-card__body">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.tip ? <aside className="points-super-save-intro-card__tip">{section.tip}</aside> : null}
        {section.kind === 'price-compare' ? <PriceBar /> : null}
        {section.kind === 'application' ? <ApplicationFlow /> : null}
        {section.kind === 'compensation' ? <CompensationCards /> : null}
        {section.kind === 'coupon-location' ? <CouponLocation /> : null}
      </div>
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
      <div className="points-super-save-detail__background" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
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
