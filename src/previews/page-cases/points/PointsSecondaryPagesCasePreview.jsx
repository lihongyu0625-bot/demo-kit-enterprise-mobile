import PointsBenefitCenterPreviewPage from '../../../pages/PointsBenefitCenterPreviewPage'
import PointsEarnTasksPreviewPage from '../../../pages/PointsEarnTasksPreviewPage'
import PointsMallPreviewPage from '../../../pages/PointsMallPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

/* 增长&一体化「二级页」合并条目：权益中心 / 做任务赚积分 / 积分商城
   三个二级页面共用一个预览条目，画布并排、逐页标注。 */
const secondaryPages = [
  {
    key: 'benefit-center',
    label: '页面一',
    title: '权益中心',
    description: '权益中心页（V8 设计稿 2298:50153）：用车权益、商旅权益、品牌会员卡、积分权益和客服权益模块。',
    Page: PointsBenefitCenterPreviewPage,
  },
  {
    key: 'earn-tasks',
    label: '页面二',
    title: '做任务赚积分',
    description: '任务积分页：用车阶梯任务、任务列表、省立返积分规则和积分获取示例。',
    Page: PointsEarnTasksPreviewPage,
  },
  {
    key: 'mall',
    label: '页面三',
    title: '积分商城',
    description: '积分商城页：顶部积分入口、限时秒杀、特惠专区、任务卡和兑换好礼模块。',
    Page: PointsMallPreviewPage,
  },
]

function PointsSecondaryPagesCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__stack">
        {secondaryPages.map(({ key, label, title, description, Page }, index) => (
          <article className="case-preview__state-block" key={key}>
            <div className="case-preview__state-meta">
              <p className={`case-preview__state-label${index > 0 ? ' case-preview__state-label--accent' : ''}`}>
                {label}
              </p>
              <p className="case-preview__state-title">{title}</p>
              <p className="case-preview__state-description">{description}</p>
            </div>
            <div className="case-preview__surface">
              <PageCaseViewport>
                <Page />
              </PageCaseViewport>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PointsSecondaryPagesCasePreview
