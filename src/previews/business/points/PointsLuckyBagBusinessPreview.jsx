import {
  PointsLuckyBagBottomWatermark,
  PointsLuckyBagBusinessBenefits,
  PointsLuckyBagEarnPoints,
  PointsLuckyBagEnterpriseBenefits,
  PointsLuckyBagFlashSale,
  PointsLuckyBagGiftExchange,
  PointsLuckyBagHero,
  PointsLuckyBagRebateCard,
  PointsLuckyBagServiceBenefits,
  PointsLuckyBagTabs,
  PointsLuckyBagTaskCard,
  PointsLuckyBagTopPoints,
  PointsLuckyBagBrandMembership,
} from '../../../components/points-lucky-bag/PointsLuckyBagComponents'

function ComponentSample({ children, tone = 'default' }) {
  return <div className={`points-lucky-bag-business-sample points-lucky-bag-business-sample--${tone}`}>{children}</div>
}

const showcaseList = [
  {
    name: '小福包 · 头图',
    description: '展示小福包蓝色渐变背景、抽券主视觉和顶部活动氛围。',
    render: <PointsLuckyBagHero />,
  },
  {
    name: '小福包 · 头部积分信息',
    description: '展示积分余额、过期提醒、等级标签、规则和明细入口。',
    render: (
      <ComponentSample tone="header">
        <PointsLuckyBagTopPoints />
      </ComponentSample>
    ),
  },
  {
    name: '小福包 · 任务卡',
    description: '展示再完成一单用车得积分的任务引导卡片。',
    render: (
      <ComponentSample tone="compact">
        <PointsLuckyBagTaskCard />
      </ComponentSample>
    ),
  },
  {
    name: '小福包 · 标签栏',
    description: '展示兑好礼、赚积分、享权益三段导航。',
    render: <PointsLuckyBagTabs />,
  },
  {
    name: '小福包 · 限时秒杀',
    description: '展示特惠兑换、场次时间和秒杀券卡。',
    render: <PointsLuckyBagFlashSale />,
  },
  {
    name: '小福包 · 积分兑好礼',
    description: '展示积分商品筛选和二列商品卡列表。',
    render: <PointsLuckyBagGiftExchange />,
  },
  {
    name: '小福包 · 做任务赚积分',
    description: '展示任务进度、任务列表和积分奖励。',
    render: <PointsLuckyBagEarnPoints />,
  },
  {
    name: '小福包 · 省立返卡',
    description: '展示省立返赚积分横向权益卡。',
    render: <PointsLuckyBagRebateCard />,
  },
  {
    name: '小福包 · 企业专属权益',
    description: '展示企业用车权益头图、会员等级和权益网格。',
    render: <PointsLuckyBagEnterpriseBenefits />,
  },
  {
    name: '小福包 · 商旅权益',
    description: '展示商旅场景下的酒店和出票保障权益。',
    render: <PointsLuckyBagBusinessBenefits />,
  },
  {
    name: '小福包 · 品牌会员卡',
    description: '展示酒店品牌会员联登和权益说明。',
    render: <PointsLuckyBagBrandMembership />,
  },
  {
    name: '小福包 · 客服权益',
    description: '展示企业版专属客服权益入口。',
    render: <PointsLuckyBagServiceBenefits />,
  },
  {
    name: '小福包 · 底部水印',
    description: '展示页面底部品牌水印。',
    render: <PointsLuckyBagBottomWatermark />,
  },
]

function PointsLuckyBagBusinessPreview() {
  return (
    <section className="catalog-preview">
      {showcaseList.map((item) => (
        <article className="catalog-block" key={item.name}>
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
    </section>
  )
}

PointsLuckyBagBusinessPreview.showcaseList = showcaseList

export default PointsLuckyBagBusinessPreview
