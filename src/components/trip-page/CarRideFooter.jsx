import './trip-page.css'

/* ===== 用车推荐条：Figma「行程页-行程卡-用车推荐」335×40 ===== */
export function CarRideFooter({ hint, action }) {
  return (
    <div className="trip-page__ride-footer">
      <p className="trip-page__ride-hint">{hint}</p>
      <button className="trip-page__ride-action" type="button">
        {action}
      </button>
    </div>
  )
}
