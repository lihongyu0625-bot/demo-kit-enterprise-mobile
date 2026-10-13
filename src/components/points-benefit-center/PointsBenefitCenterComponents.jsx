import benefitDivider from '../../assets/points-lucky-bag/benefit-divider.png'
import benefitLargeBg from '../../assets/points-lucky-bag/benefit-large-bg.png'
import benefitSmallBg from '../../assets/points-lucky-bag/benefit-small-bg.png'
import memberCorner from '../../assets/points-lucky-bag/member-corner.png'
import titleSpark from '../../assets/points-lucky-bag/title-spark.svg'
import membershipBindBg from '../../assets/points-lucky-bag/membership-bind-bg.png'
import logoIhg from '../../assets/points-lucky-bag/logo-ihg.png'
import logoHuazhu from '../../assets/points-lucky-bag/logo-huazhu.png'
import logoJinjiang from '../../assets/points-lucky-bag/logo-jinjiang.png'
import headerArt from '../../assets/points-benefit-center/header-art.png'
import pointsTitleCoin from '../../assets/points-benefit-title/points-title-coin.png'
import v8Label from '../../assets/points-benefit-center/v8-label.png'
import footerWatermark from '../../assets/points-benefit-center/footer-watermark.png'
import travelCardArt from '../../assets/points-benefit-center/travel-card-art.png'
import mockData from '../../mock-data/points-benefit-center.mock.json'
import { DirectionalIcon } from '../common/DirectionalIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { MobileNavBar } from '../common/MobileNavBar'
import './points-benefit-center.css'

