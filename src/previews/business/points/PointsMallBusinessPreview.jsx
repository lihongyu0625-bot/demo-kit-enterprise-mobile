import {
  PointsMallFooterWatermark,
  PointsMallSpecialDeals,
  PointsMallTaskBanner,
  PointsMallTaskCard,
} from '../../../components/points-mall/PointsMallComponents'

function ComponentSample({ children, tone = 'default' }) {
  return <div className={`points-mall-business-sample points-mall-business-sample--${tone}`}>{children}</div>
}

const showcaseList = [
  {
    name: '积分商城 · 特惠专区',
    description: '复用秒杀券卡片形态，展示特惠兑换券横向列表。',
    render: <PointsMallSpecialDeals />,
  },
  {
    name: '积分商城 · 做任务赚积分',
    description: '复用小福包阶梯任务进度能力，展示积分任务短卡状态。',
    render: <PointsMallTaskCard />,
  },
  {
    name: '积分商城 · 运营横幅',
    description: '展示完成订单可额外获得积分的运营感知横幅。',
    render: <PointsMallTaskBanner />,
  },
  {
    name: '积分商城 · 底部底纹',
    description: '展示积分权益页底部品牌利益点底纹。',
    render: <PointsMallFooterWatermark />,
  },
]

function PointsMallBusinessPreview() {
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
            <div className="catalog-device-frame">
              <ComponentSample>{item.render}</ComponentSample>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

PointsMallBusinessPreview.showcaseList = showcaseList

export default PointsMallBusinessPreview
