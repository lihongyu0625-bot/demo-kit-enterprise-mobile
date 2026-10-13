import MyCouponsPreviewPage from '../../../pages/MyCouponsPreviewPage'
import PageCaseViewport from '../PageCaseViewport'
import { variantLabels } from '../../../components/my-coupons/MyCouponsComponents'

const variantDescriptions = {
  default: '默认：优惠券分组（3 券 + 更多行）+ 权益卡分组（快车快速应答/机场贵宾厅/高铁贵宾厅），底部积分兑券导航栏。',
  expanded: '展开全部：8 张优惠券全量平铺（含待激活 9.5 折、酒店、单车带标签去使用），尾行「已经到底啦~」。',
  code: '兑换码：选项卡切到兑换码(4)，3 行商品图 + 券码复制 + 橙色到期标签，主体左右留 13px。',
  expired: '历史券-已过期：二级选项卡（已过期/已使用），提示行 + 三组（券/权益卡/兑换码）均半透明金额 + 已过期印章。',
  used: '历史券-已使用：2 张已使用券平铺，金额 rgba(234,95,30,0.5) + 已使用印章，无分割线。',
  detail: '优惠券详情：8折券卡 + 通栏规则列表 10 项（单行 54 / 双行 73 档自然增高），无选项卡，导航栏吸顶。',
  'detail-inactive': '详情-待激活：券降级（金额半透明 + 待激活角标 + 标题灰）+ 橙色公告栏「激活条件」+ 同款规则列表。',
  'detail-benefit': '详情-权益卡：机场贵宾厅 3 次卡（共3次|剩余3次 + 已实名角标）+ 5 项列表（含蓝链「开通机场」与 5 行其他说明）+ 吸底按钮「去使用」。',
}

function MyCouponsCasePreview() {
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
                <MyCouponsPreviewPage variant={variant} />
              </PageCaseViewport>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MyCouponsCasePreview
