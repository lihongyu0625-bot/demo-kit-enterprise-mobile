import BusinessComponentCatalogPreview from './BusinessComponentCatalogPreview'
import CarBubbleBusinessPreview from './car/CarBubbleBusinessPreview'
import CarHomeDefaultBusinessPreview from './car/CarHomeDefaultBusinessPreview'
import CarLocationInputBusinessPreview from './car/CarLocationInputBusinessPreview'
import CarPaymentBusinessPreview from './car/CarPaymentBusinessPreview'
import CarPaymentCompleteBusinessPreview from './car/CarPaymentCompleteBusinessPreview'
import CarPickupBusinessPreview from './car/CarPickupBusinessPreview'
import CarSendBusinessPreview from './car/CarSendBusinessPreview'
import CarWaitingBusinessPreview from './car/CarWaitingBusinessPreview'
import carBubbleData from '../../mock-data/car-bubble.mock.json'
import carPaymentData from '../../mock-data/car-payment.mock.json'
import carPickupData from '../../mock-data/car-pickup.mock.json'
import { CarCustomerServiceCard } from '../../components/car-common/CarCustomerServiceCard'
import { CarPaymentActionCapsule } from '../../components/car-common/CarPaymentActionCapsule'
import { CarLocationFloatingActions, CarLocationMapLayer } from '../../components/car-location-input/CarLocationInputComponents'
import { CarPaymentFloatingSafety } from '../../components/car-payment/CarPaymentComponents'

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

const sharedRideMapUsage = {
  pages: ['等待接驾页', '送驾页'],
  components: ['用车行程地图舞台', '用车路线覆盖层', '距离标记'],
}

const sharedFloatingUsage = {
  pages: ['起终点输入页', '冒泡页', '等待接驾页', '送驾页', '待支付页'],
  components: ['冒泡页安全中心入口', '等待接驾页悬浮操作', '送驾页悬浮操作', '待支付页安全中心'],
}

const sharedDriverUsage = {
  pages: ['等待接驾页', '送驾页'],
  components: ['司机信息卡基础结构', '司机操作按钮组'],
}

const sharedServiceUsage = {
  pages: ['等待接驾页', '送驾页'],
  components: ['等待接驾页面板', '送驾页面板'],
}

const sharedVehicleUsage = {
  pages: ['冒泡页', '等待应答页'],
  components: ['车型价格项', '车型选择面板', '追加更快车型卡'],
}

const sharedPaymentActionUsage = {
  pages: ['冒泡页', '待支付页'],
  components: ['冒泡页底部呼叫区', '待支付页支付确认'],
}

const sharedFloatingActionItem = {
  name: '安全中心/定位悬浮操作',
  displayName: '安全中心/定位悬浮操作',
  description: '复用同一套用车悬浮按钮组件，按场景区分双按钮态和单按钮态。',
  render: (
    <div className="car-shared-floating-demo">
      <div className="car-shared-floating-demo__state">
        <span>双按钮态</span>
        <CarLocationFloatingActions />
      </div>
      <div className="car-shared-floating-demo__state car-shared-floating-demo__state--single">
        <span>单按钮态</span>
        <CarPaymentFloatingSafety />
      </div>
    </div>
  ),
  usage: sharedFloatingUsage,
}

const sharedMapBackgroundItem = {
  name: '地图背景',
  displayName: '地图背景',
  description: '用车地图页的底层地图背景，起终点输入页和冒泡页共用同一套组件。',
  render: (
    <div className="car-location-input-business-sample car-location-input-business-sample--map">
      <CarLocationMapLayer />
    </div>
  ),
  usage: {
    pages: ['起终点输入页', '冒泡页'],
    components: [],
  },
}

const sharedCustomerServiceItem = {
  name: '客服卡片',
  displayName: '客服卡片',
  description: '复用同一套用车客服卡片，文案随等待接驾页和送驾页场景替换。',
  render: (
    <div className="car-shared-service-demo">
      <CarCustomerServiceCard service={carPickupData.service} />
    </div>
  ),
  usage: sharedServiceUsage,
}

const sharedPaymentActionItem = {
  name: '支付/呼叫胶囊按钮',
  displayName: '支付/呼叫胶囊按钮',
  description: '复用同一套深色金额胶囊按钮，冒泡页和待支付页只替换金额、支付方式和按钮文案。',
  render: (
    <div className="car-shared-payment-action-demo">
      <div className="car-shared-payment-action-demo__state">
        <span>呼叫态</span>
        <CarPaymentActionCapsule
          action={carBubbleData.callBar.action}
          amount={carBubbleData.callBar.amount}
          payType={carBubbleData.callBar.payType}
          prefix={carBubbleData.callBar.prefix}
          unit={carBubbleData.callBar.unit}
          variant="wide"
        />
      </div>
      <div className="car-shared-payment-action-demo__state">
        <span>支付确认态</span>
        <CarPaymentActionCapsule
          action={carPaymentData.payment.confirmLabel}
          amount={carPaymentData.payment.actualAmount}
          payType={carPaymentData.payment.enterpriseLabel}
          variant="compact"
        />
      </div>
    </div>
  ),
  usage: sharedPaymentActionUsage,
}

