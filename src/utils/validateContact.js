// Validation rules for the Contact page booking form. Each rule returns an
// error key from contactPage.form.errors, or null when the value is fine.

export const MESSAGE_MAX_LENGTH = 1000

const NAME_PATTERN = /^[\p{L}][\p{L}\s.'-]*$/u
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Indian mobile: 10 digits starting 6–9, optionally prefixed with +91, 91 or 0.
// International: a leading + followed by 8–15 digits.
export function isValidPhone(raw) {
  const value = raw.replace(/[\s()-]/g, '')
  if (/^(\+91|91|0)?[6-9]\d{9}$/.test(value)) return true
  return /^\+\d{8,15}$/.test(value)
}

const rules = {
  name(value) {
    const name = value.trim()
    if (!name) return 'nameRequired'
    if (name.replace(/[^\p{L}]/gu, '').length < 2 || !NAME_PATTERN.test(name)) {
      return 'nameInvalid'
    }
    return null
  },
  phone(value) {
    if (!value.trim()) return 'phoneRequired'
    return isValidPhone(value) ? null : 'phoneInvalid'
  },
  email(value) {
    const email = value.trim()
    return email && !EMAIL_PATTERN.test(email) ? 'emailInvalid' : null
  },
  message(value) {
    return value.length > MESSAGE_MAX_LENGTH ? 'messageTooLong' : null
  },
}

export const validatedFields = Object.keys(rules)

export function validateField(field, value = '') {
  return rules[field]?.(value) ?? null
}
