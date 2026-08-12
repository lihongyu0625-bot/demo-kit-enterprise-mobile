import { Badge } from '../../components/common/Badge'
import { CardDivider } from '../../components/common/CardDivider'
import { ChevronAction } from '../../components/common/ChevronAction'
import { IPhoneBar } from '../../components/common/IPhoneBar'
import { MobileNavBar } from '../../components/common/MobileNavBar'
import { BottomWatermark } from '../../components/common/BottomWatermark'
import { IPhoneFooter } from '../../components/common/IPhoneFooter'
import { PageBottomNav } from '../../components/common/PageBottomNav'
import { PriceDisplay } from '../../components/common/PriceDisplay'
import { Tag } from '../../components/common/Tag'
import carHomeDefaultData from '../../mock-data/car-home-default.mock.json'
import { CarHomeDefaultFooterRules } from '../../components/car-home-default/CarHomeDefaultComponents'
import bottomWatermarkFlightImage from '../../assets/flight-home/bottom-watermark-flight.svg'
import { HotelHomeBusinessBottomWatermark } from '../../components/hotel-home-business/HotelHomeBusinessComponents'
import hotelBenefitsIcon from '../../assets/hotel-home-business/icon-benefits.svg'
import hotelHeadphonesIcon from '../../assets/hotel-home-business/icon-headphones.svg'
import hotelOrdersIcon from '../../assets/hotel-home-business/icon-orders.svg'

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

const commonUsageMap = {
  button: {
    pages: ['暂无'],
    components: ['当前还是预留预览位，尚未从酒店业务页面中抽离真实按钮组件。'],
  },
  switch: {
    pages: ['暂无'],
    components: ['当前还是预留预览位，尚未从酒店业务页面中抽离真实开关组件。'],
  },
  iphoneBar: {
    pages: [
      '酒店首页-因公',
      '酒店列表页',
      '酒店详情页',
      '房型详情页',
      '酒店填单页',
      '酒店下单成功页',
      '酒店订单详情页',
    ],
    components: [
      '酒店首页-因公头部',
      '酒店列表页头部',
      '酒店详情页头图导航区',
      '房型详情页顶部区域',
      '酒店填单页顶部导航栏',
      '酒店下单成功页顶部状态区',
      '酒店订单详情页顶部导航栏',
    ],
  },
  iphoneFooter: {
    pages: [
      '酒店首页-因公',
      '酒店列表页',
      '酒店详情页',
      '房型详情页',
      '酒店填单页',
      '酒店下单成功页',
      '酒店订单详情页',
    ],
    components: ['各页面吸底固定底部区域'],
  },
  pageBottomNav: {
    pages: ['首页', '酒店首页-因公'],
    components: ['用车首页底部导航（默认态 / 全态）', '酒店首页-因公底部导航'],
  },
  navBar: {
    pages: ['酒店填单页', '酒店详情页'],
    components: ['酒店填单页顶部导航栏', '酒店详情页导航栏'],
  },
  price: {
    pages: ['酒店列表页', '酒店详情页', '房型详情页', '酒店填单页'],
    components: ['酒店卡片价格区', '酒店预订按钮价格区', '房型卡片价格区', '酒店填单页底部提交栏'],
  },
  tag: {
    pages: ['酒店详情页', '通用筛选场景'],
    components: ['酒店详情页筛选标签', '酒店详情页房型属性标签', '设计稿新增可选标签'],
  },
  badge: {
    pages: ['酒店填单页', '酒店详情页'],
    components: ['酒店填单页房型政策徽标', '酒店详情页协议酒店徽标'],
  },
  divider: {
    pages: ['酒店填单页', '酒店详情页', '酒店首页-因公'],
    components: ['酒店填单页各信息卡', '酒店详情页权益信息区', '酒店首页-因公省心住卡片'],
  },
  bottomWatermark: {
    pages: ['酒店首页-因公', '机票首页-因公', '首页'],
    components: ['酒店首页-因公底部水印', '机票首页-因公底部水印', '首页规则区底部品牌水印（默认态）'],
  },
  chevronAction: {
    pages: ['酒店填单页'],
    components: ['订房必读', '全部权益', '明细'],
  },
}

const defaultPageBottomNavItems = [
  { label: '首页', icon: 'home', active: true },
  { label: '行程', icon: 'schedule', active: false },
  { label: '小福包', icon: 'bag', active: false },
  { label: '工作台', icon: 'workspace', active: false },
  { label: '我的', icon: 'profile', active: false },
]

