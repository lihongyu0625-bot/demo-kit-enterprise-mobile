import { Fragment, useEffect, useRef, useState } from 'react'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { MobileNavBar } from '../common/MobileNavBar'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import pageBg from '../../assets/points-super-save-detail/page-bg@3x.png'
import priceHero from '../../assets/points-super-save-detail/price-hero@3x.png'
import priceTable from '../../assets/points-super-save-detail/price-table@3x.png'
import applyStep1 from '../../assets/points-super-save-detail/apply-step-1@3x.png'
import applyStep2 from '../../assets/points-super-save-detail/apply-step-2@3x.png'
import applyConditions from '../../assets/points-super-save-detail/apply-conditions@3x.png'
import couponViewPersonal from '../../assets/points-super-save-detail/coupon-view-personal@3x.png'
import couponViewEnterprise from '../../assets/points-super-save-detail/coupon-view-enterprise@3x.png'
import iconTabTravelOn from '../../assets/points-super-save-detail/icon-tab-travel-on@3x.png'
import iconTabTravelOff from '../../assets/points-super-save-detail/icon-tab-travel-off@3x.png'
import iconTabHotelOn from '../../assets/points-super-save-detail/icon-tab-hotel-on@3x.png'
import iconTabHotelOff from '../../assets/points-super-save-detail/icon-tab-hotel-off@3x.png'
import iconTabFlightOn from '../../assets/points-super-save-detail/icon-tab-flight-on@3x.png'
import iconTabFlightOff from '../../assets/points-super-save-detail/icon-tab-flight-off@3x.png'
import iconTabArrow from '../../assets/points-super-save-detail/icon-tab-arrow.svg'
import iconBenefitActive from '../../assets/points-super-save-detail/icon-benefit-active.svg'
import iconCompare from '../../assets/points-super-save-detail/icon-compare.svg'
import iconConditionTime from '../../assets/points-super-save-detail/icon-condition-time.svg'
import iconConditionPlatform from '../../assets/points-super-save-detail/icon-condition-platform.svg'
import iconConditionHotel from '../../assets/points-super-save-detail/icon-condition-hotel.svg'
import iconConditionIdentity from '../../assets/points-super-save-detail/icon-condition-identity.svg'
import iconConditionImage from '../../assets/points-super-save-detail/icon-condition-image.svg'
import iconCarBlue from '../../assets/points-super-save-detail/icon-car-blue.svg'
import iconCarOrange from '../../assets/points-super-save-detail/icon-car-orange.svg'
import iconDividerBlue from '../../assets/points-super-save-detail/icon-divider-blue.svg'
import iconDividerOrange from '../../assets/points-super-save-detail/icon-divider-orange.svg'
import notchBlueA from '../../assets/points-super-save-detail/notch-blue-a.svg'
import notchBlueB from '../../assets/points-super-save-detail/notch-blue-b.svg'
import notchWarmA from '../../assets/points-super-save-detail/notch-warm-a.svg'
import notchWarmB from '../../assets/points-super-save-detail/notch-warm-b.svg'
import iconMoreChevron from '../../assets/points-super-save-detail/icon-more-chevron.svg'
import cashbackStep1 from '../../assets/points-super-save-detail/cashback-step-1@3x.png'
import cashbackStep2a from '../../assets/points-super-save-detail/cashback-step-2a@3x.png'
import cashbackStep2b from '../../assets/points-super-save-detail/cashback-step-2b@3x.png'
import cashbackStep3a from '../../assets/points-super-save-detail/cashback-step-3a@3x.png'
import cashbackStep3b from '../../assets/points-super-save-detail/cashback-step-3b@3x.png'
import hbwrStep1 from '../../assets/points-super-save-detail/hbwr-step-1@3x.png'
import hbwrStep2 from '../../assets/points-super-save-detail/hbwr-step-2@3x.png'
import connector1 from '../../assets/points-super-save-detail/connector-1.svg'
import connector2 from '../../assets/points-super-save-detail/connector-2.svg'
import connector3 from '../../assets/points-super-save-detail/connector-3.svg'
import './points-super-save-detail.css'

const CONDITION_ICONS = {
  time: iconConditionTime,
  platform: iconConditionPlatform,
  hotel: iconConditionHotel,
  identity: iconConditionIdentity,
  image: iconConditionImage,
}

/* 条件项图标：本地 key（time/platform 等 16px 定制 svg）走 <img>；
   icon- 前缀为预览台 global-styles 图标库（DIcon 同源），由 GlobalStyleIcon
   以 mask+currentColor 渲染，继承标题行 navy 色（DSL 图标 #05224C @0.8） */
function ConditionIcon({ name }) {
  if (name.startsWith('icon-')) {
    return <GlobalStyleIcon name={name} />
  }
  return <img src={CONDITION_ICONS[name]} alt="" />
}

