import BusinessComponentCatalogPreview from './BusinessComponentCatalogPreview'
import { PointsBenefitHeader } from '../../components/points-benefit-header/PointsBenefitHeader'
import { PointsBenefitTitle } from '../../components/points-benefit-title/PointsBenefitTitle'
import { PointsCouponShowcase, PointsEarnMissionCard } from '../../components/points-lucky-bag/PointsLuckyBagComponents'
import PointsLuckyBagBusinessPreview from './points/PointsLuckyBagBusinessPreview'
import PointsMallBusinessPreview from './points/PointsMallBusinessPreview'

function withUsage(items, page, options = {}) {
  const { displayNames = {}, overrides = {} } = options

  return items.map((item) => ({
    ...item,
    displayName: displayNames[item.name] || item.name.replace(/^[^·]+ · /, ''),
    usage: overrides[item.name] || {
      pages: [page],
      components: [],
    },
  }))
}

function pick(items, includes) {
  return items.filter((item) => includes.some((keyword) => item.name.includes(keyword)))
}

const luckyBagPageUsage = {
  pages: ['小福包'],
}

const mallPageUsage = {
  pages: ['积分商城'],
}

function PointsMissionStatesPreview() {
  return (
    <div className="points-lucky-bag-business-sample points-lucky-bag-business-sample--stack">
      <div className="points-lucky-bag-business-state">
        <span className="points-lucky-bag-business-state__label">完整态</span>
        <PointsEarnMissionCard />
      </div>
      <div className="points-lucky-bag-business-state">
        <span className="points-lucky-bag-business-state__label">精简态</span>
        <PointsEarnMissionCard state="compact" />
      </div>
    </div>
  )
}

function PointsCouponStatesPreview() {
  return (
    <div className="points-lucky-bag-business-sample points-lucky-bag-business-sample--stack">
      <div className="points-lucky-bag-business-state">
        <span className="points-lucky-bag-business-state__label">完整态</span>
        <PointsCouponShowcase />
      </div>
      <div className="points-lucky-bag-business-state">
        <span className="points-lucky-bag-business-state__label">精简态</span>
        <PointsCouponShowcase state="compact" />
      </div>
    </div>
  )
}

function PointsBenefitHeaderStatesPreview() {
  return (
    <div className="points-lucky-bag-business-sample points-lucky-bag-business-sample--stack">
      <div className="points-lucky-bag-business-state">
        <span className="points-lucky-bag-business-state__label">积分态</span>
        <PointsBenefitHeader />
      </div>
      <div className="points-lucky-bag-business-state">
        <span className="points-lucky-bag-business-state__label">任务态</span>
        <PointsBenefitHeader variant="task" />
      </div>
    </div>
  )
}

function PointsBenefitTitleStatesPreview() {
  return (
    <div className="points-lucky-bag-business-sample points-lucky-bag-business-sample--stack">
      <div className="points-lucky-bag-business-state">
        <span className="points-lucky-bag-business-state__label">积分态</span>
        <PointsBenefitTitle />
      </div>
      <div className="points-lucky-bag-business-state">
        <span className="points-lucky-bag-business-state__label">任务态</span>
        <PointsBenefitTitle variant="task" />
      </div>
    </div>
  )
}

