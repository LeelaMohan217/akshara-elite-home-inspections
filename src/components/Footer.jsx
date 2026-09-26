import { Link } from 'react-router-dom'
import legalLinks from '../data/legalLinks'
import navLinks from '../data/navLinks'
import siteInfo from '../data/siteInfo'
import Container from './Container'
import Logo from './Logo'
import SocialLinks from './SocialLinks'

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-base text-body">
              {siteInfo.description}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-base text-body hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Legal</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-body hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3 text-base text-body">
              <li>{siteInfo.address}</li>
              <li>
                <a
                  href={`tel:${siteInfo.phone.replace(/[^+\d]/g, '')}`}
                  className="hover:text-accent"
                >
                  {siteInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="hover:text-accent"
                >
                  {siteInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted">
          <p>© 2025 {siteInfo.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
