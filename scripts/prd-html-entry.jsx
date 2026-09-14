/* eslint-disable */
// PRD R-QYJ-731337 HTML 生成入口（SSR）
// 用法：esbuild 打包后 node 执行，输出 public/prd-html/index.html
// 每个页面 = 云端真实组件（mock 驱动）+ PointsExchangeModule 新增模块，静态展开保留原类名与真实资源路径。
import { renderToStaticMarkup } from 'react-dom/server'

import '../src/index.css'
import '../src/App.css'

// 页面一：机票下单成功页（flight-booking-success，复用 hotel-booking-success 组件）
import flightBookingData from '../src/mock-data/flight-booking-success.mock.json'
import flightBookingSpec from '../src/page-specs/flight-booking-success.json'
import {
  OrderSuccessFooter,
  OrderSuccessOrderCard,
  OrderSuccessPageBackground,
  OrderSuccessPageChrome,
  OrderSuccessStatus,
  OrderSuccessTips,
} from '../src/components/hotel-booking-success/HotelBookingSuccessComponents'

// 页面二：机票订单详情页（flight-order-detail）
import flightOrderDetailData from '../src/mock-data/flight-order-detail.mock.json'
import {
  FlightOrderDetailBackground,
  FlightOrderDetailInfoCard,
  FlightOrderDetailPackageCard,
  FlightOrderDetailPaymentCard,
  FlightOrderDetailStatusPanel,
  FlightOrderDetailTopNav,
  FlightOrderDetailTravelService,
} from '../src/components/flight-order-detail/FlightOrderDetailComponents'
import { IPhoneFooter } from '../src/components/common/IPhoneFooter'

// 页面三：酒店预订成功页（hotel-booking-success）
import hotelBookingData from '../src/mock-data/hotel-booking-success.mock.json'
import {
  HotelBookingSuccessAirportTransferCard,
  HotelBookingSuccessFlightBenefitCard,
  HotelBookingSuccessFooter,
  HotelBookingSuccessOrderCard,
  HotelBookingSuccessPageBackground,
  HotelBookingSuccessPageChrome,
  HotelBookingSuccessStatus,
} from '../src/components/hotel-booking-success/HotelBookingSuccessComponents'

// 页面四：酒店订单详情页（hotel-order-detail）
import hotelOrderDetailData from '../src/mock-data/hotel-order-detail.mock.json'
import hotelOrderDetailSpec from '../src/page-specs/hotel-order-detail.json'
import {
  HotelOrderDetailBenefitsCard,
  HotelOrderDetailBookingInfoCard,
  HotelOrderDetailFooter,
  HotelOrderDetailHotelCard,
  HotelOrderDetailInvoiceCard,
  HotelOrderDetailNavBar,
  HotelOrderDetailPaymentCard,
  HotelOrderDetailStayInfoCard,
  HotelOrderDetailStatusPanel,
} from '../src/components/hotel-order-detail/HotelOrderDetailComponents'

// 页面五：积分商城（points-mall）
import pointsMallData from '../src/mock-data/points-mall.mock.json'
import {
  PointsMallHero,
  PointsMallContent,
} from '../src/components/points-mall/PointsMallComponents'

// 新增模块：积分兑换推荐
import { PointsExchangeModule } from '../src/components/points-exchange-module/PointsExchangeModule'

function FlightBookingSuccessModified() {
  return (
    <section aria-label={flightBookingSpec.pageTitle} className="hotel-booking-success-preview">
      <div className="hotel-booking-success-shell">
        <OrderSuccessPageBackground />
        <OrderSuccessPageChrome />
        <div className="hotel-booking-success-main">
          <div className="hotel-booking-success-group hotel-booking-success-group--flight-primary">
            <OrderSuccessStatus status={flightBookingData.status} />
            <OrderSuccessOrderCard order={flightBookingData.order} variant="flight" />
          </div>
          <PointsExchangeModule scene="flight" className="hotel-booking-success-group" />
          <OrderSuccessTips tips={flightBookingData.tips} />
        </div>
        <OrderSuccessFooter />
      </div>
    </section>
  )
}

function FlightOrderDetailModified() {
  return (
    <div className="flight-order-detail-preview">
      <div className="flight-order-detail-shell">
        <FlightOrderDetailBackground />
        <FlightOrderDetailTopNav nav={flightOrderDetailData.nav} />
        <main className="flight-order-detail-main">
          <FlightOrderDetailStatusPanel status={flightOrderDetailData.status} />
          <FlightOrderDetailPaymentCard payment={flightOrderDetailData.payment} />
          <PointsExchangeModule scene="flight" />
          <FlightOrderDetailInfoCard card={flightOrderDetailData.tripInfo} />
          <FlightOrderDetailTravelService service={flightOrderDetailData.travelService} />
          <FlightOrderDetailPackageCard packageInfo={flightOrderDetailData.packageInfo} />
          <FlightOrderDetailInfoCard card={flightOrderDetailData.reimbursementInfo} />
          <FlightOrderDetailInfoCard card={flightOrderDetailData.approvalInfo} />
        </main>
        <IPhoneFooter className="flight-order-detail-footer" transparent />
      </div>
    </div>
  )
}

function HotelBookingSuccessModified() {
  return (
    <section aria-label="酒店预订成功页" className="hotel-booking-success-preview">
      <div className="hotel-booking-success-shell">
        <HotelBookingSuccessPageBackground />
        <HotelBookingSuccessPageChrome />
        <div className="hotel-booking-success-main">
          <div className="hotel-booking-success-group">
            <HotelBookingSuccessStatus status={hotelBookingData.status} />
            <HotelBookingSuccessOrderCard order={hotelBookingData.order} />
          </div>
          <PointsExchangeModule scene="hotel" className="hotel-booking-success-group" />
          <div className="hotel-booking-success-group">
            <HotelBookingSuccessFlightBenefitCard flightBenefit={hotelBookingData.flightBenefit} />
            <HotelBookingSuccessAirportTransferCard airportTransfer={hotelBookingData.airportTransfer} />
          </div>
        </div>
        <HotelBookingSuccessFooter />
      </div>
    </section>
  )
}

