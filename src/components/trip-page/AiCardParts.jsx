import { useId } from 'react'
import { Img } from './TripImg'
import aiIconImage from '../../assets/trip-page/ai-icon.svg'
import aiCardDurationArrowImage from '../../assets/trip-page/ai-card-duration-arrow.svg'
import iconActionCloseBlueImage from '../../assets/trip-page/icon-action-close-blue.svg'
import './trip-page.css'

/* ===== AI 推荐卡公共部件（Figma 2789:27823 规格） ===== */

/* 蓝紫卡虚线描边（2539:36259 Plugin API strokes 实读）：0.5px 内描边、整体不透明度 0.5、
   虚线/间距各 3px、圆角 8、GRADIENT_LINEAR 四段渐变——
   0% #0001FF(α0.4) → 48.55% #FFB1B1 → 64.35% #5795FF → 100% #ABABF9。
   CSS border:dashed 控制不了虚线节拍、也画不了渐变描边 → SVG stroke-dasharray + linearGradient。
   gradientTransform 矩阵逐项照搬 Figma（Figma 渐变对象空间与 SVG objectBoundingBox 同为
   y 向下、宽高各自归一化），strokeOpacity=0.5 对应画板不透明度。
   不设 viewBox：用户单位=像素，rect 随卡片实际宽高画，零缩放零错位
   （若用固定 viewBox，preserveAspectRatio 默认 xMidYMid meet 会等比缩放居中，非 335×128 的卡必错位）。
   rect 内缩 0.5px（x/y=0.5、宽高 calc(100% - 1px)）：0.5px 描边整体落在 SVG 视口内侧
   （若只内缩 0.25，下/右边缘描边恰压视口边界，非整数缩放/DPR 下会被捕捉到边界外，
   被 overflow:hidden 整条裁掉——表现为部分卡片下边缘虚线消失），SVG 在 DOM 中位于
   关闭角标之前、z-index 压其上，角标区间节拍延续（设计稿虚线连续穿过角标） */
export function AiCardDashBorder() {
  const gradientId = useId()
  return (
    <svg aria-hidden="true" className="trip-page__ai-card-dash" focusable="false">
      <defs>
        <linearGradient
          gradientTransform="matrix(0.499947726726532, 0.4927693009376526, -0.7019752860069275, 0.7122012972831726, 0.0072829993441700935, 0.4897739589214325)"
          id={gradientId}
          x1="0"
          x2="1"
          y1="0"
          y2="0"
        >
          <stop offset="0" stopColor="#0001ff" stopOpacity="0.4" />
          <stop offset="0.4855" stopColor="#ffb1b1" />
          <stop offset="0.6435" stopColor="#5795ff" />
          <stop offset="1" stopColor="#ababf9" />
        </linearGradient>
      </defs>
      <rect
        fill="none"
        rx="7.75"
        stroke={`url(#${gradientId})`}
        strokeDasharray="3 3"
        strokeOpacity="0.5"
        strokeWidth="0.5"
        style={{ height: 'calc(100% - 1px)', width: 'calc(100% - 1px)' }}
        x="0.5"
        y="0.5"
      />
    </svg>
  )
}

export function AiCardClose() {
  return (
    <span aria-hidden="true" className="trip-page__ai-close">
      <Img className="trip-page__ai-close-icon" src={iconActionCloseBlueImage} />
    </span>
  )
}

/* 推荐理由行（最多两行截断）+ 一键订（渐变胶囊 + 渐变文字） */
export function AiCardFooter({ reason, action }) {
  return (
    <div className="trip-page__ai-card-footer">
      <Img className="trip-page__ai-icon" src={aiIconImage} />
      <p className="trip-page__ai-reason">{reason}</p>
      {action ? (
        <button className="trip-page__ai-action" type="button">
          <span className="trip-page__ai-action-text">{action}</span>
        </button>
      ) : null}
    </div>
  )
}

/* 时间&场站列：火车票带 始/终 角标（出发站名后、到达站名前），到达时间支持 +1 天角标 */
export function AiStationCol({ time, station, badge, plusDay, end }) {
  return (
    <div className={end ? 'trip-page__ai-st-col trip-page__ai-st-col--end' : 'trip-page__ai-st-col'}>
      <p className="trip-page__ai-time">
        {time}
        {plusDay ? <span className="trip-page__ai-plusday">+1</span> : null}
      </p>
      <p className="trip-page__ai-station">
        {end && badge ? <span className="trip-page__ai-badge">{badge}</span> : null}
        <span className="trip-page__ai-station-name">{station}</span>
        {!end && badge ? <span className="trip-page__ai-badge">{badge}</span> : null}
      </p>
    </div>
  )
}

/* 总时间中段：默认 = 时长 + 箭头；中转/经停 = 全程 / -站点转(停)- / 停XXm 三行 */
export function AiDurationMid({ duration, transfer }) {
  if (!transfer) {
    return (
      <div className="trip-page__ai-mid">
        <p className="trip-page__ai-mid-duration">{duration}</p>
        <Img className="trip-page__ai-mid-arrow" src={aiCardDurationArrowImage} />
      </div>
    )
  }
  return (
    <div className="trip-page__ai-mid trip-page__ai-mid--transfer">
      <p className="trip-page__ai-mid-total">{transfer.total}</p>
      <p className="trip-page__ai-mid-stop">
        <span aria-hidden="true" className="trip-page__ai-mid-dash" />
        <span className="trip-page__ai-mid-stopname">
          {transfer.station}
          {transfer.verb}
        </span>
        <span aria-hidden="true" className="trip-page__ai-mid-dash" />
      </p>
      {transfer.stop ? <p className="trip-page__ai-mid-wait">{transfer.stop}</p> : null}
    </div>
  )
}

/* 金额-单值：￥14 + 数字22 蓝 */
export function AiPrice({ value }) {
  return (
    <p className="trip-page__ai-price">
      <span className="trip-page__ai-price-unit">￥</span>
      <span className="trip-page__ai-price-num">{value}</span>
    </p>
  )
}

/* 金额-超标：企业(蓝) / 个人(橙) 双价 */
export function AiDualPrice({ corp, personal }) {
  return (
    <div className="trip-page__ai-price-dual">
      <div className="trip-page__ai-price-dual-labels">
        <span className="trip-page__ai-price-dual-label">企业</span>
        <span className="trip-page__ai-price-dual-label">个人</span>
      </div>
      <div className="trip-page__ai-price-dual-nums">
        <p className="trip-page__ai-price-dual-row">
          <span className="trip-page__ai-price-unit">￥</span>
          <span className="trip-page__ai-price-dual-num trip-page__ai-price-dual-num--corp">{corp}</span>
        </p>
        <p className="trip-page__ai-price-dual-row">
          <span className="trip-page__ai-price-unit">￥</span>
          <span className="trip-page__ai-price-dual-num trip-page__ai-price-dual-num--personal">{personal}</span>
        </p>
      </div>
    </div>
  )
}

/* 小信息：字符串或 { serial, text }（火车票中转带序号角标） */
export function AiMeta({ items }) {
  return (
    <div className="trip-page__ai-meta">
      {items.map((item, index) => {
        const serial = typeof item === 'string' ? null : item.serial
        const text = typeof item === 'string' ? item : item.text
        return (
          <span className="trip-page__ai-meta-item" key={text}>
            {index > 0 ? <span aria-hidden="true" className="trip-page__ai-meta-divider" /> : null}
            {serial ? <span className="trip-page__ai-meta-serial">{serial}</span> : null}
            {text}
          </span>
        )
      })}
    </div>
  )
}
