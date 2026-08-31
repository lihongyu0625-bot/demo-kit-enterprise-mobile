import { Fragment } from 'react'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function BusinessGuaranteeCard({
  classPrefix,
  detailIcon,
  detailLabel,
  features,
  footerHighlights,
  logo,
  stamp,
  title,
  watermark,
  itemName = 'feature',
  listName = 'features',
  titleWrapName = 'title-group',
}) {
  return (
    <section className={`${classPrefix}-guarantee`}>
      {watermark ? watermark : null}

      <div className={`${classPrefix}-guarantee__header`}>
        <div className={`${classPrefix}-guarantee__${titleWrapName}`}>
          {logo}
          <p className={`${classPrefix}-guarantee__title`}>{title}</p>
        </div>

        <button
          className={`${classPrefix}-guarantee__detail`}
          type="button"
        >
          <span>{detailLabel}</span>
          {detailIcon}
        </button>
      </div>

      <div className={`${classPrefix}-guarantee__${listName}`}>
        {features.map((item, index) => (
          <Fragment key={item.title}>
            <div
              className={cx(
                `${classPrefix}-guarantee__${itemName}`,
                index === features.length - 1 && `${classPrefix}-guarantee__${itemName}--align-end`,
              )}
            >
              <div className={`${classPrefix}-guarantee__${itemName}-title${itemName === 'feature' ? '-row' : ''}`}>
                {item.icon}
                <span className={itemName === 'feature' ? `${classPrefix}-guarantee__feature-title` : undefined}>
                  {item.title}
                </span>
              </div>
              <p className={itemName === 'feature' ? `${classPrefix}-guarantee__feature-copy` : undefined}>
                {item.description}
              </p>
            </div>

            {index < features.length - 1 ? (
              <span
                aria-hidden="true"
                className={`${classPrefix}-guarantee__${itemName}-divider ${classPrefix}-divider ${classPrefix}-divider--vertical`}
              />
            ) : null}
          </Fragment>
        ))}
      </div>

      {footerHighlights ? (
        <div className={`${classPrefix}-guarantee__footer`}>
          {footerHighlights.map((item) => (
            <div
              className={`${classPrefix}-guarantee__footer-item`}
              key={item}
            >
              <span className={`${classPrefix}-guarantee__footer-dot`} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      ) : null}

      {stamp ? stamp : null}
    </section>
  )
}
