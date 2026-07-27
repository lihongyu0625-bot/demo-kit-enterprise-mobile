import bagActiveIcon from '../../assets/common/page-bottom-nav/bag-active.svg'
import bagInactiveIcon from '../../assets/common/page-bottom-nav/bag-inactive.svg'
import homeActiveIcon from '../../assets/common/page-bottom-nav/home-active.svg'
import homeInactiveIcon from '../../assets/common/page-bottom-nav/home-inactive.svg'
import profileActiveIcon from '../../assets/common/page-bottom-nav/profile-active.svg'
import profileInactiveIcon from '../../assets/common/page-bottom-nav/profile-inactive.svg'
import scheduleActiveIcon from '../../assets/common/page-bottom-nav/schedule-active.svg'
import scheduleInactiveIcon from '../../assets/common/page-bottom-nav/schedule-inactive.svg'
import workspaceActiveIcon from '../../assets/common/page-bottom-nav/workspace-active.svg'
import workspaceInactiveIcon from '../../assets/common/page-bottom-nav/workspace-inactive.svg'
import './common.css'

const pageBottomNavIconMap = {
  bag: {
    active: bagActiveIcon,
    inactive: bagInactiveIcon,
  },
  home: {
    active: homeActiveIcon,
    inactive: homeInactiveIcon,
  },
  profile: {
    active: profileActiveIcon,
    inactive: profileInactiveIcon,
  },
  schedule: {
    active: scheduleActiveIcon,
    inactive: scheduleInactiveIcon,
  },
  workspace: {
    active: workspaceActiveIcon,
    inactive: workspaceInactiveIcon,
  },
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function resolveNavIcon(item) {
  if (item.iconSrc) {
    if (item.active && item.activeIconSrc) {
      return item.activeIconSrc
    }

    return item.iconSrc
  }

  const iconSet = pageBottomNavIconMap[item.icon]

  return item.active ? iconSet.active : iconSet.inactive
}

export function PageBottomNav({ className, items }) {
  return (
    <div
      className={cx('page-bottom-nav', className)}
      style={{ '--page-bottom-nav-columns': items.length }}
    >
      {items.map((item) => (
        <button
          className={cx('page-bottom-nav__item', item.active && 'page-bottom-nav__item--active')}
          key={item.label}
          type="button"
        >
          <img
            alt=""
            className="page-bottom-nav__icon"
            src={resolveNavIcon(item)}
          />
          <span className="page-bottom-nav__label">{item.label}</span>
        </button>
      ))}
    </div>
  )
}
