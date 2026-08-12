import { GlobalStyleIcon } from './GlobalStyleIcon'
import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function Tag({
  children,
  className,
  icon,
  iconName,
  selectableStyle = 'light',
  selected = false,
  tone = 'default',
  variant = 'selector',
}) {
  const isSelectable = variant === 'multi-select' || variant === 'selectable'

  return (
    <span
      className={cx(
        'common-tag',
        isSelectable && 'common-tag--selectable',
        isSelectable && `common-tag--selectable-${selectableStyle}`,
        isSelectable && selected && 'common-tag--selected',
        variant === 'room' && 'common-tag--room',
        tone === 'muted' && 'common-tag--muted',
        tone === 'primary' && 'common-tag--primary',
        className,
      )}
    >
      {iconName ? (
        <GlobalStyleIcon
          className="common-tag__icon-image common-tag__icon-image--tag"
          name={iconName}
        />
      ) : null}
      {icon ? <span className="common-tag__icon">{icon}</span> : null}
      <span className="common-tag__label">{children}</span>
      {isSelectable && selected ? (
        <span
          className={cx(
            'common-tag__selection-badge',
            selectableStyle === 'outline' && 'common-tag__selection-badge--outline',
          )}
        >
          <GlobalStyleIcon
            className="common-tag__selection-badge-icon"
            name="icon/action/check/filled"
          />
        </span>
      ) : null}
    </span>
  )
}
