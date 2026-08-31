import memberImage from '../../assets/car-payment-complete/member.png'
import pointsImage from '../../assets/car-payment-complete/points.png'
import ratingCardImage from '../../assets/car-payment-complete/rating-card.png'
import {
  CarPaymentMapStage,
  CarPaymentOrderDetails,
  CarPaymentPolicyBar,
  CarPaymentSummary,
  CarPaymentTopChrome,
  CarPaymentFloatingSafety,
} from './CarPaymentComponents'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './car-payment-complete.css'

export function CarPaymentRatingCard() {
  return (
    <div className="car-payment-complete-rating-card">
      <img
        alt=""
        src={ratingCardImage}
      />
    </div>
  )
}

function RewardItem({ image, label, prefix, amount }) {
  return (
    <article className="car-payment-complete-reward">
      <div>
        <p>{label}</p>
        <span>{prefix}</span>
        <strong>{amount}</strong>
        <GlobalStyleIcon
          className="car-payment-complete-reward__icon"
          name="icon/directional/chevron-right-small/outlined"
        />
      </div>
      <img
        alt=""
        src={image}
      />
    </article>
  )
}

export function CarPaymentRewardBenefits({ rewards }) {
  return (
    <div className="car-payment-complete-rewards">
      <RewardItem
        amount={rewards.memberAmount}
        image={memberImage}
        label={rewards.memberLabel}
        prefix={rewards.memberPrefix}
      />
      <RewardItem
        amount={rewards.pointsAmount}
        image={pointsImage}
        label={rewards.pointsLabel}
        prefix={rewards.pointsPrefix}
      />
    </div>
  )
}

export function CarPaymentExpenseAction({ label }) {
  return (
    <button
      className="car-payment-complete-expense"
      type="button"
    >
      <GlobalStyleIcon
        className="car-payment-complete-expense__icon"
        name="icon/finance/currency-circle/outlined"
      />
      <span>{label}</span>
    </button>
  )
}

export function CarPaymentCompleteCard({ payment, policy, rewards }) {
  return (
    <section className="car-payment-card car-payment-complete-card">
      <CarPaymentPolicyBar label={policy.label} />
      <div className="car-payment-card__body car-payment-complete-card__body">
        <CarPaymentSummary payment={payment} />
        <div className="car-payment-complete-details">
          <CarPaymentOrderDetails payment={payment} />
          <CarPaymentRewardBenefits rewards={rewards} />
        </div>
        <CarPaymentExpenseAction label={rewards.expenseLabel} />
      </div>
    </section>
  )
}

export function CarPaymentCompletePanel({ data }) {
  return (
    <main className="car-payment-complete-panel">
      <CarPaymentFloatingSafety />
      <CarPaymentRatingCard />
      <CarPaymentCompleteCard
        payment={data.payment}
        policy={data.policy}
        rewards={data.rewards}
      />
    </main>
  )
}

export function CarPaymentCompletePreviewFrame({ data }) {
  return (
    <div className="car-payment-shell car-payment-complete-shell">
      <CarPaymentMapStage route={data.route} />
      <CarPaymentTopChrome />
      <CarPaymentCompletePanel data={data} />
      <IPhoneFooter className="car-payment-footer" transparent />
    </div>
  )
}
