import TripPagePreviewPage from '../../../pages/TripPagePreviewPage'
import PageCaseViewport from '../PageCaseViewport'
import { variantLabels } from '../../../components/trip-page/TripPagePreviewFrame'

const stateLabels = [
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
  '七',
  '八',
  '九',
  '十',
  '十一',
  '十二',
  '十三',
  '十四',
  '十五',
  '十六',
]

const variantDescriptions = {
  'booked-partial':
    '已预订行程（Figma 2789:24080）：11月1日 机票已出票 + 酒店未预订 AI 推荐（蓝紫虚线卡），11月4日 酒店已确认 + 返程航班 AI 推荐。',
  'booked-no-resource':
    '已预订行程（Figma 2789:24322）：酒店品类下暂无酒店资源卡，展示「更换酒店」入口，下方推荐内容半透明。',
  'booked-loading':
    '已预订行程（Figma 2789:24589 链路）：酒店 AI 推荐卡加载中，骨架块 + 扫光动画。',
  'booked-empty':
    '已预订行程（Figma Frame158）：空态，标题「让差旅，更有序」+ 说明 + 375×419 插画。',
  'unbooked-single':
    '未预订行程（Figma 2789:25091）：品类入口（订机票/订酒店/订火车票）+ AI 规划大卡单差旅单：11月1日 机票推荐 + 酒店推荐，11月4日 火车票推荐，底部合计与重新规划/一键预订。',
  'unbooked-multi':
    '未预订行程（Figma 2789:25345）：多个差旅单，大卡头部含差旅单信息行（事由-部门出差去上海调研）。',
  'unbooked-no-hotel':
    '未预订行程（Figma 2789:25606）：未开通酒店品类，仅 11月1日 机票推荐与 11月4日 火车票推荐。',
  'unbooked-no-train':
    '未预订行程（Figma 2789:25825）：未开火车票，11月1日 机票 + 酒店推荐、11月4日 机票推荐。',
  'unbooked-hotel-only':
    '未预订行程（Figma 2789:26082）：只开通酒店，单日期组下 3 张酒店推荐卡纵向排列（无底部合计）。',
  'unbooked-loading':
    '未预订行程（Figma 2789:26462）：AI 规划大卡加载占位（56px 头部 + loading 旋转图标）。',
  'unbooked-skeleton':
    '未预订行程（Figma 2789:26612）：AI 规划大卡骨架屏（真实日期行 + 卡片骨架块 + 扫光）。',
  'external-collapsed':
    '预订差旅单外行程（Figma 2789:26790）：AI 规划大卡收起为 56px 头部条 + 11月1日 用车（快车包车）行程组，日期行右侧「仅看与我相关的行程」筛选。',
  'external-expanded':
    '预订差旅单外行程（Figma 2789:26896）：AI 规划大卡展开 + 用车行程组。',
}

/* AI 推荐卡状态总览（机票6态/火车票5态/酒店3态）是组件变体陈列，
   已归入「业务组件 / 增长&一体化 / 行程页类」，不再作为页面案例罗列 */
const EXCLUDED_VARIANTS = ['ai-cards-flight', 'ai-cards-train', 'ai-cards-hotel']

function TripPageCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__stack">
        {Object.keys(variantLabels)
          .filter((variant) => !EXCLUDED_VARIANTS.includes(variant))
          .map((variant, index) => (
          <article className="case-preview__state-block" key={variant}>
            <div className="case-preview__state-meta">
              <p className={`case-preview__state-label${index > 0 ? ' case-preview__state-label--accent' : ''}`}>
                状态{stateLabels[index]}
              </p>
              <p className="case-preview__state-title">{variantLabels[variant]}</p>
              <p className="case-preview__state-description">{variantDescriptions[variant]}</p>
            </div>
            <div className="case-preview__surface">
              <PageCaseViewport>
                <TripPagePreviewPage variant={variant} />
              </PageCaseViewport>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
export default TripPageCasePreview
