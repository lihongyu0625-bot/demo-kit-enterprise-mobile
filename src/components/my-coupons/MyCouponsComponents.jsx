import { Fragment } from 'react'
import goodsBawangImage from '../../assets/my-coupons/goods-bawang.png'
import goodsChaowanImage from '../../assets/my-coupons/goods-chaowan.png'
import goodsMeiriImage from '../../assets/my-coupons/goods-meiri.png'
import iconChevronDownImage from '../../assets/my-coupons/icon-chevron-down.svg'
import iconChevronRightImage from '../../assets/my-coupons/icon-chevron-right.svg'
import iconCopyGrayImage from '../../assets/my-coupons/icon-copy-gray.svg'
import iconCopyImage from '../../assets/my-coupons/icon-copy.svg'
import iconPointsImage from '../../assets/my-coupons/icon-points.svg'
import notchImage from '../../assets/my-coupons/notch.svg'
import patternAirportImage from '../../assets/my-coupons/pattern-airport.svg'
import patternBikeImage from '../../assets/my-coupons/pattern-bike.svg'
import patternDefaultImage from '../../assets/my-coupons/pattern-default.svg'
import patternHotelImage from '../../assets/my-coupons/pattern-hotel.svg'
import patternRailImage from '../../assets/my-coupons/pattern-rail.svg'
import punchLineImage from '../../assets/my-coupons/punch-line.svg'
import stampCircle1Image from '../../assets/my-coupons/stamp-circle1.svg'
import stampCircle2Image from '../../assets/my-coupons/stamp-circle2.svg'
import stampDecoImage from '../../assets/my-coupons/stamp-deco.svg'
import mockData from '../../mock-data/my-coupons.mock.json'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { MobileNavBar } from '../common/MobileNavBar'
import './my-coupons.css'

const goodsImages = {
  bawang: goodsBawangImage,
  chaowan: goodsChaowanImage,
  meiri: goodsMeiriImage,
}

const patternImages = {
  default: patternDefaultImage,
  airport: patternAirportImage,
  bike: patternBikeImage,
  hotel: patternHotelImage,
  rail: patternRailImage,
}