const scheduleActivePageBottomNavItems = [
  { label: '首页', icon: 'home', active: false },
  { label: '行程', icon: 'schedule', active: true },
  { label: '小福包', icon: 'bag', active: false },
  { label: '工作台', icon: 'workspace', active: false },
  { label: '我的', icon: 'profile', active: false },
]

const hotelPageBottomNavItems = [
  { label: '我的订单', icon: 'orders', iconSrc: hotelOrdersIcon, active: false },
  { label: '品牌权益', icon: 'benefits', iconSrc: hotelBenefitsIcon, active: false },
  { label: '联系客服', icon: 'headphones', iconSrc: hotelHeadphonesIcon, active: false },
]

function UsageNote({ pages, components }) {
  return (
    <div className="common-preview__usage">
      <div className="common-preview__usage-row">
        <span className="common-preview__usage-label">使用页面</span>
        <p className="common-preview__usage-text">{pages.join('、')}</p>
      </div>
      <div className="common-preview__usage-row">
        <span className="common-preview__usage-label">使用业务组件</span>
        <p className="common-preview__usage-text">{components.join('、')}</p>
      </div>
    </div>
  )
}

function CommonPreviewShell({ eyebrow, title, summary, usage, children }) {
  return (
    <section className="common-preview">
      <div className="common-preview__header">
        <p className="common-preview__eyebrow">{eyebrow}</p>
        <h3 className="common-preview__title">{title}</h3>
        <p className="common-preview__summary">{summary}</p>
      </div>
      <div className="common-preview__surface">{children}</div>
      {usage ? <UsageNote {...usage} /> : null}
    </section>
  )
}

export function CommonButtonPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="按钮预览"
      summary="这里先作为按钮能力的统一预览位，后续可以直接替换成真实按钮组件。"
      usage={commonUsageMap.button}
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
      usage={commonUsageMap.switch}
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

export function CommonIPhoneBarPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="状态栏预览"
      summary="统一展示 iPhone 状态栏的深色和浅色两种场景，后续页面顶部可以直接复用。"
      usage={commonUsageMap.iphoneBar}
    >
      <div className="common-foundation-grid">
        <article className="common-foundation-card">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">白底场景</span>
          </div>
          <div className="common-footer-card">
            <IPhoneBar />
          </div>
        </article>
        <article className="common-foundation-card">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">透明浅色场景</span>
          </div>
          <div className="common-footer-card common-footer-card--dark">
            <IPhoneBar tone="light" transparent />
          </div>
        </article>
      </div>
    </CommonPreviewShell>
  )
}

export function CommonIPhoneFooterPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="底部指示条预览"
      summary="统一展示页面吸底时使用的 iPhone 底部指示条组件。"
      usage={commonUsageMap.iphoneFooter}
    >
      <div className="common-foundation-grid">
        <article className="common-foundation-card">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">白底场景</span>
          </div>
          <div className="common-footer-card">
            <IPhoneFooter />
          </div>
        </article>
        <article className="common-foundation-card">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">浅灰背景场景</span>
          </div>
          <div className="common-footer-card common-footer-card--muted">
            <IPhoneFooter />
          </div>
        </article>
      </div>
    </CommonPreviewShell>
  )
}

export function CommonPageBottomNavPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="页面底部导航预览"
      summary="这里统一展示一级页面底部导航组件，包含五入口和三入口两种业务场景，本质上都是同一个通用组件。"
      usage={commonUsageMap.pageBottomNav}
    >
      <div className="common-foundation-grid">
        <article className="common-foundation-card">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">首页激活</span>
          </div>
          <div className="common-footer-card">
            <PageBottomNav items={defaultPageBottomNavItems} />
          </div>
        </article>
        <article className="common-foundation-card">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">行程激活</span>
          </div>
          <div className="common-footer-card">
            <PageBottomNav items={scheduleActivePageBottomNavItems} />
          </div>
        </article>
        <article className="common-foundation-card">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">酒店三入口</span>
          </div>
          <div className="common-footer-card">
            <PageBottomNav className="hotel-home-business-bottom-nav" items={hotelPageBottomNavItems} />
          </div>
        </article>
      </div>
    </CommonPreviewShell>
  )
}

export function CommonNavBarPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="导航栏预览"
      summary="这里按使用逻辑分层展示导航栏状态，方便统一维护返回、标题和右侧操作。"
      usage={commonUsageMap.navBar}
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
      </div>
    </CommonPreviewShell>
  )
}

