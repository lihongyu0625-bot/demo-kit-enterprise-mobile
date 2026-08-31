import pointsIcon from '../../assets/points-lucky-bag/points-icon.png'
import taskFlight from '../../assets/points-lucky-bag/task-flight.png'
import taskHotel from '../../assets/points-lucky-bag/task-hotel.png'
import taskTrain from '../../assets/points-lucky-bag/task-train.png'
import carExample from '../../assets/points-earn-tasks/points-earn-car-example.png'
import flightExample from '../../assets/points-earn-tasks/points-earn-flight-example.png'
import hotelExample from '../../assets/points-earn-tasks/points-earn-hotel-example.png'
import ruleTable from '../../assets/points-earn-tasks/points-earn-rule-table.png'
import { PointsBenefitHeader } from '../points-benefit-header/PointsBenefitHeader'
import { PointsBenefitTitle } from '../points-benefit-title/PointsBenefitTitle'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { MobileNavBar } from '../common/MobileNavBar'
import { PointsBenefitBottomWatermark } from '../points-benefit-bottom-watermark/PointsBenefitBottomWatermark'
import { PointsEarnMissionCard } from '../points-lucky-bag/PointsLuckyBagComponents'
import './points-earn-tasks.css'

const activityTasks = [
  { icon: taskHotel, title: '浏览酒店列表页', reward: '+2', action: '订酒店' },
  { icon: taskFlight, title: '浏览机票列表页', reward: '+1', action: '预机票' },
  { icon: taskTrain, title: '浏览火车票列表页', reward: '+1', action: '去浏览' },
]

const bookingTasks = [
  { icon: taskHotel, title: '完成因私酒店预订', reward: '+30', action: '订酒店', tag: '双倍积分' },
  { icon: taskFlight, title: '完成因私机票预订', reward: '+20', action: '订机票' },
]

function TaskRow({ action, icon, reward, tag, title }) {
  return (
    <article className="points-earn-tasks__row">
      <img alt="" className="points-earn-tasks__row-icon" src={icon} />
      <div className="points-earn-tasks__row-copy">
        <p>{title}</p>
        <span>
          限时用车单福利
          <GlobalStyleIcon
            className="points-earn-tasks__question"
            name="icon/status/question-circle/outlined"
          />
        </span>
        {tag ? <em>{tag}</em> : null}
      </div>
      <div className="points-earn-tasks__row-action">
        <span>
          <img alt="" src={pointsIcon} />
          <strong>{reward}</strong>
        </span>
        <button type="button">{action}</button>
      </div>
    </article>
  )
}

function TaskPanel({ tasks, title }) {
  return (
    <section className="points-earn-tasks__panel">
      <h2>{title}</h2>
      <div className="points-earn-tasks__task-list">
        {tasks.map((task) => <TaskRow {...task} key={task.title} />)}
      </div>
    </section>
  )
}

function RuleStep({ children, image, index, title }) {
  return (
    <section className="points-earn-tasks__rule-step">
      <h3><b>{index}</b>{title}</h3>
      <div className="points-earn-tasks__rule-copy">{children}</div>
      {image ? <img alt="" className="points-earn-tasks__rule-example" src={image} /> : null}
    </section>
  )
}

export function PointsEarnTasksPreviewFrame() {
  return (
    <main className="points-earn-tasks">
      <header className="points-earn-tasks__hero">
        <PointsBenefitHeader className="points-earn-tasks__hero-image" variant="task" />
        <MobileNavBar
          className="points-earn-tasks__nav"
          showRightIcon={false}
          showTitle={false}
          transparent
        />
        <PointsBenefitTitle
          className="points-earn-tasks__hero-title"
          variant="task"
        />
        <div className="points-earn-tasks__hero-actions">
          <button type="button">规则</button>
          <button type="button">明细</button>
        </div>
      </header>

      <div className="points-earn-tasks__content">
        <div className="points-earn-tasks__mission">
          <PointsEarnMissionCard title="去打车 赚积分" />
        </div>
        <TaskPanel tasks={activityTasks} title="动动手 赚积分" />
        <TaskPanel tasks={bookingTasks} title="订商旅 赚积分" />

        <section className="points-earn-tasks__rules">
          <div className="points-earn-tasks__rule-tabs">
            <button className="points-earn-tasks__rule-tab--active" type="button">省立返赚积分规则</button>
            <button type="button">消费赚积分规则</button>
          </div>
          <div className="points-earn-tasks__rule-card">
            <RuleStep index="01" title="什么是省立返积分？">
              <p>除基础积分外，当您因公出行选择更省钱的出行方式时，可以额外获得积分奖励，用于兑换独属于自己的福利。</p>
              <img alt="" className="points-earn-tasks__rule-table" src={ruleTable} />
            </RuleStep>
            <RuleStep index="02" title="如何赚取省立返积分？">
              <p><b>1</b> 因公特价快车</p>
              <span>因公场景打特价快车，享双倍积分（6积分）</span>
              <img alt="" className="points-earn-tasks__rule-example" src={carExample} />
              <p><b>2</b> 因公酒店</p>
              <span>因公合作酒店，每单额外享11积分奖励</span>
              <img alt="" className="points-earn-tasks__rule-example" src={hotelExample} />
              <p><b>3</b> 因公机票</p>
              <span>因公提前三天预订机票，每单额外享10积分奖励</span>
              <img alt="" className="points-earn-tasks__rule-example" src={flightExample} />
              <span>因公预订低价推荐机票，每单额外享15积分奖励</span>
              <img alt="" className="points-earn-tasks__rule-example" src={flightExample} />
            </RuleStep>
          </div>
        </section>

        <footer className="points-earn-tasks__footer">
          <PointsBenefitBottomWatermark />
        </footer>
      </div>
      <IPhoneFooter className="points-earn-tasks__iphone-footer" transparent />
    </main>
  )
}
