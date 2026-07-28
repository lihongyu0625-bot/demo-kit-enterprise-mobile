import { MobileNavBar } from '../common/MobileNavBar'
import { DirectionalIcon } from '../common/DirectionalIcon'
import { GlobalStyleIcon } from '../common/GlobalStyleIcon'
import { IPhoneFooter } from '../common/IPhoneFooter'
import './hotel-form.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function CardDivider() {
  return <div className="hotel-divider" />
}

function CardShell({ title, subtitle, highlight, headerRight, children }) {
  const hasHeader = title || subtitle || headerRight

  return (
    <section className={cx('hotel-card', highlight && 'hotel-card--highlight')}>
      {hasHeader ? (
        <div className="hotel-card__header">
          <div className="hotel-card__header-copy">
            {title ? <h3 className="hotel-card__title">{title}</h3> : null}
            {subtitle ? <p className="hotel-card__subtitle">{subtitle}</p> : null}
          </div>
          {headerRight}
        </div>
      ) : null}
      {children}
    </section>
  )
}

function SmallRightChevron() {
  return (
    <DirectionalIcon
      className="hotel-chevron-icon hotel-chevron-icon--small"
      name="icon/directional/chevron-right-small/outlined"
    />
  )
}

function GrayRightChevron() {
  return (
    <DirectionalIcon
      className="hotel-chevron-icon hotel-chevron-icon--field"
      name="icon/directional/chevron-right-small/outlined"
    />
  )
}

function GrayDownChevron() {
  return (
    <DirectionalIcon
      className="hotel-chevron-icon hotel-chevron-icon--field"
      name="icon/directional/chevron-down-small/outlined"
    />
  )
}

function DotSeparator() {
  return <span className="hotel-dot-separator" />
}

function StatusBadge({ type, text }) {
  const iconName = type === 'warning'
    ? 'icon/status/prohibited-circle/outlined'
    : 'icon/status/success-circle/outlined'

  return (
    <span className={cx('status-badge', `status-badge--${type}`)}>
      <GlobalStyleIcon
        className="status-badge__icon"
        name={iconName}
      />
      {text}
    </span>
  )
}

function NotesLink({ items }) {
  return (
    <div className="notes-link">
      <div className="notes-link__list">
        {items.map((item) => (
          <p key={item} className="notes-link__item">
            <span className="notes-link__bullet" />
            <span className="notes-link__text">{item}</span>
          </p>
        ))}
      </div>
      <button className="notes-link__action" type="button">
        订房必读
        <SmallRightChevron />
      </button>
    </div>
  )
}

function CounterPill({ value }) {
  return (
    <div className="counter-pill">
      <button className="counter-pill__button" type="button" aria-label="减少">
        <GlobalStyleIcon
          className="counter-pill__icon"
          name="icon/action/remove-circle/outlined"
        />
      </button>
      <span className="counter-pill__value">{value}间</span>
      <button className="counter-pill__button" type="button" aria-label="增加">
        <GlobalStyleIcon
          className="counter-pill__icon"
          name="icon/action/add-circle/outlined"
        />
      </button>
    </div>
  )
}

function ToggleSwitch({ checked }) {
  return (
    <span className={cx('toggle-switch', checked && 'toggle-switch--checked')}>
      <span className="toggle-switch__thumb" />
    </span>
  )
}

function StayFieldRow({ label, value, muted, strong }) {
  return (
    <div className="stay-field-row">
      <p className="stay-field-row__label">{label}</p>
      <div className="stay-field-row__value-wrap">
        <p
          className={cx(
            'stay-field-row__value',
            strong && 'stay-field-row__value--strong',
            muted && 'stay-field-row__value--muted',
          )}
        >
          {value}
        </p>
        <GrayRightChevron />
      </div>
    </div>
  )
}

function ContactPhoneRow({ label, countryCode, value }) {
  return (
    <div className="contact-field-row">
      <p className="contact-field-row__label">{label}</p>
      <div className="contact-field-row__value-wrap">
        <button className="contact-country-code" type="button">
          <span>{countryCode}</span>
          <GrayDownChevron />
        </button>
        <p className="contact-field-row__placeholder">{value}</p>
      </div>
    </div>
  )
}

function ContactEmailRow({ label, optionalText, value }) {
  return (
    <div className="contact-email-row">
      <div className="contact-email-row__label-group">
        <p className="contact-email-row__label">{label}</p>
        <p className="contact-email-row__optional">{optionalText}</p>
      </div>
      <p className="contact-email-row__placeholder">{value}</p>
    </div>
  )
}