export function CommonPriceDisplayPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="价格组件预览"
      summary="这里展示的是从酒店详情页价格样式里抽出来的真实价格组件状态。"
      usage={commonUsageMap.price}
    >
      <div className="common-foundation-grid">
        <article className="common-foundation-card common-foundation-card--tight">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">酒店列表 / 详情价格</span>
          </div>
          <PriceDisplay amount="420" suffix="起" />
        </article>
        <article className="common-foundation-card common-foundation-card--tight">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">房型详情强调价</span>
          </div>
          <PriceDisplay amount="598" tone="orange" />
        </article>
        <article className="common-foundation-card common-foundation-card--tight">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">价格带弱化后缀</span>
          </div>
          <PriceDisplay amount="765" mutedSuffix suffix="起" />
        </article>
      </div>
    </CommonPreviewShell>
  )
}

export function CommonTagPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="标签预览"
      summary="这里展示的是当前通用标签体系里的三类真实样式：筛选胶囊、房型属性标签，以及支持选择的可选标签。"
      usage={commonUsageMap.tag}
    >
      <div className="common-tag-showcase">
        <article className="common-foundation-card common-tag-showcase__section">
          <div className="common-tag-showcase__section-header">
            <div>
              <p className="common-tag-showcase__eyebrow">基础标签</p>
              <h4 className="common-tag-showcase__title">业务里已经落地的常规标签</h4>
            </div>
            <p className="common-tag-showcase__copy">适合展示筛选条件和房型属性，重点看语义和信息密度。</p>
          </div>
          <div className="common-tag-showcase__basic-grid">
            <article className="common-tag-showcase__group">
              <div className="common-tag-showcase__group-header">
                <h5 className="common-tag-showcase__group-title">筛选胶囊</h5>
                <p className="common-tag-showcase__group-copy">弱强调、信息轻，适合筛选区和说明性状态。</p>
              </div>
              <div className="common-token-list">
                <Tag>大床</Tag>
                <Tag tone="muted">含早 / 免费取消</Tag>
              </div>
            </article>
            <article className="common-tag-showcase__group">
              <div className="common-tag-showcase__group-header">
                <h5 className="common-tag-showcase__group-title">房型属性</h5>
                <p className="common-tag-showcase__group-copy">更紧凑的描边样式，适合列表中的高频属性信息。</p>
              </div>
              <div className="common-token-list">
                <Tag variant="room">双早</Tag>
                <Tag variant="room" tone="primary">立即确认</Tag>
              </div>
            </article>
          </div>
        </article>

        <article className="common-foundation-card common-tag-showcase__section">
          <div className="common-tag-showcase__section-header">
            <div>
              <p className="common-tag-showcase__eyebrow">可选标签</p>
              <h4 className="common-tag-showcase__title">支持选中反馈的筛选标签</h4>
            </div>
            <p className="common-tag-showcase__copy">按样式拆成亮色和描边两组，每组再区分纯文字与带图标状态。</p>
          </div>
          <div className="common-tag-showcase__selectable-grid">
            <article className="common-tag-showcase__variant">
              <div className="common-tag-showcase__variant-header">
                <h5 className="common-tag-showcase__group-title">亮色样式</h5>
                <p className="common-tag-showcase__group-copy">选中后使用浅蓝底，适合更轻快的筛选场景。</p>
              </div>
              <div className="common-tag-showcase__rows">
                <div className="common-tag-showcase__row">
                  <span className="common-tag-showcase__row-label">纯文字</span>
                  <div className="common-multi-select-tag-row">
                    <Tag
                      selectableStyle="light"
                      selected
                      variant="selectable"
                    >
                      航班友好
                    </Tag>
                    <Tag
                      selectableStyle="light"
                      variant="selectable"
                    >
                      职场附近
                    </Tag>
                  </div>
                </div>
                <div className="common-tag-showcase__row">
                  <span className="common-tag-showcase__row-label">带图标</span>
                  <div className="common-multi-select-tag-row">
                    <Tag
                      iconName="icon/travel/destination/outlined"
                      selectableStyle="light"
                      selected
                      variant="selectable"
                    >
                      航班友好
                    </Tag>
                    <Tag
                      iconName="icon/travel/destination/outlined"
                      selectableStyle="light"
                      variant="selectable"
                    >
                      职场附近
                    </Tag>
                  </div>
                </div>
              </div>
            </article>

            <article className="common-tag-showcase__variant">
              <div className="common-tag-showcase__variant-header">
                <h5 className="common-tag-showcase__group-title">描边样式</h5>
                <p className="common-tag-showcase__group-copy">选中后保留白底和蓝色描边，更适合规则感更强的界面。</p>
              </div>
              <div className="common-tag-showcase__rows">
                <div className="common-tag-showcase__row">
                  <span className="common-tag-showcase__row-label">纯文字</span>
                  <div className="common-multi-select-tag-row">
                    <Tag
                      selectableStyle="outline"
                      selected
                      variant="selectable"
                    >
                      航班友好
                    </Tag>
                    <Tag
                      selectableStyle="outline"
                      variant="selectable"
                    >
                      职场附近
                    </Tag>
                  </div>
                </div>
                <div className="common-tag-showcase__row">
                  <span className="common-tag-showcase__row-label">带图标</span>
                  <div className="common-multi-select-tag-row">
                    <Tag
                      iconName="icon/travel/destination/outlined"
                      selectableStyle="outline"
                      selected
                      variant="selectable"
                    >
                      航班友好
                    </Tag>
                    <Tag
                      iconName="icon/travel/destination/outlined"
                      selectableStyle="outline"
                      variant="selectable"
                    >
                      职场附近
                    </Tag>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </article>
      </div>
    </CommonPreviewShell>
  )
}

