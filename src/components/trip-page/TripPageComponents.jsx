import './trip-page.css'

/**
 * 行程页组件统一出口（兼容既有引用）。
 * 实现已按业务组件拆分至本目录各文件，页面应直接引用具体组件文件：
 * - TripPagePreviewFrame.jsx  整页帧壳 + variantLabels/NAV_TOP/FRAME_MIN_HEIGHT
 * - TripTimeline.jsx          时间轴（日期行/品类节点/时间轴组）
 * - TripFlightCard.jsx / TripHotelCard.jsx / TripCarCard.jsx  已预订行程卡
 * - CarRideFooter.jsx         用车推荐条
 * - AiCardParts.jsx           AI 推荐卡公共部件（关闭/理由/场站/中段/金额/小信息）
 * - AiTransitCard.jsx         AI 机票/火车票推荐卡
 * - AiHotelCard.jsx           AI 酒店推荐卡（默认/暂无资源/加载）
 * - AiSkeletonParts.jsx       扫光/骨架块
 * - AiPlanCard.jsx / AiPlanCardParts.jsx  AI 规划大卡（展开/收起/骨架）
 * - TripEntries.jsx           品类入口/空态/仅看相关开关
 * - TripTimelineContent.jsx   已预订/未预订/差旅单外内容组装
 * - AiCardsShowcase.jsx       AI 推荐卡状态总览
 */
export { TripPagePreviewFrame, variantLabels } from './TripPagePreviewFrame'
export { TripDateRow, TripCategoryNode, TripTimelineGroup } from './TripTimeline'
export { TripFlightCard } from './TripFlightCard'
export { TripHotelCard } from './TripHotelCard'
export { TripCarCard } from './TripCarCard'
export { CarRideFooter } from './CarRideFooter'
export { AiFlightCard, AiTrainCard, AiTransitCard } from './AiTransitCard'
export { AiHotelCard, AiHotelLoadingCard, AiHotelNoResourceCard } from './AiHotelCard'
export { AiPlanCard, AiPlanCardStub, AiPlanCardSkeleton } from './AiPlanCard'
export { TripEntries, TripEmptyState, RelatedOnlyToggle } from './TripEntries'
export { BookedTimeline, UnbookedContent, ExternalContent } from './TripTimelineContent'
export { AiCardsShowcase } from './AiCardsShowcase'
