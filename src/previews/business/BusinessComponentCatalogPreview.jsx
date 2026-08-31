import { UsageLinkList } from '../UsageLinks'
import { getBusinessComponentAnchorId } from '../usageLinkTargets'

function BusinessComponentCatalogPreview({ sections }) {
  return (
    <section className="catalog-preview">
      <div className="business-catalog">
        {sections.map((section) => (
          <section
            className="business-catalog__section"
            key={section.id}
          >
            <div className="business-catalog__section-header">
              <div>
                <p className="business-catalog__eyebrow">{section.eyebrow || '业务组件'}</p>
                <h3 className="business-catalog__title">{section.title || section.id}</h3>
              </div>
              {section.description ? <p className="business-catalog__summary">{section.description}</p> : null}
            </div>

            <div className="business-catalog__grid">
              {section.items.map((item) => (
                <article
                  className="catalog-block business-catalog__block"
                  id={getBusinessComponentAnchorId(item.anchorLabel || item.name)}
                  key={`${section.id}-${item.name}`}
                >
                  <div className="catalog-block__header">
                    <div>
                      <p className="catalog-block__title">{item.displayName || item.name}</p>
                      <p className="catalog-block__description">{item.description}</p>
                    </div>
                  </div>
                  <div className="catalog-block__surface">
                    <div className="catalog-device-frame">{item.render}</div>
                  </div>
                  {item.usage ? <BusinessUsageNote usage={item.usage} /> : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

function BusinessUsageNote({ usage }) {
  const pages = usage.pages || []
  const components = usage.components || []

  return (
    <div className="business-catalog__usage">
      {pages.length ? (
        <div className="business-catalog__usage-row">
          <span className="business-catalog__usage-label">使用页面</span>
          <p className="business-catalog__usage-text">
            <UsageLinkList items={pages} type="page" />
          </p>
        </div>
      ) : null}
      {components.length ? (
        <div className="business-catalog__usage-row">
          <span className="business-catalog__usage-label">使用组件</span>
          <p className="business-catalog__usage-text">
            <UsageLinkList items={components} type="component" />
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default BusinessComponentCatalogPreview
