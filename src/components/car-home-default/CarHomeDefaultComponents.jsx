import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { PageBottomNav } from '../common/PageBottomNav'
import policyCommuteImage from '../../assets/car-home-default/policy-commute.png'
import policyDriveImage from '../../assets/car-home-default/policy-drive.png'
import heroBackgroundImage from '../../assets/car-home-default/hero-background.png'
import operationsImage from '../../assets/car-home-default/operations-area.png'
import policyOvertimeImage from '../../assets/car-home-default/policy-overtime.png'
import policyPersonalImage from '../../assets/car-home-default/policy-personal.png'
import quickBenefitImage from '../../assets/car-home-default/quick-benefit.png'
import quickChauffeurImage from '../../assets/car-home-default/quick-chauffeur.png'
import quickFlightImage from '../../assets/car-home-default/quick-flight.png'
import quickHotelImage from '../../assets/car-home-default/quick-hotel.png'
import quickTrainImage from '../../assets/car-home-default/quick-train.png'
import v6MemberTagImage from '../../assets/car-home-default/v6-member-tag.png'
import { DirectionalIcon } from '../common/DirectionalIcon'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import './car-home-default.css'

const policyIconMap = {
  commute: policyCommuteImage,
  drive: policyDriveImage,
  overtime: policyOvertimeImage,
  personal: policyPersonalImage,
}

const quickActionIconMap = {
  benefit: quickBenefitImage,
  chauffeur: quickChauffeurImage,
  flight: quickFlightImage,
  hotel: quickHotelImage,
  train: quickTrainImage,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function CarHomeDirectionalIcon({ className, name }) {
  return (
    <DirectionalIcon
      className={className}
      name={name}
    />
  )
}

function CarHomeGlobalIcon({ className, name }) {
  return (
    <GlobalStyleIcon
      className={className}
      name={name}
    />
  )
}

function CarHomeDefaultPolicyCard({ item }) {
  return (
    <article className="car-home-default-policy-card">
      <img
        alt=""
        className="car-home-default-policy-card__icon"
        src={policyIconMap[item.icon]}
      />
      <span className="car-home-default-policy-card__label">{item.label}</span>
    </article>
  )
}

function CarHomeDefaultQuickActionItem({ item }) {
  return (
    <div className="car-home-default-quick-action">
      <img
        alt=""
        className="car-home-default-quick-action__icon"
        src={quickActionIconMap[item.icon]}
      />
      <span className="car-home-default-quick-action__label">{item.label}</span>
    </div>
  )
}

export function CarHomeCategoryTabs({ categories }) {
  return (
    <div className="car-home-category-tabs">
      {categories.map((item) => (
        <button
          className={cx('car-home-category-tabs__item', item.active && 'car-home-category-tabs__item--active')}
          key={item.label}
          type="button"
        >
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  )
}

export function CarHomePolicyNotice({ notice }) {
  return (
    <button
      className="car-home-default-service-card__notice"
      type="button"
    >
      <img
        alt={notice.tag}
        className="car-home-default-service-card__notice-tag-image"
        src={v6MemberTagImage}
      />
      <span className="car-home-default-service-card__notice-text">{notice.text}</span>
      <CarHomeDirectionalIcon
        className="car-home-default-service-card__notice-arrow"
        name="icon/directional/chevron-right-small/outlined"
      />
    </button>
  )
}

export function CarHomePolicyPanel({ notice, policyCards, children = null }) {
  return (
    <div className="car-home-default-service-card__body">
      <CarHomePolicyNotice notice={notice} />

      {children}

      <div className="car-home-default-service-card__grid">
        {policyCards.map((item) => (
          <CarHomeDefaultPolicyCard
            item={item}
            key={item.label}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="car-home-default-service-card__pager"
      >
        <span className="car-home-default-service-card__pager-dot car-home-default-service-card__pager-dot--active" />
        <span className="car-home-default-service-card__pager-dot" />
      </div>
    </div>
  )
}

export function CarHomeDefaultHero({ hero }) {
  return (
    <section className="car-home-default-hero">
      <img
        alt=""
        className="car-home-default-hero__background"
        src={heroBackgroundImage}
      />

      <IPhoneBar
        className="car-home-default-hero__statusbar"
        tone="light"
        transparent
      />

      <div className="car-home-default-hero__actions">
        <button
          className="car-home-default-hero__action"
          type="button"
        >
          <CarHomeGlobalIcon
            className="car-home-default-hero__action-icon"
            name="icon/media/headphones-alt/filled"
          />
        </button>
        <button
          className="car-home-default-hero__action"
          type="button"
        >
          <CarHomeGlobalIcon
            className="car-home-default-hero__action-icon"
            name="icon/message/message-text/filled"
          />
        </button>
      </div>

      <div className="car-home-default-hero__content">
        <div className="car-home-default-hero__switch-wrap">
          <div className="car-home-default-hero__badge">{hero.badge}</div>
          <div className="car-home-default-hero__switch">
            {hero.tabs.map((item) => (
              <button
                className={cx('car-home-default-hero__switch-tab', item.active && 'car-home-default-hero__switch-tab--active')}
                key={item.label}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="car-home-default-hero__fade" />
    </section>
  )
}

export function CarHomeDefaultServiceCard({ categories, notice, policyCards, children = null }) {
  return (
    <section className="car-home-default-service-card">
      <CarHomeCategoryTabs categories={categories} />
      <CarHomePolicyPanel
        notice={notice}
        policyCards={policyCards}
      >
        {children}
      </CarHomePolicyPanel>
    </section>
  )
}

export function CarHomeDefaultQuickActions({ items }) {
  return (
    <section className="car-home-default-quick-actions">
      {items.map((item) => (
        <CarHomeDefaultQuickActionItem
          item={item}
          key={item.label}
        />
      ))}
    </section>
  )
}

export function CarHomeDefaultOperationsArea() {
  return (
    <section className="car-home-default-operations">
      <img
        alt=""
        className="car-home-default-operations__image"
        src={operationsImage}
      />
    </section>
  )
}

export function CarHomeDefaultBottomNav({ items }) {
  return (
    <div className="car-home-default-bottom-tab">
      <PageBottomNav items={items} />
      <IPhoneFooter className="car-home-default-bottom-tab__footer" />
    </div>
  )
}
