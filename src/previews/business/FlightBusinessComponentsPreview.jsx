import BusinessComponentCatalogPreview from './BusinessComponentCatalogPreview'
import FlightBookingSuccessBusinessPreview from './flight/FlightBookingSuccessBusinessPreview'
import FlightFormBusinessPreview from './flight/FlightFormBusinessPreview'
import FlightHomeBusinessPreview from './flight/FlightHomeBusinessPreview'
import FlightListBusinessPreview from './flight/FlightListBusinessPreview'
import FlightOrderDetailBusinessPreview from './flight/FlightOrderDetailBusinessPreview'
import FlightQuoteBusinessPreview from './flight/FlightQuoteBusinessPreview'

function cleanName(name, state) {
  const baseName = name.replace(/^[^·]+ · /, '')
  return state ? `${baseName}（${state}）` : baseName
}

function withUsage(items, page, options = {}) {
  const { anchorLabels = {}, displayNames = {}, overrides = {}, state } = options

  return items.map((item) => ({
    ...item,
    anchorLabel: anchorLabels[item.name] || item.anchorLabel,
    displayName: displayNames[item.name] || cleanName(item.name, state),
    usage: overrides[item.name] || {
      pages: [page],
      components: [],
    },
  }))
}

function pick(items, includes) {
  return items.filter((item) => includes.some((keyword) => item.name.includes(keyword)))
}

const sharedFlightTopNavUsage = {
  pages: ['机票首页', '航班列表页', '航班报价页', '机票填单页', '机票订单详情页'],
  components: ['机票顶部导航'],
}

const sharedFlightNoticeUsage = {
  pages: ['航班报价页', '机票填单页', '机票订单详情页'],
  components: ['机票通知条'],
}

const sharedSuccessUsage = {
  pages: ['酒店下单成功页', '机票下单成功页'],
  components: ['下单成功状态区', '成功页订单卡', '成功页提示区'],
}

const sharedGuaranteeUsage = {
  pages: ['机票首页', '酒店首页'],
  components: ['业务保障卡基础骨架'],
}

const sharedTermsUsage = {
  pages: ['酒店填单页', '机票填单页'],
  components: ['条款栏'],
}

