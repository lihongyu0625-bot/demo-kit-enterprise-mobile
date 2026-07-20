import { MobileNavBar } from '../../components/common/MobileNavBar'
import { IPhoneFooter } from '../../components/common/IPhoneFooter'

const navBarSections = [
  {
    title: '白底导航栏',
    description: '适合常规页面头部，先看右侧操作类型，再看左侧是否带返回。',
    groups: [
      {
        title: '右侧更多',
        badge: '右icon',
        items: [
          {
            label: '有返回',
            props: {
              showBackIcon: true,
              showRightIcon: true,
              showRightText: false,
              transparent: false,
            },
          },
          {
            label: '无返回',
            props: {
              showBackIcon: false,
              showRightIcon: true,
              showRightText: false,
              transparent: false,
            },
          },
        ],
      },
      {
        title: '右侧文字',
        badge: '右文案',
        items: [
          {
            label: '有返回',
            props: {
              showBackIcon: true,
              showRightIcon: false,
              showRightText: true,
              transparent: false,
            },
          },
          {
            label: '无返回',
            props: {
              showBackIcon: false,
              showRightIcon: false,
              showRightText: true,
              transparent: false,
            },
          },
        ],
      },
      {
        title: '仅标题',
        badge: '无右操作',
        items: [
          {
            label: '有返回',
            props: {
              showBackIcon: true,
              showRightIcon: false,
              showRightText: false,
              transparent: false,
            },
          },
        ],
      },
    ],
  },
  {
    title: '透明底导航栏',
    description: '适合叠在渐变头图或首屏背景上，状态组合与白底保持一致。',
    groups: [
      {
        title: '右侧更多',
        badge: '右icon',
        items: [
          {
            label: '有返回',
            props: {
              showBackIcon: true,
              showRightIcon: true,
              showRightText: false,
              statusBarTone: 'light',
              transparent: true,
            },
          },
          {
            label: '无返回',
            props: {
              showBackIcon: false,
              showRightIcon: true,
              showRightText: false,
              statusBarTone: 'light',
              transparent: true,
            },
          },
        ],
      },
      {
        title: '右侧文字',
        badge: '右文案',
        items: [
          {
            label: '有返回',
            props: {
              showBackIcon: true,
              showRightIcon: false,
              showRightText: true,
              statusBarTone: 'light',
              transparent: true,
            },
          },
          {
            label: '无返回',
            props: {
              showBackIcon: false,
              showRightIcon: false,
              showRightText: true,
              statusBarTone: 'light',
              transparent: true,
            },
          },
        ],
      },
      {
        title: '仅标题',
        badge: '无右操作',
        items: [
          {
            label: '有返回',
            props: {
              showBackIcon: true,
              showRightIcon: false,
              showRightText: false,
              statusBarTone: 'light',
              transparent: true,
            },
          },
        ],
      },
    ],
  },
]

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
      summary="这里按使用逻辑分层展示导航栏状态，并补充 iPhone footer 公共组件，方便头尾一起维护。"
    >
      <div className="common-nav-sections">
        {navBarSections.map((section) => (
          <section className="common-nav-section" key={section.title}>
            <div className="common-nav-section__header">
              <h4 className="common-nav-section__title">{section.title}</h4>
              <p className="common-nav-section__summary">{section.description}</p>
            </div>

            <div className="common-nav-groups">
              {section.groups.map((group) => (
                <section className="common-nav-group" key={`${section.title}-${group.title}`}>
                  <div className="common-nav-group__header">
                    <h5 className="common-nav-group__title">{group.title}</h5>
                    <span className="common-nav-group__badge">{group.badge}</span>
                  </div>

                  <div className="common-nav-group__grid">
                    {group.items.map((item) => (
                      <article className="common-nav-card" key={`${group.title}-${item.label}`}>
                        <div className="common-nav-card__meta">
                          <span className="common-nav-card__label">{item.label}</span>
                        </div>

                        <div className="common-nav-card__surface">
                          <MobileNavBar
                            title="滴滴企业版"
                            rightText="预订须知"
                            {...item.props}
                          />
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        ))}

        <section className="common-nav-section">
          <div className="common-nav-section__header">
            <h4 className="common-nav-section__title">iPhone footer</h4>
            <p className="common-nav-section__summary">
              这里展示通用底部指示条组件，页面吸底操作区可以直接复用。
            </p>
          </div>

          <div className="common-footer-grid">
            <article className="common-nav-card">
              <div className="common-nav-card__meta">
                <span className="common-nav-card__label">白底场景</span>
              </div>
              <div className="common-footer-card">
                <IPhoneFooter />
              </div>
            </article>
            <article className="common-nav-card">
              <div className="common-nav-card__meta">
                <span className="common-nav-card__label">浅灰背景场景</span>
              </div>
              <div className="common-footer-card common-footer-card--muted">
                <IPhoneFooter />
              </div>
            </article>
          </div>
        </section>
      </div>
    </CommonPreviewShell>
  )
}
