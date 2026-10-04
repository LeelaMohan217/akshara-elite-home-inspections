import { useEffect, useId, useRef, useState } from 'react'
import { FaCheck, FaChevronDown } from 'react-icons/fa6'

// Styled dropdown (native <select> lists can't be styled). Follows the
// listbox pattern: arrows move, Enter/Space pick, Escape closes. The value
// is submitted with the form through a hidden input named `name`.
function Select({ id, name, options, placeholder, className = '' }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [active, setActive] = useState(-1)
  const rootRef = useRef(null)
  const listRef = useRef(null)
  const listId = useId()

  useEffect(() => {
    if (!open) return
    const close = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [open])

  // Keep the highlighted option in view while arrowing through a long list.
  useEffect(() => {
    if (open && active >= 0) {
      listRef.current?.children[active]?.scrollIntoView({ block: 'nearest' })
    }
  }, [open, active])

  const openList = () => {
    setActive(Math.max(0, options.indexOf(value)))
    setOpen(true)
  }

  const choose = (index) => {
    setValue(options[index])
    setOpen(false)
  }

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        event.preventDefault()
        if (!open) return openList()
        const step = event.key === 'ArrowDown' ? 1 : -1
        setActive((current) => (current + step + options.length) % options.length)
        break
      }
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (open && active >= 0) choose(active)
        else openList()
        break
      case 'Escape':
        if (open) {
          event.preventDefault()
          setOpen(false)
        }
        break
      case 'Tab':
        setOpen(false)
        break
      default:
    }
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <input type="hidden" name={name} value={value} />
      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open && active >= 0 ? `${listId}-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={handleKeyDown}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-3 text-left text-base transition-colors focus:outline-none focus:ring-1 focus:ring-accent ${
          open ? 'border-accent ring-1 ring-accent' : 'border-border focus:border-accent'
        }`}
      >
        <span className={`truncate ${value ? 'text-body' : 'text-neutral-400'}`}>
          {value || placeholder}
        </span>
        <FaChevronDown
          className={`size-3 shrink-0 text-muted transition-transform duration-300 ${open ? 'rotate-180 text-accent' : ''}`}
          aria-hidden="true"
        />
      </button>

      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-labelledby={id}
        className={`absolute inset-x-0 top-full z-20 mt-2 max-h-72 origin-top overflow-y-auto rounded-2xl border border-border bg-white p-1.5 shadow-2xl shadow-black/10 transition duration-200 ${
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
      >
        {options.map((option, index) => {
          const selected = option === value
          return (
            <li
              key={option}
              id={`${listId}-${index}`}
              role="option"
              aria-selected={selected}
              onPointerEnter={() => setActive(index)}
              onPointerDown={(event) => event.preventDefault()}
              onClick={() => choose(index)}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-base transition-colors ${
                index === active ? 'bg-accent/[0.06]' : ''
              } ${selected ? 'font-medium text-accent' : 'text-body'}`}
            >
              <span>{option}</span>
              {selected && <FaCheck className="size-3 shrink-0" aria-hidden="true" />}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Select
