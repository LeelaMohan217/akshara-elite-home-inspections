import { Link } from 'react-router-dom'
import navLinks from '../data/navLinks'

function NavLinks({ className = '', onLinkClick }) {
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={onLinkClick}
          className={`text-base font-medium text-body hover:text-ink ${className}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}

export default NavLinks
