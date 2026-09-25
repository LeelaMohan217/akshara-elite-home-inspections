import { useState } from 'react'
import siteInfo from '../data/siteInfo'
import Button from './Button'
import Container from './Container'
import Logo from './Logo'
import MenuButton from './MenuButton'
import MobileMenu from './MobileMenu'
import NavLinks from './NavLinks'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <Container>
        <div className="relative flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2 md:gap-8">
            <NavLinks />
          </nav>

          <Button href="#contact" className="hidden md:block">
            {siteInfo.ctaLabel}
          </Button>

          <MenuButton open={false} onClick={() => setOpen(true)} />
        </div>
      </Container>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  )
}

export default Navbar