const sections = [
  {
    id: 'flight-frame',
    title: '页面框架类',
    description: '顶部背景、顶部头图区、底部导航和底部排序栏都归到页面框架。',
    items: [
      ...withUsage(pick(FlightHomeBusinessPreview.showcaseList, ['顶部头图区', '底部导航']), '机票首页', {
        overrides: {
          '通用复用 · 顶部头图区': sharedFlightTopNavUsage,
        },
      }),
      ...withUsage(pick(FlightFormBusinessPreview.showcaseList, ['顶部背景']), '机票填单页'),
      ...withUsage(pick(FlightQuoteBusinessPreview.showcaseList, ['顶部背景']), '航班报价页'),
      ...withUsage(pick(FlightOrderDetailBusinessPreview.showcaseList, ['顶部背景']), '机票订单详情页'),
      ...withUsage(pick(FlightListBusinessPreview.showcaseList, ['底部排序栏']), '航班列表页'),
    ],
  },
  {
    id: 'flight-nav-notice',
    title: '导航提示类',
    description: '顶部导航、温馨提示和反诈提醒集中展示，页面差异通过使用说明体现。',
    items: [
      ...withUsage(pick(FlightListBusinessPreview.showcaseList, ['顶部导航']), '航班列表页', {
        state: '航线态',
        overrides: {
          '航班列表页 · 顶部导航区': sharedFlightTopNavUsage,
        },
      }),
      ...withUsage(pick(FlightQuoteBusinessPreview.showcaseList, ['顶部导航']), '航班报价页', {
        state: '报价态',
        overrides: {
          '航班报价页 · 顶部导航': sharedFlightTopNavUsage,
        },
      }),
      ...withUsage(pick(FlightFormBusinessPreview.showcaseList, ['顶部导航']), '机票填单页', {
        state: '填单态',
        overrides: {
          '机票填单页 · 顶部导航': sharedFlightTopNavUsage,
        },
      }),
      ...withUsage(pick(FlightFormBusinessPreview.showcaseList, ['温馨提示']), '机票填单页', {
        anchorLabels: {
          '机票填单页 · 温馨提示': '机票通知条',
        },
        displayNames: {
          '机票填单页 · 温馨提示': '温馨提示',
        },
        overrides: {
          '机票填单页 · 温馨提示': sharedFlightNoticeUsage,
        },
      }),
      ...withUsage(pick(FlightOrderDetailBusinessPreview.showcaseList, ['顶部导航', '反诈提醒']), '机票订单详情页', {
        state: '详情态',
        overrides: {
          '机票订单详情页 · 顶部导航': sharedFlightTopNavUsage,
          '机票订单详情页 · 反诈提醒': sharedFlightNoticeUsage,
        },
      }),
    ],
  },
  {
    id: 'flight-search-filter',
    title: '搜索筛选类',
    description: '筛选条、报价筛选标签和舱等切换都归到筛选决策类组件。',
    items: [
      ...withUsage(pick(FlightListBusinessPreview.showcaseList, ['筛选条']), '航班列表页'),
      ...withUsage(pick(FlightQuoteBusinessPreview.showcaseList, ['报价筛选标签', '舱等切换']), '航班报价页'),
    ],
  },
  {
    id: 'flight-info-card',
    title: '航班信息类',
    description: '航班卡片、航班列表、航班概要、支付航班卡和费用信息卡集中展示。',
    items: [
      ...withUsage(pick(FlightListBusinessPreview.showcaseList, ['航班卡片', '航班列表']), '航班列表页'),
      ...withUsage(pick(FlightQuoteBusinessPreview.showcaseList, ['航班概要卡片']), '航班报价页'),
      ...withUsage(pick(FlightOrderDetailBusinessPreview.showcaseList, ['支付航班卡']), '机票订单详情页'),
      ...withUsage(pick(FlightFormBusinessPreview.showcaseList, ['机票费用信息卡']), '机票填单页'),
    ],
  },
  {
    id: 'flight-price-submit',
    title: '报价支付类',
    description: '报价卡、条款确认和底部提交栏放在支付转化链路里。',
    items: [
      ...withUsage(pick(FlightQuoteBusinessPreview.showcaseList, ['报价卡片']), '航班报价页'),
      ...withUsage(pick(FlightFormBusinessPreview.showcaseList, ['条款栏', '底部提交栏']), '机票填单页', {
        overrides: {
          '机票填单页 · 条款栏': sharedTermsUsage,
        },
      }),
    ],
  },
  {
    id: 'flight-form-info',
    title: '填单信息类',
    description: '乘机人、表单信息、出行信息、报销审批和套餐信息统一放在信息录入类。',
    items: [
      ...withUsage(pick(FlightFormBusinessPreview.showcaseList, ['乘机人信息', '表单信息卡']), '机票填单页'),
      ...withUsage(pick(FlightOrderDetailBusinessPreview.showcaseList, ['出行信息', '报销与审批信息', '套餐信息']), '机票订单详情页'),
    ],
  },
  {
    id: 'flight-benefit-service',
    title: '权益服务类',
    description: '省心飞保障、底部权益条和出行服务统一归入权益服务。',
    items: [
      ...withUsage(pick(FlightHomeBusinessPreview.showcaseList, ['省心飞保障卡']), '机票首页', {
        overrides: {
          '机票首页 · 省心飞保障卡': sharedGuaranteeUsage,
        },
      }),
      ...withUsage(pick(FlightFormBusinessPreview.showcaseList, ['出行服务']), '机票填单页'),
      ...withUsage(pick(FlightOrderDetailBusinessPreview.showcaseList, ['出行服务']), '机票订单详情页'),
    ],
  },
  {
    id: 'flight-success',
    title: '成功页类',
    description: '机票成功页复用酒店成功页的同一套成功页组件。',
    items: withUsage(FlightBookingSuccessBusinessPreview.showcaseList, '机票下单成功页', {
      overrides: {
        '下单成功页 · 状态区': sharedSuccessUsage,
        '下单成功页 · 机票订单卡片': sharedSuccessUsage,
        '下单成功页 · 温馨提示': sharedSuccessUsage,
      },
    }),
  },
]

function FlightBusinessComponentsPreview() {
  return <BusinessComponentCatalogPreview sections={sections} />
}

export default FlightBusinessComponentsPreview
