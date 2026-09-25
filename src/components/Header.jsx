import navLinks from '../data/navLinks'
import siteInfo from '../data/siteInfo'

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-xl font-semibold tracking-tight">
          {siteInfo.name}
        </span>
        <nav className="hidden gap-8 text-sm font-medium text-slate-600 sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
