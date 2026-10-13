import PointsOrderDetailPreviewPage from '../../../pages/PointsOrderDetailPreviewPage'
import PageCaseViewport from '../PageCaseViewport'
import { variantLabels } from '../../../components/points-order-detail/PointsOrderDetailComponents'

const variantDescriptions = {
  member: '会员卡类订单详情：商品卡（爱奇艺月卡）+ 使用人信息与订单信息两张表单 + 使用须知。',
  benefit: '权益类订单详情：代金券商品卡 + 订单信息含张数/剩余张数/可用站点链接与「去使用」按钮。',
  code: '带券码类订单详情：券类商品卡 + 订单信息含券码（1px 分割线 + 复制链接）。',
  physical: '实物商品类订单详情：顶部地址卡（已发货 + 快递单号复制）+ 商品卡 + 简化订单信息。',
}

function PointsOrderDetailCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__stack">
        {Object.keys(variantLabels).map((variant, index) => (
          <article className="case-preview__state-block" key={variant}>
            <div className="case-preview__state-meta">
              <p className={`case-preview__state-label${index > 0 ? ' case-preview__state-label--accent' : ''}`}>
                状态{['一', '二', '三', '四', '五', '六', '七', '八'][index]}
              </p>
              <p className="case-preview__state-title">{variantLabels[variant]}</p>
              <p className="case-preview__state-description">{variantDescriptions[variant]}</p>
            </div>
            <div className="case-preview__surface">
              <PageCaseViewport>
                <PointsOrderDetailPreviewPage variant={variant} />
              </PageCaseViewport>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PointsOrderDetailCasePreview