function HotelOrderDetailModified() {
  const sectionMap = {
    status: <HotelOrderDetailStatusPanel status={hotelOrderDetailData.status} />,
    payment: <HotelOrderDetailPaymentCard payment={hotelOrderDetailData.payment} />,
    'hotel-info': <HotelOrderDetailHotelCard hotel={hotelOrderDetailData.hotel} />,
    'booking-info': <HotelOrderDetailBookingInfoCard bookingInfo={hotelOrderDetailData.bookingInfo} />,
    'stay-info': <HotelOrderDetailStayInfoCard stayInfo={hotelOrderDetailData.stayInfo} />,
    invoice: <HotelOrderDetailInvoiceCard invoice={hotelOrderDetailData.invoice} />,
    benefits: <HotelOrderDetailBenefitsCard benefits={hotelOrderDetailData.benefits} />,
  }

  return (
    <section aria-label="酒店订单详情页" className="hotel-order-detail-preview">
      <div className="hotel-order-detail-shell">
        <HotelOrderDetailNavBar nav={hotelOrderDetailData.nav} />
        <div className="hotel-order-detail-main">
          {hotelOrderDetailSpec.sections
            .filter((key) => !['nav', 'footer'].includes(key))
            .map((key) => (
              <div key={key}>
                {sectionMap[key]}
                {key === 'benefits' ? <PointsExchangeModule scene="hotel" /> : null}
              </div>
            ))}
        </div>
        <HotelOrderDetailFooter />
      </div>
    </section>
  )
}

function PointsMallModified() {
  return (
    <div className="points-mall-preview">
      <div className="points-mall-shell">
        <PointsMallHero points={pointsMallData.points} />
        <PointsMallContent filters={pointsMallData.filters} />
        <IPhoneFooter className="points-mall-footer" transparent />
      </div>
    </div>
  )
}

const pages = [
  {
    id: 'flight-booking-success',
    title: '1. 机票下单成功页面',
    taskType: 'modify-existing-page',
    change: 'order-card 积分透传保留（+30积分），其后新增积分兑换推荐模块（可用积分 376 · 机票场景商品 ×2）',
    el: <FlightBookingSuccessModified />,
  },
  {
    id: 'flight-order-detail',
    title: '2. 机票下单成功详情页',
    taskType: 'modify-existing-page（纯新增）',
    change: '支付卡之后新增积分兑换推荐模块（组件库该页原无积分区块，按确认的 Q1 方案纯新增）',
    el: <FlightOrderDetailModified />,
  },
  {
    id: 'hotel-booking-success',
    title: '3. 酒店已预订页面',
    taskType: 'modify-existing-page',
    change: 'order-card 积分区（「返」徽标）保留，其后新增积分兑换推荐模块（酒店场景商品 ×2）',
    el: <HotelBookingSuccessModified />,
  },
  {
    id: 'hotel-order-detail',
    title: '4. 酒店下单成功详情页',
    taskType: 'modify-existing-page',
    change: 'benefits 企业版积分权益区保留，其后新增积分兑换推荐模块',
    el: <HotelOrderDetailModified />,
  },
  {
    id: 'points-mall',
    title: '5. 积分商城（前台）',
    taskType: 'modify-existing-page',
    change: '商品卡新增划线价与商品描述字段——字段样式见画布 1-4 中推荐卡（326积分 + ¥78 划线价 + 描述文案）；商城页原样保留基线',
    el: <PointsMallModified />,
  },
]

const canvasCss = `
* { margin: 0; padding: 0; }
body {
  background: #eef1f6;
  font-family: -apple-system, 'PingFang SC', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.prd-report { max-width: 1180px; margin: 0 auto; padding: 32px 24px 64px; }
.prd-report__header { margin-bottom: 24px; }
.prd-report__title { font-size: 22px; font-weight: 700; color: #1a2233; }
.prd-report__meta { margin-top: 8px; font-size: 13px; color: #5a6472; line-height: 1.7; }
.prd-report__grid { display: grid; grid-template-columns: repeat(2, 420px); gap: 28px; justify-content: center; }
.prd-page__head { margin-bottom: 12px; }
.prd-page__title { font-size: 15px; font-weight: 700; color: #1a2233; }
.prd-page__tag { display: inline-block; margin-left: 8px; padding: 2px 8px; border-radius: 4px; background: #e8f1ff; color: #185fa5; font-size: 11px; font-weight: 500; }
.prd-page__change { margin-top: 6px; font-size: 12px; color: #5a6472; line-height: 1.6; }
.prd-page__change b { color: #ff7a45; font-weight: 600; }
.prd-page__canvas {
  width: 390px; overflow: hidden;
  border-radius: 24px; background: #f5f6fa;
  box-shadow: 0 10px 30px rgba(20, 54, 92, 0.12);
}
.prd-page__canvas > * { width: 375px; margin: 0 auto; }
.prd-page__canvas .points-mall-preview { width: 390px; }
.prd-page__canvas .points-mall-shell { width: 375px; margin: 0 auto; }
.prd-page__canvas .flight-order-detail-preview { width: 375px; }
@media (max-width: 900px) { .prd-report__grid { grid-template-columns: 420px; } }
`

export function renderPagesHtml() {
  return pages.map((p) => ({
    id: p.id,
    title: p.title,
    taskType: p.taskType,
    change: p.change,
    markup: renderToStaticMarkup(p.el),
  }))
}
