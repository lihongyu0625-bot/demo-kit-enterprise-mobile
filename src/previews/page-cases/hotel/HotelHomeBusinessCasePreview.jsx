import HotelHomeBusinessPreviewPage from '../../../pages/HotelHomeBusinessPreviewPage'

function HotelHomeBusinessCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__intro">
        <p className="case-preview__eyebrow">页面案例 / 酒店</p>
        <h3 className="case-preview__title">酒店首页-因公整页预览</h3>
        <p className="case-preview__summary">
          这里展示酒店首页-因公整页组装后的最终效果，适合从页面层级核对头图、填写卡片和底部权益入口的整体编排。
        </p>
      </div>

      <div className="case-preview__surface">
        <HotelHomeBusinessPreviewPage />
      </div>
    </section>
  )
}

export default HotelHomeBusinessCasePreview
