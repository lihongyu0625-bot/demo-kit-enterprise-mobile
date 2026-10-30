import './trip-page.css'

/* 扫光动画条：骨架/加载卡通用 */
export function AiSweep() {
  return <span aria-hidden="true" className="trip-page__sweep" />
}

export function Skel({ width, height }) {
  return <span aria-hidden="true" className="trip-page__skel" style={{ width, height }} />
}
