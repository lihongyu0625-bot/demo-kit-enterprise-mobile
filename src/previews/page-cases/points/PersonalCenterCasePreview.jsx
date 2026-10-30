import PersonalCenterPreviewPage from '../../../pages/PersonalCenterPreviewPage'
import PageCaseViewport from '../PageCaseViewport'
import { variantLabels } from '../../../components/personal-center/PersonalCenterComponents'

const stateLabels = ['一', '二', '三', '四', '五']

const variantDescriptions = {
  staff:
    '员工·剩余额度（权益卡 2939:44955 + 限额「剩余额度」态 + 开通品类数=4 2940:45410 + 积分双列 2940:45532）：用车/酒店/机票/火车票四品类入口，积分 134 | 优惠券 6 双列居中。',
  exec: '高管·限额数+剩余额度（权益卡 2939:44957 + 限额第三态 + 开通品类数=4 2940:45410）：尊享权益深色卡，个人限额 150000.00 元/月，剩余 150000.00 元，四品类入口。',
  noPoints:
    '无限额·积分未开通（限额「无限额」态 + 开通品类数=3 + 积分单列 2945:46597）：个人暂无额度限制，优惠券单列 space-between，箭头贴右缘。',
  twoCategories: '开通品类数=2（2940:45441）：用车 + 酒店两品类入口。',
  singleCategory:
    '开通品类数=1（2940:45465）：40px 单行——品类 icon24 + 我的订单 Bold，无「全部订单」与右箭头。',
}

function PersonalCenterCasePreview() {
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
                <PersonalCenterPreviewPage variant={variant} />
              </PageCaseViewport>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
export default PersonalCenterCasePreview
