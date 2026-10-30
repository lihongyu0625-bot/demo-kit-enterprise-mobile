import bannerImage from '../../assets/personal-center/banner.png'
import headerBgImage from '../../assets/personal-center/header-bg.png'
import rightsBgExecImage from '../../assets/personal-center/rights/bg-exec.png'
import rightsBgStaffImage from '../../assets/personal-center/rights/bg-staff.png'
import rightsTitleExecImage from '../../assets/personal-center/rights/title-exec.png'
import rightsTitleStaffImage from '../../assets/personal-center/rights/title-staff.png'
import rightsIconExecExclusiveSkinImage from '../../assets/personal-center/rights/icon-exec-exclusive-skin.png'
import rightsIconExecFastResponseImage from '../../assets/personal-center/rights/icon-exec-fast-response.png'
import rightsIconExecPlusCarImage from '../../assets/personal-center/rights/icon-exec-plus-car.png'
import rightsIconExecVipServiceImage from '../../assets/personal-center/rights/icon-exec-vip-service.png'
import rightsIconStaffFastResponseImage from '../../assets/personal-center/rights/icon-staff-fast-response.png'
import rightsIconStaffFlightGuaranteeImage from '../../assets/personal-center/rights/icon-staff-flight-guarantee.png'
import rightsIconStaffFreeCancelImage from '../../assets/personal-center/rights/icon-staff-free-cancel.png'
import rightsIconStaffHotelGuaranteeImage from '../../assets/personal-center/rights/icon-staff-hotel-guarantee.png'
import memberTagV4Image from '../../assets/personal-center/member-tag-v4.png'
import iconCategoryCarImage from '../../assets/personal-center/icons/icon-category-car-colored.svg'
import iconCategoryFlightImage from '../../assets/personal-center/icons/icon-category-flight-colored.svg'
import iconCategoryHotelImage from '../../assets/personal-center/icons/icon-category-hotel-colored.svg'
import iconCategoryTrainImage from '../../assets/personal-center/icons/icon-category-train-colored.svg'
import iconServiceHeadsetImage from '../../assets/personal-center/icons/icon-service-headset-blue.svg'
import iconServiceSettingsImage from '../../assets/personal-center/icons/icon-service-settings-blue.svg'
import iconEntryActivityImage from '../../assets/personal-center/icons/icon-entry-activity-outlined.svg'
import iconEntryApplyImage from '../../assets/personal-center/icons/icon-entry-apply-outlined.svg'
import iconEntryApprovalImage from '../../assets/personal-center/icons/icon-entry-approval-outlined.svg'
import iconEntryExceptionImage from '../../assets/personal-center/icons/icon-entry-exception-outlined.svg'
import iconEntryFeedbackImage from '../../assets/personal-center/icons/icon-entry-feedback-outlined.svg'
import iconEntryFrequentImage from '../../assets/personal-center/icons/icon-entry-frequent-outlined.svg'
import iconEntryInvoiceImage from '../../assets/personal-center/icons/icon-entry-invoice-outlined.svg'
import iconEntryPermissionImage from '../../assets/personal-center/icons/icon-entry-permission-outlined.svg'
import iconEntryReferralImage from '../../assets/personal-center/icons/icon-entry-referral-outlined.svg'
import iconEntryReimburseImage from '../../assets/personal-center/icons/icon-entry-reimburse-outlined.svg'
import iconEntryWalletImage from '../../assets/personal-center/icons/icon-entry-wallet-outlined.svg'
import mockData from '../../mock-data/personal-center.mock.json'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { PageBottomNav } from '../common/PageBottomNav'
import './personal-center.css'

const categoryIconImages = {
  car: iconCategoryCarImage,
  hotel: iconCategoryHotelImage,
  flight: iconCategoryFlightImage,
  train: iconCategoryTrainImage,
}