const sections = [
  {
    id: 'points-lucky-entry',
    title: '头部入口类',
    description: '承接积分权益页面的头图、积分信息、任务卡和标签栏。',
    items: [
      {
        name: '积分权益头图',
        anchorLabel: '积分权益头图',
        displayName: '积分权益头图',
        description: '同一个头图组件支持积分态与任务态，分别用于积分商城和做任务赚积分页。',
        render: <PointsBenefitHeaderStatesPreview />,
        usage: {
          pages: ['积分商城', '做任务赚积分'],
        },
      },
      {
        name: '积分权益标题',
        anchorLabel: '积分权益标题',
        displayName: '积分权益标题',
        description: '同一个标题组件支持积分态与任务态，包含标题、积分余额和页面跳转入口。',
        render: <PointsBenefitTitleStatesPreview />,
        usage: {
          pages: ['积分商城', '做任务赚积分'],
        },
      },
      ...withUsage(
        pick(PointsLuckyBagBusinessPreview.showcaseList, ['头图', '头部积分信息', '任务卡', '标签栏']),
        '小福包',
        {
          overrides: {
            '小福包 · 头图': luckyBagPageUsage,
            '小福包 · 头部积分信息': luckyBagPageUsage,
            '小福包 · 任务卡': luckyBagPageUsage,
            '小福包 · 标签栏': luckyBagPageUsage,
          },
        },
      ),
      ...withUsage(
        pick(PointsMallBusinessPreview.showcaseList, []),
        '积分商城',
        {
          overrides: {
          },
        },
      ),
    ],
  },
  {
    id: 'points-lucky-rewards',
    title: '兑换奖励类',
    description: '承接限时秒杀、特惠专区、积分兑换和赚积分任务模块。',
    items: [
      ...withUsage(
        pick(PointsLuckyBagBusinessPreview.showcaseList, ['积分兑好礼']),
        '小福包',
        {
          overrides: {
            '小福包 · 积分兑好礼': {
              pages: ['小福包', '积分商城'],
              components: ['积分商城 · 商品兑换区'],
            },
          },
        },
      ),
      {
        name: '限时秒杀/特惠专区',
        anchorLabel: '限时秒杀/特惠专区',
        displayName: '限时秒杀/特惠专区',
        description: '同一个组件支持完整态和精简态，分别用于小福包限时秒杀与积分商城特惠专区。',
        render: <PointsCouponStatesPreview />,
        usage: {
          pages: ['小福包', '积分商城'],
        },
      },
      {
        name: '做任务赚积分',
        anchorLabel: '做任务赚积分',
        displayName: '做任务赚积分',
        description: '同一个组件支持完整态和精简态，分别用于小福包任务列表与积分商城短卡。',
        render: <PointsMissionStatesPreview />,
        usage: {
          pages: ['小福包', '积分商城'],
        },
      },
      ...withUsage(
        pick(PointsMallBusinessPreview.showcaseList, []),
        '积分商城',
        {
          overrides: {
          },
        },
      ),
    ],
  },
  {
    id: 'points-mall-operation',
    title: '任务运营类',
    description: '承接积分任务提醒和运营横幅。',
    items: withUsage(
      pick(PointsMallBusinessPreview.showcaseList, ['运营横幅']),
      '积分商城',
      {
        overrides: {
          '积分商城 · 运营横幅': mallPageUsage,
        },
      },
    ),
  },
  {
    id: 'points-lucky-benefits',
    title: '权益服务类',
    description: '承接积分权益、商旅权益、品牌会员、客服权益和底部水印。',
    items: [
      ...withUsage(
        pick(PointsLuckyBagBusinessPreview.showcaseList, ['省立返卡', '企业专属权益', '商旅权益', '品牌会员卡', '客服权益', '底部水印']),
        '小福包',
        {
          overrides: {
            '小福包 · 省立返卡': luckyBagPageUsage,
            '小福包 · 企业专属权益': luckyBagPageUsage,
            '小福包 · 商旅权益': luckyBagPageUsage,
            '小福包 · 品牌会员卡': luckyBagPageUsage,
            '小福包 · 客服权益': luckyBagPageUsage,
            '小福包 · 底部水印': luckyBagPageUsage,
          },
        },
      ),
      ...withUsage(
        pick(PointsMallBusinessPreview.showcaseList, ['底部底纹']),
        '积分商城',
        {
          overrides: {
            '积分商城 · 底部底纹': {
              pages: ['积分商城', '做任务赚积分'],
            },
          },
        },
      ),
    ],
  },
]

function PointsBusinessComponentsPreview() {
  return <BusinessComponentCatalogPreview sections={sections} />
}

export default PointsBusinessComponentsPreview