function ApprovalFieldRow({ label, value }) {
  return (
    <div className="approval-field-row">
      <p className="approval-field-row__label">{label}</p>
      <div className="approval-field-row__value-wrap">
        <p className="approval-field-row__value">{value}</p>
        <GrayRightChevron />
      </div>
    </div>
  )
}

function PlainDescriptionRow({ label, value }) {
  return (
    <div className="plain-description-row">
      <p className="plain-description-row__label">{label}</p>
      <p className="plain-description-row__value">{value}</p>
    </div>
  )
}

function Checkbox({ checked }) {
  return (
    <span className={cx('checkbox', checked && 'checkbox--checked')}>
      {checked ? '✓' : ''}
    </span>
  )
}

function PriceDisplay({ amount }) {
  return (
    <div className="price-display">
      <span className="price-display__currency">¥</span>
      <span className="price-display__amount">{amount}</span>
    </div>
  )
}

export function HotelFormGradientBackground() {
  return <div className="hotel-form-gradient" />
}

export function HotelFormNavBar({ title, actionLabel }) {
  return (
    <MobileNavBar
      className="hotel-nav"
      title={title}
      showBackIcon
      showRightIcon={false}
      showRightText={Boolean(actionLabel)}
      rightText={actionLabel}
      transparent
    />
  )
}

export function HotelRoomInfoCard({ room }) {
  return (
    <CardShell
      title=""
      headerRight={null}
    >
      <div className="room-date-row">
        <div className="room-date-row__group">
          <span className="room-date-row__date">{room.checkIn}</span>
          <span className="room-date-row__week">{room.checkInWeekday}</span>
        </div>
        <span className="room-date-row__dash" />
        <div className="room-date-row__group room-date-row__group--wide">
          <span className="room-date-row__date">{room.checkOut}</span>
          <span className="room-date-row__week">{room.checkOutWeekday}</span>
          <span className="room-date-row__week">{room.nights}</span>
        </div>
      </div>

      <div className="room-summary">
        <div className="room-summary__heading">
          <h3 className="hotel-card__title hotel-card__title--medium">{room.title}</h3>
          <button className="link-button" type="button">
            {room.detailLabel}
            <SmallRightChevron />
          </button>
        </div>
        <div className="room-summary__tags">
          {room.features.map((item, index) => (
            <div className="room-summary__tag" key={item}>
              <span>{item}</span>
              {index < room.features.length - 1 ? <DotSeparator /> : null}
            </div>
          ))}
        </div>
        <div className="room-summary__policies">
          {room.policies.map((item) => (
            <StatusBadge key={item.text} type={item.type} text={item.text} />
          ))}
        </div>
      </div>

      <div className="hotel-divider hotel-divider--heavy" />
      <NotesLink items={room.readingNotes} />
    </CardShell>
  )
}

export function HotelStayInfoCard({ stayInfo }) {
  return (
    <CardShell
      title="入住信息"
      headerRight={<CounterPill value={stayInfo.roomCount} />}
    >
      <CardDivider />
      <div className="stay-guest-row">
        <div className="stay-guest-row__room-meta">
          <p className="field-row__label field-row__label--stacked">{stayInfo.guestRoom}</p>
          <p className="micro-copy">{stayInfo.capacity}</p>
        </div>
        <div className="stay-guest-row__guest-copy">
          <div className="stay-guest-row__guest-main">
            <span className="field-row__value field-row__value--strong">
              {stayInfo.guestName}
            </span>
            <span className="micro-copy">{stayInfo.guestPhone}</span>
          </div>
          <p className="tiny-tip tiny-tip--compact">
            <GlobalStyleIcon
              className="tiny-tip__icon-image"
              name="icon/status/info-circle/filled"
            />
            {stayInfo.priceNotice}
          </p>
        </div>
      </div>
      <CardDivider />
      <StayFieldRow label="预计到店" value={stayInfo.arrivalPlaceholder} strong />
      <CardDivider />
      <StayFieldRow label="住客备注" value={stayInfo.remarkPlaceholder} muted />
      <CardDivider />
      <div className="switch-row">
        <div className="switch-row__copy">
          <p className="field-row__value field-row__value--strong">
            {stayInfo.confirmSmsTitle}
          </p>
          <p className="switch-row__hint">{stayInfo.confirmSmsHint}</p>
        </div>
        <ToggleSwitch checked={stayInfo.confirmSmsEnabled} />
      </div>
    </CardShell>
  )
}

export function HotelContactInfoCard({ contactInfo }) {
  return (
    <CardShell title="联系信息">
      <CardDivider />
      <ContactPhoneRow
        label="联系电话"
        countryCode={contactInfo.countryCode}
        value={contactInfo.phonePlaceholder}
      />
      <CardDivider />
      <ContactEmailRow
        label="电子邮箱"
        optionalText="(选填)"
        value={contactInfo.emailPlaceholder}
      />
    </CardShell>
  )
}

