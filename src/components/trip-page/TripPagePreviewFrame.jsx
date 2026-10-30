import { useEffect, useRef, useState } from 'react'
import { AiCardsShowcase } from './AiCardsShowcase'
import { TripEmptyState } from './TripEntries'
import { BookedTimeline, ExternalContent, UnbookedContent } from './TripTimelineContent'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { PageBottomNav } from '../common/PageBottomNav'
import { Img } from './TripImg'
import iconActionShareImage from '../../assets/trip-page/icon-action-share-outlined.svg'
import mockData from '../../mock-data/trip-page.mock.json'
import './trip-page.css'

export const variantLabels = {
  'booked-partial': '已预订·部分行程未预订',
  'booked-no-resource': '已预订·暂无酒店资源',
  'booked-loading': '已预订·推荐加载中',
  'booked-empty': '已预订·空态',
  'unbooked-single': '未预订·单个差旅单',
  'unbooked-multi': '未预订·多个差旅单',
  'unbooked-no-hotel': '未预订·未开通酒店',
  'unbooked-no-train': '未预订·未开火车票',
  'unbooked-hotel-only': '未预订·只开通酒店',
  'unbooked-loading': '未预订·加载',
  'unbooked-skeleton': '未预订·骨架屏',
  'external-collapsed': '差旅单外行程·收起态',
  'external-expanded': '差旅单外行程·展开态',
  'ai-cards-flight': 'AI推荐卡·机票6态',
  'ai-cards-train': 'AI推荐卡·火车票5态',
  'ai-cards-hotel': 'AI推荐卡·酒店3态',
}

/* 底部导航在各变体中的设计稿 y 坐标（超出 812 视口的按原样裁切） */
const NAV_TOP = {
  'booked-partial': 976,
  'booked-no-resource': 728,
  'booked-loading': 728,
  'booked-empty': 728,
  'unbooked-single': 866,
  'unbooked-multi': 906,
  'unbooked-no-hotel': 778,
  'unbooked-no-train': 938,
  'unbooked-hotel-only': 768,
  'unbooked-loading': 768,
  'unbooked-skeleton': 728,
  'external-collapsed': 728,
  'external-expanded': 1065,
  'ai-cards-flight': 903,
  'ai-cards-train': 759,
  'ai-cards-hotel': 454,
}

/* 各变体帧壳最小高度：812 兜底；时间轴为绝对定位不撑高帧壳，超高变体按设计画板/实测内容底取值（同 my-coupons frameHeight 模式） */
const FRAME_MIN_HEIGHT = {
  'booked-partial': 1060, // Figma 2789:24080 画板 375×1060
  'unbooked-single': 942,
  'unbooked-multi': 962,
  'unbooked-no-hotel': 828,
  'unbooked-no-train': 988,
  'unbooked-hotel-only': 818,
  'unbooked-loading': 818,
  'external-expanded': 1115,
  'ai-cards-flight': 987,
  'ai-cards-train': 843,
  'ai-cards-hotel': 538,
}

/* ===== 行程页整页 ===== */
export function TripPagePreviewFrame({ variant = 'booked-partial' }) {
  const isUnbooked = variant.startsWith('unbooked')
  const isExternal = variant.startsWith('external')
  const [scrolled, setScrolled] = useState(false)
  const pageRef = useRef(null)

  /* 吸顶容器：上滑出背景渐变（300px 高，顶部 44px 内最深）后变白。
     滚动容器是 .page-case-viewport__scroll（帧壳自身不滚），从帧壳向上找最近可滚祖先 */
  useEffect(() => {
    let scroller = pageRef.current?.parentElement
    while (scroller && getComputedStyle(scroller).overflowY !== 'auto') {
      scroller = scroller.parentElement
    }
    if (!scroller) {
      return undefined
    }
    const onScroll = () => setScrolled(scroller.scrollTop > 44)
    onScroll()
    scroller.addEventListener('scroll', onScroll, { passive: true })
    return () => scroller.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="trip-page"
      ref={pageRef}
      style={{ minHeight: `${Math.max(FRAME_MIN_HEIGHT[variant] ?? 812, NAV_TOP[variant] + 84)}px` }}
    >
      <div aria-hidden="true" className="trip-page__bg" />
      {/* 吸顶头：iPhone 状态栏 + 顶部 tab 同容器（设计稿静止态 tab 紧贴状态栏下方）。
          sticky 挂帧壳流内，margin-bottom:-88px 抵消占位——所有变体内容均为绝对定位，
          静止态视觉零偏移；上滑后白底吸顶（iPhoneBar 自带底色，tab 行加白底+底边线） */}
      <header className={scrolled ? 'trip-page__header trip-page__header--scrolled' : 'trip-page__header'}>
        <IPhoneBar transparent />
        {/* 顶部 tab：Figma「行程页-顶部tab」—— 行程 20/500 + 订单 16/60 + 右侧分享 */}
        <div className="trip-page__tabs">
          <span className="trip-page__tab trip-page__tab--active">{mockData.tabs[0]}</span>
          <span className="trip-page__tab">{mockData.tabs[1]}</span>
          <Img className="trip-page__tabs-share" src={iconActionShareImage} />
        </div>
      </header>
      {variant.startsWith('ai-cards') ? (
        <AiCardsShowcase kind={variant.replace('ai-cards-', '')} />
      ) : variant === 'booked-empty' ? (
        <TripEmptyState empty={mockData.empty} />
      ) : isUnbooked ? (
        <UnbookedContent variant={variant} />
      ) : isExternal ? (
        <ExternalContent variant={variant} />
      ) : (
        <BookedTimeline variant={variant} />
      )}
      <div className="trip-page__bottom-nav">
        <PageBottomNav items={mockData.bottomNav} />
        <IPhoneFooter />
      </div>
    </div>
  )
}
