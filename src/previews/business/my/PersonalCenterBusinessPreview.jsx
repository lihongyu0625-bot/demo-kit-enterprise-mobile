import BusinessComponentCatalogPreview from '../BusinessComponentCatalogPreview'
import {
  PersonalCenterEntriesCard,
  PersonalCenterHeaderInfo,
  PersonalCenterOrdersCard,
  PersonalCenterPointsCard,
  PersonalCenterRightsCard,
} from '../../../components/personal-center/PersonalCenterComponents'
import mockData from '../../../mock-data/personal-center.mock.json'

/* 个人中心业务组件陈列：与页面共用同一套组件与 mock，目录里核对拆分后的每个可复用单元 */

const execVariant = mockData.variants.exec
const noPointsVariant = mockData.variants.noPoints
const twoCategoriesVariant = mockData.variants.twoCategories
const singleCategoryVariant = mockData.variants.singleCategory

function Sample({ children }) {
  return <div className="personal-center-business-sample">{children}</div>
}

function Hero({ children }) {
  return <div className="personal-center-business-hero">{children}</div>
}

function StateRow({ label, children }) {
  return (
    <div className="personal-center-business-state">
      <span className="personal-center-business-state__label">{label}</span>
      {children}
    </div>
  )
}

const personalCenterUsage = {
  pages: ['个人中心'],
}

const sections = [
  {
    id: 'personal-center-header',
    title: '头部信息类',
    description: '承接个人中心头图上的个人信息行：员工限额态与高管额度态两种取值。',
    items: [
      {
        name: '个人中心 · 头部个人信息',
        anchorLabel: '个人中心 · 头部个人信息',
        displayName: '头部个人信息',
        description: '姓名 + 企业切换 + 客服入口 + 限额行，浅蓝头图上深色文字。',
        render: (
          <Sample>
            <StateRow label="员工 · 个人限额剩余">
              <Hero>
                <PersonalCenterHeaderInfo
                  companyName={mockData.companyName}
                  quota={mockData.quota}
                  userName={mockData.userName}
                />
              </Hero>
            </StateRow>
            <StateRow label="高管 · 限额数">
              <Hero>
                <PersonalCenterHeaderInfo
                  companyName={mockData.companyName}
                  quota={execVariant.quota}
                  userName={mockData.userName}
                />
              </Hero>
            </StateRow>
            <StateRow label="无额度限制">
              <Hero>
                <PersonalCenterHeaderInfo
                  companyName={mockData.companyName}
                  quota={noPointsVariant.quota}
                  userName={mockData.userName}
                />
              </Hero>
            </StateRow>
          </Sample>
        ),
        usage: personalCenterUsage,
      },
    ],
  },
  {
    id: 'personal-center-rights',
    title: '权益卡类',
    description: '承接企业权益卡：员工蓝与高管深棕两套底图与权益项。',
    items: [
      {
        name: '个人中心 · 权益卡',
        anchorLabel: '个人中心 · 权益卡',
        displayName: '权益卡',
        description: '权益数 + 权益项 icon 行，员工/高管 role 切换两套底图与文案色。',
        render: (
          <Sample>
            <StateRow label="员工">
              <PersonalCenterRightsCard count={mockData.rightsCount} role="staff" />
            </StateRow>
            <StateRow label="高管">
              <PersonalCenterRightsCard count={execVariant.rightsCount} role="exec" />
            </StateRow>
          </Sample>
        ),
        usage: personalCenterUsage,
      },
    ],
  },
  {
    id: 'personal-center-cards',
    title: '订单/积分/入口卡类',
    description: '承接我的订单品类卡、积分&优惠券卡和常用入口区卡。',
    items: [
      {
        name: '个人中心 · 我的订单卡',
        anchorLabel: '个人中心 · 我的订单卡',
        displayName: '我的订单卡',
        description: '四品类/两品类/单品类三种入口数量形态。',
        render: (
          <Sample>
            <StateRow label="四品类">
              <PersonalCenterOrdersCard categories={mockData.orderCategories} />
            </StateRow>
            <StateRow label="两品类">
              <PersonalCenterOrdersCard categories={twoCategoriesVariant.orderCategories} />
            </StateRow>
            <StateRow label="单品类">
              <PersonalCenterOrdersCard categories={singleCategoryVariant.orderCategories} />
            </StateRow>
          </Sample>
        ),
        usage: personalCenterUsage,
      },
      {
        name: '个人中心 · 积分&优惠券卡',
        anchorLabel: '个人中心 · 积分&优惠券卡',
        displayName: '积分&优惠券卡',
        description: '双指标（积分 + 优惠券）与单指标（仅优惠券，无积分场景）两种形态。',
        render: (
          <Sample>
            <StateRow label="双指标">
              <PersonalCenterPointsCard points={mockData.points} />
            </StateRow>
            <StateRow label="单指标 · 无积分">
              <PersonalCenterPointsCard points={noPointsVariant.points} />
            </StateRow>
          </Sample>
        ),
        usage: personalCenterUsage,
      },
      {
        name: '个人中心 · 入口区卡',
        anchorLabel: '个人中心 · 入口区卡',
        displayName: '入口区卡',
        description: '常用功能 4 列网格入口（申请/审批/异常处理/发票等），按 mock 数量自适应换行。',
        render: (
          <Sample>
            <PersonalCenterEntriesCard entries={mockData.entries} />
          </Sample>
        ),
        usage: personalCenterUsage,
      },
    ],
  },
]

function PersonalCenterBusinessPreview() {
  return <BusinessComponentCatalogPreview sections={sections} />
}

PersonalCenterBusinessPreview.sections = sections

export default PersonalCenterBusinessPreview
