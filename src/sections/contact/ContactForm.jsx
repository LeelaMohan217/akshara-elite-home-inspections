import { useState } from 'react'
import { FaCircleExclamation, FaWhatsapp } from 'react-icons/fa6'
import contactPage from '../../data/contactPage'
import prices from '../../data/prices'
import services from '../../data/services'
import siteInfo from '../../data/siteInfo'
import { validatedFields, validateField } from '../../utils/validateContact'
import { whatsappLink } from '../../utils/whatsapp'
import Select from '../../components/Select'

const homeTypes = prices.plans.map((plan) => plan.name)
const serviceTitles = services.map((service) => service.title)

const inputBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-base text-body transition-colors placeholder:text-neutral-400 focus:outline-none focus:ring-1'

function inputClasses(hasError) {
  return `${inputBase} ${
    hasError
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : 'border-border focus:border-accent focus:ring-accent'
  }`
}

function Field({ id, label, optional, error, className = '', children }) {
  const { form } = contactPage
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {optional && <span className="ml-1 font-normal text-muted">({form.optional})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-sm text-red-600">
          <FaCircleExclamation className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          {form.errors[error]}
        </p>
      )}
    </div>
  )
}

// Props that tie an input to its error message for screen readers.
function errorProps(id, error) {
  return {
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${id}-error` : undefined,
  }
}

// There's no server behind the form: submitting opens a WhatsApp chat with the
// details written out, so nothing ends up in the page URL.
function openWhatsApp(data) {
  const { form } = contactPage
  const lines = [
    siteInfo.whatsappMessage,
    '',
    `${form.name}: ${data.get('name')}`,
    `${form.phone}: ${data.get('phone')}`,
  ]
  for (const key of ['email', 'homeType', 'service', 'message']) {
    const value = data.get(key)?.trim()
    if (value) lines.push(`${form[key]}: ${value}`)
  }
  window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
}

function ContactForm() {
  const { form } = contactPage
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const setFieldError = (field, value) =>
    setErrors((current) => ({ ...current, [field]: validateField(field, value) }))

  // Check a field when the visitor leaves it, then live as they fix it.
  const handleBlur = (event) => {
    const { name, value } = event.target
    if (!validatedFields.includes(name)) return
    setTouched((current) => ({ ...current, [name]: true }))
    setFieldError(name, value)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    if (touched[name]) setFieldError(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formEl = event.currentTarget
    const data = new FormData(formEl)
    const nextErrors = Object.fromEntries(
      validatedFields.map((field) => [field, validateField(field, data.get(field) ?? '')]),
    )
    setErrors(nextErrors)
    setTouched(Object.fromEntries(validatedFields.map((field) => [field, true])))

    const firstInvalid = validatedFields.find((field) => nextErrors[field])
    if (firstInvalid) {
      formEl.elements[firstInvalid]?.focus()
      return
    }
    openWhatsApp(data)
  }

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-accent/10 sm:p-10">
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{form.heading}</h2>
      <p className="mt-3 text-base leading-relaxed text-description">{form.description}</p>

      <form
        noValidate
        onSubmit={handleSubmit}
        onBlur={handleBlur}
        onChange={handleChange}
        className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        <Field id="name" label={form.name} error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            className={inputClasses(errors.name)}
            {...errorProps('name', errors.name)}
          />
        </Field>
        <Field id="phone" label={form.phone} error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={20}
            placeholder="98765 43210"
            className={inputClasses(errors.phone)}
            {...errorProps('phone', errors.phone)}
          />
        </Field>
        <Field id="email" label={form.email} optional error={errors.email} className="sm:col-span-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={120}
            className={inputClasses(errors.email)}
            {...errorProps('email', errors.email)}
          />
        </Field>
        <Field id="homeType" label={form.homeType} optional>
          <Select
            id="homeType"
            name="homeType"
            options={homeTypes}
            placeholder={form.selectPlaceholder}
          />
        </Field>
        <Field id="service" label={form.service} optional>
          <Select
            id="service"
            name="service"
            options={serviceTitles}
            placeholder={form.selectPlaceholder}
          />
        </Field>
        <Field id="message" label={form.message} optional error={errors.message} className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={form.messagePlaceholder}
            className={inputClasses(errors.message)}
            {...errorProps('message', errors.message)}
          />
        </Field>

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:gap-5">
          <button
            type="submit"
            className="group inline-flex shrink-0 items-center justify-between gap-4 self-start whitespace-nowrap rounded-full bg-accent py-2 pl-6 pr-2 text-base font-medium text-white transition-colors hover:bg-accent-hover"
          >
            {form.submitLabel}
            <span className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white">
              <FaWhatsapp className="size-5" aria-hidden="true" />
            </span>
          </button>
          <p className="text-sm text-muted">{form.note}</p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
