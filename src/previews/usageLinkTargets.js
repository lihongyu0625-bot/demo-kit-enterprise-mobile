export function normalizeBusinessComponentLabel(label = '') {
  return String(label)
    .replace(/[^\p{Script=Han}\p{Letter}\p{Number}]+/gu, '')
    .toLowerCase()
}

export function getBusinessComponentAnchorId(label = '') {
  const normalizedLabel = normalizeBusinessComponentLabel(label)
  let hashValue = 0

  for (const char of normalizedLabel) {
    hashValue = (hashValue * 31 + char.codePointAt(0)) >>> 0
  }

  return `business-component-${hashValue.toString(36)}`
}
