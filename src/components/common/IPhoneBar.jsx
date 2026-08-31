import batteryIcon from '../../assets/iphone-bar/battery.svg'
import cellularIcon from '../../assets/iphone-bar/cellular.svg'
import wifiIcon from '../../assets/iphone-bar/wifi.svg'
import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function IPhoneBar({
  className,
  time = '9:41',
  transparent = false,
  tone = 'dark',
  reserveSpace = false,
}) {
  return (
    <>
      {reserveSpace ? <div aria-hidden="true" className="iphone-bar__spacer" /> : null}
      <div
        className={cx(
          'iphone-bar',
          transparent && 'iphone-bar--transparent',
          tone === 'light' && 'iphone-bar--light',
          className,
        )}
      >
        <span className="iphone-bar__time">{time}</span>
        <div className="iphone-bar__icons" aria-hidden="true">
          <img
            className="iphone-bar__icon iphone-bar__icon--cellular"
            src={cellularIcon}
            alt=""
          />
          <img
            className="iphone-bar__icon iphone-bar__icon--wifi"
            src={wifiIcon}
            alt=""
          />
          <img
            className="iphone-bar__icon iphone-bar__icon--battery"
            src={batteryIcon}
            alt=""
          />
        </div>
      </div>
    </>
  )
}
