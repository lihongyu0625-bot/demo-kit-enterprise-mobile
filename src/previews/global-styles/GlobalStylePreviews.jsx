import { useEffect, useState } from 'react'

const directionalIconModules = import.meta.glob('../../assets/global-styles/directional-icons/**/*.svg', {
  import: 'default',
})
const actionIconModules = import.meta.glob('../../assets/global-styles/action-icons/**/*.svg', {
  import: 'default',
})
const statusIconModules = import.meta.glob('../../assets/global-styles/status-icons/**/*.svg', {
  import: 'default',
})
const messageIconModules = import.meta.glob('../../assets/global-styles/message-icons/**/*.svg', {
  import: 'default',
})
const deviceIconModules = import.meta.glob('../../assets/global-styles/device-icons/**/*.svg', {
  import: 'default',
})
const fileIconModules = import.meta.glob('../../assets/global-styles/file-icons/**/*.svg', {
  import: 'default',
})
const symbolIconModules = import.meta.glob('../../assets/global-styles/symbol-icons/**/*.svg', {
  import: 'default',
})
const mediaIconModules = import.meta.glob('../../assets/global-styles/media-icons/**/*.svg', {
  import: 'default',
})
const travelIconModules = import.meta.glob('../../assets/global-styles/travel-icons/**/*.svg', {
  import: 'default',
})
const dataIconModules = import.meta.glob('../../assets/global-styles/data-icons/**/*.svg', {
  import: 'default',
})
const financeIconModules = import.meta.glob('../../assets/global-styles/finance-icons/**/*.svg', {
  import: 'default',
})
const emojiIconModules = import.meta.glob('../../assets/global-styles/emoji-icons/**/*.svg', {
  import: 'default',
})
const brandIconModules = import.meta.glob('../../assets/global-styles/brand-icons/**/*.svg', {
  import: 'default',
})
const tabBarIconModules = import.meta.glob('../../assets/global-styles/tab-bar-icons/**/*.svg', {
  import: 'default',
})

const brandColorCards = [
  {
    title: '品牌蓝',
    token: '--color-blue-50',
    value: 'var(--color-blue-50)',
    hex: '#1473FF',
    note: '用于主按钮、激活态、主链接和重点信息表达。',
  },
  {
    title: '品牌深蓝',
    token: '--color-blue-90',
    value: 'var(--color-blue-90)',
    hex: '#05224C',
    note: '用于品牌深色层级、深色标题和高对比说明信息。',
  },
]

const gradientColorFamilies = [
  {
    title: 'Blue',
    summary: '品牌蓝梯度，覆盖从弱背景到高强调的主色层级。',
    items: [
      { step: '5', token: '--color-blue-5', value: 'var(--color-blue-5)', hex: '#F3F8FF' },
      { step: '10', token: '--color-blue-10', value: 'var(--color-blue-10)', hex: '#E7F1FF' },
      { step: '20', token: '--color-blue-20', value: 'var(--color-blue-20)', hex: '#D0E3FF' },
      { step: '30', token: '--color-blue-30', value: 'var(--color-blue-30)', hex: '#89B9FF' },
      { step: '40', token: '--color-blue-40', value: 'var(--color-blue-40)', hex: '#438FFF' },
      { step: '50', token: '--color-blue-50', value: 'var(--color-blue-50)', hex: '#1473FF' },
      { step: '60', token: '--color-blue-60', value: 'var(--color-blue-60)', hex: '#1167E5' },
      { step: '70', token: '--color-blue-70', value: 'var(--color-blue-70)', hex: '#0D50B2' },
      { step: '80', token: '--color-blue-80', value: 'var(--color-blue-80)', hex: '#09397F' },
      { step: '90', token: '--color-blue-90', value: 'var(--color-blue-90)', hex: '#05224C' },
    ],
  },
  {
    title: 'Cyan',
    summary: '青绿色梯度，用于成功、通过、绿色辅助信息和轻反馈场景。',
    items: [
      { step: '5', token: '--color-cyan-5', value: 'var(--color-cyan-5)', hex: '#F5FBF7' },
      { step: '10', token: '--color-cyan-10', value: 'var(--color-cyan-10)', hex: '#EAF8F0' },
      { step: '20', token: '--color-cyan-20', value: 'var(--color-cyan-20)', hex: '#D6F1E2' },
      { step: '30', token: '--color-cyan-30', value: 'var(--color-cyan-30)', hex: '#99DDB6' },
      { step: '40', token: '--color-cyan-40', value: 'var(--color-cyan-40)', hex: '#5DC98A' },
      { step: '50', token: '--color-cyan-50', value: 'var(--color-cyan-50)', hex: '#34B86D' },
      { step: '60', token: '--color-cyan-60', value: 'var(--color-cyan-60)', hex: '#2EA761' },
      { step: '70', token: '--color-cyan-70', value: 'var(--color-cyan-70)', hex: '#24824C' },
      { step: '80', token: '--color-cyan-80', value: 'var(--color-cyan-80)', hex: '#195D36' },
    ],
  },
  {
    title: 'Orange',
    summary: '橙色梯度，用于提示、权益、价格强调和运营装饰场景。',
    items: [
      { step: '5', token: '--color-orange-5', value: 'var(--color-orange-5)', hex: '#FFF8F5' },
      { step: '10', token: '--color-orange-10', value: 'var(--color-orange-10)', hex: '#FFF2EC' },
      { step: '20', token: '--color-orange-20', value: 'var(--color-orange-20)', hex: '#FFE5D9' },
      { step: '30', token: '--color-orange-30', value: 'var(--color-orange-30)', hex: '#FFBFA0' },
      { step: '40', token: '--color-orange-40', value: 'var(--color-orange-40)', hex: '#FF9967' },
      { step: '50', token: '--color-orange-50', value: 'var(--color-orange-50)', hex: '#FF7F41' },
      { step: '60', token: '--color-orange-60', value: 'var(--color-orange-60)', hex: '#E5723A' },
      { step: '70', token: '--color-orange-70', value: 'var(--color-orange-70)', hex: '#B2582D' },
      { step: '80', token: '--color-orange-80', value: 'var(--color-orange-80)', hex: '#7F3F20' },
    ],
  },
  {
    title: 'Red',
    summary: '红色梯度，用于风险、错误、失败和强警示反馈场景。',
    items: [
      { step: '5', token: '--color-red-5', value: 'var(--color-red-5)', hex: '#FEF5F4' },
      { step: '10', token: '--color-red-10', value: 'var(--color-red-10)', hex: '#FEEBE8' },
      { step: '20', token: '--color-red-20', value: 'var(--color-red-20)', hex: '#FED7D3' },
      { step: '30', token: '--color-red-30', value: 'var(--color-red-30)', hex: '#FC9B90' },
      { step: '40', token: '--color-red-40', value: 'var(--color-red-40)', hex: '#FA604E' },
      { step: '60', token: '--color-red-60', value: 'var(--color-red-60)', hex: '#DF321E' },
      { step: '70', token: '--color-red-70', value: 'var(--color-red-70)', hex: '#AD2717' },
      { step: '80', token: '--color-red-80', value: 'var(--color-red-80)', hex: '#7C1B10' },
    ],
  },
]

