function LogoMark({ className = 'h-[0.9em] w-auto' }) {
  return (
    <svg
      viewBox="18 20 80 68"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 18,88
           L 49.32,25.37 Q 52,20 58,20
           L 62,20 Q 68,20 68,26
           L 68,52 Q 68,58 62,58
           L 44,58 Q 38,58 38,64
           L 38,82 Q 38,88 32,88
           Z"
        className="fill-accent"
      />
      <rect x="68" y="58" width="30" height="30" rx="6" className="fill-accent" />
    </svg>
  )
}

export default LogoMark
