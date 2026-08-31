import { Fragment } from 'react'
import { getBusinessComponentAnchorId } from './usageLinkTargets'

const pageHrefMap = {
  首页: '#page-car-home-default',
  酒店首页: '#page-hotel-home-business',
  '酒店首页-因公': '#page-hotel-home-business',
  酒店列表页: '#page-hotel-list',
  酒店详情页: '#page-hotel-detail',
  房型详情页: '#page-hotel-room-detail',
  酒店填单页: '#page-hotel-form',
  酒店下单成功页: '#page-hotel-booking-success',
  酒店订单详情页: '#page-hotel-order-detail',
  用车首页: '#page-car-home-default',
  起终点输入页: '#page-car-location-input',
  冒泡页: '#page-car-bubble',
  等待应答页: '#page-car-waiting',
  等待接驾页: '#page-car-pickup',
  送驾页: '#page-car-send',
  待支付页: '#page-car-payment',
  支付完成页: '#page-car-payment-complete',
  小福包: '#page-points-lucky-bag',
  做任务赚积分: '#page-points-earn-tasks',
  积分商城: '#page-points-mall',
  商品详情浮层: '#page-points-product-detail-overlay',
  兑换成功浮层: '#page-points-exchange-success-overlay',
  机票首页: '#page-flight-home',
  '机票首页-因公': '#page-flight-home',
  航班列表页: '#page-flight-list',
  航班报价页: '#page-flight-quote',
  机票填单页: '#page-flight-form',
  机票订单详情页: '#page-flight-order-detail',
  机票下单成功页: '#page-flight-booking-success',
}

const componentHrefMap = {
  状态栏: '#common-iphone-bar',
  底部指示条: '#common-iphone-footer',
  页面底部导航: '#common-page-bottom-nav',
  导航栏: '#common-navbar',
  价格: '#common-price-display',
  标签: '#common-tag',
  徽标: '#common-badge',
  分割线: '#common-divider',
  底部水印: '#common-bottom-watermark',
  箭头动作: '#common-chevron-action',
  按钮: '#common-button',
  开关: '#common-switch',
  多选: '#common-multi-select',
  条款栏: '#business-hotel-components',
  小福包底部标签栏: '#common-page-bottom-nav',
}

const businessComponentTargetMap = {
  冒泡页底部呼叫区: '支付/呼叫胶囊按钮',
  待支付页支付确认: '支付/呼叫胶囊按钮',
  冒泡页安全中心入口: '安全中心/定位悬浮操作',
  等待接驾页悬浮操作: '安全中心/定位悬浮操作',
  送驾页悬浮操作: '安全中心/定位悬浮操作',
  待支付页安全中心: '安全中心/定位悬浮操作',
  等待接驾页面板: '客服卡片',
  送驾页面板: '客服卡片',
  司机信息卡基础结构: '等待接驾页 · 司机卡片',
  司机操作按钮组: '等待接驾页 · 司机卡片',
  用车行程地图舞台: '等待接驾页 · 地图和距离标注',
  用车路线覆盖层: '等待接驾页 · 地图和距离标注',
  距离标记: '等待接驾页 · 地图和距离标注',
  支付地图舞台: '待支付页 · 地图和路线',
  支付路线覆盖层: '待支付页 · 地图和路线',
  车型价格项: '冒泡页 · 车型选择面板',
  车型选择面板: '冒泡页 · 车型选择面板',
  追加更快车型卡: '等待应答页 · 追加更快车型',
  '积分商城 · 限时秒杀模块': '限时秒杀/特惠专区',
  '积分商城 · 商品兑换区': '小福包 · 积分兑好礼',
  小福包阶梯任务进度: '做任务赚积分',
  限时秒杀: '限时秒杀/特惠专区',
  特惠专区: '限时秒杀/特惠专区',
  积分兑好礼: '小福包 · 积分兑好礼',
  做任务赚积分: '做任务赚积分',
  省立返卡: '小福包 · 省立返卡',
  企业专属权益: '小福包 · 企业专属权益',
  商旅权益: '小福包 · 商旅权益',
  品牌会员卡: '小福包 · 品牌会员卡',
  客服权益: '小福包 · 客服权益',
  小福包底部水印: '小福包 · 底部水印',
}

function getBusinessComponentHref(label) {
  const targetLabel = businessComponentTargetMap[label] || label
  const focusId = getBusinessComponentAnchorId(targetLabel)

  if (/酒店|房型|省心住|预订|入住|发票|权益|早餐|水印/.test(label)) {
    return `#business-hotel-components?focus=${focusId}`
  }

  if (/机票|航班|报价|乘机|舱等|省心飞/.test(label)) {
    return `#business-flight-components?focus=${focusId}`
  }

  if (/用车|车型|司机|客服|安全中心|定位|呼叫|支付|地图|路线|接驾|送驾|申请/.test(label)) {
    return `#business-car-components?focus=${focusId}`
  }

  if (/积分|权益|小福包|秒杀|好礼|任务|会员|客服/.test(label)) {
    return `#business-points-components?focus=${focusId}`
  }

  return null
}

function handleUsageLinkClick(event, href) {
  if (typeof window === 'undefined' || window.location.hash !== href) {
    return
  }

  event.preventDefault()
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

function getUsageHref(label, type) {
  if (type === 'page') {
    return pageHrefMap[label] || null
  }

  return componentHrefMap[label] || getBusinessComponentHref(label)
}

export function UsageLinkList({ items = [], type }) {
  const visibleItems = items.filter(Boolean)

  return (
    <>
      {visibleItems.map((item, index) => {
        const href = getUsageHref(item, type)
        const content = href ? (
          <a
            className="usage-link"
            href={href}
            onClick={(event) => handleUsageLinkClick(event, href)}
          >
            {item}
          </a>
        ) : (
          <span>{item}</span>
        )

        return (
          <Fragment key={`${type}-${item}-${index}`}>
            {index > 0 ? <span className="usage-link__separator">、</span> : null}
            {content}
          </Fragment>
        )
      })}
    </>
  )
}