const neutralColorSections = [
  {
    title: '黑色全色阶',
    summary: '对应设计稿里的 Full Range of #000，用于沉淀透明度黑色的基础层级，文字、遮罩、分割线都会从这里继续映射。',
    items: [
      { label: '0 / 0%', token: 'transparent', value: 'transparent', hex: 'rgba(0, 0, 0, 0)' },
      { label: '5 / 2%', token: '--color-alpha-black-2', value: 'var(--color-alpha-black-2)', hex: 'rgba(0, 0, 0, 0.02)' },
      { label: '10 / 4%', token: '--color-alpha-black-4', value: 'var(--color-alpha-black-4)', hex: 'rgba(0, 0, 0, 0.04)' },
      { label: '20 / 6%', token: '--color-alpha-black-6', value: 'var(--color-alpha-black-6)', hex: 'rgba(0, 0, 0, 0.06)' },
      { label: '30 / 12%', token: '--color-alpha-black-12', value: 'var(--color-alpha-black-12)', hex: 'rgba(0, 0, 0, 0.12)' },
      { label: '40 / 24%', token: '--color-alpha-black-24', value: 'var(--color-alpha-black-24)', hex: 'rgba(0, 0, 0, 0.24)' },
      { label: '50 / 30%', token: '--color-alpha-black-30', value: 'var(--color-alpha-black-30)', hex: 'rgba(0, 0, 0, 0.3)' },
      { label: '60 / 36%', token: '--color-alpha-black-36', value: 'var(--color-alpha-black-36)', hex: 'rgba(0, 0, 0, 0.36)' },
      { label: '70 / 60%', token: '--color-alpha-black-60', value: 'var(--color-alpha-black-60)', hex: 'rgba(0, 0, 0, 0.6)' },
      { label: '80 / 72%', token: '--color-alpha-black-72', value: 'var(--color-alpha-black-72)', hex: 'rgba(0, 0, 0, 0.72)' },
      { label: '90 / 84%', token: '--color-alpha-black-84', value: 'var(--color-alpha-black-84)', hex: 'rgba(0, 0, 0, 0.84)' },
      { label: '100 / 100%', token: '--color-alpha-black-100', value: 'var(--color-alpha-black-100)', hex: 'rgba(0, 0, 0, 1)' },
    ],
  },
  {
    title: '文字色',
    summary: '用于标题、正文、辅助说明和禁用信息等不同文本层级。',
    items: [
      { label: '主文字', token: '--color-text-primary', value: 'var(--color-text-primary)', hex: 'rgba(0, 0, 0, 0.84)' },
      { label: '次文字', token: '--color-text-secondary', value: 'var(--color-text-secondary)', hex: 'rgba(0, 0, 0, 0.6)' },
      { label: '弱文字', token: '--color-text-tertiary', value: 'var(--color-text-tertiary)', hex: 'rgba(0, 0, 0, 0.36)' },
      { label: '反白文字', token: '--color-text-inverse', value: 'var(--color-text-inverse)', hex: '#FFFFFF' },
    ],
  },
  {
    title: '背景色',
    summary: '用于页面底色、卡片容器、浅提示底和弱强调底色。',
    items: [
      { label: '页面底色', token: '--color-bg-gray-2', value: 'var(--color-bg-gray-2)', hex: '#F5F7FA' },
      { label: '浅页面底', token: '--color-bg-gray-1', value: 'var(--color-bg-gray-1)', hex: '#F7F9FA' },
      { label: '卡片白底', token: '--color-surface-primary', value: 'var(--color-surface-primary)', hex: '#FFFFFF' },
      { label: '蓝色浅底', token: '--color-surface-brand-soft', value: 'var(--color-surface-brand-soft)', hex: '#E7F1FF' },
      { label: '极浅蓝底', token: '--color-surface-tertiary', value: 'var(--color-surface-tertiary)', hex: '#F3F8FF' },
      { label: '中性浅灰底', token: '--color-bg-gray-3', value: 'var(--color-bg-gray-3)', hex: '#F3F4F5' },
    ],
  },
  {
    title: '分割线 / 遮罩',
    summary: '用于描边、分割线、图片遮罩、浮层背景和高对比叠层。',
    items: [
      { label: '轻分割线', token: '--color-line-soft', value: 'var(--color-line-soft)', hex: 'rgba(18, 51, 84, 0.08)' },
      { label: '标准分割线', token: '--color-line-default', value: 'var(--color-line-default)', hex: 'rgba(0, 0, 0, 0.12)' },
      { label: '深遮罩', token: '--color-alpha-black-84', value: 'var(--color-alpha-black-84)', hex: 'rgba(0, 0, 0, 0.84)' },
      { label: '中遮罩', token: '--color-alpha-black-60', value: 'var(--color-alpha-black-60)', hex: 'rgba(0, 0, 0, 0.6)' },
      { label: '弱遮罩', token: '--color-alpha-black-36', value: 'var(--color-alpha-black-36)', hex: 'rgba(0, 0, 0, 0.36)' },
      { label: '品牌描边', token: '--color-line-brand', value: 'var(--color-line-brand)', hex: 'rgba(20, 115, 255, 0.3)' },
    ],
  },
]

