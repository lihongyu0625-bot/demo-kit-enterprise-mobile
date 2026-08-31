import { CarCustomerServiceCard as CarPickupCustomerServiceCard } from '../car-common/CarCustomerServiceCard'
import {
  CarRideDistanceMarker,
  CarRideDriverCard,
  CarRideFloatingControls,
  CarRideMapStage,
  CarRideRouteOverlay,
  CarRideTopChrome,
} from '../car-common/CarRideStatusComponents'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './car-pickup.css'

export { CarPickupCustomerServiceCard }

export function CarPickupTopChrome() {
  return <CarRideTopChrome className="car-pickup" />
}

export function CarPickupDistanceMarker({ distance }) {
  return <CarRideDistanceMarker distance={distance} />
}

export function CarPickupRouteOverlay({ distance }) {
  return <CarRideRouteOverlay distance={distance} label="接驾路线" />
}

export function CarPickupMapStage({ distance }) {
  return <CarRideMapStage distance={distance} label="接驾路线" />
}

export function CarPickupFloatingControls() {
  return <CarRideFloatingControls className="car-pickup-floating" />
}

export function CarPickupDriverCard({ driver, actions }) {
  return (
    <CarRideDriverCard
      actions={actions}
      className="car-pickup-driver-card"
      driver={driver}
      variant="pickup"
    />
  )
}

export function CarPickupPanel({ data }) {
  return (
    <main className="car-pickup-panel">
      <CarPickupFloatingControls />
      <div className="car-pickup-panel__cards">
        <CarPickupDriverCard
          actions={data.actions}
          driver={data.driver}
        />
      </div>
      <CarPickupCustomerServiceCard service={data.service} />
    </main>
  )
}

export function CarPickupPreviewFrame({ data }) {
  return (
    <div className="car-pickup-shell">
      <CarPickupMapStage distance={data.distance} />
      <CarPickupTopChrome />
      <CarPickupPanel data={data} />
      <IPhoneFooter className="car-pickup-footer" transparent />
    </div>
  )
}
