import travelServiceBg from '../../assets/flight-form/travel-service-bg.png'
import travelServiceTitle from '../../assets/flight-form/travel-service-title.svg'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneBar } from '../common/IPhoneBar'
import { IPhoneFooter } from '../common/IPhoneFooter'
import { PriceDisplay } from '../common/PriceDisplay'
import './flight-form.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function FlightFormIcon({ className, name }) {
  return (
    <GlobalStyleIcon
      className={className}
      name={name}
    />
  )
}

function Divider({ className }) {
  return <span className={cx('flight-form-divider', className)} />
}

function SelectBox({ checked = false }) {
  return (
    <span className={cx('flight-form-select-box', checked && 'flight-form-select-box--checked')}>
      {checked ? (
        <FlightFormIcon
          className="flight-form-select-box__icon"
          name="icon/status/check/filled"
        />
      ) : null}
    </span>
  )
}

export function FlightFormBackground({ className }) {
  return <div className={cx('flight-form-background', className)} />
}

export function FlightFormTopNav({ nav }) {
  return (
    <header className="flight-form-top">
      <IPhoneBar
        className="flight-form-top__statusbar"
        transparent
      />
      <div className="flight-form-top__bar">
        <button
          aria-label="返回"
          className="flight-form-top__back"
          type="button"
        >
          <FlightFormIcon
            className="flight-form-top__back-icon"
            name="icon/directional/chevron-left-large/outlined"
          />
        </button>
        <h1>{nav.title}</h1>
      </div>
    </header>
  )
}

export function FlightFormNotice({ notice }) {
  return (
    <button
      className="flight-form-notice"
      type="button"
    >
      <FlightFormIcon
        className="flight-form-notice__icon"
        name={notice.iconName}
      />
      <span>{notice.text}</span>
      <FlightFormIcon
        className="flight-form-notice__arrow"
        name="icon/directional/chevron-right-small/outlined"
      />
    </button>
  )
}

export function FlightFormFlightCard({ flight }) {
  return (
    <section className="flight-form-flight-card">
      <div className="flight-form-flight-card__header">
        <div className="flight-form-flight-card__title">
          <span>{flight.badge}</span>
          <strong>{flight.route}</strong>
          <em>{flight.date}</em>
        </div>
        <button
          className="flight-form-link"
          type="button"
        >
          {flight.detailsLabel}
        </button>
      </div>

      <div className="flight-form-flight-card__price-row">
        {flight.prices.map((item, index) => (
          <div
            className="flight-form-flight-card__price-item"
            key={item.label}
          >
            <span>{item.label}</span>
            <strong>{item.price}</strong>
            {index < flight.prices.length - 1 ? (
              <FlightFormIcon
                className="flight-form-flight-card__plus"
                name="icon/action/add/outlined"
              />
            ) : null}
          </div>
        ))}
      </div>

      <button
        className="flight-form-flight-card__rule"
        type="button"
      >
        <span>{flight.ruleLabel}</span>
        <FlightFormIcon
          className="flight-form-flight-card__rule-icon"
          name="icon/directional/chevron-right-small/outlined"
        />
      </button>
    </section>
  )
}

function FlightFormFieldRow({ row, required }) {
  return (
    <div className="flight-form-field-row">
      <span className="flight-form-field-row__label">
        {required ? <i>*</i> : null}
        {row.label}
      </span>
      {row.prefix ? <span className="flight-form-field-row__prefix">{row.prefix}</span> : null}
      <span className={cx('flight-form-field-row__value', row.placeholder && 'flight-form-field-row__value--placeholder')}>
        {row.value}
      </span>
      {row.action ? (
        <button
          className="flight-form-link"
          type="button"
        >
          {row.action}
        </button>
      ) : null}
    </div>
  )
}

export function FlightFormPassengerCard({ passenger }) {
  return (
    <section className="flight-form-passenger-card">
      <h2>{passenger.title}</h2>
      <Divider />

      <div className="flight-form-passenger-card__person">
        <div>
          <div className="flight-form-passenger-card__name">
            <span>{passenger.name}</span>
            <FlightFormIcon
              className="flight-form-passenger-card__edit"
              name="icon/action/edit/outlined"
            />
          </div>
          <p>{passenger.idLabel}</p>
        </div>
        <SelectBox checked />
      </div>

      <button
        className="flight-form-passenger-card__select"
        type="button"
      >
        <FlightFormIcon
          className="flight-form-passenger-card__select-icon"
          name="icon/action/add-circle/filled"
        />
        {passenger.selectLabel}
      </button>

      <div className="flight-form-passenger-card__fields">
        {passenger.requiredFields.map((row) => (
          <FlightFormFieldRow
            key={row.label}
            required
            row={row}
          />
        ))}
        {passenger.optionalFields.map((row) => (
          <FlightFormFieldRow
            key={row.label}
            row={row}
          />
        ))}
      </div>

      <p className="flight-form-passenger-card__tips">{passenger.tips}</p>
    </section>
  )
}

function ProtectionIcon({ selected }) {
  return (
    <span className={cx('flight-form-protection-icon', selected && 'flight-form-protection-icon--selected')}>
      <FlightFormIcon
        className="flight-form-protection-icon__mark"
        name="icon/status/check/filled"
      />
    </span>
  )
}

