import BusinessComponentCatalogPreview from '../BusinessComponentCatalogPreview'
import {
  MyOrdersCarCard,
  MyOrdersCardFooter,
  MyOrdersCardTitle,
  MyOrdersChips,
  MyOrdersHotelCard,
  MyOrdersNoticeBar,
  MyOrdersSearchBar,
  MyOrdersSegment,
  MyOrdersTabs,
  MyOrdersTag,
  MyOrdersTransitCard,
} from '../../../components/my-orders/MyOrdersComponents'
import mockData from '../../../mock-data/my-orders.mock.json'

/* 我的订单业务组件陈列：与页面共用同一套组件与 mock，目录里核对拆分后的每个可复用单元 */

const allCards = mockData.variants.all.cards
const carCards = mockData.variants.car.cards
const hotelCards = mockData.variants.hotel.cards
const flightCards = mockData.variants.flight.cards
const trainCards = mockData.variants.train.cards

function Sample({ children }) {
  return <div className="my-orders-business-sample">{children}</div>
}

function StateRow({ label, children }) {
  return (
    <div className="my-orders-business-state">
      <span className="my-orders-business-state__label">{label}</span>
      {children}
    </div>
  )
}

/* 卡片子件（标题/操作行/公告栏/行程段）陈列在白底圆角容器里，模拟卡内环境 */
function CardFragment({ children }) {
  return <div className="my-orders-business-fragment">{children}</div>
}

const myOrdersUsage = {
  pages: ['我的订单'],
}

