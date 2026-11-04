import { GlobalStyleIcon } from './GlobalStyleIcon'
import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

/* 多选组件（Figma 2299:65186）：默认 18px 复选框；
   variant="tag" = 多选标签组（Figma 2921:53825 / 915:15207 组件）——
   亮色(light)/描边(outline)两组样式，纯文字与带图标两种形态，
   selected 且 badge=true 时右下角 6×6 蓝底白对勾徽标（propValue prop），
   badge=false = 选中无对号状态（我的订单页 2921:53825：propValue=false） */
export function MultiSelect({
  badge = true,
  checked = false,
  children,
  disabled = false,
  icon,
  iconName,
  selectableStyle = 'light',
  tone = 'brand',
  className,
  label = '多选',
  variant = 'checkbox',
}) {
  const isTag = variant === 'tag'
  const isTagSelected = isTag && checked

  return (
    <span
      aria-checked={checked}
      aria-disabled={disabled || undefined}
      aria-label={label}
      className={cx(
        isTag ? 'common-multi-select-tag' : 'common-multi-select',
        isTag && 'common-multi-select-tag--selectable',
        isTag && `common-multi-select-tag--${selectableStyle}`,
        isTagSelected && 'common-multi-select-tag--selected',
        !isTag && tone === 'dark' && 'common-multi-select--dark',
        !isTag && checked && 'common-multi-select--checked',
        disabled && (isTag ? 'common-multi-select-tag--disabled' : 'common-multi-select--disabled'),
        className,
      )}
      role="checkbox"
      tabIndex={disabled ? -1 : 0}
    >
      {isTag && iconName ? (
        <GlobalStyleIcon
          className="common-multi-select-tag__icon-image common-multi-select-tag__icon-image--tag"
          name={iconName}
        />
      ) : null}
      {isTag && icon ? <span className="common-multi-select-tag__icon">{icon}</span> : null}
      {isTag ? (
        <span className="common-multi-select-tag__label">{children}</span>
      ) : (
        checked && <span className="common-multi-select__mark" />
      )}
      {isTagSelected && badge ? (
        <span
          className={cx(
            'common-multi-select-tag__selection-badge',
            selectableStyle === 'outline' && 'common-multi-select-tag__selection-badge--outline',
          )}
        >
          <GlobalStyleIcon
            className="common-multi-select-tag__selection-badge-icon"
            name="icon-action-check-filled"
          />
        </span>
      ) : null}
    </span>
  )
}
