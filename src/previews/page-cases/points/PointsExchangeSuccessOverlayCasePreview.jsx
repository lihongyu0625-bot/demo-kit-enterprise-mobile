import PointsExchangeSuccessOverlayPreviewPage from '../../../pages/PointsExchangeSuccessOverlayPreviewPage'
import PageCaseViewport from '../PageCaseViewport'
import { variantLabels } from '../../../components/points-exchange-success-overlay/PointsExchangeSuccessOverlayComponents'

const variantDescriptions = {
  default: '优惠券兑换成功基础编排：成功标识、商品卡（价格+兑换时间）与双按钮吸底。',
  code: '带券码类兑换成功：追加兑换券码卡（可复制）与使用须知、购买规则两张规则卡，单按钮吸底。',
  physical: '实物类兑换成功：商品卡展示实物商品（护颈枕），单按钮吸底。',
  benefit: '权益类兑换成功：商品卡展示单次权益（机场贵宾厅），双按钮吸底。',
  package: '权益包类兑换成功：商品卡展示权益包（机场权益包），单按钮吸底。',
}

function PointsExchangeSuccessOverlayCasePreview() {
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
                <PointsExchangeSuccessOverlayPreviewPage variant={variant} />
              </PageCaseViewport>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PointsExchangeSuccessOverlayCasePreview
