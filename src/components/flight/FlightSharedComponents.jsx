import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function FlightSharedIcon({ className, name }) {
  return (
    <GlobalStyleIcon
      className={className}
      name={name}
    />
  )
}

export function FlightTopNav({
  classPrefix,
  nav,
  routeArrow = 'icon',
  statusbarTone,
}) {
  return (
    <header className={`${classPrefix}-top`}>
      <IPhoneBar
        className={`${classPrefix}-top__statusbar`}
        tone={statusbarTone}
        transparent
      />

      <div className={`${classPrefix}-top__bar`}>
        <button
          aria-label="返回"
          className={`${classPrefix}-top__back`}
          type="button"
        >
          <FlightSharedIcon
            className={`${classPrefix}-top__back-icon`}
            name="icon/directional/chevron-left-large/outlined"
          />
        </button>

        {nav.title ? (
          <h1>{nav.title}</h1>
        ) : null}

        {nav.fromCity && nav.toCity ? (
          <div className={`${classPrefix}-top__title`}>
            <span>{nav.fromCity}</span>
            {routeArrow === 'text' ? (
              <span className={`${classPrefix}-top__title-arrow`}>→</span>
            ) : (
              <FlightSharedIcon
                className={`${classPrefix}-top__title-icon`}
                name="icon/directional/arrow-right2/filled"
              />
            )}
            <span>{nav.toCity}</span>
          </div>
        ) : null}

        {nav.policyLabel ? (
          <button
            className={`${classPrefix}-top__policy`}
            type="button"
          >
            <FlightSharedIcon
              className={`${classPrefix}-top__policy-icon`}
              name="icon/status/info-circle/outlined"
            />
            <span>{nav.policyLabel}</span>
          </button>
        ) : null}
      </div>
    </header>
  )
}

export function FlightNoticeBar({
  as = 'button',
  classPrefix,
  notice,
}) {
  const NoticeElement = as

  return (
    <NoticeElement
      className={`${classPrefix}-notice`}
      type={as === 'button' ? 'button' : undefined}
    >
      <FlightSharedIcon
        className={`${classPrefix}-notice__icon`}
        name={notice.iconName}
      />
      <span>{notice.text}</span>
      <FlightSharedIcon
        className={cx(`${classPrefix}-notice__arrow`)}
        name="icon/directional/chevron-right-small/outlined"
      />
    </NoticeElement>
  )
}
