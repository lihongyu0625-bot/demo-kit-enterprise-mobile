import hotelFormData from '../../../mock-data/hotel-form.mock.json'
import {
  HotelApprovalInfoCard,
  HotelBenefitCard,
  HotelContactInfoCard,
  HotelCostCenterCard,
  HotelFormGradientBackground,
  HotelFormNavBar,
  HotelInvoiceTipCard,
  HotelRoomInfoCard,
  HotelStayInfoCard,
  HotelSubmitBar,
  HotelTermsBar,
  HotelTripNoteCard,
} from '../../../components/hotel-form/HotelFormComponents'

const componentShowcaseList = [
  {
    name: '导航栏',
    description: '页面顶部返回、标题与操作区。',
    render: (
      <div className="catalog-surface catalog-surface--nav">
        <HotelFormGradientBackground />
        <HotelFormNavBar
          title={hotelFormData.hotelName}
          actionLabel={hotelFormData.navAction}
        />
      </div>
    ),
  },
  {
    name: '房型信息卡',
    description: '展示入住离店信息、房型标签和订房说明。',
    render: <HotelRoomInfoCard room={hotelFormData.room} />,
  },
  {
    name: '入住信息卡',
    description: '展示入住人、到店时间和确认短信状态。',
    render: <HotelStayInfoCard stayInfo={hotelFormData.stayInfo} />,
  },
  {
    name: '联系信息卡',
    description: '展示电话和邮箱填写区。',
    render: <HotelContactInfoCard contactInfo={hotelFormData.contactInfo} />,
  },
  {
    name: '审批信息卡',
    description: '展示审批提醒和审批人选择。',
    render: <HotelApprovalInfoCard approvalInfo={hotelFormData.approvalInfo} />,
  },
  {
    name: '费用归属卡',
    description: '展示成本中心选择。',
    render: <HotelCostCenterCard costCenter={hotelFormData.costCenter} />,
  },
  {
    name: '出行备注卡',
    description: '展示出行目的和出行描述。',
    render: <HotelTripNoteCard tripNote={hotelFormData.tripNote} />,
  },
  {
    name: '专项权益卡',
    description: '展示早餐、延迟退房和赠券权益。',
    render: <HotelBenefitCard benefits={hotelFormData.benefits} />,
  },
  {
    name: '发票提示卡',
    description: '展示发票说明文案。',
    render: <HotelInvoiceTipCard invoiceTip={hotelFormData.invoiceTip} />,
  },
  {
    name: '条款栏',
    description: '展示底部协议勾选区。',
    render: <HotelTermsBar terms={hotelFormData.terms} />,
  },
  {
    name: '提交栏',
    description: '展示企业支付金额和提交按钮。',
    render: <HotelSubmitBar payment={hotelFormData.payment} />,
  },
]

function HotelFormBusinessPreview() {
  return (
    <section className="catalog-preview">
      <div className="catalog-preview__intro">
        <p className="catalog-preview__eyebrow">业务组件 / 酒店</p>
        <h3 className="catalog-preview__title">酒店填单页组件目录</h3>
        <p className="catalog-preview__summary">
          这里放的是从酒店填单页里拆出来的业务组件，方便你单独看每个模块的结构和复用方式。
        </p>
      </div>

      <div className="catalog-preview__grid">
        {componentShowcaseList.map((item) => (
          <article
            className="catalog-block"
            key={item.name}
          >
            <div className="catalog-block__header">
              <div>
                <p className="catalog-block__title">{item.name}</p>
                <p className="catalog-block__description">{item.description}</p>
              </div>
            </div>
            <div className="catalog-block__surface">{item.render}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HotelFormBusinessPreview
