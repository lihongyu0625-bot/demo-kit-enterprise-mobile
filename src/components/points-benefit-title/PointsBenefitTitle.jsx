import pointsTitleCoin from '../../assets/points-benefit-title/points-title-coin.png'
import { DirectionalIcon } from '../common/DirectionalIcon'
import './points-benefit-title.css'

const titleStates = {
  points: {
    action: '赚积分',
    title: '兑好礼 享超值',
  },
  task: {
    action: '积分商城',
    title: '做任务 赚积分',
  },
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function PointsBenefitTitle({
  className,
  points = '376',
  variant = 'points',
}) {
  const state = titleStates[variant] || titleStates.points

  return (
    <section
      className={cx('points-benefit-title', className)}
      data-variant={variant}
    >
      <h1 className="points-benefit-title__heading">{state.title}</h1>
      <button
        aria-label={state.action}
        className="points-benefit-title__entry"
        type="button"
      >
        <span className="points-benefit-title__score">
          <img alt="" src={pointsTitleCoin} />
          <strong>{points}</strong>
        </span>
        <i aria-hidden="true" className="points-benefit-title__divider" />
        <span className="points-benefit-title__action">
          {state.action}
          <DirectionalIcon
            className="points-benefit-title__arrow"
            name="icon/directional/chevron-right-small/outlined"
          />
        </span>
      </button>
    </section>
  )
}
