function MenuButton({ open, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {open ? (
          <path d="M4 4l14 14M18 4L4 18" />
        ) : (
          <path d="M2 6h18M2 11h18M2 16h18" />
        )}
      </svg>
    </button>
  )
}

export default MenuButton
