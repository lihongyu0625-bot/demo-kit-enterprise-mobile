import PointsDetailPreviewPage from '../../../pages/PointsDetailPreviewPage'
import PageCaseViewport from '../PageCaseViewport'
import { variantLabels } from '../../../components/points-detail/PointsDetailComponents'

const variantDescriptions = {
  income: '收支明细：积分行（过期提醒 + 积分规则）+ 收支行列表，获得态蓝色金额可展开到期时间，消耗态黑84金额。',
  exchange: '兑换记录：商品图 + 两行截断标题 + 红字退款状态 + 橙色「34积分+2元」价格行。',
  lottery: '抽奖记录：积分行隐藏过期提醒，行含「查看详情/去兑换/查看兑换码」蓝字链接，后四行无链接。',
}

function PointsDetailCasePreview() {
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
                <PointsDetailPreviewPage variant={variant} />
              </PageCaseViewport>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PointsDetailCasePreview
