import HotelRoomDetailPreviewPage from '../../../pages/HotelRoomDetailPreviewPage'

function HotelRoomDetailCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__intro">
        <p className="case-preview__eyebrow">页面案例 / 酒店</p>
        <h3 className="case-preview__title">房型详情页整页预览</h3>
        <p className="case-preview__summary">
          这里保留的是房型详情页组装完成后的整页效果，适合从页面层面核对结构和视觉顺序。
        </p>
      </div>

      <div className="case-preview__surface">
        <HotelRoomDetailPreviewPage />
      </div>
    </section>
  )
}

export default HotelRoomDetailCasePreview