export function CommonBadgePreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="徽标预览"
      summary="这里展示的是从页面里抽出来的真实徽标样式：填单页状态徽标和详情页协议酒店徽标。"
      usage={commonUsageMap.badge}
    >
      <div className="common-token-list">
        <Badge statusType="success">免费取消</Badge>
        <Badge statusType="warning">不可退</Badge>
        <Badge variant="agreement">协议酒店</Badge>
      </div>
    </CommonPreviewShell>
  )
}

export function CommonDividerPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="分割线预览"
      summary="这里展示的是填单页和详情页里已经实际使用的分割线样式。"
      usage={commonUsageMap.divider}
    >
      <div className="common-divider-showcase">
        <article className="common-foundation-card">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">填单页默认分割线</span>
          </div>
          <div className="common-divider-panel">
            <span>标题区域</span>
            <CardDivider />
            <span>内容区域</span>
          </div>
        </article>
        <article className="common-foundation-card">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">详情页 / 权益竖分割线</span>
          </div>
          <div className="common-divider-panel common-divider-panel--row">
            <span>权益一</span>
            <CardDivider orientation="vertical" />
            <span>权益二</span>
          </div>
        </article>
      </div>
    </CommonPreviewShell>
  )
}

export function CommonBottomWatermarkPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="底部水印预览"
      summary="这里收拢页面底部弱感知品牌水印能力，明确区分酒店首页的权益水印和首页规则区的品牌水印。"
      usage={commonUsageMap.bottomWatermark}
    >
      <div className="common-foundation-grid">
        <article className="common-foundation-card common-foundation-card--wide">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">酒店底部水印</span>
          </div>
          <div className="common-watermark-surface common-watermark-surface--hotel">
            <HotelHomeBusinessBottomWatermark />
          </div>
        </article>
        <article className="common-foundation-card common-foundation-card--wide">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">机票底部水印</span>
          </div>
          <div className="common-watermark-surface common-watermark-surface--flight">
            <BottomWatermark
              headlineAlt="订机票·省心飞"
              headlineSrc={bottomWatermarkFlightImage}
              items={['贵必赔', '航变无忧退', '省立返']}
              tone="flight"
            />
          </div>
        </article>
        <article className="common-foundation-card common-foundation-card--wide">
          <div className="common-nav-card__meta">
            <span className="common-nav-card__label">首页规则水印</span>
          </div>
          <div className="common-watermark-surface common-watermark-surface--home">
            <CarHomeDefaultFooterRules links={carHomeDefaultData.footerLinks} />
          </div>
        </article>
      </div>
    </CommonPreviewShell>
  )
}

export function CommonChevronActionPreview() {
  return (
    <CommonPreviewShell
      eyebrow="通用组件"
      title="箭头动作预览"
      summary="这里展示的是从酒店填单页里抽出来的真实箭头动作样式，不再使用自定义演示态。"
      usage={commonUsageMap.chevronAction}
    >
      <div className="common-token-list common-token-list--actions">
        <ChevronAction>订房必读</ChevronAction>
        <ChevronAction variant="field">全部权益</ChevronAction>
        <ChevronAction variant="detail">明细</ChevronAction>
      </div>
    </CommonPreviewShell>
  )
}
