import navLinks from '../data/navLinks'

function NavLinks({ className = '', onLinkClick }) {
  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={`text-base font-medium text-body hover:text-ink ${className}`}
        >
          {link.label}
        </a>
      ))}
    </>
  )
}

export default NavLinks