function ProtectionOption({ option }) {
  return (
    <article className={cx('flight-form-protection-option', option.selected && 'flight-form-protection-option--selected')}>
      <div className="flight-form-protection-option__title">
        <ProtectionIcon selected={option.selected} />
        <strong>{option.title}</strong>
      </div>
      <div className="flight-form-protection-option__features">
        {option.features.map((feature) => (
          <span key={feature}>
            <FlightFormIcon
              className="flight-form-protection-option__check"
              name="icon/status/check/filled"
            />
            {feature}
          </span>
        ))}
      </div>
      <div className="flight-form-protection-option__bottom">
        <span>{option.price}</span>
        <em>/人</em>
        <SelectBox checked={option.selected} />
      </div>
    </article>
  )
}

export function FlightFormTravelService({ service }) {
  return (
    <section className="flight-form-travel-service">
      <img
        alt=""
        className="flight-form-travel-service__bg"
        src={travelServiceBg}
      />
      <div className="flight-form-travel-service__heading">
        <img
          alt={service.title}
          className="flight-form-travel-service__title-image"
          src={travelServiceTitle}
        />
        <span>{service.subtitle}</span>
      </div>

      <div className="flight-form-travel-service__panel">
        <div className="flight-form-travel-service__panel-header">
          <div className="flight-form-travel-service__panel-title">
            <strong>{service.insurance.title}</strong>
            <FlightFormIcon
              className="flight-form-travel-service__info"
              name="icon/status/info-circle/outlined"
            />
          </div>
          <div className="flight-form-travel-service__panel-price">
            <span>{service.insurance.price}</span>
            <em>{service.insurance.unit}</em>
            <SelectBox checked />
          </div>
        </div>

        <div className="flight-form-travel-service__recommend">
          <span>{service.insurance.recommendTag}</span>
          <p>{service.insurance.recommendText}</p>
        </div>

        <div className="flight-form-protection-list">
          {service.insurance.options.map((option) => (
            <ProtectionOption
              key={option.title}
              option={option}
            />
          ))}
        </div>

        <div className="flight-form-travel-service__rows">
          {service.rows.map((row) => (
            <div
              className="flight-form-travel-service__row"
              key={row.title}
            >
              <div>
                <strong>{row.title}</strong>
                <FlightFormIcon
                  className="flight-form-travel-service__row-info"
                  name="icon/status/info-circle/outlined"
                />
              </div>
              <p>{row.description}</p>
              <span>{row.price}</span>
              <SelectBox />
            </div>
          ))}
        </div>

        <p className="flight-form-travel-service__footer">{service.footerText}</p>
      </div>
    </section>
  )
}

export function FlightFormInfoCard({ card }) {
  return (
    <section className="flight-form-info-card">
      <h2>{card.title}</h2>
      <Divider />
      <div className="flight-form-info-card__rows">
        {card.rows.map((row) => (
          <div
            className="flight-form-info-card__row"
            key={row.label}
          >
            <span className="flight-form-info-card__label">{row.label}</span>
            <span className={cx('flight-form-info-card__value', row.placeholder && 'flight-form-info-card__value--placeholder')}>
              {row.value || ' '}
            </span>
            {row.actionable ? (
              <FlightFormIcon
                className="flight-form-info-card__chevron"
                name="icon/directional/chevron-right-small/outlined"
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export function FlightFormAgreementBar({ agreement }) {
  return (
    <div className="flight-form-agreement">
      <SelectBox />
      <p>
        <span>{agreement.prefix}</span>
        <a href="#common-bottom-watermark">{agreement.links}</a>
      </p>
    </div>
  )
}

export function FlightFormSubmitBar({ submit }) {
  return (
    <div className="flight-form-submit">
      <div className="flight-form-submit__content">
        <div className="flight-form-submit__pay">
          <span>{submit.payLabel}</span>
          <PriceDisplay
            amount={submit.amount}
            className="flight-form-submit__price"
          />
        </div>
        <div className="flight-form-submit__actions">
          <button
            className="flight-form-submit__detail"
            type="button"
          >
            {submit.detailLabel}
            <FlightFormIcon
              className="flight-form-submit__detail-icon"
              name="icon/directional/caret-up/filled"
            />
          </button>
          <button
            className="flight-form-submit__button"
            type="button"
          >
            {submit.buttonLabel}
          </button>
        </div>
      </div>
      <IPhoneFooter className="flight-form-submit__footer" />
    </div>
  )
}

export function FlightFormBottomDock({ agreement, submit }) {
  return (
    <div className="flight-form-bottom-dock">
      <FlightFormAgreementBar agreement={agreement} />
      <FlightFormSubmitBar submit={submit} />
    </div>
  )
}

export function FlightFormPreviewFrame({ data }) {
  return (
    <div className="flight-form-preview">
      <div className="flight-form-shell">
        <FlightFormBackground />
        <FlightFormTopNav nav={data.nav} />
        <main className="flight-form-main">
          <FlightFormNotice notice={data.notice} />
          <FlightFormFlightCard flight={data.flight} />
          <FlightFormPassengerCard passenger={data.passenger} />
          <FlightFormTravelService service={data.travelService} />
          {data.formCards.map((card) => (
            <FlightFormInfoCard
              card={card}
              key={card.title}
            />
          ))}
        </main>
        <FlightFormBottomDock
          agreement={data.agreement}
          submit={data.submit}
        />
      </div>
    </div>
  )
}