const typographyFamilyCards = [
  {
    title: 'iOS 默认字体',
    meta: ['中文：苹方-简', '英文与数字：SF Pro Text'],
    sampleFamily: 'var(--font-family-ui-cn)',
    numberFamily: 'var(--font-family-ui-ios-number)',
    sampleCn: '滴',
    sampleEn: 'Di',
    sampleNumber: '123',
  },
  {
    title: 'Android 默认字体',
    meta: ['中文：思源黑体', '英文与数字：Roboto'],
    sampleFamily: 'var(--font-family-ui-cn)',
    numberFamily: 'var(--font-family-ui-android-number)',
    sampleCn: '滴',
    sampleEn: 'Di',
    sampleNumber: '123',
  },
  {
    title: '数字字体',
    meta: ['数字与金额：Barlow Semi Condensed', '适用于数据、时间、金额等独立数字信息'],
    sampleFamily: 'var(--font-family-ui-number)',
    sampleCn: 'A',
    sampleEn: 'ABCDEFG',
    sampleNumber: '1234567890',
  },
]

const typographyFamilyNotes = [
  '页面正文、标题优先使用系统默认无衬线字体，保证移动端阅读效率和系统一致性。',
  'Barlow 数字字体适用于金额、时间、数据等独立数字信息的展示。',
  'Barlow 斜体与粗斜体更适合奖励、营销等需要氛围感的场景。',
]

const typographyLineHeightExamples = [
  {
    title: '中文',
    sample: '中文字体 1234567890',
    fontSize: '18px',
    lineHeight: '26px',
  },
  {
    title: 'English',
    sample: 'English 1234567890',
    fontSize: '18px',
    lineHeight: '26px',
  },
]

const typographyWeightColumns = ['Regular', 'Medium', 'Bold']

const typographyWeightRows = [
  {
    family: '苹方-简',
    samples: ['滴滴', '滴滴', '滴滴驾驶环境'],
  },
  {
    family: '思源黑体',
    samples: ['滴滴', '滴滴', '滴滴驾驶环境'],
  },
  {
    family: 'Barlow',
    samples: ['88.88', '88.88', '88.88'],
  },
]

