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

function RightChevron() {
  return <span className="hotel-chevron">›</span>
}

function DownChevron() {
  return <span className="hotel-chevron hotel-chevron--down">⌄</span>
}

function DotSeparator() {
  return <span className="hotel-dot-separator" />
}

function StatusBadge({ type, text }) {
  return (
    <span className={cx('status-badge', `status-badge--${type}`)}>
      <span className="status-badge__icon">{type === 'warning' ? '⊘' : '✓'}</span>
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
            <span>{item}</span>
          </p>
        ))}
      </div>
      <button className="notes-link__action" type="button">
        订房必读
        <RightChevron />
      </button>
    </div>
  )
}

function FieldRow({
  label,
  value,
  muted,
  detail,
  leading,
  trailing = <RightChevron />,
}) {
  return (
    <div className="field-row">
      <p className="field-row__label">{label}</p>
      <div className="field-row__value-wrap">
        {leading ? <div className="field-row__leading">{leading}</div> : null}
        <div className="field-row__copy">
          <p className={cx('field-row__value', muted && 'field-row__value--muted')}>
            {value}
          </p>
          {detail ? <p className="field-row__detail">{detail}</p> : null}
        </div>
        {trailing}
      </div>
    </div>
  )
}

function CounterPill({ value }) {
  return (
    <div className="counter-pill">
      <button className="icon-button icon-button--soft" type="button" aria-label="减少">
        −
      </button>
      <span className="counter-pill__value">{value}间</span>
      <button className="icon-button icon-button--soft" type="button" aria-label="增加">
        +
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
    <header className="hotel-nav">
      <div className="hotel-statusbar">
        <span className="hotel-statusbar__time">9:41</span>
        <div className="hotel-statusbar__icons" aria-hidden="true">
          <span>◔</span>
          <span>◒</span>
          <span>▮</span>
        </div>
      </div>
      <div className="hotel-toolbar">
        <button className="hotel-toolbar__back" type="button" aria-label="返回">
          ‹
        </button>
        <p className="hotel-toolbar__title">{title}</p>
        <button className="hotel-toolbar__action" type="button">
          {actionLabel}
        </button>
      </div>
    </header>
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
            <RightChevron />
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
          <p className="tiny-tip">
            <span className="tiny-tip__icon">i</span>
            {stayInfo.priceNotice}
          </p>
        </div>
      </div>
      <CardDivider />
      <FieldRow label="预计到店" value={stayInfo.arrivalPlaceholder} />
      <CardDivider />
      <FieldRow label="住客备注" value={stayInfo.remarkPlaceholder} muted />
      <CardDivider />
      <div className="switch-row">
        <div className="switch-row__copy">
          <p className="field-row__value field-row__value--strong">
            {stayInfo.confirmSmsTitle}
          </p>
          <p className="field-row__detail">{stayInfo.confirmSmsHint}</p>
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
      <FieldRow
        label="联系电话"
        value={contactInfo.phonePlaceholder}
        muted
        leading={
          <button className="country-code" type="button">
            {contactInfo.countryCode}
            <DownChevron />
          </button>
        }
      />
      <CardDivider />
      <FieldRow
        label="电子邮箱"
        value={contactInfo.emailPlaceholder}
        muted
        detail="(选填)"
        trailing={null}
      />
    </CardShell>
  )
}

export function HotelApprovalInfoCard({ approvalInfo }) {
  return (
    <CardShell title="审批信息" subtitle={approvalInfo.hint}>
      <CardDivider />
      <FieldRow label="审批人" value={approvalInfo.approverPlaceholder} muted />
    </CardShell>
  )
}

export function HotelCostCenterCard({ costCenter }) {
  return (
    <CardShell title="费用归属">
      <CardDivider />
      <FieldRow label="成本中心" value={costCenter.placeholder} muted />
    </CardShell>
  )
}

export function HotelTripNoteCard({ tripNote }) {
  return (
    <CardShell title="出行备注">
      <CardDivider />
      <FieldRow label="出行目的" value={tripNote.purposePlaceholder} muted />
      <CardDivider />
      <div className="field-row">
        <p className="field-row__label">出行描述</p>
        <p className="field-row__value field-row__value--muted field-row__value--fill">
          {tripNote.descriptionPlaceholder}
        </p>
      </div>
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
            <button className="icon-button" type="button" aria-label="减少">
              −
            </button>
            <span className="benefit-item__counter-value">{item.quantity}</span>
            <button className="icon-button" type="button" aria-label="增加">
              +
            </button>
          </div>
        ) : (
          <Checkbox checked={item.checked} />
        )}
      </div>
      <p className="micro-copy">{item.description}</p>
    </div>
  )
}

export function HotelBenefitCard({ benefits }) {
  return (
    <CardShell title={benefits.title} highlight>
      <div className="benefit-section">
        <div className="benefit-section__heading">
          <p className="benefit-section__title">{benefits.optionalBenefitsTitle}</p>
          <button className="subtle-link-button" type="button">
            {benefits.allLabel}
            <RightChevron />
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
          {benefits.giftValue}
          <RightChevron />
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
            <span className="detail-button__caret">⌃</span>
          </button>
          <button className="primary-button" type="button">
            {payment.buttonLabel}
          </button>
        </div>
      </div>
      <div className="submit-bar__home-indicator" />
    </div>
  )
}
