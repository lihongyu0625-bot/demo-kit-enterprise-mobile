import PlaceholderPreview from './PlaceholderPreview'
import {
  CommonButtonPreview,
  CommonNavBarPreview,
  CommonSwitchPreview,
} from './common/CommonComponentPreviews'
import HotelFormBusinessPreview from './business/hotel/HotelFormBusinessPreview'
import HotelBookingSuccessBusinessPreview from './business/hotel/HotelBookingSuccessBusinessPreview'
import HotelDetailBusinessPreview from './business/hotel/HotelDetailBusinessPreview'
import HotelHomeBusinessBusinessPreview from './business/hotel/HotelHomeBusinessBusinessPreview'
import HotelListBusinessPreview from './business/hotel/HotelListBusinessPreview'
import HotelOrderDetailBusinessPreview from './business/hotel/HotelOrderDetailBusinessPreview'
import HotelRoomDetailBusinessPreview from './business/hotel/HotelRoomDetailBusinessPreview'
import HotelBookingSuccessCasePreview from './page-cases/hotel/HotelBookingSuccessCasePreview'
import HotelDetailCasePreview from './page-cases/hotel/HotelDetailCasePreview'
import HotelFormCasePreview from './page-cases/hotel/HotelFormCasePreview'
import HotelHomeBusinessCasePreview from './page-cases/hotel/HotelHomeBusinessCasePreview'
import HotelListCasePreview from './page-cases/hotel/HotelListCasePreview'
import HotelOrderDetailCasePreview from './page-cases/hotel/HotelOrderDetailCasePreview'
import HotelRoomDetailCasePreview from './page-cases/hotel/HotelRoomDetailCasePreview'

function createPlaceholderItem(config) {
  return function PlaceholderItem() {
    return <PlaceholderPreview {...config} />
  }
}