const entryIconImages = {
  apply: iconEntryApplyImage,
  approval: iconEntryApprovalImage,
  exception: iconEntryExceptionImage,
  invoice: iconEntryInvoiceImage,
  reimburse: iconEntryReimburseImage,
  referral: iconEntryReferralImage,
  activity: iconEntryActivityImage,
  wallet: iconEntryWalletImage,
  permission: iconEntryPermissionImage,
  frequent: iconEntryFrequentImage,
  feedback: iconEntryFeedbackImage,
}

const variantLabels = {
  staff: '员工·剩余额度',
  exec: '高管·限额数+剩余额度',
  noPoints: '无限额·积分未开通',
  twoCategories: '开通品类数=2',
  singleCategory: '开通品类数=1',
}

function Img({ src, alt = '', className }) {
  return <img alt={alt} className={className} draggable="false" src={src} />
}

/* 头部个人信息：Figma 2935:44428 —— px12 V gap8；
   row1 h32：姓名 24px Medium 黑84 + chevron24(黑36) + V4 标签 53×20 gap4；
   右侧客服/设置列（icon24 #09397f + 10px 文案）h40 顶对齐溢出行高；
   row2 公司名 14px 黑60；row3 限额 pill h26 r6 bg rgba(5,34,76,5%) */
function PersonalCenterHeaderInfo({ companyName, quota, userName }) {
  let quotaContent
  if (quota.mode === 'none') {
    quotaContent = <span className="personal-center__quota-text">{quota.label}</span>
  } else if (quota.mode === 'quotaRemaining') {
    quotaContent = (
      <>
        <span className="personal-center__quota-text">{quota.prefix}</span>
        <span className="personal-center__quota-value">{quota.value}</span>
        <span className="personal-center__quota-text">{quota.mid}</span>
        <span className="personal-center__quota-value">{quota.value2}</span>
        <span className="personal-center__quota-text">{quota.unit}</span>
      </>
    )
  } else {
    quotaContent = (
      <>
        <span className="personal-center__quota-text">{quota.label}</span>
        <span className="personal-center__quota-value">{quota.value}</span>
        <span className="personal-center__quota-text">{quota.unit}</span>
      </>
    )
  }

  return (
    <section className="personal-center__header-info">
      <div className="personal-center__header-group">
        <div className="personal-center__header-top">
          <div className="personal-center__header-row1">
            <div className="personal-center__header-name-group">
              <p className="personal-center__header-name">{userName}</p>
              <GlobalStyleIcon
                className="personal-center__header-name-chevron"
                name="icon-directional-chevron_right_small-outlined"
              />
            </div>
            <Img className="personal-center__header-v4-tag" src={memberTagV4Image} />
          </div>
          <div className="personal-center__header-services">
            <div className="personal-center__header-service">
              <Img className="personal-center__service-icon" src={iconServiceHeadsetImage} />
              <p className="personal-center__service-label">客服</p>
            </div>
            <div className="personal-center__header-service">
              <Img className="personal-center__service-icon" src={iconServiceSettingsImage} />
              <p className="personal-center__service-label">设置</p>
            </div>
          </div>
        </div>
        <p className="personal-center__header-company">{companyName}</p>
      </div>
      <div className="personal-center__quota" role="status">
        {quotaContent}
      </div>
    </section>
  )
}

/* 我的订单卡：Figma 2940:45410 —— 白底 r8 p(8,12) V gap12；
   标题行 h22：我的订单 14px Bold 黑84 + 全部订单 12px 黑60 + chevron14(黑60)；
   品类行 h50：项 flex-1（icon28 + 12px 黑84）V gap2 居中 gap12；
   品类数=1（2940:45465）→ h40 单行：icon24 + 我的订单 Bold（无 chevron/全部订单） */
