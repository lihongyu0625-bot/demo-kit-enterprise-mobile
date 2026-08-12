import briefcaseFilledIcon from '../../assets/hotel-detail/icon-briefcase-filled.svg'
import { GlobalStyleIcon } from './GlobalStyleIcon'
import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function Badge({
  children,
  className,
  statusType = 'success',
  variant = 'status',
}) {
  const iconName =
    variant === 'agreement'
      ? null
      : statusType === 'warning'
        ? 'icon/status/prohibited-circle/outlined'
        : 'icon/status/success-circle/outlined'

  return (
    <span
      className={cx(
        'common-badge',
        variant === 'agreement' && 'common-badge--agreement',
        className,
      )}
    >
      {variant === 'agreement' ? (
        <img
          alt=""
          className="common-badge__icon-image"
          src={briefcaseFilledIcon}
        />
      ) : (
        <GlobalStyleIcon
          className="common-badge__icon-image"
          name={iconName}
        />
      )}
      <span>{children}</span>
    </span>
  )
}
