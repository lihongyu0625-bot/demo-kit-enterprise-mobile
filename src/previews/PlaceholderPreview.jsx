function PlaceholderPreview({ badge, title, summary, nextSteps }) {
  return (
    <section className="placeholder-preview">
      <div className="placeholder-preview__header">
        <span className="placeholder-preview__badge">{badge}</span>
        <h3 className="placeholder-preview__title">{title}</h3>
        <p className="placeholder-preview__summary">{summary}</p>
      </div>

      <div className="placeholder-preview__panel">
        <div className="placeholder-preview__pulse" />
        <p className="placeholder-preview__panel-title">当前预览位已预留</p>
        <p className="placeholder-preview__panel-copy">
          后续把真实组件或真实页面接进来时，只需要替换这里的内容组件，不需要再改整体框架。
        </p>
      </div>

      <div className="placeholder-preview__steps">
        {nextSteps.map((step) => (
          <p key={step}>{step}</p>
        ))}
      </div>
    </section>
  )
}

export default PlaceholderPreview
