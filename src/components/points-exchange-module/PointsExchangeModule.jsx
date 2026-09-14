import gift3 from '../../assets/points-lucky-bag/gift-3.png'
import gift4 from '../../assets/points-lucky-bag/gift-4.png'
import gift5 from '../../assets/points-lucky-bag/gift-5.png'
import gift6 from '../../assets/points-lucky-bag/gift-6.png'
import { DirectionalIcon } from '../common/DirectionalIcon'
import './points-exchange-module.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

const defaultProducts = {
  flight: [
    { image: gift5, title: '机场贵宾厅单人休息券', points: '326', original: '78元', description: '全国20+机场通用', action: '兑换' },
    { image: gift6, title: '航司里程加倍卡', points: '43', original: '30元', description: '飞行里程×2 限时兑', action: '兑换' },
  ],
  hotel: [
    { image: gift3, title: '高铁贵宾厅体验券', points: '6', original: '20元', description: '候车专属休息区', action: '兑换' },
    { image: gift4, title: '场站餐饮20元券包', points: '43', original: '20元', description: '机场高铁站可用', action: '兑换' },
  ],
}

/**
 * 积分兑换推荐模块（R-QYJ-731337）
 * 按 PRD 三、积分模块改造：
 * - 头部：可用积分 + 查看更多（跳积分商城）
 * - 推荐 2 个商品：标题 / 价格 / 划线价 / 商品描述
 * - 点击商品进详情，点击兑换完成一件兑换
 * 视觉结构参考 points-lucky-bag 的 GiftCard（复用候选 medium）。
 */
export function PointsExchangeModule({ scene = 'flight', availablePoints = '376', products, className }) {
  const items = products || defaultProducts[scene] || []
  if (!items.length) {
    return null
  }

  return (
    <section className={cx('points-exchange-module', className)} data-scene={scene}>
      <header className="points-exchange-module__header">
        <div className="points-exchange-module__points">
          <span className="points-exchange-module__points-label">可用积分</span>
          <strong className="points-exchange-module__points-value">{availablePoints}</strong>
        </div>
        <button className="points-exchange-module__more" type="button">
          <span>查看更多</span>
          <DirectionalIcon
            className="points-exchange-module__more-icon"
            name="icon/directional/chevron-right-small/outlined"
          />
        </button>
      </header>

      <div className="points-exchange-module__grid">
        {items.map((product) => (
          <article className="points-exchange-module__card" key={product.title}>
            <img
              alt=""
              className="points-exchange-module__card-image"
              src={product.image}
            />
            <div className="points-exchange-module__card-body">
              <p className="points-exchange-module__card-title">{product.title}</p>
              <p className="points-exchange-module__card-description">{product.description}</p>
              <div className="points-exchange-module__card-bottom">
                <div className="points-exchange-module__price">
                  <span className="points-exchange-module__price-points">{product.points}积分</span>
                  <span className="points-exchange-module__price-original">{product.original}</span>
                </div>
                <button className="points-exchange-module__card-action" type="button">
                  {product.action}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
