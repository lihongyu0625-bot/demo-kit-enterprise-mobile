import { AiFlightCard, AiTrainCard } from './AiTransitCard'
import { AiHotelCard } from './AiHotelCard'
import mockData from '../../mock-data/trip-page.mock.json'
import './trip-page.css'

/* ===== AI 推荐卡片状态总览（Figma 2789:27823）：机票6态 / 火车票5态 / 酒店3态 纵列 ===== */
export function AiCardsShowcase({ kind }) {
  const showcaseMap = {
    flight: { base: mockData.aiFlight, variants: mockData.aiFlightVariants, Card: AiFlightCard },
    train: { base: mockData.aiTrain, variants: mockData.aiTrainVariants, Card: AiTrainCard },
    hotel: { base: mockData.aiHotel, variants: mockData.aiHotelVariants, Card: AiHotelCard },
  }
  const { base, variants, Card } = showcaseMap[kind]

  return (
    <div className="trip-page__ai-showcase">
      {variants.map((variant) => (
        <div className="trip-page__ai-showcase-item" key={variant.label}>
          <p className="trip-page__ai-showcase-label">{variant.label}</p>
          <Card data={{ ...base, ...variant.data }} />
        </div>
      ))}
    </div>
  )
}