export const previewNavigation = [
  {
    id: 'group-common',
    label: '通用组件',
    type: 'group',
    children: [
      {
        id: 'common-button',
        label: '按钮',
        type: 'item',
        title: '按钮',
        pathLabel: '通用组件 / 按钮',
        description: '统一预留按钮类组件的预览位，后续可以直接接入真实按钮代码。',
        statusLabel: '可扩展',
        maintenanceHint: '适合后续沉淀主按钮、次按钮、禁用态等。',
        component: CommonButtonPreview,
      },
      {
        id: 'common-switch',
        label: '开关',
        type: 'item',
        title: '开关',
        pathLabel: '通用组件 / 开关',
        description: '统一预留开关类组件的预览位，后续可以逐步接入真实交互状态。',
        statusLabel: '可扩展',
        maintenanceHint: '适合后续沉淀默认态、选中态、禁用态。',
        component: CommonSwitchPreview,
      },
      {
        id: 'common-navbar',
        label: '导航栏',
        type: 'item',
        title: '导航栏',
        pathLabel: '通用组件 / 导航栏',
        description: '统一预留移动端导航栏的预览位，方便后续沉淀页面头部能力。',
        statusLabel: '可扩展',
        maintenanceHint: '适合后续沉淀返回、标题、操作按钮等。',
        component: CommonNavBarPreview,
      },
    ],
  },
  {
    id: 'group-business',
    label: '业务组件',
    type: 'group',
    children: [
      {
        id: 'group-business-hotel',
        label: '酒店',
        type: 'group',
        children: [
          {
            id: 'business-hotel-home-business',
            label: '酒店首页-因公',
            type: 'item',
            title: '酒店首页-因公组件预览',
            pathLabel: '业务组件 / 酒店 / 酒店首页-因公',
            description: '这里展示酒店首页-因公里拆出来的业务组件，适合按头部、填写卡片和底部权益模块持续维护。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店首页-因公拆分后的业务组件。',
            component: HotelHomeBusinessBusinessPreview,
          },
          {
            id: 'business-hotel-list',
            label: '酒店列表页',
            type: 'item',
            title: '酒店列表页组件预览',
            pathLabel: '业务组件 / 酒店 / 酒店列表页',
            description: '这里展示酒店列表页里拆出来的业务组件，适合按搜索栏、筛选区和酒店卡片持续沉淀。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店列表页拆分后的业务组件。',
            component: HotelListBusinessPreview,
          },
          {
            id: 'business-hotel-detail',
            label: '酒店详情页',
            type: 'item',
            title: '酒店详情页组件预览',
            pathLabel: '业务组件 / 酒店 / 酒店详情页',
            description: '这里展示酒店详情页里拆出来的业务组件，适合按头图、房型和酒店信息模块持续沉淀。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店详情页拆分后的业务组件。',
            component: HotelDetailBusinessPreview,
          },
          {
            id: 'business-hotel-room-detail',
            label: '房型详情页',
            type: 'item',
            title: '房型详情页组件预览',
            pathLabel: '业务组件 / 酒店 / 房型详情页',
            description: '这里展示房型详情页里拆出来的业务组件，适合按卡片模块继续沉淀到酒店组件体系里。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是房型详情页拆分后的业务组件。',
            component: HotelRoomDetailBusinessPreview,
          },
          {
            id: 'business-hotel-form',
            label: '酒店填单页',
            type: 'item',
            title: '酒店填单页组件预览',
            pathLabel: '业务组件 / 酒店 / 酒店填单页',
            description: '这里展示酒店填单页里拆出来的业务组件，适合按模块核对和后续复用。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店填单页拆分后的业务组件。',
            component: HotelFormBusinessPreview,
          },
          {
            id: 'business-hotel-booking-success',
            label: '酒店下单成功页',
            type: 'item',
            title: '酒店下单成功页组件预览',
            pathLabel: '业务组件 / 酒店 / 酒店下单成功页',
            description: '这里展示酒店下单成功页里拆出来的业务组件，适合按状态区、订单卡片和联订福利卡片继续维护。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店下单成功页拆分后的业务组件。',
            component: HotelBookingSuccessBusinessPreview,
          },
          {
            id: 'business-hotel-order-detail',
            label: '酒店订单详情页',
            type: 'item',
            title: '酒店订单详情页组件预览',
            pathLabel: '业务组件 / 酒店 / 酒店订单详情页',
            description: '这里展示酒店订单详情页里拆出来的业务组件，适合按状态区、订单信息卡片和权益模块持续维护。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店订单详情页拆分后的业务组件。',
            component: HotelOrderDetailBusinessPreview,
          },
        ],
      },
      {
        id: 'business-car',
        label: '用车',
        type: 'item',
        title: '用车业务组件',
        pathLabel: '业务组件 / 用车',
        description: '用车业务组件的目录位已经预留，后续可以继续往这里追加页面拆出的卡片和模块。',
        statusLabel: '待补充',
        maintenanceHint: '建议后续按页面拆出表单卡、地址卡、费用卡等。',
        component: createPlaceholderItem({
          badge: '业务组件',
          title: '用车业务组件预留位',
          summary: '这一块已经为用车业务组件预留好目录位置，后续新增时可以直接沿用。',
          nextSteps: [
            '1. 新建用车业务组件预览文件',
            '2. 在注册表里补一条用车配置',
            '3. 菜单会自动显示在这里',
          ],
        }),
      },
      {
        id: 'business-flight',
        label: '机票',
        type: 'item',
        title: '机票业务组件',
        pathLabel: '业务组件 / 机票',
        description: '机票业务组件的目录位已经预留，适合后续沉淀航班卡、乘机人卡和支付区。',
        statusLabel: '待补充',
        maintenanceHint: '建议后续按航班信息、出行信息、结算信息拆分。',
        component: createPlaceholderItem({
          badge: '业务组件',
          title: '机票业务组件预留位',
          summary: '这里是机票业务组件的后续挂载位置，现在先保留结构。',
          nextSteps: [
            '1. 新建机票业务组件预览文件',
            '2. 注册到预览配置里',
            '3. 统一在这里查看预览',
          ],
        }),
      },
      {
        id: 'business-train',
        label: '火车票',
        type: 'item',
        title: '火车票业务组件',
        pathLabel: '业务组件 / 火车票',
        description: '火车票业务组件的目录位已经预留，后续可以继续扩充席位卡、乘车人卡和提交区。',
        statusLabel: '待补充',
        maintenanceHint: '建议后续按车次信息、乘客信息、支付信息拆分。',
        component: createPlaceholderItem({
          badge: '业务组件',
          title: '火车票业务组件预留位',
          summary: '这里已经为火车票业务组件预留好了统一入口。',
          nextSteps: [
            '1. 新建火车票业务组件预览文件',
            '2. 注册到预览配置里',
            '3. 按统一结构维护',
          ],
        }),
      },
    ],
  },
  {
    id: 'group-pages',
    label: '页面案例',
    type: 'group',
    children: [
      {
        id: 'group-pages-hotel',
        label: '酒店',
        type: 'group',
        children: [
          {
            id: 'page-hotel-home-business',
            label: '酒店首页-因公',
            type: 'item',
            title: '酒店首页-因公整页案例',
            pathLabel: '页面案例 / 酒店 / 酒店首页-因公',
            description: '这里展示酒店首页-因公整页组装后的最终效果，适合从页面层级核对头图、填写卡片和底部权益入口的整体编排。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店首页-因公完整预览。',
            component: HotelHomeBusinessCasePreview,
          },
          {
            id: 'page-hotel-list',
            label: '酒店列表页',
            type: 'item',
            title: '酒店列表页整页案例',
            pathLabel: '页面案例 / 酒店 / 酒店列表页',
            description: '这里展示酒店列表页整页组装后的最终效果，适合从页面层级验证搜索、筛选和列表信息的整体编排。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店列表页完整预览。',
            component: HotelListCasePreview,
          },
          {
            id: 'page-hotel-detail',
            label: '酒店详情页',
            type: 'item',
            title: '酒店详情页整页案例',
            pathLabel: '页面案例 / 酒店 / 酒店详情页',
            description: '这里展示酒店详情页整页组装后的最终效果，适合从页面层级验证头图、房型和酒店基础信息的整体编排。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店详情页完整预览。',
            component: HotelDetailCasePreview,
          },
          {
            id: 'page-hotel-room-detail',
            label: '房型详情页',
            type: 'item',
            title: '房型详情页整页案例',
            pathLabel: '页面案例 / 酒店 / 房型详情页',
            description: '这里展示房型详情页整页组装后的最终效果，适合从页面层面验证完整输出。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是房型详情页完整预览。',
            component: HotelRoomDetailCasePreview,
          },
          {
            id: 'page-hotel-form',
            label: '酒店填单页',
            type: 'item',
            title: '酒店填单页整页案例',
            pathLabel: '页面案例 / 酒店 / 酒店填单页',
            description: '这里展示酒店填单页整页组装后的最终效果，适合从页面层级验证完整输出。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店填单页完整预览。',
            component: HotelFormCasePreview,
          },
          {
            id: 'page-hotel-booking-success',
            label: '酒店下单成功页',
            type: 'item',
            title: '酒店下单成功页整页案例',
            pathLabel: '页面案例 / 酒店 / 酒店下单成功页',
            description: '这里展示酒店下单成功页整页组装后的最终效果，适合从页面层级核对状态文案、订单信息和联订福利推荐的整体编排。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店下单成功页完整预览。',
            component: HotelBookingSuccessCasePreview,
          },
          {
            id: 'page-hotel-order-detail',
            label: '酒店订单详情页',
            type: 'item',
            title: '酒店订单详情页整页案例',
            pathLabel: '页面案例 / 酒店 / 酒店订单详情页',
            description: '这里展示酒店订单详情页整页组装后的最终效果，适合从页面层级核对状态操作、订单信息和权益模块的整体编排。',
            statusLabel: '已接入',
            maintenanceHint: '当前挂载的是酒店订单详情页完整预览。',
            component: HotelOrderDetailCasePreview,
          },
        ],
      },
      {
        id: 'pages-car',
        label: '用车',
        type: 'item',
        title: '用车页面案例',
        pathLabel: '页面案例 / 用车',
        description: '用车页面案例的目录位已经预留，后续可以把完整页面预览放到这里。',
        statusLabel: '待补充',
        maintenanceHint: '建议后续放整页预览，不和业务组件混在一起。',
        component: createPlaceholderItem({
          badge: '页面案例',
          title: '用车页面案例预留位',
          summary: '这里用于承接用车相关完整页面的最终预览效果。',
          nextSteps: [
            '1. 新建用车页面预览组件',
            '2. 在注册表里绑定到这里',
            '3. 用完整页面视角验收效果',
          ],
        }),
      },
      {
        id: 'pages-flight',
        label: '机票',
        type: 'item',
        title: '机票页面案例',
        pathLabel: '页面案例 / 机票',
        description: '机票页面案例的目录位已经预留，后续可以接入整页预览和案例说明。',
        statusLabel: '待补充',
        maintenanceHint: '建议后续把完整机票页面挂到这里统一查看。',
        component: createPlaceholderItem({
          badge: '页面案例',
          title: '机票页面案例预留位',
          summary: '这里用于承接机票相关完整页面的最终预览效果。',
          nextSteps: [
            '1. 新建机票页面预览组件',
            '2. 在注册表里绑定到这里',
            '3. 用整页视角核对最终效果',
          ],
        }),
      },
      {
        id: 'pages-train',
        label: '火车票',
        type: 'item',
        title: '火车票页面案例',
        pathLabel: '页面案例 / 火车票',
        description: '火车票页面案例的目录位已经预留，后续可以继续补整页输出案例。',
        statusLabel: '待补充',
        maintenanceHint: '建议后续放车次页、填单页等完整页面案例。',
        component: createPlaceholderItem({
          badge: '页面案例',
          title: '火车票页面案例预留位',
          summary: '这里用于承接火车票相关完整页面的最终预览效果。',
          nextSteps: [
            '1. 新建火车票页面预览组件',
            '2. 在注册表里绑定到这里',
            '3. 统一按页面案例维护',
          ],
        }),
      },
    ],
  },
]

export const defaultPreviewId = 'page-hotel-form'

function collectPreviewItems(items, collected = []) {
  items.forEach((item) => {
    if (item.type === 'group') {
      collectPreviewItems(item.children, collected)
      return
    }

    collected.push(item)
  })

  return collected
}

const previewItemMap = new Map(
  collectPreviewItems(previewNavigation).map((item) => [item.id, item]),
)

export function findPreviewById(id) {
  return previewItemMap.get(id)
}
