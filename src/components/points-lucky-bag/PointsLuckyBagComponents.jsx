import heroBag from '../../assets/points-lucky-bag/hero-bag.png'
import heroBg from '../../assets/points-lucky-bag/hero-bg.png'
import taskIcon from '../../assets/points-lucky-bag/task-icon.png'
import taskBg from '../../assets/points-lucky-bag/task-bg.png'
import tabStarLeft from '../../assets/points-lucky-bag/tab-star-left.svg'
import tabStarRight from '../../assets/points-lucky-bag/tab-star-right.svg'
import tabUnderline from '../../assets/points-lucky-bag/tab-underline.svg'
import flashTitle from '../../assets/points-lucky-bag/flash-title.png'
import flashCoupon1 from '../../assets/points-lucky-bag/flash-coupon-1.png'
import flashCoupon2 from '../../assets/points-lucky-bag/flash-coupon-2.png'
import flashCoupon3 from '../../assets/points-lucky-bag/flash-coupon-3.png'
import flashCoupon4 from '../../assets/points-lucky-bag/flash-coupon-4.png'
import flashButton from '../../assets/points-lucky-bag/flash-button.svg'
import flashButtonRight from '../../assets/points-lucky-bag/flash-button-right.png'
import flashButtonWord from '../../assets/points-lucky-bag/flash-button-word.svg'
import gift1 from '../../assets/points-lucky-bag/gift-1.png'
import gift2 from '../../assets/points-lucky-bag/gift-2.png'
import gift3 from '../../assets/points-lucky-bag/gift-3.png'
import gift4 from '../../assets/points-lucky-bag/gift-4.png'
import gift5 from '../../assets/points-lucky-bag/gift-5.png'
import gift6 from '../../assets/points-lucky-bag/gift-6.png'
import freeReceive from '../../assets/points-lucky-bag/free-receive.svg'
import titleSpark from '../../assets/points-lucky-bag/title-spark.svg'
import earnDone from '../../assets/points-lucky-bag/earn-done.png'
import earnStar from '../../assets/points-lucky-bag/earn-star.png'
import taskHotel from '../../assets/points-lucky-bag/task-hotel.png'
import taskFlight from '../../assets/points-lucky-bag/task-flight.png'
import taskTrain from '../../assets/points-lucky-bag/task-train.png'
import pointsIcon from '../../assets/points-lucky-bag/points-icon.png'
import rebateMain from '../../assets/points-lucky-bag/rebate-main.png'
import rebateCoin from '../../assets/points-lucky-bag/rebate-coin.png'
import benefitTop from '../../assets/points-lucky-bag/benefit-top.png'
import benefitCardBg from '../../assets/points-lucky-bag/benefit-card-bg.png'
import benefitSmallBg from '../../assets/points-lucky-bag/benefit-small-bg.png'
import benefitLargeBg from '../../assets/points-lucky-bag/benefit-large-bg.png'
import memberCorner from '../../assets/points-lucky-bag/member-corner.png'
import benefitDivider from '../../assets/points-lucky-bag/benefit-divider.png'
import v6Label from '../../assets/points-lucky-bag/v6-label.png'
import travelCardBg from '../../assets/points-lucky-bag/travel-card-bg.png'
import travelHotel from '../../assets/points-lucky-bag/travel-hotel.png'
import travelFlight from '../../assets/points-lucky-bag/travel-flight.png'
import membershipBindBg from '../../assets/points-lucky-bag/membership-bind-bg.png'
import membershipCardBg from '../../assets/points-lucky-bag/membership-card-bg.png'
import logoIhg from '../../assets/points-lucky-bag/logo-ihg.png'
import logoHuazhu from '../../assets/points-lucky-bag/logo-huazhu.png'
import logoJinjiang from '../../assets/points-lucky-bag/logo-jinjiang.png'
import serviceCardBg from '../../assets/points-lucky-bag/service-card-bg.png'
import bottomWatermark from '../../assets/points-lucky-bag/bottom-watermark.svg'
import { DirectionalIcon } from '../common/DirectionalIcon'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { PageBottomNav } from '../common/PageBottomNav'
import './points-lucky-bag.css'

const filters = ['全部', '打车', '机酒火', '商旅好物', '其他']

const flashSaleCoupons = [
  { image: flashCoupon1, points: '3' },
  { image: flashCoupon2, points: '12' },
  { image: flashCoupon3, points: '6' },
  { image: flashCoupon1, points: '3' },
]