const membershipLogos = {
  ihg: logoIhg,
  huazhu: logoHuazhu,
  jinjiang: logoJinjiang,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function Img({ src, alt = '', className }) {
  return <img alt={alt} className={className} draggable="false" src={src} />
}

function SectionTitle({ title, more = null }) {
  return (
    <div className="points-benefit-center__section-title">
      <div className="points-benefit-center__title-main">
        <span>{title}</span>
        <Img className="points-benefit-center__title-spark" src={titleSpark} />
      </div>
      {more ? (
        <button className="points-benefit-center__title-more" type="button">
          <span>{more}</span>
          <DirectionalIcon
            className="points-benefit-center__title-more-icon"
            name="icon-directional-chevron_right_small-outlined"
          />
        </button>
      ) : null}
    </div>
  )
}

function ExpandLink({ label }) {
  return (
    <button className="points-benefit-center__expand" type="button">
      <span>{label}</span>
      <DirectionalIcon
        className="points-benefit-center__expand-icon"
        name="icon-directional-chevron_down_small-outlined"
      />
    </button>
  )
}

function BenefitSmallCard({ title, desc, image = null }) {
  return (
    <article className={cx('points-benefit-center__small-card', image && 'points-benefit-center__small-card--image')}>
      <Img className="points-benefit-center__small-card-bg" src={benefitSmallBg} />
      {image ? <Img className="points-benefit-center__small-card-art" src={image} /> : null}
      <p>
        {title}
        <DirectionalIcon
          className="points-benefit-center__inline-chevron"
          name="icon-directional-caret_right-filled"
        />
      </p>
      <span>{desc}</span>
    </article>
  )
}

function PointsBenefitCenterHeader({ data }) {
  const { heading, subtitle } = data

  return (
    <header aria-label="权益中心头图" className="points-benefit-center__header">
      <Img className="points-benefit-center__header-bg" src={headerArt} />
      <div className="points-benefit-center__header-copy">
        <h1 className="points-benefit-center__heading">{heading}</h1>
        <div className="points-benefit-center__subtitle">
          <p>
            {subtitle.lead}
            <strong>{subtitle.highlight}</strong>
            {subtitle.tail}
          </p>
          <i aria-hidden="true" className="points-benefit-center__subtitle-divider" />
          <p>
            <img alt="" className="points-benefit-center__subtitle-coin" src={pointsTitleCoin} />
            <strong>{subtitle.dividerRight}</strong>
          </p>
        </div>
      </div>
    </header>
  )
}

function PointsBenefitCenterCarCard({ data }) {
  const { title, level, largeCard, smallCards, expand } = data

  return (
    <section className="points-benefit-center__card points-benefit-center__car">
      <SectionTitle title={title} />
      <div className="points-benefit-center__level">
        <Img src={v8Label} />
        <span>{level.label}</span>
        <strong>{level.value}</strong>
        <em>{level.note}</em>
      </div>
      <article className="points-benefit-center__large-card">
        <Img className="points-benefit-center__large-bg" src={benefitLargeBg} />
        <Img className="points-benefit-center__corner" src={memberCorner} />
        <div className="points-benefit-center__large-title">
          <Img src={benefitDivider} />
          <p>{largeCard.title}</p>
          <Img src={benefitDivider} />
        </div>
        <div className="points-benefit-center__large-grid">
          {largeCard.stats.map((stat) => (
            <div key={stat.note}>
              <strong>
                {stat.value}
                {stat.unit ? <b>{stat.unit}</b> : null}
              </strong>
              <span>{stat.note}</span>
            </div>
          ))}
        </div>
      </article>
      <div className="points-benefit-center__grid">
        {smallCards.map((perk) => (
          <BenefitSmallCard {...perk} key={perk.title} />
        ))}
      </div>
      <ExpandLink label={expand} />
    </section>
  )
}

function PointsBenefitCenterTravelCard({ data }) {
  const { title, perks, expand } = data

  return (
    <section className="points-benefit-center__card points-benefit-center__travel">
      <SectionTitle title={title} />
      <div className="points-benefit-center__grid">
        {perks.map((perk) => (
          <BenefitSmallCard
            desc={perk.desc}
            image={perk.art ? travelCardArt : null}
            key={perk.title}
            title={perk.title}
          />
        ))}
      </div>
      <ExpandLink label={expand} />
    </section>
  )
}

function PointsBenefitCenterMembershipCard({ data }) {
  const { title, more, memberships, bind } = data

  return (
    <section className="points-benefit-center__card points-benefit-center__membership">
      <SectionTitle more={more} title={title} />
      <div className="points-benefit-center__membership-content">
        <div className="points-benefit-center__membership-grid">
          {memberships.map((item) => (
            <article className="points-benefit-center__membership-item" key={item.title}>
              <Img className="points-benefit-center__membership-logo" src={membershipLogos[item.logo]} />
              <p>{item.title}</p>
              {item.items.map((text, index) => (
                <span key={`${item.title}-${index}`}>{text || ' '}</span>
              ))}
            </article>
          ))}
        </div>
        <article className="points-benefit-center__bind">
          <Img className="points-benefit-center__bind-bg" src={membershipBindBg} />
          <div>
            <p>
              {bind.title}
              <DirectionalIcon
                className="points-benefit-center__inline-chevron"
                name="icon-directional-caret_right-filled"
              />
            </p>
            <span>{bind.desc}</span>
          </div>
          <button type="button">{bind.action}</button>
        </article>
      </div>
    </section>
  )
}

function PointsBenefitCenterPointsCard({ data }) {
  const { title, perks } = data

  return (
    <section className="points-benefit-center__card points-benefit-center__points">
      <SectionTitle title={title} />
      <div className="points-benefit-center__grid">
        {perks.map((perk) => (
          <BenefitSmallCard {...perk} key={perk.title} />
        ))}
      </div>
    </section>
  )
}

function PointsBenefitCenterServiceCard({ data }) {
  const { title, perks } = data

  return (
    <section className="points-benefit-center__card points-benefit-center__service">
      <SectionTitle title={title} />
      <div className="points-benefit-center__grid">
        {perks.map((perk) => (
          <BenefitSmallCard {...perk} key={perk.title} />
        ))}
      </div>
    </section>
  )
}

export function PointsBenefitCenterFrame({ data = mockData }) {
  return (
    <div className="points-benefit-center">
      <MobileNavBar
        className="points-benefit-center__nav"
        showRightIcon={false}
        showTitle={false}
        statusBarTone="dark"
        transparent
      />
      <PointsBenefitCenterHeader data={data.header} />
      <main className="points-benefit-center__content">
        <PointsBenefitCenterCarCard data={data.carBenefits} />
        <PointsBenefitCenterTravelCard data={data.travelBenefits} />
        <PointsBenefitCenterMembershipCard data={data.brandMembership} />
        <PointsBenefitCenterPointsCard data={data.pointsBenefits} />
        <PointsBenefitCenterServiceCard data={data.serviceBenefits} />
        <div className="points-benefit-center__watermark" aria-label="底部水印">
          <Img src={footerWatermark} />
        </div>
      </main>
      <IPhoneFooter className="points-benefit-center__footer" />
    </div>
  )
}

export {
  PointsBenefitCenterCarCard,
  PointsBenefitCenterHeader,
  PointsBenefitCenterMembershipCard,
  PointsBenefitCenterPointsCard,
  PointsBenefitCenterServiceCard,
  PointsBenefitCenterTravelCard,
}
