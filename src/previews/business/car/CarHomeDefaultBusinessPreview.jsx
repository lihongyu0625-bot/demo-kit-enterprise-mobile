import carHomeDefaultData from '../../../mock-data/car-home-default.mock.json'
import carHomeFullData from '../../../mock-data/car-home-full.mock.json'
import {
  CarHomeDefaultBottomNav,
  CarHomeCategoryTabs,
  CarHomeDefaultFooterRules,
  CarHomeDefaultHero,
  CarHomeDefaultOperationsArea,
  CarHomeDefaultQuickActions,
  CarHomePolicyPanel,
} from '../../../components/car-home-default/CarHomeDefaultComponents'
import {
  CarHomeFullActions,
  CarHomeFullApplications,
  CarHomeFullDriverBanner,
  CarHomeFullPendingNotice,
  CarHomeFullPromoCards,
  CarHomeFullRideNotice,
  CarHomeFullTrips,
} from '../../../components/car-home-default/CarHomeFullComponents'

const showcaseList = [
  {
    name: '通用复用 · 首页头图区',
    description: '用于默认态、全态，展示头图背景、顶部操作、标题和因公因私切换。',
    render: (
      <div className="car-home-default-preview">
        <CarHomeDefaultHero hero={carHomeDefaultData.hero} />
      </div>
    ),
  },
  {
    name: '通用复用 · 品类tab组件',
    description: '用于默认态、全态，展示首页顶部业务品类切换，当前激活态为“用车”。',
    render: <CarHomeCategoryTabs categories={carHomeDefaultData.categories} />,
  },
  {
    name: '通用复用 · 首页-用车制度卡片组件',
    description: '用于默认态、全态，展示会员感知条、制度入口卡片，以及全态下可插入的一键叫车提醒模块。',
    render: (
      <div className="car-home-business-policy-showcase">
        <div className="car-home-business-policy-showcase__state">
          <p className="car-home-business-policy-showcase__label">默认态</p>
          <CarHomePolicyPanel
            notice={carHomeDefaultData.notice}
            policyCards={carHomeDefaultData.policyCards}
          />
        </div>
        <div className="car-home-business-policy-showcase__state">
          <p className="car-home-business-policy-showcase__label car-home-business-policy-showcase__label--accent">全态</p>
          <CarHomePolicyPanel
            notice={carHomeFullData.notice}
            policyCards={carHomeFullData.policyCards}
          >
            <CarHomeFullRideNotice notice={carHomeFullData.rideNotice} />
          </CarHomePolicyPanel>
        </div>
      </div>
    ),
  },
  {
    name: '默认态专用 · 金刚位入口',
    description: '默认态使用的五个金刚位入口，展示机票、酒店、火车票、代驾和权益。',
    render: <CarHomeDefaultQuickActions items={carHomeDefaultData.quickActions} />,
  },
  {
    name: '默认态专用 · 运营区',
    description: '默认态使用的运营内容区域，承接首页活动信息和推荐内容。',
    render: <CarHomeDefaultOperationsArea />,
  },
  {
    name: '全态新增 · 叫车提醒卡',
    description: '全态制度卡片里的新增提醒模块，展示加班打车地点、价格提示和去打车动作。',
    render: <CarHomeFullRideNotice notice={carHomeFullData.rideNotice} />,
  },
  {
    name: '全态新增 · 申请快捷入口',
    description: '全态在制度卡片下方新增的两项操作入口，用于申请用车和申请差旅。',
    render: <CarHomeFullActions items={carHomeFullData.applyActions} />,
  },
  {
    name: '全态新增 · 司机接驾横幅',
    description: '全态用于承接实时司机状态的横向信息条，包含车牌、距离和查看动作。',
    render: <CarHomeFullDriverBanner banner={carHomeFullData.driverBanner} />,
  },
  {
    name: '全态新增 · 待支付提醒',
    description: '全态用于展示待支付订单数量和快捷处理动作的橙色提示卡。',
    render: <CarHomeFullPendingNotice notice={carHomeFullData.pendingNotice} />,
  },
  {
    name: '全态新增 · 申请单卡组',
    description: '全态新增的申请单标题条与两张业务卡片，包含用车单和差旅单。',
    render: (
      <CarHomeFullApplications
        applications={carHomeFullData.applications}
        summary={carHomeFullData.applicationsSummary}
      />
    ),
  },
  {
    name: '全态新增 · 我的行程卡组',
    description: '全态新增的行程标题条和航班行程卡，承接近期出行与联动打车动作。',
    render: (
      <CarHomeFullTrips
        summary={carHomeFullData.tripsSummary}
        tripCard={carHomeFullData.tripCard}
      />
    ),
  },
  {
    name: '全态新增 · 营销推荐卡组',
    description: '全态新增的酒店首单福利和辅助入口卡组，用于活动承接与引导。',
    render: <CarHomeFullPromoCards cards={carHomeFullData.promoCards} />,
  },
  {
    name: '通用复用 · 规则区',
    description: '用于默认态、全态，展示底部品牌文案和规则链接。',
    render: <CarHomeDefaultFooterRules links={carHomeDefaultData.footerLinks} />,
  },
  {
    name: '通用复用 · 底部导航',
    description: '用于默认态、全态，展示一级页面底部导航和 iPhone 底部指示条。',
    render: (
      <div className="car-home-default-bottom-preview">
        <CarHomeDefaultBottomNav items={carHomeDefaultData.bottomTabs} />
      </div>
    ),
  },
]

function CarHomeDefaultBusinessPreview() {
  return (
    <section className="catalog-preview">
      <div className="catalog-preview__grid">
        {showcaseList.map((item) => (
          <article
            className="catalog-block"
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

export default CarHomeDefaultBusinessPreview
