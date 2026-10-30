import { Fragment } from 'react'
import PointsProductDetailOverlayPreviewPage from '../../../pages/PointsProductDetailOverlayPreviewPage'
import PointsExchangeSuccessOverlayPreviewPage from '../../../pages/PointsExchangeSuccessOverlayPreviewPage'
import PointsOrderDetailPreviewPage from '../../../pages/PointsOrderDetailPreviewPage'
import PageCaseViewport from '../PageCaseViewport'
import { variantLabels as productDetailVariantLabels } from '../../../components/points-product-detail-overlay/PointsProductDetailOverlayComponents'
import { variantLabels as exchangeSuccessVariantLabels } from '../../../components/points-exchange-success-overlay/PointsExchangeSuccessOverlayComponents'
import { variantLabels as orderDetailVariantLabels } from '../../../components/points-order-detail/PointsOrderDetailComponents'

/* 「商品兑换」合并条目：商品详情浮层 / 兑换成功浮层 / 订单详情
   三个商品兑换链路页面共用一个预览条目，按页分组、组内保留状态画布。 */

const productDetailVariantDescriptions = {
  default: '展示积分商品详情基础编排：头图、名称价格卡、套餐包含、使用须知、购买规则与吸底立即兑换。',
  link: '套餐条目附带跳转入口，可查看可用站点/车次列表，条目带代金券角标。',
  select: '商品三选一：通过选项宫格切换快车券、机场贵宾厅或酒店立减券，选中项带对勾角标。',
  physical: '实物商品兑换：展示收货地址卡（含编辑入口），隐藏套餐包含。',
  'physical-empty': '实物商品未添加地址：地址位显示蓝色添加收货地址引导按钮。',
  'address-list': '收货地址列表浮层：单选已有地址（编辑入口），吸底为浅蓝添加按钮。',
  'address-new-empty': '新增地址表单：四行信息全空，展示占位文案与定位入口，吸底协议+确定。',
  'address-new-filled': '新增地址表单已填写：收货人、手机号与详细地址回显，所在地区仍走定位。',
}

const exchangeSuccessVariantDescriptions = {
  default: '优惠券兑换成功基础编排：成功标识、商品卡（价格+兑换时间）与双按钮吸底。',
  code: '带券码类兑换成功：追加兑换券码卡（可复制）与使用须知、购买规则两张规则卡，单按钮吸底。',
  physical: '实物类兑换成功：商品卡展示实物商品（护颈枕），单按钮吸底。',
  benefit: '权益类兑换成功：商品卡展示单次权益（机场贵宾厅），双按钮吸底。',
  package: '权益包类兑换成功：商品卡展示权益包（机场权益包），单按钮吸底。',
}

const orderDetailVariantDescriptions = {
  member: '会员卡类订单详情：商品卡（爱奇艺月卡）+ 使用人信息与订单信息两张表单 + 使用须知。',
  benefit: '权益类订单详情：代金券商品卡 + 订单信息含张数/剩余张数/可用站点链接与「去使用」按钮。',
  code: '带券码类订单详情：券类商品卡 + 订单信息含券码（1px 分割线 + 复制链接）。',
  physical: '实物商品类订单详情：顶部地址卡（已发货 + 快递单号复制）+ 商品卡 + 简化订单信息。',
}

const exchangeGroups = [
  {
    key: 'product-detail',
    label: '页面一',
    title: '商品详情浮层',
    description: '商品详情浮层各状态：基础编排、套餐跳转、商品三选一与实物收货地址链路。',
    variantLabels: productDetailVariantLabels,
    variantDescriptions: productDetailVariantDescriptions,
    Page: PointsProductDetailOverlayPreviewPage,
  },
  {
    key: 'exchange-success',
    label: '页面二',
    title: '兑换成功浮层',
    description: '兑换成功浮层各状态：优惠券 / 券码 / 实物 / 权益 / 权益包五种兑换结果。',
    variantLabels: exchangeSuccessVariantLabels,
    variantDescriptions: exchangeSuccessVariantDescriptions,
    Page: PointsExchangeSuccessOverlayPreviewPage,
  },
  {
    key: 'order-detail',
    label: '页面三',
    title: '订单详情',
    description: '订单详情四种订单形态：会员卡类、权益类、带券码类、实物商品类。',
    variantLabels: orderDetailVariantLabels,
    variantDescriptions: orderDetailVariantDescriptions,
    Page: PointsOrderDetailPreviewPage,
  },
]

const CN_NUMERALS = ['一', '二', '三', '四', '五', '六', '七', '八']

function PointsProductExchangeCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__stack">
        {exchangeGroups.map(({ key, label, title, description, variantLabels, variantDescriptions, Page }) => (
          <Fragment key={key}>
            {/* 分组头：整行占满，页面级标题与概述 */}
            <div className="case-preview__group-meta">
              <p className="case-preview__state-label case-preview__state-label--accent">{label}</p>
              <p className="case-preview__state-title">{title}</p>
              <p className="case-preview__state-description">{description}</p>
            </div>
            {Object.keys(variantLabels).map((variant, index) => (
              <article className="case-preview__state-block" key={variant}>
                <div className="case-preview__state-meta">
                  <p className="case-preview__state-label">
                    状态{CN_NUMERALS[index]}
                  </p>
                  <p className="case-preview__state-title">{variantLabels[variant]}</p>
                  <p className="case-preview__state-description">{variantDescriptions[variant]}</p>
                </div>
                <div className="case-preview__surface">
                  <PageCaseViewport>
                    <Page variant={variant} />
                  </PageCaseViewport>
                </div>
              </article>
            ))}
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default PointsProductExchangeCasePreview
