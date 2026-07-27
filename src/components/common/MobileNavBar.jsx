import { GlobalStyleIcon } from './GlobalStyleIcon'
import { IPhoneBar } from './IPhoneBar'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function MoreIcon() {
  return (
    <span className="mobile-navbar__more-dots" aria-hidden="true">
      <span className="mobile-navbar__more-dot" />
      <span className="mobile-navbar__more-dot" />
      <span className="mobile-navbar__more-dot" />
    </span>
  )
}

export function MobileNavBar({
  className,
  title = '滴滴企业版',
  time = '9:41',
  statusBarTone = 'dark',
  showBackIcon = true,
  showRightIcon = true,
  showRightText = false,
  rightText = '预订须知',
  transparent = false,
}) {
  return (
    <header
      className={cx(
        'mobile-navbar',
        transparent ? 'mobile-navbar--transparent' : 'mobile-navbar--solid',
        className,
      )}
    >
      <IPhoneBar
        time={time}
        tone={statusBarTone}
        transparent={transparent}
      />
      <div className="mobile-navbar__bar">
        {showBackIcon ? (
          <button
            className="mobile-navbar__back"
            type="button"
            aria-label="返回"
          >
            <GlobalStyleIcon
              className="mobile-navbar__back-icon"
              name="icon/directional/chevron-left-large/outlined"
            />
          </button>
        ) : null}

        <p className="mobile-navbar__title">{title}</p>

        {showRightIcon ? (
          <button
            className="mobile-navbar__more"
            type="button"
            aria-label="更多"
          >
            <MoreIcon />
          </button>
        ) : null}

        {showRightText ? (
          <button
            className="mobile-navbar__text-action"
            type="button"
          >
            {rightText}
          </button>
        ) : null}
      </div>
    </header>
  )
}
