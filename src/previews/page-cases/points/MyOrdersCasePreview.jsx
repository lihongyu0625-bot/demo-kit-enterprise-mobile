import MyOrdersPreviewPage from '../../../pages/MyOrdersPreviewPage'
import PageCaseViewport from '../PageCaseViewport'
import { variantLabels } from '../../../components/my-orders/MyOrdersComponents'

const stateLabels = ['一', '二', '三', '四', '五']

const variantDescriptions = {
  all: '全部（Figma 2921:53820）：专车个人支付-等待接驾（含车辆信息条）+ 专车企业支付-已完成（升舱/超标）+ 酒店-已完成 + 机票-待支付（去支付按钮）+ 火车票-已退票（置灰）。',
  car: '用车（Figma 2921:54302）：专车个人支付-等待接驾 + 专车企业支付-已完成 + 快车企业支付-已完成/已取消（置灰，按钮不置灰）。',
  hotel: '酒店（Figma 2921:54678）：已完成 + 两张因公代订-预订成功（亚朵S 超标、三亚铂睿，查看位置/联系酒店按钮）。',
  flight:
    '机票（Figma 2921:54968）：已出票 + 待支付（航变公告栏、双段中转武汉、航变/超标标签、去支付）+ 已退票（置灰）+ 已出票四段（底部「还有2条航班信息被隐藏」行）。',
  train:
    '火车票（Figma 2921:55561）：已出票（超标）+ 出票中三段（超标/改签，无操作按钮）+ 已退票（置灰）。',
}

function MyOrdersCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__stack">
        {Object.keys(variantLabels).map((variant, index) => (
          <article className="case-preview__state-block" key={variant}>
            <div className="case-preview__state-meta">
              <p
                className={`case-preview__state-label${
                  index > 0 ? ' case-preview__state-label--accent' : ''
                }`}
              >
                状态{stateLabels[index]}
              </p>
              <p className="case-preview__state-title">{variantLabels[variant]}</p>
              <p className="case-preview__state-description">
                {variantDescriptions[variant]}
              </p>
            </div>
            <div className="case-preview__surface">
              <PageCaseViewport>
                <MyOrdersPreviewPage variant={variant} />
              </PageCaseViewport>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
export default MyOrdersCasePreview
