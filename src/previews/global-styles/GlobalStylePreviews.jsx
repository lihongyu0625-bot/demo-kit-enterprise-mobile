const directionalIconModules = import.meta.glob('../../assets/global-styles/directional-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const actionIconModules = import.meta.glob('../../assets/global-styles/action-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const statusIconModules = import.meta.glob('../../assets/global-styles/status-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const messageIconModules = import.meta.glob('../../assets/global-styles/message-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const deviceIconModules = import.meta.glob('../../assets/global-styles/device-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const fileIconModules = import.meta.glob('../../assets/global-styles/file-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const symbolIconModules = import.meta.glob('../../assets/global-styles/symbol-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const mediaIconModules = import.meta.glob('../../assets/global-styles/media-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const travelIconModules = import.meta.glob('../../assets/global-styles/travel-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const dataIconModules = import.meta.glob('../../assets/global-styles/data-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const financeIconModules = import.meta.glob('../../assets/global-styles/finance-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const emojiIconModules = import.meta.glob('../../assets/global-styles/emoji-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const brandIconModules = import.meta.glob('../../assets/global-styles/brand-icons/**/*.svg', {
  eager: true,
  import: 'default',
})
const tabBarIconModules = import.meta.glob('../../assets/global-styles/tab-bar-icons/**/*.svg', {
  eager: true,
  import: 'default',
})

const colorGroups = [
  {
    title: '品牌主色',
    summary: '用于主按钮、激活态和重点信息表达。',
    items: [
      { name: '品牌蓝 / 500', value: '#1473FF' },
      { name: '品牌蓝 / 400', value: '#4094FF' },
      { name: '品牌蓝 / 50', value: '#EFF5FF' },
    ],
  },
  {
    title: '文字色阶',
    summary: '用于标题、正文、辅助说明和弱化信息层级。',
    items: [
      { name: '文字 / 90', value: 'rgba(0, 0, 0, 0.84)' },
      { name: '文字 / 65', value: 'rgba(0, 0, 0, 0.65)' },
      { name: '文字 / 40', value: 'rgba(0, 0, 0, 0.4)' },
    ],
  },
  {
    title: '语义辅助色',
    summary: '用于卡片背景、边框和弱提示区域。',
    items: [
      { name: '白色', value: '#FFFFFF' },
      { name: '浅灰底', value: '#F5F7FA' },
      { name: '浅蓝底', value: '#EAF2FF' },
    ],
  },
]

const typographyGroups = [
  { label: '超大标题', token: '28 / 34 / 700', sample: '演示组件套件预览台' },
  { label: '页面标题', token: '24 / 32 / 700', sample: '酒店首页-因公' },
  { label: '模块标题', token: '18 / 26 / 600', sample: '本月可享 3 次快速应答' },
  { label: '正文中等', token: '14 / 22 / 400', sample: '这里统一展示业务规则、状态说明和页面描述文案。' },
  { label: '辅助说明', token: '12 / 20 / 600', sample: '适用于弱提示、标签说明和元信息。' },
]

const radiusItems = [
  { name: '4px', note: '轻量标签、细小容器' },
  { name: '6px', note: '弱提示条、浅色胶囊' },
  { name: '8px', note: '主流卡片、业务模块' },
  { name: '12px', note: '信息块、运营面板' },
  { name: '999px', note: '胶囊按钮、开关、徽标' },
]

const shadowItems = [
  { name: '悬浮卡片阴影', value: '0 16px 40px rgba(19, 45, 77, 0.08)' },
  { name: '激活态强调阴影', value: '0 16px 30px rgba(20, 115, 255, 0.24)' },
  { name: '轻悬停阴影', value: '0 12px 24px rgba(20, 54, 92, 0.08)' },
]

const spacingItems = [
  { name: '4px', usage: '图标和文字的紧凑间距' },
  { name: '8px', usage: '同组元素的小间距、拼接负间距基准' },
  { name: '12px', usage: '卡片内边距、按钮上下留白' },
  { name: '16px', usage: '页面基础左右留白' },
  { name: '20px', usage: '模块之间的主节奏间距' },
  { name: '24px', usage: '大模块分组或侧栏内容间距' },
  { name: '32px', usage: '页面大段落之间的垂直留白' },
]

const iconItems = [
  { size: '16 × 16', note: '弱辅助、细小方向图标' },
  { size: '20 × 20', note: '顶部操作、轻交互按钮' },
  { size: '24 × 24', note: '导航、卡片入口图标' },
  { size: '32 × 32', note: '大图标入口或空态装饰' },
]

const iconNamingSpec = {
  pattern: 'icon/{类别}/{名称}/{风格}',
  description:
    '图标统一采用 icon/{类别}/{名称}/{风格} 的命名方式。其中“类别”用于区分图标的功能归属，如 arrow、operate、status、nav 等；“名称”仅表达图标语义，必须使用英文小写，多单词之间用 - 连接，例如 icon/arrow/chevron-right/outlined、icon/operate/search/filled；“风格”用于区分图标的表现形式，统一使用固定枚举，如 outlined、filled、duotone、colored。统一通过组件属性、变体或实例参数管理，以保证命名清晰、一致，并便于设计与代码协同。',
}

const iconCategorySections = [
  {
    title: '指向性图标',
    summary:
      '这一类主要用于返回、展开、跳转、切换和方向反馈。这里先按设计稿补齐 directional 分类，后续新增其他分类时继续沿用同样的分组结构。',
    categoryKey: 'directional',
  },
  {
    title: '行动图标',
    summary:
      '这一类主要用于新增、删除、复制、筛选、编辑、搜索和权限类动作反馈。这里补齐 action 分类，后续继续按同样方式追加其他图标族。',
    categoryKey: 'action',
  },
  {
    title: '状态图标',
    summary:
      '这一类主要用于成功、失败、警告、疑问、禁止、加载和状态提醒等反馈场景。这里补齐 status 分类，后续新增其他图标族时继续沿用同样的分组结构。',
    categoryKey: 'status',
  },
  {
    title: '沟通图标',
    summary:
      '这一类主要用于消息、评论、聊天、提醒和沟通反馈等场景。这里补齐 message 分类，后续新增其他图标族时继续沿用同样的分组结构。',
    categoryKey: 'message',
  },
  {
    title: '设备图标',
    summary:
      '这一类主要用于设备、硬件、通话、网络、充电和终端能力等场景。这里补齐 device 分类，后续新增其他图标族时继续沿用同样的分组结构。',
    categoryKey: 'device',
  },
  {
    title: '文件图标',
    summary:
      '这一类主要用于文件、文件夹、附件、导入导出、检索和文档状态等场景。这里补齐 file 分类，后续新增其他图标族时继续沿用同样的分组结构。',
    categoryKey: 'file',
  },
  {
    title: '符号图标',
    summary:
      '这一类主要用于几何形、收藏、奖励、火焰、爱心和抽象符号表达等场景。这里补齐 symbol 分类，后续新增其他图标族时继续沿用同样的分组结构。',
    categoryKey: 'symbol',
  },
  {
    title: '媒体图标',
    summary:
      '这一类主要用于播放、暂停、音量、通知、耳机、摄像、图片、裁剪和全屏等媒体操作场景。这里补齐 media 分类，后续新增其他图标族时继续沿用同样的分组结构。',
    categoryKey: 'media',
  },
  {
    title: '出行图标',
    summary:
      '这一类主要用于航班、火车、酒店、地图、定位、导航、行李和目的地等出行服务场景。这里补齐 travel 分类，后续新增其他图标族时继续沿用同样的分组结构。',
    categoryKey: 'travel',
  },
  {
    title: '数据图标',
    summary:
      '这一类主要用于图表、表格、层级、筛选、计算、代码、云端上传和数据流向等信息表达场景。这里补齐 data 分类，后续新增其他图标族时继续沿用同样的分组结构。',
    categoryKey: 'data',
  },
  {
    title: '金融图标',
    summary:
      '这一类主要用于银行卡、钱包、红包、优惠券、礼品卡、积分、会员和资产权益等金融权益场景。这里补齐 finance 分类，后续新增其他图标族时继续沿用同样的分组结构。',
    categoryKey: 'finance',
  },
  {
    title: '表情图标',
    summary:
      '这一类主要用于满意度、反馈、点赞、点踩、星级和情绪表达等场景。这里补齐 emoji 分类，后续新增其他图标族时继续沿用同样的分组结构。',
    categoryKey: 'emoji',
  },
  {
    title: '品牌图标',
    summary:
      '这一类主要用于平台品牌、支付品牌、浏览器、操作系统和外部服务标识等场景。这里补齐 brand 分类，后续新增其他图标族时继续沿用同样的分组结构。',
    categoryKey: 'brand',
  },
  {
    title: '底部导航栏图标',
    summary:
      '这一类主要用于页面底部导航栏场景，当前这组为描边粗细 3.5px 的导航图标资源，便于和底部导航组件保持统一复用。',
    categoryKey: 'tab-bar',
  },
]

function buildIconCollection({ categoryKey, modules }) {
  return Object.entries(modules)
    .map(([path, src]) => {
      const relativePath = path.split(`/${categoryKey}-icons/`)[1] ?? ''
      const iconName = `icon/${categoryKey}/${relativePath.replace(/\.svg$/, '').replace(/\\/g, '/')}`
      const familyName = relativePath.split('/')[0] ?? ''

      return {
        name: iconName,
        family: familyName,
        src,
      }
    })
    .sort((firstIcon, secondIcon) => firstIcon.name.localeCompare(secondIcon.name))
}

const iconCollections = {
  directional: buildIconCollection({
    categoryKey: 'directional',
    modules: directionalIconModules,
  }),
  action: buildIconCollection({
    categoryKey: 'action',
    modules: actionIconModules,
  }),
  status: buildIconCollection({
    categoryKey: 'status',
    modules: statusIconModules,
  }),
  message: buildIconCollection({
    categoryKey: 'message',
    modules: messageIconModules,
  }),
  device: buildIconCollection({
    categoryKey: 'device',
    modules: deviceIconModules,
  }),
  file: buildIconCollection({
    categoryKey: 'file',
    modules: fileIconModules,
  }),
  symbol: buildIconCollection({
    categoryKey: 'symbol',
    modules: symbolIconModules,
  }),
  media: buildIconCollection({
    categoryKey: 'media',
    modules: mediaIconModules,
  }),
  travel: buildIconCollection({
    categoryKey: 'travel',
    modules: travelIconModules,
  }),
  data: buildIconCollection({
    categoryKey: 'data',
    modules: dataIconModules,
  }),
  finance: buildIconCollection({
    categoryKey: 'finance',
    modules: financeIconModules,
  }),
  emoji: buildIconCollection({
    categoryKey: 'emoji',
    modules: emojiIconModules,
  }),
  brand: buildIconCollection({
    categoryKey: 'brand',
    modules: brandIconModules,
  }),
  'tab-bar': buildIconCollection({
    categoryKey: 'tab-bar',
    modules: tabBarIconModules,
  }),
}

function GlobalStylePreviewShell({ title, summary, children }) {
  return (
    <section className="global-style-preview">
      <div className="global-style-preview__header">
        <p className="global-style-preview__eyebrow">全局样式</p>
        <h3 className="global-style-preview__title">{title}</h3>
        <p className="global-style-preview__summary">{summary}</p>
      </div>
      <div className="global-style-preview__surface">{children}</div>
    </section>
  )
}

export function GlobalColorPreview() {
  return (
    <GlobalStylePreviewShell
      title="色彩规范"
      summary="这里统一展示品牌主色、文字色阶和常用背景辅助色，方便页面和组件共用同一套视觉基准。"
    >
      <div className="global-style-grid">
        {colorGroups.map((group) => (
          <article className="global-style-card" key={group.title}>
            <div className="global-style-card__header">
              <h4 className="global-style-card__title">{group.title}</h4>
              <p className="global-style-card__copy">{group.summary}</p>
            </div>
            <div className="global-style-swatch-list">
              {group.items.map((item) => (
                <div className="global-style-swatch" key={item.name}>
                  <span className="global-style-swatch__chip" style={{ background: item.value }} />
                  <div className="global-style-swatch__meta">
                    <p className="global-style-swatch__name">{item.name}</p>
                    <p className="global-style-swatch__value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </GlobalStylePreviewShell>
  )
}

export function GlobalTypographyPreview() {
  return (
    <GlobalStylePreviewShell
      title="文字规范"
      summary="这里统一展示页面标题、模块标题、正文和辅助文案的字号、行高与字重关系。"
    >
      <div className="global-style-stack">
        {typographyGroups.map((item, index) => (
          <article className="global-style-type-row" key={item.label}>
            <div className="global-style-type-row__meta">
              <p className="global-style-type-row__label">{item.label}</p>
              <p className="global-style-type-row__token">{item.token}</p>
            </div>
            <p className="global-style-type-row__sample" data-level={index}>
              {item.sample}
            </p>
          </article>
        ))}
      </div>
    </GlobalStylePreviewShell>
  )
}

export function GlobalRadiusPreview() {
  return (
    <GlobalStylePreviewShell
      title="圆角规范"
      summary="这里统一展示常见圆角等级，便于区分轻量标签、标准卡片、大模块和胶囊形态。"
    >
      <div className="global-style-grid global-style-grid--radius">
        {radiusItems.map((item) => (
          <article className="global-style-card global-style-card--compact" key={item.name}>
            <div
              className="global-style-radius-demo"
              style={{ borderRadius: item.name === '999px' ? '999px' : item.name }}
            />
            <h4 className="global-style-card__title">{item.name}</h4>
            <p className="global-style-card__copy">{item.note}</p>
          </article>
        ))}
      </div>
    </GlobalStylePreviewShell>
  )
}

export function GlobalShadowPreview() {
  return (
    <GlobalStylePreviewShell
      title="阴影规范"
      summary="这里统一展示浮层卡片、激活态和轻悬停这几类最常用阴影层级。"
    >
      <div className="global-style-grid">
        {shadowItems.map((item, index) => (
          <article className="global-style-card" key={item.name}>
            <div className="global-style-shadow-demo" data-tone={index} style={{ boxShadow: item.value }} />
            <h4 className="global-style-card__title">{item.name}</h4>
            <p className="global-style-card__copy">{item.value}</p>
          </article>
        ))}
      </div>
    </GlobalStylePreviewShell>
  )
}

export function GlobalLayoutPreview() {
  return (
    <GlobalStylePreviewShell
      title="布局规范"
      summary="这里统一展示当前项目里反复使用的基础间距节奏，方便页面编排和组件抽离时保持一致。"
    >
      <div className="global-style-stack">
        {spacingItems.map((item) => (
          <article className="global-style-spacing-row" key={item.name}>
            <div className="global-style-spacing-row__meta">
              <p className="global-style-spacing-row__label">{item.name}</p>
              <p className="global-style-spacing-row__copy">{item.usage}</p>
            </div>
            <div className="global-style-spacing-row__bar-wrap">
              <span className="global-style-spacing-row__bar" style={{ width: item.name }} />
            </div>
          </article>
        ))}
      </div>
    </GlobalStylePreviewShell>
  )
}

export function GlobalIconPreview() {
  return (
    <GlobalStylePreviewShell
      title="图标规范"
      summary="这里统一展示图标导出时要遵守的正方形容器基准，以及设计稿里的图标命名规范，便于测量、替换和统一对齐。"
    >
      <article className="global-style-note">
        <div className="global-style-note__header">
          <h4 className="global-style-note__title">命名规范</h4>
          <code className="global-style-note__token">{iconNamingSpec.pattern}</code>
        </div>
        <p className="global-style-note__body">{iconNamingSpec.description}</p>
      </article>
      <div className="global-style-grid global-style-grid--icon">
        {iconItems.map((item, index) => (
          <article className="global-style-card global-style-card--compact" key={item.size}>
            <div
              className="global-style-icon-box"
              style={{
                width: item.size.split(' × ')[0],
                height: item.size.split(' × ')[0],
              }}
            >
              <span className="global-style-icon-glyph" data-tone={index} />
            </div>
            <h4 className="global-style-card__title">{item.size}</h4>
            <p className="global-style-card__copy">{item.note}</p>
          </article>
        ))}
      </div>
      <div className="global-style-stack">
        {iconCategorySections.map((section) => (
          <article className="global-style-icon-category" key={section.title}>
            <header className="global-style-icon-category__header">
              <h4 className="global-style-icon-category__title">{section.title}</h4>
              <p className="global-style-icon-category__summary">{section.summary}</p>
            </header>
            {iconCollections[section.categoryKey].map((icon) => (
              <div
                className="global-style-icon-gallery__item"
                key={icon.name}
                data-name={icon.name}
                data-family={icon.family}
              >
                <img
                  className="global-style-icon-gallery__asset"
                  src={icon.src}
                  alt={icon.name}
                  loading="lazy"
                />
                <span className="global-style-icon-gallery__tooltip">{icon.name}</span>
              </div>
            ))}
          </article>
        ))}
      </div>
    </GlobalStylePreviewShell>
  )
}
