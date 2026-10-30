import { AiHotelCard, AiHotelLoadingCard, AiHotelNoResourceCard } from './AiHotelCard'
import { AiFlightCard, AiTrainCard } from './AiTransitCard'
import { AiPlanCard, AiPlanCardSkeleton, AiPlanCardStub } from './AiPlanCard'
import { RelatedOnlyToggle, TripEntries } from './TripEntries'
import { TripCarCard } from './TripCarCard'
import { TripFlightCard } from './TripFlightCard'
import { TripHotelCard } from './TripHotelCard'
import { TripTimelineGroup } from './TripTimeline'
import mockData from '../../mock-data/trip-page.mock.json'
import './trip-page.css'

/* ===== 已预订行程时间轴内容 ===== */
export function BookedTimeline({ variant }) {
  const { flightCard, hotelCard, aiFlight, aiHotel, nodes } = mockData
  const partialGroups = [
    {
      date: '11月1日',
      weekday: '周五',
      blocks: [
        { node: { icon: 'airplane', label: nodes.bookedFlight }, cards: [<TripFlightCard card={flightCard} />] },
        {
          node: { icon: 'hotel', label: nodes.bookedAiHotel },
          cards: [<AiHotelCard data={aiHotel} tone="violet" />],
        },
      ],
    },
    {
      date: '11月4日',
      weekday: '周一',
      blocks: [
        { node: { icon: 'hotel', label: nodes.bookedHotel }, cards: [<TripHotelCard card={hotelCard} />] },
        {
          node: { icon: 'airplane', label: nodes.bookedAiFlight },
          cards: [<AiFlightCard data={aiFlight} tone="violet" />],
        },
      ],
    },
  ]
  const noResourceGroups = [
    {
      date: '11月1日',
      weekday: '周五',
      blocks: [
        { node: { icon: 'airplane', label: nodes.bookedFlight }, cards: [<TripFlightCard card={flightCard} />] },
        {
          node: { icon: 'hotel', label: nodes.bookedAiHotel },
          cards: [<AiHotelNoResourceCard data={mockData.noResource} />],
        },
      ],
    },
  ]
  const loadingGroups = [
    {
      date: '11月1日',
      weekday: '周五',
      blocks: [
        { node: { icon: 'airplane', label: nodes.bookedFlight }, cards: [<TripFlightCard card={flightCard} />] },
        { node: { icon: 'hotel', label: nodes.bookedAiHotel }, cards: [<AiHotelLoadingCard />] },
      ],
    },
  ]

  const groups =
    variant === 'booked-no-resource' ? noResourceGroups : variant === 'booked-loading' ? loadingGroups : partialGroups

  return (
    <div className="trip-page__timeline">
      {groups.map((group, index) => (
        <TripTimelineGroup
          blocks={group.blocks}
          date={group.date}
          extra={index === 0 ? <RelatedOnlyToggle label={mockData.relatedOnly} /> : undefined}
          key={group.date}
          weekday={group.weekday}
        />
      ))}
    </div>
  )
}

/* ===== 未预订行程大卡分组构建 ===== */
/* 大卡内嵌 AI 推荐卡用灰底无描边 tone（设计稿 2622:24447 symbol「灰色」）；
   蓝紫渐变+虚线 tone 只属于时间轴独立陈列的 AI 推荐卡（2789:24108） */
function buildPlanGroups(kind) {
  const { aiFlight, aiHotel, aiHotelOptions, aiTrain, planFooter, nodes } = mockData
  const changeable = (icon, label) => ({ icon, label, changeable: true })
  const flightBlock = { node: changeable('airplane', '机票推荐 前往上海'), cards: [<AiFlightCard data={aiFlight} tone="gray" />] }
  const trainBlock = { node: changeable('train', '火车票推荐 返回北京'), cards: [<AiTrainCard data={aiTrain} tone="gray" />] }
  const hotelBlock = {
    node: changeable('hotel', '酒店推荐 上海2晚'),
    cards: [<AiHotelCard data={{ ...aiHotel, action: planFooter.action }} tone="gray" />],
  }
  const hotelOnlyBlock = {
    node: changeable('hotel', '酒店推荐 上海2晚'),
    cards: aiHotelOptions.map((option) => <AiHotelCard data={option} footer={false} key={option.name} tone="gray" />),
    gap: 8,
  }

  if (kind === 'no-hotel') {
    return [
      { date: '11月1日', weekday: '周五', blocks: [flightBlock] },
      { date: '11月4日', weekday: '周一', blocks: [trainBlock] },
    ]
  }
  if (kind === 'hotel-only') {
    return [{ date: '11月1日', weekday: '周五', blocks: [hotelOnlyBlock] }]
  }
  if (kind === 'no-train') {
    return [
      {
        date: '11月1日',
        weekday: '周五',
        blocks: [flightBlock, hotelBlock],
      },
      {
        date: '11月4日',
        weekday: '周一',
        blocks: [
          {
            node: changeable('airplane', '机票推荐 返回北京'),
            cards: [<AiFlightCard data={aiFlight} tone="gray" />],
          },
        ],
      },
    ]
  }
  // single / multi：11月1日 机票+酒店，11月4日 火车票（设计稿复用机票卡内容）
  return [
    { date: '11月1日', weekday: '周五', blocks: [flightBlock, hotelBlock] },
    { date: '11月4日', weekday: '周一', blocks: [trainBlock] },
  ]
}

/* 品类入口按场景语义删除未开通品类（Figma 2789:25606 未开通酒店 / 2789:25825 未开火车票 / 2789:26082 只开通酒店） */
const ENTRIES_EXCLUDE_BY_KIND = {
  'no-hotel': ['订酒店'],
  'no-train': ['订火车票'],
  'hotel-only': ['订机票', '订火车票'],
}

export function UnbookedContent({ variant }) {
  const kind = variant.replace('unbooked-', '')

  return (
    <div className="trip-page__frame-147">
      <TripEntries entries={mockData.entries} exclude={ENTRIES_EXCLUDE_BY_KIND[kind]} />
      {kind === 'loading' ? (
        <AiPlanCardStub trailing="loading" />
      ) : kind === 'skeleton' ? (
        <AiPlanCardSkeleton />
      ) : (
        <AiPlanCard
          footer={mockData.planFooter}
          footerProps={kind === 'hotel-only' ? { showTaxNote: false } : undefined}
          groups={buildPlanGroups(kind)}
          showOrderInfo={kind === 'multi'}
        />
      )}
    </div>
  )
}

export function ExternalContent({ variant }) {
  const carGroup = {
    date: '11月1日',
    weekday: '周五',
    blocks: [
      {
        node: { icon: 'car', label: mockData.nodes.externalCar },
        cards: [<TripCarCard card={mockData.carCard} />],
      },
    ],
    extra: <RelatedOnlyToggle label={mockData.relatedOnly} />,
  }

  return (
    <div className="trip-page__timeline trip-page__timeline--external">
      {variant === 'external-collapsed' ? (
        <AiPlanCardStub trailing="expand" />
      ) : (
        <AiPlanCard footer={mockData.planFooter} groups={buildPlanGroups('single')} />
      )}
      <TripTimelineGroup blocks={carGroup.blocks} date={carGroup.date} extra={carGroup.extra} weekday={carGroup.weekday} />
    </div>
  )
}
