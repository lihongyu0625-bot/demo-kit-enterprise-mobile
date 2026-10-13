import PointsProductDetailOverlayPreviewPage from '../../../pages/PointsProductDetailOverlayPreviewPage'
import PageCaseViewport from '../PageCaseViewport'
import { variantLabels } from '../../../components/points-product-detail-overlay/PointsProductDetailOverlayComponents'

const variantDescriptions = {
  default: '展示积分商品详情基础编排：头图、名称价格卡、套餐包含、使用须知、购买规则与吸底立即兑换。',
  link: '套餐条目附带跳转入口，可查看可用站点/车次列表，条目带代金券角标。',
  select: '商品三选一：通过选项宫格切换快车券、机场贵宾厅或酒店立减券，选中项带对勾角标。',
  physical: '实物商品兑换：展示收货地址卡（含编辑入口），隐藏套餐包含。',
  'physical-empty': '实物商品未添加地址：地址位显示蓝色添加收货地址引导按钮。',
  'address-list': '收货地址列表浮层：单选已有地址（编辑入口），吸底为浅蓝添加按钮。',
  'address-new-empty': '新增地址表单：四行信息全空，展示占位文案与定位入口，吸底协议+确定。',
  'address-new-filled': '新增地址表单已填写：收货人、手机号与详细地址回显，所在地区仍走定位。',
}

function PointsProductDetailOverlayCasePreview() {
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
                <PointsProductDetailOverlayPreviewPage variant={variant} />
              </PageCaseViewport>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PointsProductDetailOverlayCasePreview