const sections = [
  {
    id: 'car-home-entry',
    title: '首页入口类',
    description: '承接用车首页头图、品类、制度、金刚位、运营位、规则和底部导航。',
    items: withUsage(
      pick(CarHomeDefaultBusinessPreview.showcaseList, ['首页头图区', '品类tab', '制度卡片', '金刚位入口', '运营区', '底部导航']),
      '用车首页',
      {
        displayNames: {
          '通用复用 · 品类tab组件': '品类 tab（标签）组件',
        },
      },
    ),
  },
  {
    id: 'car-map-route',
    title: '地图路线类',
    description: '集中展示地图背景、路线信息、路线标注和行程距离标记。',
    items: [
      sharedMapBackgroundItem,
      ...withUsage(pick(CarLocationInputBusinessPreview.showcaseList, ['推荐上车点']), '起终点输入页'),
      ...withUsage(pick(CarBubbleBusinessPreview.showcaseList, ['路线信息']), '冒泡页'),
      ...withUsage(pick(CarPaymentBusinessPreview.showcaseList, ['地图和路线', '路线标注']), '待支付页', {
        overrides: {
          '待支付页 · 地图和路线': {
            pages: ['待支付页', '支付完成页'],
            components: ['支付地图舞台', '支付路线覆盖层'],
          },
        },
      }),
      ...withUsage(pick(CarPaymentCompleteBusinessPreview.showcaseList, ['地图和路线']), '支付完成页', {
        overrides: {
          '支付完成页 · 地图和路线': {
            pages: ['待支付页', '支付完成页'],
            components: ['支付地图舞台', '支付路线覆盖层'],
          },
        },
      }),
      ...withUsage(pick(CarPickupBusinessPreview.showcaseList, ['地图和距离标注']), '等待接驾页', {
        state: '等待接驾态',
        overrides: {
          '等待接驾页 · 地图和距离标注': sharedRideMapUsage,
        },
      }),
      ...withUsage(pick(CarSendBusinessPreview.showcaseList, ['地图和距离标注']), '送驾页', {
        state: '送驾态',
        overrides: {
          '送驾页 · 地图和距离标注': sharedRideMapUsage,
        },
      }),
    ],
  },
  {
    id: 'car-address-input',
    title: '地址输入类',
    description: '承接起终点输入、推荐上车点和安全指南相关能力。',
    items: withUsage(pick(CarLocationInputBusinessPreview.showcaseList, ['起终点卡片', '安全指南卡']), '起终点输入页'),
  },
  {
    id: 'car-vehicle-price',
    title: '车型价格类',
    description: '车型选择、追加车型、费用信息和会员权益放在一起看。',
    items: [
      ...withUsage(pick(CarBubbleBusinessPreview.showcaseList, ['车型选择面板']), '冒泡页', {
        overrides: {
          '冒泡页 · 车型选择面板': sharedVehicleUsage,
        },
      }),
      ...withUsage(pick(CarWaitingBusinessPreview.showcaseList, ['追加更快车型']), '等待应答页', {
        overrides: {
          '等待应答页 · 追加更快车型': sharedVehicleUsage,
        },
      }),
      ...withUsage(pick(CarPaymentBusinessPreview.showcaseList, ['费用信息']), '待支付页'),
      ...withUsage(pick(CarPaymentCompleteBusinessPreview.showcaseList, ['会员权益']), '支付完成页'),
    ],
  },
  {
    id: 'car-ride-status',
    title: '行程状态类',
    description: '叫车提醒、等待应答、接驾、送驾、通知条和待支付提醒统一归到状态类。',
    items: [
      ...withUsage(pick(CarHomeDefaultBusinessPreview.showcaseList, ['叫车提醒卡', '司机接驾横幅', '待支付提醒']), '用车首页'),
      ...withUsage(pick(CarWaitingBusinessPreview.showcaseList, ['顶部状态区', '加速权益卡']), '等待应答页'),
      ...withUsage(pick(CarSendBusinessPreview.showcaseList, ['通知条']), '送驾页', { state: '送驾态' }),
      ...withUsage(pick(CarPickupBusinessPreview.showcaseList, ['司机卡片']), '等待接驾页', {
        state: '等待接驾态',
        overrides: {
          '等待接驾页 · 司机卡片': sharedDriverUsage,
        },
      }),
      ...withUsage(pick(CarSendBusinessPreview.showcaseList, ['司机卡片']), '送驾页', {
        state: '送驾态',
        overrides: {
          '送驾页 · 司机卡片': sharedDriverUsage,
        },
      }),
    ],
  },
  {
    id: 'car-actions',
    title: '操作行动类',
    description: '悬浮操作、安全中心、客服卡片、呼叫区、支付确认和评价入口。',
    items: [
      sharedFloatingActionItem,
      sharedCustomerServiceItem,
      sharedPaymentActionItem,
      ...withUsage(pick(CarPaymentBusinessPreview.showcaseList, ['制度条', '支付卡']), '待支付页', {
        overrides: {
          '待支付页 · 制度条': {
            pages: ['待支付页'],
            components: ['待支付页 · 支付卡', '支付完成页 · 支付完成卡'],
          },
        },
      }),
      ...withUsage(pick(CarPaymentCompleteBusinessPreview.showcaseList, ['评价卡', '支付完成卡']), '支付完成页'),
    ],
  },
  {
    id: 'car-application',
    title: '申请单类',
    description: '首页全态里的申请入口、用车申请单、差旅申请单和行程卡组。',
    items: withUsage(
      pick(CarHomeDefaultBusinessPreview.showcaseList, ['申请快捷入口', '用车申请单', '差旅申请单', '申请单卡组', '我的行程卡组']),
      '用车首页',
    ),
  },
]

function CarBusinessComponentsPreview() {
  return <BusinessComponentCatalogPreview sections={sections} />
}

export default CarBusinessComponentsPreview
