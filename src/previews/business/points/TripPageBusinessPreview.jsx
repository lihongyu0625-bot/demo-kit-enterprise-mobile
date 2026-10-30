import {
  AiHotelCard,
  AiHotelLoadingCard,
  AiHotelNoResourceCard,
} from '../../../components/trip-page/AiHotelCard'
import { AiCardsShowcase } from '../../../components/trip-page/AiCardsShowcase'
import { AiFlightCard } from '../../../components/trip-page/AiTransitCard'
import {
  AiPlanCard,
  AiPlanCardSkeleton,
  AiPlanCardStub,
} from '../../../components/trip-page/AiPlanCard'
import { CarRideFooter } from '../../../components/trip-page/CarRideFooter'
import { TripCarCard } from '../../../components/trip-page/TripCarCard'
import { TripEntries, TripEmptyState } from '../../../components/trip-page/TripEntries'
import { TripFlightCard } from '../../../components/trip-page/TripFlightCard'
import { TripHotelCard } from '../../../components/trip-page/TripHotelCard'
import { TripTimelineGroup } from '../../../components/trip-page/TripTimeline'
import mockData from '../../../mock-data/trip-page.mock.json'

/* 行程页业务组件陈列：与页面共用同一套组件与 mock，目录里核对拆分后的每个可复用单元 */

function Sample({ children }) {
  return <div className="trip-page-business-sample">{children}</div>
}

function StateRow({ label, children }) {
  return (
    <div className="trip-page-business-state">
      <span className="trip-page-business-state__label">{label}</span>
      {children}
    </div>
  )
}

const tripPageUsage = {
  pages: ['行程页'],
}

function TimelineGroupSample() {
  return (
    <Sample>
      <TripTimelineGroup
        blocks={[
          {
            node: { icon: 'airplane', label: mockData.nodes.bookedFlight },
            cards: [<TripFlightCard card={mockData.flightCard} key="flight" />],
          },
        ]}
        date="11月1日"
        weekday="周五"
      />
    </Sample>
  )
}

function PlanCardSample() {
  return (
    <Sample>
      <AiPlanCard
        footer={mockData.planFooter}
        groups={[
          {
            date: '11月1日',
            weekday: '周五',
            blocks: [
              {
                node: { icon: 'airplane', label: '机票推荐 前往上海', changeable: true },
                cards: [<AiFlightCard data={mockData.aiFlight} key="ai-flight" tone="gray" />],
              },
              {
                node: { icon: 'hotel', label: '酒店推荐 上海2晚', changeable: true },
                cards: [<AiHotelCard data={mockData.aiHotel} key="ai-hotel" tone="gray" />],
              },
            ],
          },
        ]}
        showOrderInfo
      />
    </Sample>
  )
}

