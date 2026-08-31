import BusinessComponentCatalogPreview from './BusinessComponentCatalogPreview'
import HotelBookingSuccessBusinessPreview from './hotel/HotelBookingSuccessBusinessPreview'
import HotelDetailBusinessPreview from './hotel/HotelDetailBusinessPreview'
import HotelFormBusinessPreview from './hotel/HotelFormBusinessPreview'
import HotelHomeBusinessBusinessPreview from './hotel/HotelHomeBusinessBusinessPreview'
import HotelListBusinessPreview from './hotel/HotelListBusinessPreview'
import HotelOrderDetailBusinessPreview from './hotel/HotelOrderDetailBusinessPreview'
import HotelRoomDetailBusinessPreview from './hotel/HotelRoomDetailBusinessPreview'
import { HotelBookingSuccessPageBackground } from '../../components/hotel-booking-success/HotelBookingSuccessComponents'
import { HotelFormGradientBackground } from '../../components/hotel-form/HotelFormComponents'
import { HotelListHeaderBackground } from '../../components/hotel-list/HotelListComponents'

function cleanName(name, state) {
  const baseName = name.replace(/^[^·]+ · /, '')
  return state ? `${baseName}（${state}）` : baseName
}

function withUsage(items, page, options = {}) {
  const { displayNames = {}, overrides = {}, state } = options

  return items.map((item) => ({
    ...item,
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

const sharedGuaranteeUsage = {
  pages: ['酒店首页', '机票首页'],
  components: ['业务保障卡基础骨架'],
}

const sharedBookingButtonUsage = {
  pages: ['酒店详情页', '房型详情页'],
  components: ['多渠道房型卡（展开）', '单渠道房型卡', '吸底提单操作'],
}

const sharedTermsUsage = {
  pages: ['酒店填单页', '机票填单页'],
  components: ['条款栏'],
}

const sharedSuccessUsage = {
  pages: ['酒店下单成功页', '机票下单成功页'],
  components: ['下单成功状态区', '成功页订单卡', '成功页提示区'],
}

const hotelHeaderBackgroundItems = [
  {
    name: '列表页头部背景渐变',
    displayName: '头部背景渐变（列表态）',
    description: '酒店列表页顶部使用的蓝色渐变背景，用于承接搜索栏和筛选区。',
    render: (
      <div className="catalog-surface catalog-surface--hotel-list-bg">
        <HotelListHeaderBackground />
      </div>
    ),
    usage: {
      pages: ['酒店列表页'],
      components: [],
    },
  },
  {
    name: '填单页头部背景渐变',
    displayName: '头部背景渐变（填单态）',
    description: '酒店填单页顶部使用的浅色渐变背景，用于导航栏和首屏内容衔接。',
    render: (
      <div className="catalog-surface catalog-surface--hotel-form-bg">
        <HotelFormGradientBackground />
      </div>
    ),
    usage: {
      pages: ['酒店填单页'],
      components: [],
    },
  },
  {
    name: '下单成功页背景渐变',
    displayName: '背景渐变（下单成功态）',
    description: '酒店和机票下单成功页共用的顶部浅色背景图层，用于承接状态区和首屏内容。',
    render: (
      <div className="catalog-surface catalog-surface--success-bg">
        <HotelBookingSuccessPageBackground />
      </div>
    ),
    usage: {
      pages: ['酒店下单成功页', '机票下单成功页'],
      components: [],
    },
  },
]

const sections = [
  {
    id: 'hotel-frame',
    title: '页面框架类',
    description: '首页头部、导航、头图、底部导航和底部水印都归到框架能力。',
    items: [
      ...hotelHeaderBackgroundItems,
      ...withUsage(pick(HotelHomeBusinessBusinessPreview.showcaseList, ['首页头部区域', '底部导航']), '酒店首页'),
      ...withUsage(pick(HotelFormBusinessPreview.showcaseList, ['导航栏']), '酒店填单页', { state: '填单态' }),
      ...withUsage(pick(HotelOrderDetailBusinessPreview.showcaseList, ['订单导航栏']), '酒店订单详情页', { state: '订单详情态' }),
      ...withUsage(pick(HotelDetailBusinessPreview.showcaseList, ['头图与导航']), '酒店详情页'),
    ],
  },
  {
    id: 'hotel-search-filter',
    title: '搜索筛选类',
    description: '搜索栏、排序筛选和入住选择器集中展示。',
    items: [
      ...withUsage(pick(HotelListBusinessPreview.showcaseList, ['搜索栏', '排序与快捷筛选']), '酒店列表页'),
      ...withUsage(pick(HotelDetailBusinessPreview.showcaseList, ['入住选择器']), '酒店详情页'),
    ],
  },
  {
    id: 'hotel-content',
    title: '酒店内容类',
    description: '酒店卡片、酒店列表、名称卡、酒店信息、简介、设施和政策。',
    items: [
      ...withUsage(pick(HotelListBusinessPreview.showcaseList, ['酒店卡片', '酒店列表']), '酒店列表页'),
      ...withUsage(pick(HotelDetailBusinessPreview.showcaseList, ['酒店名称卡', '服务设施', '酒店简介', '酒店政策']), '酒店详情页'),
      ...withUsage(pick(HotelOrderDetailBusinessPreview.showcaseList, ['酒店信息卡片']), '酒店订单详情页'),
    ],
  },
  {
    id: 'hotel-room',
    title: '房型内容类',
    description: '房型头图、房型信息、房型卡、设施介绍、政策、服务方、优惠和费用明细。',
    items: [
      ...withUsage(pick(HotelDetailBusinessPreview.showcaseList, ['多渠道房型卡', '单渠道房型卡']), '酒店详情页', {
        overrides: {
          '多渠道房型卡（展开）': {
            pages: ['酒店详情页'],
            components: ['酒店预订按钮'],
          },
          单渠道房型卡: {
            pages: ['酒店详情页'],
            components: ['酒店预订按钮'],
          },
        },
      }),
      ...withUsage(HotelRoomDetailBusinessPreview.showcaseList, '房型详情页', {
        overrides: {
          '吸底提单操作': sharedBookingButtonUsage,
        },
      }),
    ],
  },
  {
    id: 'hotel-form-info',
    title: '填单信息类',
    description: '入住、联系、审批、费用归属、出行备注和发票提示都归入信息录入。',
    items: [
      ...withUsage(pick(HotelHomeBusinessBusinessPreview.showcaseList, ['填写卡片']), '酒店首页'),
      ...withUsage(pick(HotelFormBusinessPreview.showcaseList, ['房型信息卡', '入住信息卡', '联系信息卡', '审批信息卡', '费用归属卡', '出行备注卡', '发票提示卡']), '酒店填单页'),
      ...withUsage(pick(HotelOrderDetailBusinessPreview.showcaseList, ['预订信息卡片', '入住信息卡片', '发票提示卡片']), '酒店订单详情页'),
    ],
  },
  {
    id: 'hotel-benefit',
    title: '权益保障类',
    description: '省心住保障、专享权益、权益条、专项权益和本单可享集中展示。',
    items: [
      ...withUsage(pick(HotelHomeBusinessBusinessPreview.showcaseList, ['省心住保障卡']), '酒店首页', {
        overrides: {
          省心住保障卡: sharedGuaranteeUsage,
        },
      }),
      ...withUsage(pick(HotelListBusinessPreview.showcaseList, ['运营条', '专享权益条']), '酒店列表页'),
      ...withUsage(pick(HotelRoomDetailBusinessPreview.showcaseList, ['专享权益', '优惠及权益']), '房型详情页'),
      ...withUsage(pick(HotelFormBusinessPreview.showcaseList, ['专项权益卡']), '酒店填单页'),
      ...withUsage(pick(HotelOrderDetailBusinessPreview.showcaseList, ['本单可享卡片']), '酒店订单详情页'),
    ],
  },
  {
    id: 'hotel-order-payment',
    title: '订单支付类',
    description: '预订按钮、支付信息、提交栏、条款栏和状态支付相关组件。',
    items: [
      ...withUsage(pick(HotelDetailBusinessPreview.showcaseList, ['酒店预订按钮']), '酒店详情页', {
        overrides: {
          酒店预订按钮: sharedBookingButtonUsage,
        },
      }),
      ...withUsage(pick(HotelFormBusinessPreview.showcaseList, ['条款栏', '提交栏']), '酒店填单页', {
        overrides: {
          条款栏: sharedTermsUsage,
        },
      }),
      ...withUsage(pick(HotelOrderDetailBusinessPreview.showcaseList, ['预订成功状态区', '支付信息卡片']), '酒店订单详情页'),
    ],
  },
  {
    id: 'hotel-success',
    title: '成功页类',
    description: '酒店成功页组件也被机票成功页复用，是跨业务成功页组件集合。',
    items: withUsage(HotelBookingSuccessBusinessPreview.showcaseList, '酒店下单成功页', {
      overrides: {
        下单状态区: sharedSuccessUsage,
        订单卡片: sharedSuccessUsage,
      },
    }),
  },
]

function HotelBusinessComponentsPreview() {
  return <BusinessComponentCatalogPreview sections={sections} />
}

export default HotelBusinessComponentsPreview
