import HotelBookingSuccessPreviewPage from '../../../pages/HotelBookingSuccessPreviewPage'

function HotelBookingSuccessCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__intro">
        <p className="case-preview__eyebrow">页面案例 / 酒店</p>
        <h3 className="case-preview__title">酒店下单成功页整页预览</h3>
        <p className="case-preview__summary">
          这里保留的是酒店下单成功页组装完成后的整页效果，适合从页面层级核对状态提示、订单信息和联订福利推荐。
        </p>
      </div>

      <div className="case-preview__surface">
        <HotelBookingSuccessPreviewPage />
      </div>
    </section>
  )
}

export default HotelBookingSuccessCasePreview