const showcaseList = [
  {
    name: '行程 · 时间轴组',
    description: '日期行 + 虚线时间轴 + 品类块列（品类节点 + 行程卡），行程页全部内容的编排骨架。',
    render: <TimelineGroupSample />,
    usage: tripPageUsage,
  },
  {
    name: '行程 · 已预订机票卡',
    description: '航司 logo + 航班号/出票状态 + 起终时刻行 + 乘机人 + 品牌水印 + 用车推荐条。',
    render: (
      <Sample>
        <TripFlightCard card={mockData.flightCard} />
      </Sample>
    ),
    usage: tripPageUsage,
  },
  {
    name: '行程 · 已预订酒店卡',
    description: '入住/晚数/离店标题 + 店名 + 地址行（导航/电话 pill）+ 房间与入住人 + 用车推荐条。',
    render: (
      <Sample>
        <TripHotelCard card={mockData.hotelCard} />
      </Sample>
    ),
    usage: tripPageUsage,
  },
  {
    name: '行程 · 差旅单外用车卡',
    description: '预约用车卡：标题 + 包车标签 + 出发时刻 + 起终地点行 + 乘车人。',
    render: (
      <Sample>
        <TripCarCard card={mockData.carCard} />
      </Sample>
    ),
    usage: tripPageUsage,
  },
  {
    name: '行程 · 用车推荐条',
    description: '行程卡底部的打车引导条：提示文案 + 去打车按钮，已预订机票卡/酒店卡复用。',
    render: (
      <Sample>
        <CarRideFooter action={mockData.flightCard.rideAction} hint={mockData.flightCard.rideHint} />
      </Sample>
    ),
    usage: tripPageUsage,
  },
  {
    name: '行程 · AI 机票推荐卡',
    description:
      'AI 推荐机票卡（Figma 2789:27823）六态陈列：默认 / 中转 / 经停 / +1天 / 超标（企业+个人双价） / 字数过多（场站滚动+理由两行截断），均由数据驱动。',
    render: (
      <Sample>
        <AiCardsShowcase kind="flight" />
      </Sample>
    ),
    usage: tripPageUsage,
  },
  {
    name: '行程 · AI 酒店推荐卡',
    description:
      'AI 推荐酒店卡（Figma 2789:27823）常态三态：默认 / 超标（橙价+企业+个人注脚） / 字数过多（理由两行截断）；异常态两种：暂无资源（虚线壳 + 更换入口）、加载中（骨架块 + 扫光），均由数据驱动。',
    render: (
      <Sample>
        <AiCardsShowcase kind="hotel" />
        <StateRow label="暂无资源">
          <AiHotelNoResourceCard data={mockData.noResource} />
        </StateRow>
        <StateRow label="加载中">
          <AiHotelLoadingCard />
        </StateRow>
      </Sample>
    ),
    usage: tripPageUsage,
  },
  {
    name: '行程 · AI 火车票推荐卡',
    description:
      'AI 推荐火车票卡（Figma 2789:27823）五态陈列：默认（始/终角标） / 中转（序号小信息） / +1天 / 超标 / 字数过多，均由数据驱动。',
    render: (
      <Sample>
        <AiCardsShowcase kind="train" />
      </Sample>
    ),
    usage: tripPageUsage,
  },
  {
    name: '行程 · AI 规划大卡',
    description: '小滴头像头部 + 差旅单信息行 + 内嵌时间轴 + 合计/一键预订操作区。',
    render: <PlanCardSample />,
    usage: tripPageUsage,
  },
  {
    name: '行程 · AI 规划折叠/骨架',
    description: '大卡折叠占位（尾部 loading 或展开箭头）与骨架屏（头部骨架 + 时间轴骨架 + 扫光）。',
    render: (
      <Sample>
        <StateRow label="加载占位">
          <AiPlanCardStub trailing="loading" />
        </StateRow>
        <StateRow label="展开入口">
          <AiPlanCardStub trailing="expand" />
        </StateRow>
        <StateRow label="骨架屏">
          <AiPlanCardSkeleton />
        </StateRow>
      </Sample>
    ),
    usage: tripPageUsage,
  },
  {
    name: '行程 · 品类入口',
    description: '未预订时的预订入口条：提示行 + 订机票/订酒店/订火车票。',
    render: (
      <Sample>
        <TripEntries entries={mockData.entries} />
      </Sample>
    ),
    usage: tripPageUsage,
  },
  {
    name: '行程 · 空态',
    description: '已预订空态：标题 + 说明 + 插画。',
    render: (
      <Sample>
        <TripEmptyState empty={mockData.empty} />
      </Sample>
    ),
    usage: tripPageUsage,
  },
]

function TripPageBusinessPreview() {
  return (
    <section className="catalog-preview">
      <div className="catalog-preview__grid">
        {showcaseList.map((item) => (
          <article
            className="catalog-block"
            id={item.anchorLabel || item.name}
            key={item.name}
          >
            <div className="catalog-block__header">
              <div>
                <p className="catalog-block__title">{item.name}</p>
                <p className="catalog-block__description">{item.description}</p>
              </div>
            </div>
            <div className="catalog-block__surface">
              <div className="catalog-device-frame">{item.render}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

TripPageBusinessPreview.showcaseList = showcaseList

export default TripPageBusinessPreview
