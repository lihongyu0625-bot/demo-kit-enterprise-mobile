import HotelOrderDetailPreviewPage from '../../../pages/HotelOrderDetailPreviewPage'

function HotelOrderDetailCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__intro">
        <p className="case-preview__eyebrow">页面案例 / 酒店</p>
        <h3 className="case-preview__title">酒店订单详情页整页预览</h3>
        <p className="case-preview__summary">
          这里保留的是酒店订单详情页组装完成后的整页效果，适合从页面层面核对状态区、订单卡片和权益信息。
        </p>
      </div>

      <div className="case-preview__surface">
        <HotelOrderDetailPreviewPage />
      </div>
    </section>
  )
}

export default HotelOrderDetailCasePreview