function PersonalCenterOrdersCard({ categories }) {
  if (categories.length === 1) {
    return (
      <article className="personal-center__orders personal-center__orders--single">
        <Img
          className="personal-center__orders-single-icon"
          src={categoryIconImages[categories[0].icon]}
        />
        <p className="personal-center__orders-title">我的订单</p>
      </article>
    )
  }

  return (
    <article className="personal-center__orders">
      <div className="personal-center__orders-head">
        <p className="personal-center__orders-title">我的订单</p>
        <div className="personal-center__orders-all">
          <p className="personal-center__orders-all-label">全部订单</p>
          <GlobalStyleIcon
            className="personal-center__orders-all-chevron"
            name="icon-directional-chevron_right_small-outlined"
          />
        </div>
      </div>
      <div className="personal-center__orders-grid">
        {categories.map((category) => (
          <div className="personal-center__orders-item" key={category.label}>
            <Img
              className="personal-center__orders-item-icon"
              src={categoryIconImages[category.icon]}
            />
            <p className="personal-center__orders-item-label">{category.label}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

/* 积分&优惠券卡：Figma 2945:46596 —— 白底 r8 p12，内容行 h22；
   双列（2940:45532）：两个 151px 列居中（label 12px 黑84 + value 20px Barlow SemiBold gap4
   + chevron16 黑36 gap2）| 1×16 分割线 rgba(0,0,0,6%) | 右列同构，gap12；
   单列（2945:46597）：space-between（优惠券组居左 + chevron 贴右缘） */
function PersonalCenterPointsCell({ label, value }) {
  return (
    <div className="personal-center__points-cell">
      <div className="personal-center__points-cell-inner">
        <p className="personal-center__points-label">{label}</p>
        <p className="personal-center__points-value">{value}</p>
      </div>
      <GlobalStyleIcon
        className="personal-center__points-chevron"
        name="icon-directional-chevron_right_small-outlined"
      />
    </div>
  )
}

function PersonalCenterPointsCard({ points }) {
  if (points.mode === 'single') {
    return (
      <article className="personal-center__points">
        <div className="personal-center__points-row personal-center__points-row--single">
          <div className="personal-center__points-cell">
            <p className="personal-center__points-label">{points.couponLabel}</p>
            <p className="personal-center__points-value">{points.couponValue}</p>
          </div>
          <GlobalStyleIcon
            className="personal-center__points-chevron"
            name="icon-directional-chevron_right_small-outlined"
          />
        </div>
      </article>
    )
  }

  return (
    <article className="personal-center__points">
      <div className="personal-center__points-row">
        <PersonalCenterPointsCell label={points.pointsLabel} value={points.pointsValue} />
        <span aria-hidden="true" className="personal-center__points-divider" />
        <PersonalCenterPointsCell label={points.couponLabel} value={points.couponValue} />
      </div>
    </article>
  )
}

/* 入口区卡：Figma 2945:46266 —— 白底 r8 p16/12 GRID 4 列 gap12；
   11 项 73×46 V gap2 居中（icon24 黑84 + label 12px 黑84），行序 4+4+3 */
function PersonalCenterEntriesCard({ entries }) {
  return (
    <article className="personal-center__entries">
      {entries.map((entry) => (
        <div className="personal-center__entry" key={entry.label}>
          <Img className="personal-center__entry-icon" src={entryIconImages[entry.icon]} />
          <p className="personal-center__entry-label">{entry.label}</p>
        </div>
      ))}
    </article>
  )
}

/* 权益卡（Figma 2939:44956/44955，代码组装）：
   351×76 r8，背景图铺底；p12 V-gap12；
   标题行 h20：字标图（企业版·权益 76×14 / 尊享权益 57×14）+ 右侧「您享有 N 个权益」12px + chevron14；
   权益行：4 项（icon20 + 2px + 12px/20 文字）两端分布，员工字色 #09397f / 高管 #f4e6dd */
const rightsPresets = {
  staff: {
    bg: rightsBgStaffImage,
    title: rightsTitleStaffImage,
    titleAlt: '企业版·权益',
    items: [
      { icon: rightsIconStaffFastResponseImage, label: '快速应答+' },
      { icon: rightsIconStaffFreeCancelImage, label: '免费取消' },
      { icon: rightsIconStaffFlightGuaranteeImage, label: '机票贵必赔' },
      { icon: rightsIconStaffHotelGuaranteeImage, label: '酒店贵必赔' },
    ],
  },
  exec: {
    bg: rightsBgExecImage,
    title: rightsTitleExecImage,
    titleAlt: '尊享权益',
    items: [
      { icon: rightsIconExecPlusCarImage, label: '专车PLUS' },
      { icon: rightsIconExecFastResponseImage, label: '快速应答' },
      { icon: rightsIconExecVipServiceImage, label: '尊享客服' },
      { icon: rightsIconExecExclusiveSkinImage, label: '专属皮肤' },
    ],
  },
}

function PersonalCenterRightsCard({ count, role }) {
  const preset = rightsPresets[role] || rightsPresets.staff
  return (
    <article
      className={
        role === 'exec'
          ? 'personal-center__rights personal-center__rights--exec'
          : 'personal-center__rights'
      }
    >
      <Img alt="" className="personal-center__rights-bg" src={preset.bg} />
      <div className="personal-center__rights-head">
        <Img alt={preset.titleAlt} className="personal-center__rights-title" src={preset.title} />
        <div className="personal-center__rights-count">
          <span>您享有</span>
          <span className="personal-center__rights-count-value">{count}</span>
          <span>个权益</span>
          <GlobalStyleIcon
            className="personal-center__rights-chevron"
            name="icon-directional-chevron_right_small-outlined"
          />
        </div>
      </div>
      <div className="personal-center__rights-items">
        {preset.items.map((item) => (
          <div className="personal-center__rights-item" key={item.label}>
            <Img className="personal-center__rights-item-icon" src={item.icon} />
            <span className="personal-center__rights-item-label">{item.label}</span>
          </div>
        ))}
      </div>
    </article>
  )
}

/* 帧组装（6 列页面实例 y9554 为准）：
   bg 375×400 → 状态栏44 → 头部信息 mt12 → 权益卡 mt12 → 订单/积分/入口/banner/底部小字 mt8，
   全部 px12（卡片宽 351）；页脚 34px 吸底 */
export function PersonalCenterPreviewFrame({ data = mockData, variant = 'staff' }) {
  const variantData = data.variants ? data.variants[variant] : null
  const merged = variantData ? { ...data, ...variantData } : { ...data }
  const rightsRole = merged.rightsRole || 'staff'

  return (
    <div
      className="personal-center"
      style={merged.frameHeight ? { height: merged.frameHeight } : undefined}
    >
      <Img className="personal-center__header-bg" src={headerBgImage} />
      <IPhoneBar transparent tone="dark" reserveSpace />
      <PersonalCenterHeaderInfo
        companyName={merged.companyName}
        quota={merged.quota}
        userName={merged.userName}
      />
      <div className="personal-center__content">
        <PersonalCenterRightsCard count={merged.rightsCount} role={rightsRole} />
        <PersonalCenterOrdersCard categories={merged.orderCategories} />
        <PersonalCenterPointsCard points={merged.points} />
        <PersonalCenterEntriesCard entries={merged.entries} />
        <Img alt="新客享早通勤免单" className="personal-center__banner" src={bannerImage} />
        <footer className="personal-center__footer-text">
          <p className="personal-center__footer-line">{merged.versionText}</p>
          <p className="personal-center__footer-line">{merged.agreementText}</p>
        </footer>
      </div>
      {/* 一级页面底部标签栏：复用首页 PageBottomNav，选中态锚定「我的」 */}
      <div className="personal-center__bottom-tab">
        <PageBottomNav items={merged.bottomTabs} />
        <IPhoneFooter className="personal-center__iphone-footer" />
      </div>
    </div>
  )
}

export {
  PersonalCenterEntriesCard,
  PersonalCenterHeaderInfo,
  PersonalCenterOrdersCard,
  PersonalCenterPointsCard,
  PersonalCenterRightsCard,
  variantLabels,
}

export default PersonalCenterPreviewFrame
