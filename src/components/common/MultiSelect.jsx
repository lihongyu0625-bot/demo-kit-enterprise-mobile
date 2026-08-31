import './common.css'

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

export function MultiSelect({
  checked = false,
  disabled = false,
  tone = 'brand',
  className,
  label = '多选',
}) {
  return (
    <span
      aria-checked={checked}
      aria-disabled={disabled || undefined}
      aria-label={label}
      className={cx(
        'common-multi-select',
        tone === 'dark' && 'common-multi-select--dark',
        checked && 'common-multi-select--checked',
        disabled && 'common-multi-select--disabled',
        className,
      )}
      role="checkbox"
      tabIndex={disabled ? -1 : 0}
    >
      {checked ? <span className="common-multi-select__mark" /> : null}
    </span>
  )
}