const specialDealCoupons = [
  { image: flashCoupon1, points: '3' },
  { image: flashCoupon2, points: '12' },
  { image: flashCoupon3, points: '6' },
  { image: flashCoupon4, points: '3' },
]

const gifts = [
  { image: gift1, title: '元气森林立减30元券', points: '0', action: '免费领', free: true },
  { image: gift2, title: '8.5折自费快车券', points: '3', action: '兑换' },
  { image: gift3, title: '超级猩猩3天体验卡·限北京', points: '6', action: '兑换' },
  { image: gift4, title: '机场/高铁站餐饮20元券包', points: '43', action: '兑换' },
  { image: gift5, title: '周末券包8折2张自费', points: '326', cash: '234元', action: '兑换' },
  { image: gift6, title: '升舱8.5折专车券', points: '23', cash: '1元', action: '兑换' },
]

const earnTasks = [
  { icon: taskHotel, title: '完成因私酒店预订', subtitle: '限时用车单福利', tag: '双倍积分', reward: '+30', action: '订酒店' },
  { icon: taskFlight, title: '完成因私机票预订', subtitle: '限时用车单福利', reward: '+20', action: '订机票' },
  { icon: taskTrain, title: '浏览火车票列表页', subtitle: '限时用车单福利', reward: '+1', action: '去浏览' },
]

const earnProgressNodes = [['第3单', '20'], ['第6单', '20'], ['第9单', '30']]

const carPerks = [
  { title: '里程同步累计', desc: '权益同步享', corner: true },
  { title: '优惠坐特快', desc: '权益同步享', corner: true },
  { title: '免费取消', desc: '权益同步享', corner: true },
  { title: '场站0爽约', desc: '0爽约保障' },
  { title: '爽约赔付', desc: '专车预约单' },
  { title: '接送机服务', desc: '专豪多项服务' },
]

const travelPerks = [
  { title: '入住有保障', desc: '酒旅会员免费享', image: travelHotel },
  { title: '出票有保障', desc: '享酒店优惠价', image: travelFlight },
  { title: '商旅省立返', desc: '越省越赚' },
  { title: '酒店贵必赔', desc: '买贵赔双倍' },
]

const memberships = [
  { logo: logoIhg, title: '洲际集团', items: ['酒店积分', '夜间累计', '立即确认', ''] },
  { logo: logoHuazhu, title: '华住集团', items: ['酒店积分', '夜间累计', '立即确认', '入住礼遇'] },
  { logo: logoJinjiang, title: '锦江酒店集团', items: ['酒店积分', '延迟退房', '预订保留', '入住礼遇'] },
]

const bottomNavItems = [
  { icon: 'home', label: '首页' },
  { icon: 'schedule', label: '行程' },
  { icon: 'bag', label: '小福包', active: true },
  { icon: 'workspace', label: '工作台' },
  { icon: 'profile', label: '我的' },
]

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function Img({ src, alt = '', className }) {
  return <img alt={alt} className={className} draggable="false" src={src} />
}

function SectionTitle({ title, more = '更多' }) {
  return (
    <div className="points-lucky-section-title">
      <div className="points-lucky-section-title__main">
        <span>{title}</span>
        <Img className="points-lucky-section-title__spark" src={titleSpark} />
      </div>
      {more ? (
        <button className="points-lucky-section-title__more" type="button">
          <span>{more}</span>
          <DirectionalIcon
            className="points-lucky-section-title__more-icon"
            name="icon/directional/chevron-right-small/outlined"
          />
        </button>
      ) : null}
    </div>
  )
}

function PointsPrice({ points, cash, size = 'large' }) {
  return (
    <div className={`points-lucky-price points-lucky-price--${size}`}>
      <span>{points}</span>
      <em>积分</em>
      {cash ? (
        <>
          <i>+</i>
          <span>{cash.replace('元', '')}</span>
          <em>元</em>
        </>
      ) : null}
    </div>
  )
}

export function PointsLuckyBagHero() {
  return (
    <section className="points-lucky-hero" aria-label="小福包头图">
      <Img className="points-lucky-hero__bg" src={heroBg} />
      <Img className="points-lucky-hero__bag" src={heroBag} />
      <h1>1积分抽快车券</h1>
    </section>
  )
}