const typographyScaleChinese = [
  {
    name: '大标题 Headline / 小号',
    token: '--font-size-headline-sm / --line-height-headline-sm / --font-weight-semibold',
    size: '24px',
    weightLabel: '中黑体',
    usage: '页面级大标题',
    fontSize: 'var(--font-size-headline-sm)',
    lineHeight: 'var(--line-height-headline-sm)',
    fontWeight: 'var(--font-weight-semibold)',
  },
  {
    name: '大标题 Headline / 超小',
    token: '--font-size-headline-xs / --line-height-headline-xs / --font-weight-semibold',
    size: '22px',
    weightLabel: '中黑体',
    usage: '订单详情状态标题',
    fontSize: 'var(--font-size-headline-xs)',
    lineHeight: 'var(--line-height-headline-xs)',
    fontWeight: 'var(--font-weight-semibold)',
  },
  {
    name: '标题 Title / 超大',
    token: '--font-size-title-xl / --line-height-title-xl / --font-weight-semibold',
    size: '20px',
    weightLabel: '中黑体',
    usage: '模块主标题',
    fontSize: 'var(--font-size-title-xl)',
    lineHeight: 'var(--line-height-title-xl)',
    fontWeight: 'var(--font-weight-semibold)',
  },
  {
    name: '标题 Title / 大号',
    token: '--font-size-title-lg / --line-height-title-lg / --font-weight-semibold',
    size: '18px',
    weightLabel: '中黑体',
    usage: '导航栏标题',
    fontSize: 'var(--font-size-title-lg)',
    lineHeight: 'var(--line-height-title-lg)',
    fontWeight: 'var(--font-weight-semibold)',
  },
  {
    name: '标题 Title / 中等',
    token: '--font-size-title-md / --line-height-title-md / --font-weight-semibold',
    size: '16px',
    weightLabel: '中黑体',
    usage: '卡片标题',
    fontSize: 'var(--font-size-title-md)',
    lineHeight: 'var(--line-height-title-md)',
    fontWeight: 'var(--font-weight-semibold)',
  },
  {
    name: '标题 Title / 小号',
    token: '--font-size-title-sm / --line-height-title-sm / --font-weight-semibold',
    size: '14px',
    weightLabel: '中黑体',
    usage: '卡片标题、强调文字',
    fontSize: 'var(--font-size-title-sm)',
    lineHeight: 'var(--line-height-title-sm)',
    fontWeight: 'var(--font-weight-semibold)',
  },
  {
    name: '标题 Title / 超小',
    token: '--font-size-title-xs / --line-height-title-xs / --font-weight-semibold',
    size: '12px',
    weightLabel: '中黑体',
    usage: '文字标签',
    fontSize: 'var(--font-size-title-xs)',
    lineHeight: 'var(--line-height-title-xs)',
    fontWeight: 'var(--font-weight-semibold)',
  },
  {
    name: '标题 Title / 超超小',
    token: '--font-size-title-xxs / --line-height-title-xxs / --font-weight-semibold',
    size: '10px',
    weightLabel: '中黑体',
    usage: '粗字体标签，例如协议酒店',
    fontSize: 'var(--font-size-title-xxs)',
    lineHeight: 'var(--line-height-title-xxs)',
    fontWeight: 'var(--font-weight-semibold)',
  },
  {
    name: '内文 Body / 大号',
    token: '--font-size-body-lg / --line-height-body-lg / --font-weight-regular',
    size: '16px',
    weightLabel: '常规体',
    usage: '长段落正文',
    fontSize: 'var(--font-size-body-lg)',
    lineHeight: 'var(--line-height-body-lg)',
    fontWeight: 'var(--font-weight-regular)',
  },
  {
    name: '内文 Body / 中等',
    token: '--font-size-body-md / --line-height-body-md / --font-weight-regular',
    size: '14px',
    weightLabel: '常规体',
    usage: '正文',
    fontSize: 'var(--font-size-body-md)',
    lineHeight: 'var(--line-height-body-md)',
    fontWeight: 'var(--font-weight-regular)',
  },
  {
    name: '内文 Body / 小号',
    token: '--font-size-body-sm / --line-height-body-sm / --font-weight-regular',
    size: '12px',
    weightLabel: '常规体',
    usage: '小字标注',
    fontSize: 'var(--font-size-body-sm)',
    lineHeight: 'var(--line-height-body-sm)',
    fontWeight: 'var(--font-weight-regular)',
  },
  {
    name: '内文 Body / 超小',
    token: '--font-size-body-xs / --line-height-body-xs / --font-weight-regular',
    size: '10px',
    weightLabel: '常规体',
    usage: '标签文字',
    fontSize: 'var(--font-size-body-xs)',
    lineHeight: 'var(--line-height-body-xs)',
    fontWeight: 'var(--font-weight-regular)',
  },
  {
    name: '内文 Body / 超超小',
    token: '--font-size-body-xxs / --line-height-body-xxs / --font-weight-regular',
    size: '9px',
    weightLabel: '常规体',
    usage: '极限值，仅在层级很多的标签内使用',
    fontSize: 'var(--font-size-body-xxs)',
    lineHeight: 'var(--line-height-body-xxs)',
    fontWeight: 'var(--font-weight-regular)',
  },
]

const typographyScaleNumber = [
  {
    name: '24px Medium',
    token: '--font-size-number-lg / --line-height-number-lg / --font-weight-medium',
    usage: '金额数字',
    fontSize: 'var(--font-size-number-lg)',
    lineHeight: 'var(--line-height-number-lg)',
    fontWeight: 'var(--font-weight-medium)',
  },
  {
    name: '16px Medium',
    token: '--font-size-number-md / --line-height-number-md / --font-weight-medium',
    usage: '金额数字前的“¥”符号',
    fontSize: 'var(--font-size-number-md)',
    lineHeight: 'var(--line-height-number-md)',
    fontWeight: 'var(--font-weight-medium)',
  },
  {
    name: '10px Regular',
    token: '--font-size-number-sm / --line-height-number-sm / --font-weight-regular',
    usage: '倒计时标签、小号日期等',
    fontSize: 'var(--font-size-number-sm)',
    lineHeight: 'var(--line-height-number-sm)',
    fontWeight: 'var(--font-weight-regular)',
  },
]

const radiusSpecItems = [
  {
    name: '3px',
    token: '--radius-3',
    value: 'var(--radius-3)',
    usage: '层级较多情况标签类型适用，通常和 10 号字一起使用',
    width: '108px',
    height: '40px',
  },
  {
    name: '4px',
    token: '--radius-4',
    value: 'var(--radius-4)',
    usage: '标签 / 小组件类型适用',
    width: '108px',
    height: '40px',
  },
  {
    name: '6px',
    token: '--radius-6',
    value: 'var(--radius-6)',
    usage: '页面标准卡片内子卡片',
    width: '335px',
    height: '88px',
  },
  {
    name: '8px',
    token: '--radius-8',
    value: 'var(--radius-8)',
    usage: '页面标准卡片容器（355px）',
    width: '355px',
    height: '88px',
  },
  {
    name: '12px',
    token: '--radius-12',
    value: 'var(--radius-12)',
    usage: '对话框容器（280px）',
    width: '280px',
    height: '108px',
  },
  {
    name: '16px',
    token: '--radius-16',
    value: 'var(--radius-16)',
    usage: '贯通整个屏幕的浮层卡片（375px）',
    width: '375px',
    height: '126px',
  },
  {
    name: '999px',
    token: '--radius-pill',
    value: 'var(--radius-pill)',
    usage: '胶囊按钮',
    width: '355px',
    height: '48px',
  },
]

