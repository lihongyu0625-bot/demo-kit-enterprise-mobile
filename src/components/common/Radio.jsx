import './common.css'

import brandCheckedDisabledIcon from '../../assets/common/radio/radio-brand-checked-disabled.svg'
import brandCheckedIcon from '../../assets/common/radio/radio-brand-checked.svg'
import darkCheckedDisabledIcon from '../../assets/common/radio/radio-dark-checked-disabled.svg'
import darkCheckedIcon from '../../assets/common/radio/radio-dark-checked.svg'
import uncheckedDisabledIcon from '../../assets/common/radio/radio-unchecked-disabled.svg'
import uncheckedIcon from '../../assets/common/radio/radio-unchecked.svg'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

/* ===== 单选圆点：Figma 2299:65333 —— 18px，主题(品牌色/深色) × 选中 × 禁用
   状态图直接使用设计稿导出 SVG（assets/common/radio）：选中=实心主题色+白对勾，未选=白底+12% 细环 */
export function Radio({
  checked = false,
  disabled = false,
  tone = 'brand',
  className,
  label = '单选',
}) {
  const icon = disabled
    ? checked
      ? tone === 'dark'
        ? darkCheckedDisabledIcon
        : brandCheckedDisabledIcon
      : uncheckedDisabledIcon
    : checked
      ? tone === 'dark'
        ? darkCheckedIcon
        : brandCheckedIcon
      : uncheckedIcon

  return (
    <img
      alt=""
      aria-checked={checked}
      aria-disabled={disabled || undefined}
      aria-label={label}
      className={cx('common-radio', className)}
      role="radio"
      src={icon}
      tabIndex={disabled ? -1 : 0}
    />
  )
}
