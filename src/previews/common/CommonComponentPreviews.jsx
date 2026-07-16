import { IPhoneBar } from '../../components/common/IPhoneBar'

function CommonPreviewShell({ eyebrow, title, summary, children }) {
  return (
    <section className="common-preview">
      <div className="common-preview__header">
        <p className="common-preview__eyebrow">{eyebrow}</p>
        <h3 className="common-preview__title">{title}</h3>
        <p className="common-preview__summary">{summary}</p>
      </div>
      <div className="common-preview__surface">{children}</div>
    </section>
  )
}

export function CommonButtonPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="按钮预览"
      summary="这里先作为按钮能力的统一预览位，后续可以直接替换成真实按钮组件。"
    >
      <div className="common-button-grid">
        <button
          className="common-demo-button common-demo-button--primary"
          type="button"
        >
          主要按钮
        </button>
        <button
          className="common-demo-button common-demo-button--secondary"
          type="button"
        >
          次要按钮
        </button>
        <button
          className="common-demo-button common-demo-button--ghost"
          type="button"
        >
          文字按钮
        </button>
        <button
          className="common-demo-button common-demo-button--disabled"
          type="button"
        >
          禁用状态
        </button>
      </div>
    </CommonPreviewShell>
  )
}

export function CommonSwitchPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="开关预览"
      summary="后续如果抽出真实开关组件，这里可以直接变成开关样式与状态的展示页。"
    >
      <div className="common-switch-list">
        <div className="common-switch-row">
          <div>
            <p className="common-switch-row__title">默认关闭</p>
            <p className="common-switch-row__copy">适合展示未启用状态</p>
          </div>
          <span className="common-demo-switch">
            <span className="common-demo-switch__thumb" />
          </span>
        </div>
        <div className="common-switch-row">
          <div>
            <p className="common-switch-row__title">默认开启</p>
            <p className="common-switch-row__copy">适合展示启用状态</p>
          </div>
          <span className="common-demo-switch common-demo-switch--checked">
            <span className="common-demo-switch__thumb" />
          </span>
        </div>
      </div>
    </CommonPreviewShell>
  )
}

export function CommonNavBarPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="导航栏预览"
      summary="这里展示按设计稿还原的 iPhone bar，并预留移动端导航栏组合预览，方便后续持续新增和维护。"
    >
      <div className="common-nav-demo">
        <div className="common-nav-demo__device">
          <IPhoneBar />
          <div className="common-nav-demo__bar">
            <button
              className="common-nav-demo__action"
              type="button"
              aria-label="返回"
            >
              ‹
            </button>
            <p className="common-nav-demo__title">默认标题</p>
            <button
              className="common-nav-demo__action common-nav-demo__action--strong"
              type="button"
            >
              更多
            </button>
          </div>
          <div className="common-nav-demo__body">
            <p>后续新的导航栏组件可以直接挂到这里统一预览。</p>
          </div>
        </div>
      </div>
    </CommonPreviewShell>
  )
}
