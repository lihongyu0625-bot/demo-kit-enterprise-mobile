import './trip-page.css'

/* ===== 通用图片节点：禁拖拽 ===== */
export function Img({ src, alt = '', className, style }) {
  return <img alt={alt} className={className} draggable="false" src={src} style={style} />
}
