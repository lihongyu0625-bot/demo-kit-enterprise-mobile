import HotelFormPreviewPage from '../../../pages/HotelFormPreviewPage'

function HotelFormCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__intro">
        <p className="case-preview__eyebrow">页面案例 / 酒店</p>
        <h3 className="case-preview__title">酒店填单页整页预览</h3>
        <p className="case-preview__summary">
          这里保留的是整页组装后的最终效果，适合从页面层面核对配置、顺序和整体视觉。
        </p>
      </div>

      <div className="case-preview__surface">
        <HotelFormPreviewPage />
      </div>
    </section>
  )
}

export default HotelFormCasePreview