const shadowItems = [
  { name: '悬浮卡片阴影', value: '0 16px 40px rgba(19, 45, 77, 0.08)' },
  { name: '激活态强调阴影', value: '0 16px 30px rgba(20, 115, 255, 0.24)' },
  { name: '轻悬停阴影', value: '0 12px 24px rgba(20, 54, 92, 0.08)' },
]

const layoutSpacingItems = [
  { name: '4px', token: '--space-4', value: 'var(--space-4)', usage: '文字与文字之间' },
  { name: '6px', token: '--space-6', value: 'var(--space-6)', usage: '水平等分避免竖除情况使用' },
  { name: '8px', token: '--space-8', value: 'var(--space-8)', usage: '按钮之间、图标文字之间' },
  { name: '12px', token: '--space-12', value: 'var(--space-12)', usage: '图标尺寸等' },
  { name: '16px', token: '--space-16', value: 'var(--space-16)', usage: '板块间距、部分卡片内边距' },
  { name: '20px', token: '--space-20', value: 'var(--space-20)', usage: '图标尺寸等' },
  { name: '24px', token: '--space-24', value: 'var(--space-24)', usage: '留白分割方式' },
  { name: '32px', token: '--space-32', value: 'var(--space-32)', usage: '留白分割方式' },
]

const layoutGridRows = [
  ['100%'],
  ['1/2', '1/2'],
  ['1/3', '1/3', '1/3'],
  ['1/4', '1/4', '1/4', '1/4'],
  ['1/5', '1/5', '1/5', '1/5', '1/5'],
  ['1/5', '1/5', '1/5', '1/5', '1/5'],
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

const iconSrcCache = new Map()

function buildIconCollection({ categoryKey, modules }) {
  return Object.entries(modules)
    .map(([path, loader]) => {
      const relativePath = path.split(`/${categoryKey}-icons/`)[1] ?? ''
      const iconName = `icon/${categoryKey}/${relativePath.replace(/\.svg$/, '').replace(/\\/g, '/')}`
      const familyName = relativePath.split('/')[0] ?? ''

      const load = async () => {
        const src = await loader()
        iconSrcCache.set(iconName, src)
        return src
      }

      return {
        name: iconName,
        family: familyName,
        load,
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
      summary="这里按设计稿更新品牌色、梯度色和中性色，并直接展示当前项目落地使用的颜色 token，方便组件统一引用。"
    >
      <div className="global-style-color-stack">
        <section className="global-style-color-panel">
          <div className="global-style-color-panel__header">
            <h4 className="global-style-color-panel__title">品牌色</h4>
            <p className="global-style-color-panel__copy">品牌蓝和品牌深蓝作为全局主色，统一承接页面的核心操作和品牌表达。</p>
          </div>
          <div className="global-style-color-brand-grid">
            {brandColorCards.map((item) => (
              <article className="global-style-color-brand-card" key={item.token}>
                <span className="global-style-color-brand-card__swatch" style={{ background: item.value }} />
                <div className="global-style-color-brand-card__meta">
                  <h5 className="global-style-color-brand-card__title">{item.title}</h5>
                  <code className="global-style-color-token">{item.token}</code>
                  <p className="global-style-color-brand-card__hex">{item.hex}</p>
                  <p className="global-style-color-brand-card__note">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="global-style-color-panel">
          <div className="global-style-color-panel__header">
            <h4 className="global-style-color-panel__title">色彩梯度</h4>
            <p className="global-style-color-panel__copy">按照设计稿中的 Blue、Cyan、Orange、Red 四组色板沉淀基础 token，组件可以直接从这些色阶做语义映射。</p>
          </div>
          <div className="global-style-color-ramp-list">
            {gradientColorFamilies.map((family) => (
              <article className="global-style-color-ramp" key={family.title}>
                <div className="global-style-color-ramp__header">
                  <h5 className="global-style-color-ramp__title">{family.title}</h5>
                  <p className="global-style-color-ramp__summary">{family.summary}</p>
                </div>
                <div className="global-style-color-ramp__swatches">
                  {family.items.map((item) => (
                    <div className="global-style-color-ramp__item" key={item.token}>
                      <span className="global-style-color-ramp__chip" style={{ background: item.value }} />
                      <div className="global-style-color-ramp__meta">
                        <p className="global-style-color-ramp__step">{item.step}</p>
                        <code className="global-style-color-token">{item.token}</code>
                        <p className="global-style-color-ramp__hex">{item.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="global-style-color-panel">
          <div className="global-style-color-panel__header">
            <h4 className="global-style-color-panel__title">中性色</h4>
            <p className="global-style-color-panel__copy">文字、背景、描边和遮罩统一从中性色 token 中引用，避免组件内继续写死颜色值。</p>
          </div>
          <div className="global-style-color-neutral-grid">
            {neutralColorSections.map((section) => (
              <article className="global-style-color-neutral-card" key={section.title}>
                <div className="global-style-color-neutral-card__header">
                  <h5 className="global-style-color-neutral-card__title">{section.title}</h5>
                  <p className="global-style-color-neutral-card__summary">{section.summary}</p>
                </div>
                <div className="global-style-color-neutral-card__list">
                  {section.items.map((item) => (
                    <div className="global-style-color-neutral-row" key={item.token}>
                      <span className="global-style-color-neutral-row__chip" style={{ background: item.value }} />
                      <div className="global-style-color-neutral-row__meta">
                        <p className="global-style-color-neutral-row__label">{item.label}</p>
                        <code className="global-style-color-token">{item.token}</code>
                        <p className="global-style-color-neutral-row__hex">{item.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </GlobalStylePreviewShell>
  )
}

export function GlobalTypographyPreview() {
  return (
    <GlobalStylePreviewShell
      title="文字规范"
      summary="这里按设计稿补齐字体家族、行高、字重和字号层级，并把当前项目实际可落地的文字 token 一起展示出来。"
    >
      <div className="global-style-typography-stack">
        <section className="global-style-typography-panel">
          <div className="global-style-typography-panel__header">
            <h4 className="global-style-typography-panel__title">字体家族</h4>
            <p className="global-style-typography-panel__copy">
              优先使用各个系统默认的无衬线字体，保证亲和、现代、清晰且易于阅读；数字信息单独使用更稳定的数字字体。
            </p>
          </div>
          <div className="global-style-typography-family-grid">
            {typographyFamilyCards.map((item) => (
              <article className="global-style-typography-family-card" key={item.title}>
                <div className="global-style-typography-family-card__header">
                  <h5 className="global-style-typography-family-card__title">{item.title}</h5>
                  {item.meta.map((meta) => (
                    <p className="global-style-typography-family-card__meta" key={meta}>
                      {meta}
                    </p>
                  ))}
                </div>
                <div className="global-style-typography-family-card__samples">
                  <div className="global-style-typography-family-chip">
                    <span
                      className="global-style-typography-family-chip__glyph"
                      style={{ fontFamily: item.sampleFamily }}
                    >
                      {item.sampleCn}
                    </span>
                    <span className="global-style-typography-family-chip__label">中文</span>
                  </div>
                  <div className="global-style-typography-family-chip">
                    <span
                      className="global-style-typography-family-chip__glyph"
                      style={{ fontFamily: item.numberFamily ?? item.sampleFamily }}
                    >
                      {item.sampleEn}
                    </span>
                    <span className="global-style-typography-family-chip__label">英文</span>
                  </div>
                  <div className="global-style-typography-family-chip">
                    <span
                      className="global-style-typography-family-chip__glyph"
                      style={{ fontFamily: item.numberFamily ?? item.sampleFamily }}
                    >
                      {item.sampleNumber}
                    </span>
                    <span className="global-style-typography-family-chip__label">数字</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="global-style-typography-note-list">
            {typographyFamilyNotes.map((note) => (
              <p className="global-style-typography-note" key={note}>
                {note}
              </p>
            ))}
          </div>
        </section>

        <section className="global-style-typography-panel">
          <div className="global-style-typography-panel__header">
            <h4 className="global-style-typography-panel__title">行高</h4>
            <p className="global-style-typography-panel__copy">
              行高用于保证上下文案之间有稳定的呼吸空间，当前基础规则按设计稿采用 `line-height = font-size + 8px`。
            </p>
          </div>
          <div className="global-style-typography-line-grid">
            {typographyLineHeightExamples.map((item) => (
              <article className="global-style-typography-line-card" key={item.title}>
                <p className="global-style-typography-line-card__title">{item.title}</p>
                <div className="global-style-typography-line-card__sample-wrap">
                  <p
                    className="global-style-typography-line-card__sample"
                    style={{ fontSize: item.fontSize, lineHeight: item.lineHeight }}
                  >
                    {item.sample}
                  </p>
                </div>
                <code className="global-style-color-token">
                  {item.fontSize} / {item.lineHeight}
                </code>
              </article>
            ))}
          </div>
        </section>

        <section className="global-style-typography-panel">
          <div className="global-style-typography-panel__header">
            <h4 className="global-style-typography-panel__title">字重</h4>
            <p className="global-style-typography-panel__copy">
              中文正文与标题以常规体、中黑体为主，数字字体以常规体与中等字重为主，粗体只用于强调和标题强化。
            </p>
          </div>
          <div className="global-style-typography-weight-table">
            <div className="global-style-typography-weight-row global-style-typography-weight-row--head">
              <div className="global-style-typography-weight-cell global-style-typography-weight-cell--family" />
              {typographyWeightColumns.map((column) => (
                <div className="global-style-typography-weight-cell global-style-typography-weight-cell--head" key={column}>
                  {column}
                </div>
              ))}
            </div>
            {typographyWeightRows.map((row) => (
              <div className="global-style-typography-weight-row" key={row.family}>
                <div className="global-style-typography-weight-cell global-style-typography-weight-cell--family">
                  {row.family}
                </div>
                {row.samples.map((sample, index) => (
                  <div
                    className="global-style-typography-weight-cell global-style-typography-weight-cell--sample"
                    key={`${row.family}-${sample}-${index}`}
                    style={{
                      fontFamily: row.family === 'Barlow' ? 'var(--font-family-ui-number)' : 'var(--font-family-ui-cn)',
                      fontWeight:
                        index === 0
                          ? 'var(--font-weight-regular)'
                          : index === 1
                            ? 'var(--font-weight-medium)'
                            : 'var(--font-weight-semibold)',
                    }}
                  >
                    {sample}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="global-style-typography-panel">
          <div className="global-style-typography-panel__header">
            <h4 className="global-style-typography-panel__title">字号</h4>
            <p className="global-style-typography-panel__copy">
              中文与数字分开管理，标题、内文、标签和金额等场景都对应明确的字号、行高和字重 token。
            </p>
          </div>
          <div className="global-style-typography-scale-block">
            <p className="global-style-typography-scale-block__title">中文</p>
            <div className="global-style-typography-scale-list">
              {typographyScaleChinese.map((item) => (
                <article className="global-style-typography-scale-row" key={item.name}>
                  <div className="global-style-typography-scale-row__main">
                    <p
                      className="global-style-typography-scale-row__sample"
                      style={{
                        fontFamily: 'var(--font-family-ui-cn)',
                        fontSize: item.fontSize,
                        lineHeight: item.lineHeight,
                        fontWeight: item.fontWeight,
                      }}
                    >
                      {item.name} {item.size} {item.weightLabel}
                    </p>
                    <code className="global-style-color-token">{item.token}</code>
                  </div>
                  <p className="global-style-typography-scale-row__usage">{item.usage}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="global-style-typography-scale-block">
            <p className="global-style-typography-scale-block__title">数字</p>
            <div className="global-style-typography-scale-list">
              {typographyScaleNumber.map((item) => (
                <article className="global-style-typography-scale-row" key={item.name}>
                  <div className="global-style-typography-scale-row__main">
                    <p
                      className="global-style-typography-scale-row__sample"
                      style={{
                        fontFamily: 'var(--font-family-ui-number)',
                        fontSize: item.fontSize,
                        lineHeight: item.lineHeight,
                        fontWeight: item.fontWeight,
                      }}
                    >
                      {item.name}
                    </p>
                    <code className="global-style-color-token">{item.token}</code>
                  </div>
                  <p className="global-style-typography-scale-row__usage">{item.usage}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </GlobalStylePreviewShell>
  )
}

export function GlobalRadiusPreview() {
  return (
    <GlobalStylePreviewShell
      title="圆角规范"
      summary="为保证整体传递出包容亲和的主观感受，我们选择圆角样式的信息容器；整体提供 6 个圆角梯度，结合容器尺寸与具体场景选择使用。"
    >
      <div className="global-style-radius-layout">
        <section className="global-style-radius-scene">
          <div className="global-style-radius-scene__plate">
            <div className="global-style-radius-scene__slot global-style-radius-scene__slot--row">
              <article
                className="global-style-radius-scene__mini-card"
                style={{ borderRadius: 'var(--radius-3)' }}
              >
                <p className="global-style-radius-scene__value">3px</p>
                <p className="global-style-radius-scene__label">小标签</p>
              </article>
              <article
                className="global-style-radius-scene__mini-card"
                style={{ borderRadius: 'var(--radius-4)' }}
              >
                <p className="global-style-radius-scene__value">4px</p>
                <p className="global-style-radius-scene__label">小组件</p>
              </article>
            </div>

            <div className="global-style-radius-scene__slot">
              <article
                className="global-style-radius-scene__inner-card global-style-radius-scene__inner-card--mint"
                style={{ borderRadius: 'var(--radius-6)' }}
              >
                <p className="global-style-radius-scene__value">6px</p>
                <p className="global-style-radius-scene__label">页面卡片内子卡片</p>
              </article>
            </div>

            <article
              className="global-style-radius-scene__card global-style-radius-scene__card--page"
              style={{ borderRadius: 'var(--radius-8)' }}
            >
              <p className="global-style-radius-scene__value">8px</p>
              <p className="global-style-radius-scene__label">页面标准卡片容器</p>
            </article>

            <article
              className="global-style-radius-scene__card global-style-radius-scene__card--dialog"
              style={{ borderRadius: 'var(--radius-12)' }}
            >
              <p className="global-style-radius-scene__value">12px</p>
              <p className="global-style-radius-scene__label">对话框容器</p>
            </article>

            <article
              className="global-style-radius-scene__sheet global-style-radius-scene__sheet--fullbleed"
              style={{ borderRadius: 'var(--radius-16)' }}
            >
              <p className="global-style-radius-scene__value">16px</p>
              <p className="global-style-radius-scene__label">贯通整个屏幕的浮层卡片</p>

              <div
                className="global-style-radius-scene__pill"
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                <span className="global-style-radius-scene__pill-value">999px</span>
                <span className="global-style-radius-scene__pill-label">胶囊按钮</span>
              </div>
            </article>
          </div>
        </section>

        <section className="global-style-radius-specs">
          <div className="global-style-radius-specs__pair">
            {radiusSpecItems.slice(0, 2).map((item) => (
              <article className="global-style-radius-spec" key={item.name}>
                <div
                  className="global-style-radius-spec__shape global-style-radius-spec__shape--compact"
                  style={{
                    borderRadius: item.value,
                    width: item.width,
                    height: item.height,
                  }}
                >
                  <span className="global-style-radius-spec__shape-label">{item.name}</span>
                  <span className="global-style-radius-spec__corner" />
                </div>
                <div className="global-style-radius-spec__meta">
                  <p className="global-style-radius-spec__usage">{item.usage}</p>
                  <code className="global-style-color-token">{item.token}</code>
                </div>
              </article>
            ))}
          </div>

          <div className="global-style-radius-specs__stack">
            {radiusSpecItems.slice(2).map((item) => (
              <article className="global-style-radius-spec" key={item.name}>
                <div
                  className="global-style-radius-spec__shape"
                  style={{
                    borderRadius: item.value,
                    width: item.width,
                    height: item.height,
                  }}
                >
                  <span className="global-style-radius-spec__shape-label">{item.name}</span>
                  <span className="global-style-radius-spec__corner" />
                </div>
                <div className="global-style-radius-spec__meta">
                  <p className="global-style-radius-spec__usage">{item.usage}</p>
                  <code className="global-style-color-token">{item.token}</code>
                </div>
              </article>
            ))}
          </div>
        </section>
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
      summary="这里按设计稿补齐栅格系统、基础间距节奏，以及行高大于字号时的文字间距处理说明。"
    >
      <div className="global-style-layout-stack">
        <section className="global-style-layout-section">
          <div className="global-style-layout-section__header">
            <div className="global-style-layout-section__heading">
              <h4 className="global-style-layout-section__title">栅格系统</h4>
              <span className="global-style-layout-section__eyebrow">Grid</span>
            </div>
            <p className="global-style-layout-section__copy">
              栅格可以有效的保证页面的一致性、逻辑性、加强团队协作和统一，通过一定的规律、合理的设置基准线来规范界面中的元素（文本 / 图像），让每个区域能够相对独立却又能相互关联，形成整个界面，最终呈现出清晰易读的信息布局。
            </p>
          </div>

          <div className="global-style-layout-grid-panel">
            <article className="global-style-layout-grid-card">
              <div className="global-style-layout-grid-card__header">
                <h5 className="global-style-layout-grid-card__title">栅格列数</h5>
                <p className="global-style-layout-grid-card__copy">
                  栅格列数采用 12 列制栅格，12 可以被 2、3、4、6 等分，这样可以最包容的组合出不同的布局，比其他的列数更加实用。
                </p>
              </div>

              <div className="global-style-layout-columns-demo">
                <div className="global-style-layout-columns-demo__frame">
                  <div className="global-style-layout-columns-demo__surface">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <span className="global-style-layout-columns-demo__column" key={`column-${index}`} />
                    ))}
                  </div>
                </div>

                <div className="global-style-layout-columns-demo__metrics">
                  <div className="global-style-layout-columns-demo__metric-row">
                    <span className="global-style-layout-columns-demo__metric global-style-layout-columns-demo__metric--orange">
                      列：22px
                    </span>
                    <span className="global-style-layout-columns-demo__metric global-style-layout-columns-demo__metric--orange">
                      水槽：8px
                    </span>
                    <span className="global-style-layout-columns-demo__metric global-style-layout-columns-demo__metric--blue">
                      内部留白边距：12px
                    </span>
                  </div>
                  <div className="global-style-layout-columns-demo__metric-line" />
                  <p className="global-style-layout-columns-demo__total">总宽：375px</p>
                </div>
              </div>
            </article>

            <article className="global-style-layout-grid-card">
              <div className="global-style-layout-grid-card__header">
                <h5 className="global-style-layout-grid-card__title">容器盒子</h5>
                <p className="global-style-layout-grid-card__copy">
                  将文字、图片、按钮等元素约束在限定的容器宽度以内形成复用组件，最终组合拼装成完整的设计方案。
                </p>
              </div>

              <div className="global-style-layout-container-demo">
                <div className="global-style-layout-container-demo__page">
                  <div className="global-style-layout-container-demo__inner">
                    {layoutGridRows.map((row, rowIndex) => (
                      <div
                        className="global-style-layout-container-demo__row"
                        key={`row-${rowIndex}`}
                        style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
                      >
                        {row.map((label, itemIndex) => (
                          <div className="global-style-layout-container-demo__cell" key={`${rowIndex}-${itemIndex}`}>
                            {label}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="global-style-layout-section">
          <div className="global-style-layout-section__header">
            <div className="global-style-layout-section__heading">
              <h4 className="global-style-layout-section__title">间距</h4>
              <span className="global-style-layout-section__eyebrow">Space</span>
            </div>
            <p className="global-style-layout-section__copy">
              所有的间距为 4 的倍数。4 作为偶数，程序进行单位换算后可被整除，避免像素出现小数点；其次，4 为增量单位既不会显得琐碎，也不会让内容过于分散。当界面中所有元素都以 4 为倍数时，其元素大小、间距都有规可循。根据对比、对齐、亲密性、重复原则选择元素与元素之间合适的间距：4px、8px、12px、16px…
            </p>
          </div>

          <div className="global-style-layout-space-panel">
            <div className="global-style-layout-space-table">
              <div className="global-style-layout-space-table__head">
                <p>间距示意</p>
                <p>间距数值</p>
                <p>使用范围</p>
              </div>

              {layoutSpacingItems.map((item) => (
                <article className="global-style-layout-space-row" key={item.name}>
                  <div className="global-style-layout-space-row__bar-wrap">
                    <span className="global-style-layout-space-row__bar" style={{ height: item.value }} />
                  </div>
                  <p className="global-style-layout-space-row__value">{item.name}</p>
                  <p className="global-style-layout-space-row__usage">{item.usage}</p>
                </article>
              ))}
            </div>

          </div>
        </section>
      </div>
    </GlobalStylePreviewShell>
  )
}

export function GlobalIconPreview() {
  const [iconSrcByName, setIconSrcByName] = useState(() => Object.fromEntries(iconSrcCache))

  useEffect(() => {
    const pendingIcons = iconCategorySections
      .flatMap((section) => iconCollections[section.categoryKey])
      .filter((icon) => !iconSrcCache.has(icon.name))

    if (pendingIcons.length === 0) {
      return undefined
    }

    let cancelled = false

    Promise.all(pendingIcons.map((icon) => icon.load())).then(() => {
      if (!cancelled) {
        setIconSrcByName(Object.fromEntries(iconSrcCache))
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

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
                {iconSrcByName[icon.name] ? (
                  <img
                    className="global-style-icon-gallery__asset"
                    src={iconSrcByName[icon.name]}
                    alt={icon.name}
                    loading="lazy"
                  />
                ) : (
                  <span className="global-style-icon-gallery__asset" />
                )}
                <span className="global-style-icon-gallery__tooltip">{icon.name}</span>
              </div>
            ))}
          </article>
        ))}
      </div>
    </GlobalStylePreviewShell>
  )
}
