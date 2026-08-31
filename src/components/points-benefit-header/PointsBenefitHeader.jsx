import pointsHeader from '../../assets/points-benefit-header/points-header.png'
import taskHeader from '../../assets/points-benefit-header/task-header.png'
import './points-benefit-header.css'

const headerImages = {
  points: pointsHeader,
  task: taskHeader,
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function PointsBenefitHeader({ className, variant = 'points' }) {
  const image = headerImages[variant] || headerImages.points

  return (
    <section
      aria-label={variant === 'task' ? '任务积分头图' : '积分权益头图'}
      className={cx('points-benefit-header', className)}
    >
      <img alt="" draggable="false" src={image} />
    </section>
  )
}
