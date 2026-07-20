import HotelDetailPreviewPage from '../../../pages/HotelDetailPreviewPage'

function HotelDetailCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__intro">
        <p className="case-preview__eyebrow">页面案例 / 酒店</p>
        <h3 className="case-preview__title">酒店详情页整页预览</h3>
        <p className="case-preview__summary">
          这里保留的是酒店详情页组装完成后的整页效果，适合从页面层面核对头图、房型和酒店信息编排。
        </p>
      </div>

      <div className="case-preview__surface">
        <HotelDetailPreviewPage />
      </div>
    </section>
  )
}

export default HotelDetailCasePreview
