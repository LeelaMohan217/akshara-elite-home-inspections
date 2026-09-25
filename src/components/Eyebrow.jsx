function Eyebrow({ children }) {
  return (
    <div className="flex items-center justify-center gap-2 text-xl font-medium text-[#080808]">
      <span className="inline-block h-5 w-[7px] -skew-x-[20deg] bg-accent" aria-hidden="true" />
      {children}
    </div>
  )
}

export default Eyebrow