export function PointsLuckyBagTopPoints() {
  return (
    <header className="points-lucky-top">
      <IPhoneBar
        className="points-lucky-top__status"
        reserveSpace
        tone="light"
        transparent
      />
      <div className="points-lucky-top__info">
        <div className="points-lucky-top__main">
          <div className="points-lucky-top__score-row">
            <Img className="points-lucky-top__coin" src={pointsIcon} />
            <p className="points-lucky-top__score">
              <strong>234</strong>
              <span>积分</span>
            </p>
            <em>有6积分在7天内过期</em>
          </div>
          <Img className="points-lucky-top__level" src={v6Label} />
        </div>
        <div className="points-lucky-top__links">
          <button type="button">规则</button>
          <span />
          <button type="button">明细</button>
        </div>
      </div>
    </header>
  )
}

export function PointsLuckyBagTaskCard() {
  return (
    <article className="points-lucky-task-card">
      <Img className="points-lucky-task-card__bg" src={taskBg} />
      <div className="points-lucky-task-card__main">
        <Img className="points-lucky-task-card__icon" src={taskIcon} />
        <div className="points-lucky-task-card__content">
          <p>
            再完成1单<span>用车</span>得<strong>20</strong>积分
          </p>
          <small>距离截止时间 23小时56分</small>
        </div>
      </div>
      <button type="button">去用车</button>
    </article>
  )
}

export function PointsLuckyBagTabs() {
  return (
    <nav className="points-lucky-tabs" aria-label="小福包分类">
      {['兑好礼', '赚积分', '享权益'].map((item, index) => (
        <button
          className={cx(index === 0 && 'points-lucky-tabs__item--active')}
          key={item}
          type="button"
        >
          {index === 0 ? <Img className="points-lucky-tabs__star" src={tabStarLeft} /> : null}
          <span>{item}</span>
          {index === 0 ? <Img className="points-lucky-tabs__star" src={tabStarRight} /> : null}
          {index === 0 ? <Img className="points-lucky-tabs__underline" src={tabUnderline} /> : null}
        </button>
      ))}
    </nav>
  )
}

function FlashButton({ points }) {
  return (
    <div className="points-lucky-flash-button">
      <Img className="points-lucky-flash-button__base" src={flashButton} />
      <div className="points-lucky-flash-button__points">
        <span>{points}</span>
        <em>积分</em>
      </div>
      <div className="points-lucky-flash-button__grab">
        <Img src={flashButtonRight} />
        <Img src={flashButtonWord} />
      </div>
    </div>
  )
}

export function PointsCouponShowcase({ state = 'full' }) {
  const isCompact = state === 'compact'
  const coupons = isCompact ? specialDealCoupons : flashSaleCoupons

  return (
    <section
      className={cx('points-lucky-card', 'points-lucky-flash-sale', isCompact && 'points-lucky-flash-sale--compact')}
    >
      <div className={cx('points-lucky-flash-sale__title', isCompact && 'points-lucky-flash-sale__title--compact')}>
        {isCompact ? (
          <>
            <span>特惠专区</span>
            <Img className="points-lucky-flash-sale__spark" src={titleSpark} />
          </>
        ) : (
          <>
            <Img src={flashTitle} />
            <div className="points-lucky-flash-sale__times">
              <span>9点场</span>
              <strong>00:12:09</strong>
              <i />
              <span>14:00 开抢</span>
              <i />
              <span>18:00 开抢</span>
            </div>
          </>
        )}
      </div>
      <div className="points-lucky-flash-sale__scroller">
        {coupons.map((item, index) => (
          <article className="points-lucky-flash-coupon" key={`${item.points}-${index}`}>
            <Img className="points-lucky-flash-coupon__image" src={item.image} />
            <FlashButton points={item.points} />
          </article>
        ))}
      </div>
    </section>
  )
}

export function PointsLuckyBagFlashSale() {
  return <PointsCouponShowcase />
}

function GiftCard({ gift }) {
  return (
    <article className="points-lucky-gift-card">
      <Img className="points-lucky-gift-card__image" src={gift.image} />
      <div className="points-lucky-gift-card__body">
        <p className="points-lucky-gift-card__name">{gift.title}</p>
        <div className="points-lucky-gift-card__bottom">
          <PointsPrice cash={gift.cash} points={gift.points} size={gift.cash ? 'small' : 'large'} />
          <button className={cx(gift.free && 'points-lucky-gift-card__button--free')} type="button">
            {gift.free ? <Img src={freeReceive} /> : gift.action}
          </button>
        </div>
      </div>
    </article>
  )
}

