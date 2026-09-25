import { useEffect } from 'react'
import siteInfo from '../data/siteInfo'
import Button from './Button'
import Container from './Container'
import Logo from './Logo'
import MenuButton from './MenuButton'
import NavLinks from './NavLinks'

function MobileMenu({ onClose }) {
  useEffect(() => {
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-surface lg:hidden">
      <Container className="flex h-16 shrink-0 items-center justify-between border-b border-border">
        <Logo />
        <MenuButton open onClick={onClose} />
      </Container>

      <nav className="flex-1 overflow-y-auto">
        <NavLinks
          className="block border-b border-border px-5 py-4 text-base sm:px-8"
          onLinkClick={onClose}
        />
      </nav>

      <Container className="shrink-0 border-t border-border py-5">
        <Button href="#contact" className="block text-center" onClick={onClose}>
          {siteInfo.navCtaLabel}
        </Button>
      </Container>
    </div>
  )
}

export default MobileMenu