export function HotelApprovalInfoCard({ approvalInfo }) {
  return (
    <CardShell>
      <div className="approval-card__header">
        <h3 className="approval-card__title">审批信息</h3>
        <p className="approval-card__hint">{approvalInfo.hint}</p>
      </div>
      <CardDivider />
      <ApprovalFieldRow label="审批人" value={approvalInfo.approverPlaceholder} />
    </CardShell>
  )
}

export function HotelCostCenterCard({ costCenter }) {
  return (
    <CardShell title="费用归属">
      <CardDivider />
      <ApprovalFieldRow label="成本中心" value={costCenter.placeholder} />
    </CardShell>
  )
}

export function HotelTripNoteCard({ tripNote }) {
  return (
    <CardShell title="出行备注">
      <CardDivider />
      <ApprovalFieldRow label="出行目的" value={tripNote.purposePlaceholder} />
      <CardDivider />
      <PlainDescriptionRow label="出行描述" value={tripNote.descriptionPlaceholder} />
    </CardShell>
  )
}

function BenefitItem({ item }) {
  return (
    <div className="benefit-item">
      <div className="benefit-item__top">
        <p className="benefit-item__title">{item.title}</p>
        {item.mode === 'counter' ? (
          <div className="benefit-item__counter">
            <button className="benefit-item__counter-button" type="button" aria-label="减少">
              <GlobalStyleIcon
                className="benefit-item__counter-icon"
                name="icon/action/remove-circle/outlined"
              />
            </button>
            <span className="benefit-item__counter-value">{item.quantity}</span>
            <button className="benefit-item__counter-button" type="button" aria-label="增加">
              <GlobalStyleIcon
                className="benefit-item__counter-icon"
                name="icon/action/add-circle/outlined"
              />
            </button>
          </div>
        ) : (
          <Checkbox checked={item.checked} />
        )}
      </div>
      <p className="benefit-item__description">{item.description}</p>
    </div>
  )
}

function GiftValueText({ value }) {
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/)

  if (!match) {
    return <span>{value}</span>
  }

  const [, prefix, highlight, suffix] = match

  return (
    <span className="gift-row__value-text">
      {prefix ? <span>{prefix}</span> : null}
      <span className="gift-row__value-highlight">{highlight}</span>
      {suffix ? <span>{suffix}</span> : null}
    </span>
  )
}

export function HotelBenefitCard({ benefits }) {
  return (
    <CardShell title={benefits.title} highlight>
      <div className="benefit-section">
        <div className="benefit-section__heading">
          <p className="benefit-section__title">{benefits.optionalBenefitsTitle}</p>
          <button className="subtle-link-button benefit-section__more" type="button">
            {benefits.allLabel}
            <span className="benefit-section__more-icon">
              <GrayRightChevron />
            </span>
          </button>
        </div>
        <div className="benefit-grid">
          {benefits.items.map((item) => (
            <BenefitItem item={item} key={item.title} />
          ))}
        </div>
      </div>
      <CardDivider />
      <div className="gift-row">
        <p className="benefit-section__title">{benefits.giftTitle}</p>
        <button className="gift-row__action" type="button">
          <GiftValueText value={benefits.giftValue} />
          <span className="gift-row__icon">
            <GrayRightChevron />
          </span>
        </button>
      </div>
    </CardShell>
  )
}

export function HotelInvoiceTipCard({ invoiceTip }) {
  return (
    <CardShell title="发票提示">
      <CardDivider />
      <p className="invoice-tip">{invoiceTip.text}</p>
    </CardShell>
  )
}

export function HotelTermsBar({ terms }) {
  return (
    <div className="terms-bar">
      <Checkbox checked={terms.checked} />
      <p className="terms-bar__text">
        <span>{terms.prefix}</span>
        <span className="terms-bar__links">{terms.links.join('')}</span>
      </p>
    </div>
  )
}

export function HotelSubmitBar({ payment }) {
  return (
    <div className="submit-bar">
      <div className="submit-bar__content">
        <div className="submit-bar__price-group">
          <p className="submit-bar__label">{payment.label}</p>
          <PriceDisplay amount={payment.amount} />
        </div>
        <div className="submit-bar__actions">
          <button className="detail-button" type="button">
            {payment.detailLabel}
            <DirectionalIcon
              className="detail-button__caret-icon"
              name="icon/directional/caret-up/filled"
            />
          </button>
          <button className="primary-button" type="button">
            {payment.buttonLabel}
          </button>
        </div>
      </div>
      <IPhoneFooter />
    </div>
  )
}
