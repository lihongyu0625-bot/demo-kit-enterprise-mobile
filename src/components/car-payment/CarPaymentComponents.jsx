import enterprisePayImage from '../../assets/car-payment/enterprise-pay.png'
import routeImage from '../../assets/car-payment/route.svg'
import mapBackgroundImage from '../../assets/car-pickup/map-background.png'
import safetyCenterIcon from '../../assets/car-location-input/safety-center-icon.svg'
import { CarPaymentActionCapsule } from '../car-common/CarPaymentActionCapsule'
import { DirectionalIcon } from '../common/DirectionalIcon'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './car-payment.css'

export function CarPaymentTopChrome() {
  return (
    <>
      <IPhoneBar
        className="car-payment-statusbar"
        transparent
      />
      <button
        aria-label="返回"
        className="car-payment-back"
        type="button"
      >
        <DirectionalIcon
          className="car-payment-back__icon"
          name="icon/directional/arrow-left/filled"
        />
      </button>
    </>
  )
}

export function CarPaymentRouteOverlay({ route }) {
  return (
    <section className="car-payment-route" aria-label="用车路线">
      <img
        alt=""
        className="car-payment-route__path"
        src={routeImage}
      />
      <div className="car-payment-route__pin car-payment-route__pin--origin">
        <span />
      </div>
      <p className="car-payment-route__label car-payment-route__label--origin">{route.origin}</p>
      <div className="car-payment-route__pin car-payment-route__pin--destination">
        <span />
      </div>
      <p className="car-payment-route__label car-payment-route__label--destination">{route.destination}</p>
    </section>
  )
}

export function CarPaymentMapStage({ route }) {
  return (
    <section className="car-payment-map-stage">
      <img
        alt=""
        className="car-payment-map-stage__image"
        src={mapBackgroundImage}
      />
      <div className="car-payment-map-stage__mask" />
      <CarPaymentRouteOverlay route={route} />
    </section>
  )
}

export function CarPaymentFloatingSafety() {
  return (
    <button
      aria-label="安全中心"
      className="car-payment-floating-safety"
      type="button"
    >
      <img
        alt=""
        src={safetyCenterIcon}
      />
    </button>
  )
}

export function CarPaymentPolicyBar({ label }) {
  return (
    <button
      className="car-payment-policy"
      type="button"
    >
      <span>{label}</span>
      <DirectionalIcon
        className="car-payment-policy__icon"
        name="icon/directional/chevron-right-small/outlined"
      />
    </button>
  )
}

export function CarPaymentSummary({ payment }) {
  return (
    <div className="car-payment-summary">
      <p>{payment.actualLabel}</p>
      <div className="car-payment-summary__amount">
        <img
          alt=""
          src={enterprisePayImage}
        />
        <strong>{payment.actualAmount}</strong>
        <span>元</span>
      </div>
    </div>
  )
}

export function CarPaymentOrderDetails({ payment }) {
  return (
    <div className="car-payment-order-details">
      <div className="car-payment-order-details__row">
        <span>{payment.orderTotalLabel}</span>
        <div>
          <strong>{payment.orderTotalAmount}</strong>
          <span>元</span>
        </div>
      </div>
      <div className="car-payment-order-details__row car-payment-order-details__row--discount">
        <div className="car-payment-order-details__discount-label">
          <span>{payment.discountLabel}</span>
          <GlobalStyleIcon
            className="car-payment-order-details__info-icon"
            name="icon/status/info-circle/outlined"
          />
        </div>
        <div>
          <strong>{payment.discountAmount}</strong>
          <span>元</span>
        </div>
      </div>
    </div>
  )
}

export function CarPaymentActions({ payment }) {
  return (
    <div className="car-payment-actions">
      <button
        className="car-payment-action"
        type="button"
      >
        <GlobalStyleIcon
          className="car-payment-action__icon"
          name="icon/finance/currency-circle/outlined"
        />
        <span>费用明细</span>
      </button>
      <span className="car-payment-actions__divider" />
      <button
        className="car-payment-action"
        type="button"
      >
        <GlobalStyleIcon
          className="car-payment-action__icon"
          name="icon/directional/swap/outlined"
        />
        <span>{payment.personalAction}</span>
      </button>
    </div>
  )
}

export function CarPaymentSubmitBar({ payment }) {
  return (
    <CarPaymentActionCapsule
      action={payment.confirmLabel}
      amount={payment.actualAmount}
      className="car-payment-submit"
      payType={payment.enterpriseLabel}
      variant="compact"
    />
  )
}

export function CarPaymentCard({ payment, policy }) {
  return (
    <section className="car-payment-card">
      <CarPaymentPolicyBar label={policy.label} />
      <div className="car-payment-card__body">
        <CarPaymentSummary payment={payment} />
        <CarPaymentOrderDetails payment={payment} />
        <CarPaymentActions payment={payment} />
        <CarPaymentSubmitBar payment={payment} />
        <p className="car-payment-card__hint">{payment.autoPayHint}</p>
      </div>
    </section>
  )
}

export function CarPaymentPanel({ data }) {
  return (
    <main className="car-payment-panel">
      <CarPaymentFloatingSafety />
      <CarPaymentCard
        payment={data.payment}
        policy={data.policy}
      />
    </main>
  )
}

export function CarPaymentPreviewFrame({ data }) {
  return (
    <div className="car-payment-shell">
      <CarPaymentMapStage route={data.route} />
      <CarPaymentTopChrome />
      <CarPaymentPanel data={data} />
      <IPhoneFooter className="car-payment-footer" transparent />
    </div>
  )
}
