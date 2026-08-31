import { CarCustomerServiceCard as CarSendCustomerServiceCard } from '../car-common/CarCustomerServiceCard'
import {
  CarRideDistanceMarker,
  CarRideDriverCard,
  CarRideFloatingControls,
  CarRideMapStage,
  CarRideNoticeBar,
  CarRideRouteOverlay,
  CarRideTopChrome,
} from '../car-common/CarRideStatusComponents'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './car-send.css'

export { CarSendCustomerServiceCard }

export function CarSendTopChrome() {
  return <CarRideTopChrome className="car-send" />
}

export function CarSendDistanceMarker({ distance }) {
  return <CarRideDistanceMarker distance={distance} />
}

export function CarSendRouteOverlay({ distance }) {
  return <CarRideRouteOverlay distance={distance} label="送驾路线" />
}

export function CarSendMapStage({ distance }) {
  return <CarRideMapStage distance={distance} label="送驾路线" />
}

export function CarSendFloatingControls() {
  return <CarRideFloatingControls className="car-send-floating" />
}

export function CarSendNoticeBar({ notice }) {
  return <CarRideNoticeBar className="car-send-notice" notice={notice} />
}

export function CarSendDriverCard({ driver, actions }) {
  return (
    <CarRideDriverCard
      actions={actions}
      className="car-send-driver-card"
      driver={driver}
      variant="send"
    />
  )
}

export function CarSendPanel({ data }) {
  return (
    <main className="car-send-panel">
      <CarSendFloatingControls />
      <CarSendNoticeBar notice={data.notice} />
      <div className="car-send-panel__cards">
        <CarSendDriverCard
          actions={data.actions}
          driver={data.driver}
        />
      </div>
      <CarSendCustomerServiceCard service={data.service} />
    </main>
  )
}

export function CarSendPreviewFrame({ data }) {
  return (
    <div className="car-send-shell">
      <CarSendMapStage distance={data.distance} />
      <CarSendTopChrome />
      <CarSendPanel data={data} />
      <IPhoneFooter className="car-send-footer" transparent />
    </div>
  )
}