const CATEGORY_TAB_ICONS = {
  travel: { on: iconTabTravelOn, off: iconTabTravelOff },
  hotel: { on: iconTabHotelOn, off: iconTabHotelOff },
  flight: { on: iconTabFlightOn, off: iconTabFlightOff },
}

const STEP_IMAGES = {
  'apply-step-1': applyStep1,
  'apply-step-2': applyStep2,
  'apply-conditions': applyConditions,
  'cashback-step-1': cashbackStep1,
  'cashback-step-2a': cashbackStep2a,
  'cashback-step-2b': cashbackStep2b,
  'cashback-step-3a': cashbackStep3a,
  'cashback-step-3b': cashbackStep3b,
  'hbwr-step-1': hbwrStep1,
  'hbwr-step-2': hbwrStep2,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

/* 设计稿要点行首的 \U000f0020 为 DIcon 私有区圆点字形，页面无该字体文件，
   由 Rich 统一替换为可见圆点（数据保持与 DSL 逐字一致） */
const BULLET_CHAR = String.fromCodePoint(0xf0020)

function Rich({ parts }) {
  return parts.map((part, index) => {
    const Tag = part.bold ? 'strong' : 'span'
    const segments = part.text.split(BULLET_CHAR)
    return (
      <Tag key={index}>
        {segments.length === 1
          ? part.text
          : segments.map((segment, segmentIndex) => (
              <Fragment key={segmentIndex}>
                {segmentIndex > 0 && (
                  <span className="points-super-save-rich-bullet" aria-hidden="true" />
                )}
                {segment}
              </Fragment>
            ))}
      </Tag>
    )
  })
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
        <img
          className="points-super-save-price__table"
          src={priceTable}
          alt="特定平台价格与滴滴企业版价格对比示意"
        />
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
                      <ConditionIcon name={item.icon} />
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

/* 省立返积分表格（设计稿 196:23670）：
   表头行 #FCF5E8、数据行透明，行高 32；首列 40px、数据列均分。
   单元格文本分两类：普通（rgba(106,70,71,0.7)）与加送（数字段 #FF6B2B 中粗体 +
   单位段普通色），header 可整体强调（如「额外加送」#7F3F20 10px 中黑体）。
   副标题与表格同属 DSL 容器 3093/3096（gap 4px），用 subtitle 渲染副标题。 */
function PointsTableBlock({ block }) {
  return (
    <div className="points-super-save-points-table">
      {block.subtitle ? <p className="points-super-save-points-table__subtitle">{block.subtitle}</p> : null}
      <table>
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={row.header ? 'points-super-save-points-table__head-row' : undefined}>
              {row.cells.map((cell, cellIndex) => (
                /* rowspan：跨行合并格（DSL 酒店/机票 h64 = 2×32），被跨行不再渲染该列 td。
                   跨到表底的格（rowIndex+rowSpan === 末行）去下线，等价 tr:last-child 语义
                   （DSL 245:93349 机票末格 stroke 仅右线，CSS 的 tr:last-child 摸不到它） */
                <td
                  key={cellIndex}
                  rowSpan={cell.rowSpan}
                  className={cx(
                    cellIndex === 0 && 'points-super-save-points-table__label-cell',
                    cell.rowSpan && rowIndex + cell.rowSpan === block.rows.length &&
                      'points-super-save-points-table__rowspan-last-cell',
                    cell.bonus && 'points-super-save-points-table__bonus-cell',
                    cell.strong && 'points-super-save-points-table__strong-cell',
                    row.header && 'points-super-save-points-table__head-cell',
                  )}
                >
                  {cell.bonus ? (
                    <>
                      <span className="points-super-save-points-table__bonus-num">+{cell.bonus}积分</span>
                      <span className="points-super-save-points-table__bonus-unit">/{cell.unit}</span>
                    </>
                  ) : (
                    (cell.text ?? '')
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* 超时赔（196:55686）卡2 适用条件：与贵必赔 applySteps 内嵌 conditions 同构
   （DSL 211:14277/196:38543，复用 .points-super-save-conditions 全套样式），
   但独立成块不挂步骤下，mock 用 type: conditions 直接渲染。
   minHeight 可选：无酒店赔（213:14969）条件区背景盒 DSL 303×276，四项内容
   实需 236，容器留 40px slack，用 minHeight 还原背景盒原高。 */
function ConditionsBlock({ block }) {
  return (
    <div className="points-super-save-conditions">
      <ul
        className="points-super-save-conditions__list"
        style={block.minHeight ? { minHeight: block.minHeight } : undefined}
      >
        {block.items.map((item, itemIndex) => (
          <li className="points-super-save-conditions__item" key={`${itemIndex}-${item.title}`}>
            <span className="points-super-save-conditions__title">
              <ConditionIcon name={item.icon} />
              {item.title}
            </span>
            <div className="points-super-save-conditions__lines">
              {item.lines.map((line, lineIndex) => (
                <p key={lineIndex}>{line}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* 超时赔（196:55686）卡3 赔付规则：容器 1974（padding-left 24、组间 gap 8）内
   6 组「小标题 14px/22/500 rgba(0,0,0,0.72) + gap 4 + 正文」。
   正文为带 \n 硬换行的富文本（走 pre-line），行首 \U000f0020 圆点由 Rich
   统一渲染为可见圆点。 */
function RuleGroupsBlock({ block }) {
  return (
    <div className="points-super-save-rule-groups">
      {block.groups.map((group) => (
        <section className="points-super-save-rule-group" key={group.title}>
          <h3 className="points-super-save-rule-group__title">{group.title}</h3>
          <p className="points-super-save-rule-group__body">
            <Rich parts={group.rich} />
          </p>
        </section>
      ))}
    </div>
  )
}

/* 省立返赚取步骤（设计稿 196:23670）：二级标题（16px 圆角方 #E7F1FF 底、
   #1473FF Barlow 12 SemiBold 数字 + PingFang 14 中黑体标题）+ 描述 + 场景切图。
   每步可含多组「描述+图」，如因公酒店下的合住/推荐酒店两组。 */
function EarnStepsBlock({ block }) {
  return (
    <div className="points-super-save-earn">
      {block.steps.map((step) => (
        <section className="points-super-save-earn-step" key={step.number}>
          <div className="points-super-save-earn-step__title">
            <span className="points-super-save-earn-step__chip">{step.number}</span>
            <p>{step.title}</p>
          </div>
          {step.items.map((item, index) => (
            <div className="points-super-save-earn-step__item" key={index}>
              <p className="points-super-save-earn-step__desc">{item.desc}</p>
              {item.image ? (
                <img
                  className={cx(
                    'points-super-save-earn-step__image',
                    item.imageClass && `points-super-save-earn-step__image--${item.imageClass}`,
                  )}
                  src={STEP_IMAGES[item.image]}
                  alt={item.imageAlt || ''}
                />
              ) : null}
            </div>
          ))}
        </section>
      ))}
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
  /* 航变无忧退（196:34811）新增：整幅说明图（303 宽，帧高各异，无圆角） */
  image: (block) => (
    <img
      className={cx(
        'points-super-save-section__image',
        block.imageClass && `points-super-save-section__image--${block.imageClass}`,
      )}
      src={STEP_IMAGES[block.image]}
      alt={block.imageAlt || ''}
    />
  ),
  pointsTable: (block) => <PointsTableBlock block={block} />,
  earnSteps: (block) => <EarnStepsBlock block={block} />,
  /* 超时赔（196:55686）新增：独立适用条件列表（复用贵必赔条件区样式）与
     「小标题+富文本正文」规则组（卡3 六组） */
  conditions: (block) => <ConditionsBlock block={block} />,
  ruleGroups: (block) => <RuleGroupsBlock block={block} />,
}

/* MasterGo 组件集 127:38218「超级省-详情页顶部品类tab项」。
   组件属性对齐：品类（travel 省心行 / hotel 省心住 / flight 省心飞）、
   选中（on / off 变体）、权益数（内容属性，默认 6）。 */
const SUPER_SAVE_CATEGORY_LABELS = {
  travel: '省心行',
  hotel: '省心住',
  flight: '省心飞',
}

export function PointsSuperSaveCategoryTabItem({ category = 'travel', active = false, count = 6, label }) {
  const text = label || SUPER_SAVE_CATEGORY_LABELS[category] || SUPER_SAVE_CATEGORY_LABELS.travel

  return (
    <button
      className={cx(
        'points-super-save-category-tabs__item',
        active && 'points-super-save-category-tabs__item--active',
      )}
      type="button"
    >
      <span className="points-super-save-category-tabs__head">
        <img src={CATEGORY_TAB_ICONS[category][active ? 'on' : 'off']} alt="" />
        <span className="points-super-save-category-tabs__name">{text}</span>
      </span>
      <span className="points-super-save-category-tabs__meta">
        <b>{count}</b>
        <i>项</i>
        <span>企业权益</span>
      </span>
      {active ? <img className="points-super-save-category-tabs__arrow" src={iconTabArrow} alt="" /> : null}
    </button>
  )
}

export function PointsSuperSaveCategoryTabs({ items = [] }) {
  return (
    <nav className="points-super-save-category-tabs" aria-label="超级省品类导航">
      {items.map((item) => (
        <PointsSuperSaveCategoryTabItem
          key={item.label}
          category={item.icon}
          active={item.active}
          count={item.count}
          label={item.label}
        />
      ))}
    </nav>
  )
}

/* 权益 tab 横滑（设计稿 213:14969 tab 主组件 213:14997）：主组件自带右缘渐隐遮罩
   （矩形 127:38920，16×28，linear-gradient(270deg,#C5DCFD→透明)），tab 项单排
   紧凑排列总宽随权益数增长（6 个权益 ≈414px > 351px 视口），溢出横向滚动。
   点击/切换 active 时自动把选中项滚入可视区。 */
export function PointsSuperSaveBenefitTabs({ items = [], activeIndex = 0, onSelect }) {
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const activeItem = nav.children[activeIndex]
    if (!activeItem) return
    activeItem.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [activeIndex])

  return (
    <nav className="points-super-save-benefit-tabs" aria-label="超级省权益导航" ref={navRef}>
      {items.map((item, index) => {
        const active = onSelect ? index === activeIndex : item.active

        return (
          <button
            className={cx(
              'points-super-save-benefit-tabs__item',
              active && 'points-super-save-benefit-tabs__item--active',
            )}
            key={item.label}
            type="button"
            onClick={onSelect ? () => onSelect(index) : undefined}
          >
            <span className="points-super-save-benefit-tabs__label">{item.label}</span>
            {active ? (
              <img className="points-super-save-benefit-tabs__indicator" src={iconBenefitActive} alt="" />
            ) : null}
          </button>
        )
      })}
    </nav>
  )
}

export function PointsSuperSaveIntroCard({ section }) {
  return (
    <article
      className={cx(
        'points-super-save-section',
        /* header 与内容间距因权益而异：贵必赔 8px（设计稿 127:38943）、
           省立返 12px（设计稿 196:23670），用变体类区分 */
        section.headerGap === 'large' && 'points-super-save-section--header-gap-large',
      )}
    >
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

/* 标题可配：贵必赔/航变无忧退等默认「详细规则」，超时赔为「注意事项」
   （设计稿 196:58401，结构与样式同 196:20325 详细规则完全一致） */
export function PointsSuperSaveRuleList({ rules = [], title = '详细规则' }) {
  return (
    <section className="points-super-save-rules">
      <h2 className="points-super-save-rules__title">{title}</h2>
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

/* 权益tab点击切换下方内容：benefitIntroSections / benefitRules 把 tab 名映射到
   data 里的字段名（贵必赔→introSections+rules、降价退→introSectionsPriceDrop，无规则）。
   内容映射为 null 表示该权益整体待补充；规则映射为 null 表示该权益没有详细规则
   （如降价退，设计稿 196:22021 无规则区）。每个权益内容互不相同，以设计稿为准。
   benefitMoreLinks 为带底部「你可能还想了解？」入口的权益提供链接数据（省立返 196:23670）。 */
export function PointsSuperSaveDetailFrame({ data }) {
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0)
  const activeBenefit = data.benefitTabs[activeBenefitIndex] || data.benefitTabs[0]
  const benefitSectionsKey = data.benefitIntroSections?.[activeBenefit?.label]
  const benefitSections = benefitSectionsKey ? data[benefitSectionsKey] : null
  const benefitRulesKey = data.benefitRules?.[activeBenefit?.label]
  const benefitRules = benefitRulesKey ? data[benefitRulesKey] : null
  const benefitMoreLink = data.benefitMoreLinks?.[activeBenefit?.label] || null

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
        <PointsSuperSaveBenefitTabs
          items={data.benefitTabs}
          activeIndex={activeBenefitIndex}
          onSelect={setActiveBenefitIndex}
        />
        <div className="points-super-save-detail__intro-list">
          {benefitSections ? (
            benefitSections.map((section) => (
              <PointsSuperSaveIntroCard
                key={`${activeBenefit.label}-${section.number}-${section.title}`}
                section={section}
              />
            ))
          ) : (
            <p className="points-super-save-detail__benefit-pending">
              「{activeBenefit?.label}」权益内容待补充，设计稿整理中。
            </p>
          )}
        </div>
        {benefitRules ? (
          <PointsSuperSaveRuleList
            rules={benefitRules}
            title={data.benefitRuleTitles?.[activeBenefit?.label] ?? '详细规则'}
          />
        ) : null}
        {benefitMoreLink ? (
          <div className="points-super-save-detail__more-link">
            <span>你可能还想了解？</span>
            <button type="button" className="points-super-save-detail__more-link-action">
              {benefitMoreLink.label}
              <img src={iconMoreChevron} alt="" />
            </button>
          </div>
        ) : null}
      </main>
      <IPhoneFooter className="points-super-save-detail__footer" transparent />
    </div>
  )
}