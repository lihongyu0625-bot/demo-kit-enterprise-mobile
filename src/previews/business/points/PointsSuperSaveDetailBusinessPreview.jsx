import {
  PointsSuperSaveBenefitTabs,
  PointsSuperSaveCategoryTabs,
  PointsSuperSaveIntroCard,
  PointsSuperSaveRuleList,
} from '../../../components/points-super-save-detail/PointsSuperSaveDetailComponents'
import mockData from '../../../mock-data/points-super-save-detail.mock.json'

function ComponentSample({ children }) {
  return <div className="points-super-save-detail-business-sample">{children}</div>
}

const showcaseList = [
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
