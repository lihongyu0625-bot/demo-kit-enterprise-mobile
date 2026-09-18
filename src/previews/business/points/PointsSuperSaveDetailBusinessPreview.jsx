import {
  PointsSuperSaveBenefitTabs,
  PointsSuperSaveCategoryTabItem,
  PointsSuperSaveCategoryTabs,
  PointsSuperSaveIntroCard,
  PointsSuperSaveRuleList,
} from '../../../components/points-super-save-detail/PointsSuperSaveDetailComponents'
import mockData from '../../../mock-data/points-super-save-detail.mock.json'

function ComponentSample({ children }) {
  return <div className="points-super-save-detail-business-sample">{children}</div>
}

/* MasterGo 组件集 127:38218 的 6 个变体：品类（省心行/省心住/省心飞）× 选中（on/off）。
   权益数为组件内容属性，默认 6，可变。 */
const CATEGORY_TAB_VARIANTS = [
  { category: 'travel', label: '省心行' },
  { category: 'hotel', label: '省心住' },
  { category: 'flight', label: '省心飞' },
]

function SuperSaveCategoryTabItemStatesPreview() {
  return (
    <div className="points-super-save-detail-business-sample">
      <div className="points-super-save-detail-business-stack points-super-save-detail-business-stack--tab-item">
        {CATEGORY_TAB_VARIANTS.map(({ category, label }) => (
          <div className="points-super-save-detail-business-tab-item-row" key={category}>
            <span className="points-super-save-detail-business-tab-item-row__label">{label}</span>
            <PointsSuperSaveCategoryTabItem category={category} active={false} count={6} />
            <PointsSuperSaveCategoryTabItem category={category} active count={6} />
          </div>
        ))}
      </div>
    </div>
  )
}

const showcaseList = [
  {
    name: '超级省 · 品类tab项',
    description: 'MasterGo 组件集 127:38218：品类（省心行/省心住/省心飞）× 选中状态六个变体，权益数默认 6。',
    render: <SuperSaveCategoryTabItemStatesPreview />,
  },
  {
    name: '超级省 · 品类导航',
    description: '展示省心行、住、飞三类权益入口及数量徽标。',
    render: (
      <ComponentSample>
        <PointsSuperSaveCategoryTabs items={mockData.categoryTabs} />
      </ComponentSample>
    ),
  },
  {
    name: '超级省 · 权益导航',
    description: '展示贵必赔、降价退、省立返等权益切换标签。',
    render: (
      <ComponentSample>
        <PointsSuperSaveBenefitTabs items={mockData.benefitTabs} />
      </ComponentSample>
    ),
  },
  {
    name: '超级省 · 贵必赔说明卡',
    description: '展示四种说明卡状态：价格对比、申请流程、理赔服务和券查看路径。',
    render: (
      <ComponentSample>
        <div className="points-super-save-detail-business-stack">
          {mockData.introSections.map((section) => (
            <PointsSuperSaveIntroCard key={section.number} section={section} />
          ))}
        </div>
      </ComponentSample>
    ),
  },
  {
    name: '超级省 · 详细规则',
    description: '展示长页面底部的十条规则文本模块。',
    render: (
      <ComponentSample>
        <PointsSuperSaveRuleList rules={mockData.rules} />
      </ComponentSample>
    ),
  },
]

function PointsSuperSaveDetailBusinessPreview() {
  return (
    <section className="catalog-preview">
      {showcaseList.map((item) => (
        <article className="catalog-block" key={item.name}>
          <div className="catalog-block__header">
            <div>
              <p className="catalog-block__title">{item.name}</p>
              <p className="catalog-block__description">{item.description}</p>
            </div>
          </div>
          <div className="catalog-block__surface">
            <div className="catalog-device-frame">{item.render}</div>
          </div>
        </article>
      ))}
    </section>
  )
}

PointsSuperSaveDetailBusinessPreview.showcaseList = showcaseList

export default PointsSuperSaveDetailBusinessPreview