export function PointsLuckyBagGiftExchange({ filters: filterItems = filters }) {
  return (
    <section className="points-lucky-card points-lucky-gift-exchange">
      <SectionTitle title="积分兑好礼" more={null} />
      <div className="points-lucky-filter-tabs">
        {filterItems.map((item, index) => (
          <button
            className={cx(index === 0 && 'points-lucky-filter-tabs__item--active')}
            key={item}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="points-lucky-gift-grid">
        {gifts.map((gift) => (
          <GiftCard gift={gift} key={gift.title} />
        ))}
      </div>
      <button className="points-lucky-more" type="button">
        <span>查看更多好礼</span>
        <DirectionalIcon
          className="points-lucky-more__icon"
          name="icon/directional/chevron-down-small/outlined"
        />
      </button>
    </section>
  )
}

export function PointsEarnMissionCard({ state = 'full', title = '做任务 赚积分' }) {
  const isCompact = state === 'compact'

  return (
    <section className={cx('points-lucky-card', 'points-lucky-earn', isCompact && 'points-lucky-earn--compact')}>
      <SectionTitle title={title} more="赚更多" />
      <div className="points-lucky-earn__mission">
        <div className="points-lucky-earn__mission-top">
          <div>
            <p>
              再完成1单可获得<strong>20</strong>积分
              <GlobalStyleIcon
                className="points-lucky-question-icon"
                name="icon/status/question-circle/outlined"
              />
            </p>
            <small>距离截止时间 23小时56分</small>
          </div>
          <button type="button">去打车</button>
        </div>
        <div className="points-lucky-earn__progress">
          <div className="points-lucky-earn__track"><span /></div>
          <div className="points-lucky-earn__node points-lucky-earn__node--done">
            <Img src={earnDone} />
            <small>已完成2单</small>
          </div>
          {earnProgressNodes.map(([label, value], index) => (
            <div className={`points-lucky-earn__node points-lucky-earn__node--${index + 1}`} key={label}>
              <Img src={earnStar} />
              <strong>{value}</strong>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </div>
      {!isCompact ? (
        <div className="points-lucky-earn__tasks">
          {earnTasks.map((task) => (
            <article className="points-lucky-earn-task" key={task.title}>
              <div className="points-lucky-earn-task__left">
                <Img className="points-lucky-earn-task__icon" src={task.icon} />
                <div>
                  <p>{task.title}</p>
                  <small>
                    {task.subtitle}
                    <GlobalStyleIcon
                      className="points-lucky-question-icon points-lucky-question-icon--small"
                      name="icon/status/question-circle/outlined"
                    />
                  </small>
                  {task.tag ? <em>{task.tag}</em> : null}
                </div>
              </div>
              <div className="points-lucky-earn-task__action">
                <span>
                  <Img src={pointsIcon} />
                  <strong>{task.reward}</strong>
                </span>
                <button type="button">{task.action}</button>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  )
}

export function PointsLuckyBagEarnPoints() {
  return <PointsEarnMissionCard />
}

export function PointsLuckyBagRebateCard() {
  return (
    <section className="points-lucky-card points-lucky-rebate">
      <SectionTitle title="省立返 赚积分" more={null} />
      <div className="points-lucky-rebate__body">
        <Img className="points-lucky-rebate__main" src={rebateMain} />
        <Img className="points-lucky-rebate__coin" src={rebateCoin} />
      </div>
    </section>
  )
}

function BenefitSmallCard({ title, desc, corner }) {
  return (
    <article className="points-lucky-benefit-small-card">
      <Img className="points-lucky-benefit-card-bg" src={benefitSmallBg} />
      {corner ? <Img className="points-lucky-benefit-corner" src={memberCorner} /> : null}
      <p>
        {title}
        <DirectionalIcon
          className="points-lucky-inline-chevron"
          name="icon/directional/caret-right/filled"
        />
      </p>
      <span>{desc}</span>
    </article>
  )
}

export function PointsLuckyBagEnterpriseBenefits() {
  return (
    <section className="points-lucky-enterprise">
      <Img className="points-lucky-enterprise__hero" src={benefitTop} />
      <div className="points-lucky-card points-lucky-enterprise__card">
        <Img className="points-lucky-enterprise__card-bg" src={benefitCardBg} />
        <SectionTitle title="用车权益" />
        <div className="points-lucky-enterprise__level">
          <Img src={v6Label} />
          <span>里程值</span>
          <strong>571/1100</strong>
          <em>企业版用车同步累计里程</em>
        </div>
        <article className="points-lucky-enterprise__large-card">
          <Img className="points-lucky-enterprise__large-bg" src={benefitLargeBg} />
          <Img className="points-lucky-enterprise__corner" src={memberCorner} />
          <div className="points-lucky-enterprise__large-title">
            <Img src={benefitDivider} />
            <p>享快速应答</p>
            <Img src={benefitDivider} />
          </div>
          <div className="points-lucky-enterprise__large-grid">
            <div>
              <strong>秒应答</strong>
              <span>最大限度缩时</span>
            </div>
            <div>
              <strong><b>V6</b>专享</strong>
              <span>里程会员权益同步</span>
            </div>
            <div>
              <strong><b>6</b>次/月</strong>
              <span>每月享6次权益</span>
            </div>
          </div>
        </article>
        <div className="points-lucky-enterprise__grid">
          {carPerks.map((perk) => (
            <BenefitSmallCard {...perk} key={perk.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function PointsLuckyBagBusinessBenefits() {
  return (
    <section className="points-lucky-card points-lucky-business">
      <SectionTitle title="商旅权益" />
      <div className="points-lucky-business__grid">
        {travelPerks.map((perk) => (
          <article className={cx(perk.image && 'points-lucky-business__item--image')} key={perk.title}>
            <Img className="points-lucky-business__bg" src={travelCardBg} />
            {perk.image ? <Img className="points-lucky-business__cover" src={perk.image} /> : null}
            <p>
              {perk.title}
              <DirectionalIcon
                className="points-lucky-inline-chevron"
                name="icon/directional/caret-right/filled"
              />
            </p>
            <small>{perk.desc}</small>
          </article>
        ))}
      </div>
    </section>
  )
}

export function PointsLuckyBagBrandMembership() {
  return (
    <section className="points-lucky-card points-lucky-membership">
      <SectionTitle title="品牌会员卡" />
      <div className="points-lucky-membership__content">
        <div className="points-lucky-membership__grid">
          {memberships.map((item) => (
            <article className="points-lucky-membership__item" key={item.title}>
              <Img className="points-lucky-membership__bg" src={membershipCardBg} />
              <Img className="points-lucky-membership__logo" src={item.logo} />
              <p>{item.title}</p>
              {item.items.map((text, index) => (
                <span key={`${item.title}-${index}`}>{text || '\u00a0'}</span>
              ))}
            </article>
          ))}
        </div>
        <article className="points-lucky-membership__bind">
          <Img className="points-lucky-membership__bind-bg" src={membershipBindBg} />
          <div>
            <p>
              携程×滴滴会员联登
              <DirectionalIcon
                className="points-lucky-inline-chevron"
                name="icon/directional/caret-right/filled"
              />
            </p>
            <span>绑定后享受携程平台酒店会员价</span>
          </div>
          <button type="button">去绑定</button>
        </article>
      </div>
    </section>
  )
}

export function PointsLuckyBagServiceBenefits() {
  return (
    <section className="points-lucky-card points-lucky-service">
      <SectionTitle title="客服权益" />
      <div className="points-lucky-service__grid">
        <article>
          <Img className="points-lucky-service__bg" src={serviceCardBg} />
          <p>
            企业版客服
            <DirectionalIcon
              className="points-lucky-inline-chevron"
              name="icon/directional/caret-right/filled"
            />
          </p>
          <span>企业版专属服务</span>
        </article>
      </div>
    </section>
  )
}

export function PointsLuckyBagBottomWatermark() {
  return (
    <div className="points-lucky-watermark" aria-label="底部水印">
      <Img src={bottomWatermark} />
    </div>
  )
}

export function PointsLuckyBagContent() {
  return (
    <main className="points-lucky-bag-content">
      <PointsLuckyBagFlashSale />
      <PointsLuckyBagGiftExchange />
      <PointsLuckyBagEarnPoints />
      <PointsLuckyBagRebateCard />
      <PointsLuckyBagEnterpriseBenefits />
      <PointsLuckyBagBusinessBenefits />
      <PointsLuckyBagBrandMembership />
      <PointsLuckyBagServiceBenefits />
      <PointsLuckyBagBottomWatermark />
    </main>
  )
}

export function PointsLuckyBagBottomNav() {
  return (
    <footer className="points-lucky-bottom">
      <PageBottomNav
        className="points-lucky-bottom__nav"
        items={bottomNavItems}
      />
      <IPhoneFooter />
    </footer>
  )
}

export function PointsLuckyBagPreviewFrame() {
  return (
    <div className="points-lucky-bag-shell">
      <PointsLuckyBagHero />
      <PointsLuckyBagTopPoints />
      <PointsLuckyBagTaskCard />
      <PointsLuckyBagTabs />
      <PointsLuckyBagContent />
      <PointsLuckyBagBottomNav />
    </div>
  )
}
