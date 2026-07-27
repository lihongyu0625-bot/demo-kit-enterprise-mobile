import { DirectionalIcon } from './DirectionalIcon'
import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function ChevronAction({
  children,
  className,
  variant = 'subtle',
}) {
  const iconClassName =
    variant === 'detail'
      ? 'common-chevron-action__icon common-chevron-action__icon--detail'
      : variant === 'field'
        ? 'common-chevron-action__icon common-chevron-action__icon--field'
        : 'common-chevron-action__icon common-chevron-action__icon--small'
  const iconName =
    variant === 'detail'
      ? 'icon/directional/caret-up/filled'
      : 'icon/directional/chevron-right-small/outlined'

  return (
    <button
      className={cx(
        'common-chevron-action',
        variant === 'detail' && 'common-chevron-action--detail',
        variant === 'field' && 'common-chevron-action--field',
        className,
      )}
      type="button"
    >
      <span>{children}</span>
      <DirectionalIcon
        className={iconClassName}
        name={iconName}
      />
    </button>
  )
}