const sections = [
  {
    id: 'my-orders-header',
    title: '头部筛选类',
    description: '承接我的订单页的搜索栏、主选项卡和筛选标签行，吸顶头部里的三个可复用单元。',
    items: [
      {
        name: '我的订单 · 搜索栏',
        anchorLabel: '我的订单 · 搜索栏',
        displayName: '搜索栏',
        description: '搜索 pill（icon + placeholder）+ 筛选入口（icon + 文案），白底 54 高。',
        render: (
          <Sample>
            <MyOrdersSearchBar
              filterLabel={mockData.filterLabel}
              placeholder={mockData.searchPlaceholder}
            />
          </Sample>
        ),
        usage: myOrdersUsage,
      },
      {
        name: '我的订单 · 主选项卡',
        anchorLabel: '我的订单 · 主选项卡',
        displayName: '主选项卡',
        description: '全部/用车/酒店/机票/火车票 5 项等宽选项卡，激活项蓝色 + 下划短条。',
        render: (
          <Sample>
            <MyOrdersTabs activeTab="all" tabs={mockData.tabs} />
          </Sample>
        ),
        usage: myOrdersUsage,
      },
      {
        name: '我的订单 · 筛选标签行',
        anchorLabel: '我的订单 · 筛选标签行',
        displayName: '筛选标签行',
        description: '全部/待出行/待支付 62×26 筛选标签，选中态蓝描边 + 右下角对勾徽标。',
        render: (
          <Sample>
            <div className="my-orders-business-inset">
              <MyOrdersChips chips={mockData.chips} />
            </div>
          </Sample>
        ),
        usage: myOrdersUsage,
      },
    ],
  },
  {
    id: 'my-orders-car-card',
    title: '用车订单卡类',
    description: '承接用车订单的三种形态：等待接驾、已完成和已取消置灰。',
    items: [
      {
        name: '我的订单 · 用车等待接驾卡',
        anchorLabel: '我的订单 · 用车等待接驾卡',
        displayName: '用车卡 · 等待接驾',
        description: '起终点行 + 车辆信息条（车型/颜色/车牌）+ 联系司机按钮。',
        render: (
          <Sample>
            <MyOrdersCarCard card={carCards[0]} />
          </Sample>
        ),
        usage: myOrdersUsage,
      },
      {
        name: '我的订单 · 用车已完成卡',
        anchorLabel: '我的订单 · 用车已完成卡',
        displayName: '用车卡 · 已完成',
        description: '起终点行 + 一键返程/再来一单双按钮，企业支付展示支付方式标签。',
        render: (
          <Sample>
            <MyOrdersCarCard card={carCards[1]} />
          </Sample>
        ),
        usage: myOrdersUsage,
      },
      {
        name: '我的订单 · 用车已取消卡',
        anchorLabel: '我的订单 · 用车已取消卡',
        displayName: '用车卡 · 已取消置灰',
        description: '置灰态：文案黑24，操作按钮不置灰，可与正常卡混排对比。',
        render: (
          <Sample>
            <MyOrdersCarCard card={carCards[3]} />
          </Sample>
        ),
        usage: myOrdersUsage,
      },
    ],
  },
  {
    id: 'my-orders-transit-card',
    title: '酒旅机票订单卡类',
    description: '承接酒店、机票、火车票订单卡：含航变公告、双段中转、四段隐藏行和退票置灰。',
    items: [
      {
        name: '我的订单 · 酒店订单卡',
        anchorLabel: '我的订单 · 酒店订单卡',
        displayName: '酒店订单卡',
        description: '店名 + 超标标签 + 价格 + 日期 + 房型/入住人 + 再次预订按钮。',
        render: (
          <Sample>
            <MyOrdersHotelCard card={hotelCards[1]} />
          </Sample>
        ),
        usage: myOrdersUsage,
      },
      {
        name: '我的订单 · 机票待支付卡',
        anchorLabel: '我的订单 · 机票待支付卡',
        displayName: '机票卡 · 待支付',
        description: '航变公告栏 + 双段中转（航变/超标标签）+ 去支付主按钮。',
        render: (
          <Sample>
            <MyOrdersTransitCard card={flightCards[1]} />
          </Sample>
        ),
        usage: myOrdersUsage,
      },
      {
        name: '我的订单 · 机票四段卡',
        anchorLabel: '我的订单 · 机票四段卡',
        displayName: '机票卡 · 四段隐藏行',
        description: '已出票四段行程，底部「还有 N 条航班信息被隐藏」提示行。',
        render: (
          <Sample>
            <MyOrdersTransitCard card={flightCards[3]} />
          </Sample>
        ),
        usage: myOrdersUsage,
      },
      {
        name: '我的订单 · 火车票卡',
        anchorLabel: '我的订单 · 火车票卡',
        displayName: '火车票卡',
        description: '左：出票中三段（超标/改签标签，无操作按钮）；右：已退票置灰 + 再次预订。',
        render: (
          <Sample>
            <StateRow label="出票中 · 三段">
              <MyOrdersTransitCard card={trainCards[1]} />
            </StateRow>
            <StateRow label="已退票 · 置灰">
              <MyOrdersTransitCard card={trainCards[2]} />
            </StateRow>
          </Sample>
        ),
        usage: myOrdersUsage,
      },
    ],
  },
  {
    id: 'my-orders-fragments',
    title: '订单卡子件类',
    description: '订单卡内部的可复用单元：卡片标题、卡底操作行、航变公告栏、行程段和蓝描边标签。',
    items: [
      {
        name: '我的订单 · 卡片标题',
        anchorLabel: '我的订单 · 卡片标题',
        displayName: '卡片标题',
        description: '品类 icon + 支付方式/代订分隔行 + 右侧状态，用车与酒店两种取值。',
        render: (
          <Sample>
            <StateRow label="用车 · 等待接驾">
              <CardFragment>
                <MyOrdersCardTitle card={allCards[0]} />
              </CardFragment>
            </StateRow>
            <StateRow label="酒店 · 因公代订">
              <CardFragment>
                <MyOrdersCardTitle card={hotelCards[1]} />
              </CardFragment>
            </StateRow>
          </Sample>
        ),
        usage: myOrdersUsage,
      },
      {
        name: '我的订单 · 卡底操作行',
        anchorLabel: '我的订单 · 卡底操作行',
        displayName: '卡底操作行',
        description: '预订时间 flex-1 + 描边按钮组，去支付为蓝色主操作，可无 bookTime 纯按钮排布。',
        render: (
          <Sample>
            <StateRow label="双按钮 + 预订时间">
              <CardFragment>
                <MyOrdersCardFooter
                  actions={['一键返程', '再来一单']}
                  bookTime="2023-2-01 12:34 预订"
                />
              </CardFragment>
            </StateRow>
            <StateRow label="去支付 · 主操作">
              <CardFragment>
                <MyOrdersCardFooter actions={['去支付']} primaryAction />
              </CardFragment>
            </StateRow>
          </Sample>
        ),
        usage: myOrdersUsage,
      },
      {
        name: '我的订单 · 航变公告栏',
        anchorLabel: '我的订单 · 航变公告栏',
        displayName: '航变公告栏',
        description: '浅橙底提示条（info icon + 文案），置于机票卡顶部。',
        render: (
          <Sample>
            <div className="my-orders-business-inset">
              <MyOrdersNoticeBar text={flightCards[1].notice} />
            </div>
          </Sample>
        ),
        usage: myOrdersUsage,
      },
      {
        name: '我的订单 · 行程段',
        anchorLabel: '我的订单 · 行程段',
        displayName: '行程段',
        description: '城市 + 右箭头 + 中转 + 标签行、出发时间行、航班/车次 ‖ 乘客行。',
        render: (
          <Sample>
            <CardFragment>
              <MyOrdersSegment segment={flightCards[1].segments[0]} />
            </CardFragment>
          </Sample>
        ),
        usage: myOrdersUsage,
      },
      {
        name: '我的订单 · 蓝描边标签',
        anchorLabel: '我的订单 · 蓝描边标签',
        displayName: '蓝描边标签',
        description: '升舱/超标/航变/改签统一 0.5px 蓝描边小标签，随卡置灰降级。',
        render: (
          <Sample>
            <div className="my-orders-business-inset my-orders-business-tags">
              <MyOrdersTag label="升舱" />
              <MyOrdersTag label="超标" />
              <MyOrdersTag label="航变" />
              <MyOrdersTag label="改签" />
            </div>
          </Sample>
        ),
        usage: myOrdersUsage,
      },
    ],
  },
]

function MyOrdersBusinessPreview() {
  return <BusinessComponentCatalogPreview sections={sections} />
}

MyOrdersBusinessPreview.sections = sections

export default MyOrdersBusinessPreview