const variantLabels = {
  default: '默认',
  expanded: '展开全部',
  code: '兑换码',
  expired: '历史券-已过期',
  used: '历史券-已使用',
  detail: '优惠券详情',
  'detail-inactive': '详情-待激活',
  'detail-benefit': '详情-权益卡',
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function Img({ src, alt = '', className }) {
  return <img alt={alt} className={className} draggable="false" src={src} />
}

/* 主选项卡：Figma 2413:40159 —— 白底 + 0.5px 下边框，9 项横排；
   激活 14px Medium #1473ff + 16×3 圆角 track，未激活 14px Regular 黑60；
   竖分割线 1×14 在「历史券」前（tabs 主体渲染完后、extra 渲染前） */
function MyCouponsTabsBar({ activeTab, extra = [], tabs }) {
  return (
    <div className="my-coupons__tabs-bar">
      {tabs.map((tab) => (
        <div
          className={cx(
            'my-coupons__tab',
            tab.id === activeTab && 'my-coupons__tab--active',
          )}
          key={tab.id}
        >
          <p className="my-coupons__tab-label">{tab.label}</p>
        </div>
      ))}
      <span aria-hidden="true" className="my-coupons__tabs-divider" />
      {extra.map((tab) => (
        <div
          className={cx(
            'my-coupons__tab',
            tab.id === activeTab && 'my-coupons__tab--active',
          )}
          key={tab.id}
        >
          <p className="my-coupons__tab-label">{tab.label}</p>
        </div>
      ))}
    </div>
  )
}

/* 二级选项卡：Figma 2501:17608（历史券）—— 同结构，文字 16px 行高24 */
function MyCouponsHistoryTabs({ activeTab, tabs }) {
  return (
    <div className="my-coupons__history-tabs">
      {tabs.map((tab) => (
        <div
          className={cx(
            'my-coupons__history-tab',
            tab.id === activeTab && 'my-coupons__history-tab--active',
          )}
          key={tab.id}
        >
          <p className="my-coupons__history-tab-label">{tab.label}</p>
          {tab.id === activeTab ? (
            <span aria-hidden="true" className="my-coupons__history-tab-track" />
          ) : null}
        </div>
      ))}
    </div>
  )
}

/* 分组分割线：Figma 2413:40175 —— 60px 线 + 12px 文字黑60 + 60px 线，gap24 */
function MyCouponsDivider({ label }) {
  return (
    <div className="my-coupons__group-divider">
      <span aria-hidden="true" className="my-coupons__group-divider-line" />
      <p className="my-coupons__group-divider-text">{label}</p>
      <span aria-hidden="true" className="my-coupons__group-divider-line" />
    </div>
  )
}

/* 提示行：Figma 2501:17610 —— 12px 黑60，仅历史券页出现 */
function MyCouponsNoticeBar({ text }) {
  return <p className="my-coupons__notice">{text}</p>
}

/* 金额列：Figma 2414:40441 —— ¥16 + 数字42 Barlow SemiCond Bold，橙/半透明橙/过期灰橙；
   卡片 tone（禁用/过期/已使用）向下透传为金额灰化（Figma 2414:40381 rgba(234,95,30,0.5)） */
function MyCouponsAmountBlock({ amount, tone }) {
  /* Figma 2414:40377/40382-40394：symbol 仅现金券有；折扣=数字+「折」、权益=数字+「次」，均无 ¥。
     无 sub：三段直接排（底对齐）；有 sub：主行 h42 items-center + sub 行 gap2 items-start */
  return (
    <div className={cx('my-coupons__amount', amount.sub && 'my-coupons__amount--with-sub', (tone ?? amount.tone) && `my-coupons__amount--${tone ?? amount.tone}`)}>
      {amount.sub ? (
        <>
          <div className="my-coupons__amount-main">
            {amount.symbol ? <p className="my-coupons__amount-symbol">{amount.symbol}</p> : null}
            <p className="my-coupons__amount-number">{amount.value}</p>
          </div>
          <div className="my-coupons__amount-sub">
            <p className="my-coupons__amount-sub-text">{amount.sub.pre}</p>
            <p className="my-coupons__amount-sub-number">{amount.sub.value}</p>
            <p className="my-coupons__amount-sub-text">{amount.sub.post}</p>
          </div>
        </>
      ) : (
        <>
          {amount.symbol ? <p className="my-coupons__amount-symbol">{amount.symbol}</p> : null}
          <p className="my-coupons__amount-number">{amount.value}</p>
          {amount.unit ? <p className="my-coupons__amount-unit">{amount.unit}</p> : null}
        </>
      )}
    </div>
  )
}

/* 打孔列：Figma 2414:40455 —— 上 notch 翻转 + 1px 虚线 + 下 notch，w12 */
function MyCouponsPunch() {
  return (
    <div aria-hidden="true" className="my-coupons__punch">
      <Img alt="" className="my-coupons__punch-notch my-coupons__punch-notch--flip" src={notchImage} />
      <Img alt="" className="my-coupons__punch-line" src={punchLineImage} />
      <Img alt="" className="my-coupons__punch-notch" src={notchImage} />
    </div>
  )
}

/* 印章：Figma 2421:45236 组91 —— w54 h46 opacity32，双圈 + 斜排文字 + 装饰 */
function MyCouponsStamp({ text }) {
  return (
    <div aria-hidden="true" className="my-coupons__stamp">
      <div className="my-coupons__stamp-ring">
        <div className="my-coupons__stamp-ring-inner" />
        <p className="my-coupons__stamp-text">{text}</p>
        <Img alt="" className="my-coupons__stamp-deco" src={stampDecoImage} />
        <Img alt="" className="my-coupons__stamp-circle my-coupons__stamp-circle--1" src={stampCircle1Image} />
        <Img alt="" className="my-coupons__stamp-circle my-coupons__stamp-circle--2" src={stampCircle2Image} />
      </div>
    </div>
  )
}

/* 角标：Figma 2421:45236 —— absolute 左上，待激活灰 / 已实名绿（过期淡绿） */
function MyCouponsCornerBadge({ kind, text }) {
  return <span className={cx('my-coupons__corner-badge', `my-coupons__corner-badge--${kind}`)}>{text}</span>
}

/* 到期标签：Figma 2421:45563 橙底 / 2421:45567 过期灰字 / 2501:16950 详情页纯文字灰（11px/18 黑36） */
function MyCouponsExpireTag({ text, expired, plain }) {
  return (
    <span className={cx('my-coupons__expire-tag', expired && 'my-coupons__expire-tag--expired', plain && 'my-coupons__expire-tag--plain')}>
      {text}
    </span>
  )
}

/* 去使用按钮：Figma 2421:42701 —— #fff2ec 胶囊，12px Medium #fe7016 */
function MyCouponsUseButton({ text = '去使用' }) {
  return <span className="my-coupons__use-button">{text}</span>
}

/* 权益卡第二行：Figma 2421:44823 容器1872 —— 共N次 | 剩余N次 + 使用记录 chevron；
   过期态（I2501:17621;2421:44825 容器1871）—— 仅「可用 N 次」单段，数字 #ffbfa0 */
function MyCouponsBenefitMeta({ meta }) {
  if (meta.mode === 'available') {
    return (
      <div className="my-coupons__benefit-meta">
        <div className="my-coupons__benefit-meta-counts">
          <span className="my-coupons__benefit-meta-item">
            可用
            <span
              className={cx(
                'my-coupons__benefit-meta-number',
                'my-coupons__benefit-meta-number--accent',
              )}
            >
              {meta.available}
            </span>
            次
          </span>
        </div>
        {meta.showUsage ? (
          <span className="my-coupons__benefit-meta-usage">
            使用记录
            <Img alt="" className="my-coupons__benefit-meta-chevron" src={iconChevronRightImage} />
          </span>
        ) : null}
      </div>
    )
  }
  return (
    <div className="my-coupons__benefit-meta">
      <div className="my-coupons__benefit-meta-counts">
        <span className="my-coupons__benefit-meta-item">
          共
          <span className="my-coupons__benefit-meta-number">{meta.total}</span>
          次
        </span>
        <span aria-hidden="true" className="my-coupons__benefit-meta-sep" />
        <span className="my-coupons__benefit-meta-item">
          剩余
          <span
            className={cx(
              'my-coupons__benefit-meta-number',
              'my-coupons__benefit-meta-number--accent',
            )}
          >
            {meta.remain}
          </span>
          次
        </span>
      </div>
      {meta.showUsage ? (
        <span className="my-coupons__benefit-meta-usage">
          使用记录
          <Img alt="" className="my-coupons__benefit-meta-chevron" src={iconChevronRightImage} />
        </span>
      ) : null}
    </div>
  )
}

/* 优惠券卡：Figma 2436:50546 —— 白底 r8，金额列80 + 打孔列12 + 右列 flex-1 gap12 */
function MyCouponsCouponCard({ card }) {
  const expired = card.tone === 'expired'
  const used = card.tone === 'used'
  return (
    <article className="my-coupons__coupon-card">
      <MyCouponsAmountBlock amount={card.amount} tone={card.tone} />
      <MyCouponsPunch />
      <div className={cx('my-coupons__coupon-main', card.useButton && !expired && !used && 'my-coupons__coupon-main--actions')}>
        {card.pattern ? (
          <Img
            alt=""
            className="my-coupons__coupon-pattern"
            src={patternImages[card.pattern] ?? patternDefaultImage}
          />
        ) : null}
        <div className="my-coupons__coupon-copy">
          <div className="my-coupons__coupon-title-row">
            <p className="my-coupons__coupon-title">{card.title}</p>
          </div>
          {(card.scope || card.note) ? (
            <div className="my-coupons__coupon-sub">
              {card.scope ? <p className="my-coupons__coupon-scope">{card.scope}</p> : null}
              {card.note ? <p className="my-coupons__coupon-note">{card.note}</p> : null}
            </div>
          ) : null}
        </div>
        {(card.expireTag || card.useButton) && (card.expireTag || !expired) ? (
          <div className="my-coupons__coupon-actions">
            {card.expireTag ? (
              <MyCouponsExpireTag expired={expired || used || card.tone === 'inactive'} plain={card.expireTagPlain} text={card.expireTag} />
            ) : null}
            {card.useButton && !expired && !used ? <MyCouponsUseButton /> : null}
          </div>
        ) : null}
      </div>
      {card.cornerBadge ? (
        <MyCouponsCornerBadge kind={expired || used ? `${card.cornerBadge.kind}-muted` : card.cornerBadge.kind} text={card.cornerBadge.text} />
      ) : null}
      {expired || used ? <MyCouponsStamp text={used ? '已使用' : '已过期'} /> : null}
    </article>
  )
}

/* 权益卡：Figma 2421:43004 —— 金额「3次」+ 标题行 + 可选第二行(共N/剩余N/使用记录) + 底行标签+去使用 */
function MyCouponsBenefitCard({ card }) {
  const expired = card.tone === 'expired'
  return (
    <article className="my-coupons__benefit-card">
      <MyCouponsAmountBlock amount={card.amount} tone={card.tone} />
      <MyCouponsPunch />
      <div className={cx('my-coupons__coupon-main', card.useButton && !expired && 'my-coupons__coupon-main--actions')}>
        {card.pattern ? (
          <Img
            alt=""
            className="my-coupons__coupon-pattern"
            src={patternImages[card.pattern] ?? patternDefaultImage}
          />
        ) : null}
        <div className="my-coupons__coupon-copy">
          <div className="my-coupons__coupon-title-row">
            <p className="my-coupons__coupon-title">{card.title}</p>
          </div>
          {card.meta ? <MyCouponsBenefitMeta meta={card.meta} /> : null}
        </div>
        {(card.expireTag || card.useButton) && (card.expireTag || !expired) ? (
          <div className="my-coupons__coupon-actions">
            {card.expireTag ? (
              <MyCouponsExpireTag expired={expired} plain={card.expireTagPlain} text={card.expireTag} />
            ) : null}
            {card.useButton && !expired ? <MyCouponsUseButton /> : null}
          </div>
        ) : null}
      </div>
      {card.cornerBadge ? (
        <MyCouponsCornerBadge kind={expired ? `${card.cornerBadge.kind}-muted` : card.cornerBadge.kind} text={card.cornerBadge.text} />
      ) : null}
      {expired ? <MyCouponsStamp text="已过期" /> : null}
    </article>
  )
}

/* 兑换码行：Figma 2421:52889 —— 商品图112×84 r6 + 标题/券码+copy + 标签 */
function MyCouponsCodeRow({ row }) {
  const expired = row.tone === 'expired'
  return (
    <article className={cx('my-coupons__code-row', expired && 'my-coupons__code-row--expired')}>
      <Img
        alt={row.title}
        className="my-coupons__code-image"
        src={goodsImages[row.image] ?? goodsBawangImage}
      />
      <div className="my-coupons__code-main">
        <p className="my-coupons__code-title">{row.title}</p>
        <div className="my-coupons__code-line">
          <p className="my-coupons__code-text">{row.codeLabel}：{row.code}</p>
          <Img
            alt="复制"
            className="my-coupons__code-copy"
            src={expired ? iconCopyGrayImage : iconCopyImage}
          />
        </div>
        {row.expireTag ? (
          <div className="my-coupons__code-tag">
            <MyCouponsExpireTag expired={expired} text={row.expireTag} />
          </div>
        ) : null}
      </div>
      {expired ? <MyCouponsStamp text="已过期" /> : null}
    </article>
  )
}

/* 更多行：Figma 2499:16156 —— 12px 黑60 + chevron_down 14 */
function MyCouponsMoreRow() {
  return (
    <div className="my-coupons__more-row">
      <p className="my-coupons__more-row-text">更多</p>
      <Img alt="" className="my-coupons__more-row-chevron" src={iconChevronDownImage} />
    </div>
  )
}

/* 到底文案：Figma 2499:16164 —— 容器281，12px 黑60 居中 */
function MyCouponsEndText({ text }) {
  return <p className="my-coupons__end">{text}</p>
}

/* 详情列表项：Figma 2430:46707（单行54）/2436:54099（链接档）—— 通栏 375，px20 py16 gap32
   label w84 14px/22 黑84；value 12px/20 黑36 pt1，多行自然增高（73/133 档由文案行数导出）；
   链接档 value #1473ff */
function MyCouponsDetailItem({ item }) {
  return (
    <div className="my-coupons__detail-item">
      <p className="my-coupons__detail-label">{item.label}</p>
      <p className={cx('my-coupons__detail-value', item.link && 'my-coupons__detail-value--link')}>
        {item.value}
      </p>
    </div>
  )
}

/* 详情列表：Figma 2501:16951/17146/17348 Frame121 —— 白底通栏，项间 border-b 分隔（末项无线） */
function MyCouponsDetailList({ items }) {
  return (
    <div className="my-coupons__detail-list">
      {items.map((item, index) => (
        <MyCouponsDetailItem item={item} key={index} />
      ))}
    </div>
  )
}

/* 公告栏：Figma 2501:17145 —— 351×32（py6+20+py6）r8，white→#fff8f5 渐变，px12 py6，12px/20 #fe7016 */
function MyCouponsNoticeBanner({ text }) {
  return <p className="my-coupons__notice-banner">{text}</p>
}

/* 吸底按钮：Figma 2501:17354 —— 375×98 = pt16 + 按钮48 + iPhone footer34；
   按钮 px20 py12 r999 #1473ff，16px/24 Medium 白字居中；内容区 pt16 px12 */
function MyCouponsBottomButton({ text }) {
  return (
    <div className="my-coupons__bottom-button">
      <div className="my-coupons__bottom-button-inner">
        <span className="my-coupons__bottom-button-pill">{text}</span>
      </div>
      <IPhoneFooter className="my-coupons__bottom-button-footer" />
    </div>
  )
}

/* 底部导航栏：Figma 2421:44186 —— 白底投影 + 积分兑券胶囊 + iPhone footer */
function MyCouponsBottomBar({ text }) {
  return (
    <div className="my-coupons__bottom-bar">
      <div className="my-coupons__bottom-bar-inner">
        <Img alt="" className="my-coupons__bottom-bar-icon" src={iconPointsImage} />
        <p className="my-coupons__bottom-bar-text">{text}</p>
      </div>
      <IPhoneFooter className="my-coupons__bottom-bar-footer" />
    </div>
  )
}

/* 列表分组：分割线 + 卡片序列（卡间 gap8）+ 可选更多行 */
function MyCouponsGroup({ dividerLabel, items, moreRow }) {
  return (
    <div className="my-coupons__group">
      {dividerLabel ? <MyCouponsDivider label={dividerLabel} /> : null}
      {items.map((item, index) => {
        const Card =
          item.kind === 'benefit'
            ? MyCouponsBenefitCard
            : item.kind === 'code'
              ? MyCouponsCodeRow
              : MyCouponsCouponCard
        return (
          <Fragment key={index}>
            <Card card={item} {...(item.kind === 'code' ? { row: item } : {})} />
          </Fragment>
        )
      })}
      {moreRow ? <MyCouponsMoreRow /> : null}
    </div>
  )
}

export function MyCouponsPreviewFrame({ data = mockData, variant = 'default' }) {
  const variantData = data.variants ? data.variants[variant] : null
  const merged = variantData ? { ...data, ...variantData } : { ...data }
  const detail = merged.detailPage ? merged : null

  return (
    <div className="my-coupons" style={merged.frameHeight ? { height: merged.frameHeight } : undefined}>
      {/* 顶部：导航栏 + 选项卡：Figma 2499:16147 —— absolute top0；nav h92 + tabs h48；
          详情页（2501:16932/17126/17329）无选项卡，仅导航栏 */}
      <div className="my-coupons__header">
        <MobileNavBar
          className="my-coupons__navbar"
          showRightIcon={merged.navShowRightIcon ?? true}
          title={merged.navTitle}
        />
        {detail ? null : merged.historyTabs ? (
          <MyCouponsHistoryTabs activeTab={merged.activeTab} tabs={merged.historyTabs} />
        ) : (
          <MyCouponsTabsBar activeTab={merged.activeTab} extra={merged.tabsExtra} tabs={merged.tabs} />
        )}
      </div>
      {detail ? (
        /* 详情主体：Figma 2501:16932 Frame122 —— top112（nav92+gap20）；
           卡区 Frame123 + gap20 + 列表区 Frame121；卡与公告栏间 gap10（2501:17143）；
           列表通栏 375（body px12 → 列表 -mx12 拉通），内部滚动吸顶 */
        <div className={cx('my-coupons__body', 'my-coupons__body--detail')}>
          <div className="my-coupons__detail-card">
            {detail.detailCard.kind === 'benefit' ? (
              <MyCouponsBenefitCard card={detail.detailCard} />
            ) : (
              <MyCouponsCouponCard card={detail.detailCard} />
            )}
          </div>
          {detail.noticeBanner ? <MyCouponsNoticeBanner text={detail.noticeBanner} /> : null}
          {detail.listItems ? <MyCouponsDetailList items={detail.listItems} /> : null}
        </div>
      ) : (
        /* 主体：Figma 2499:16150 —— absolute top156 flex-col gap16 px12（兑换码态 px13） */
        <div className={cx('my-coupons__body', merged.bodyPadding === 13 && 'my-coupons__body--code', merged.bodyGap === 8 && 'my-coupons__body--used')}>
          {merged.notice ? <MyCouponsNoticeBar text={merged.notice} /> : null}
          {merged.groups.map((group) => (
            <MyCouponsGroup
              dividerLabel={group.dividerLabel}
              items={group.items}
              key={group.id}
              moreRow={group.moreRow}
            />
          ))}
          {merged.endText ? <MyCouponsEndText text={merged.endText} /> : null}
        </div>
      )}
      {merged.bottomButton ? (
        <MyCouponsBottomButton text={merged.bottomButton} />
      ) : merged.bottomBarText ? (
        <MyCouponsBottomBar text={merged.bottomBarText} />
      ) : (
        <IPhoneFooter className="my-coupons__iphone-footer" />
      )}
    </div>
  )
}

export {
  MyCouponsBenefitCard,
  MyCouponsBenefitMeta,
  MyCouponsBottomBar,
  MyCouponsBottomButton,
  MyCouponsCodeRow,
  MyCouponsCornerBadge,
  MyCouponsCouponCard,
  MyCouponsDetailItem,
  MyCouponsDetailList,
  MyCouponsDivider,
  MyCouponsExpireTag,
  MyCouponsHistoryTabs,
  MyCouponsMoreRow,
  MyCouponsNoticeBar,
  MyCouponsNoticeBanner,
  MyCouponsStamp,
  MyCouponsTabsBar,
  MyCouponsUseButton,
  variantLabels,
}
