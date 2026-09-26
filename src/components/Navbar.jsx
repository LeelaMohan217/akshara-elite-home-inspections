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

          <nav className="hidden lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2 lg:gap-8">
            <NavLinks />
          </nav>

          <Button href="/contact" className="hidden whitespace-nowrap lg:block">
            {siteInfo.navCtaLabel}
          </Button>

          <MenuButton open={false} onClick={() => setOpen(true)} />
        </div>
      </Container>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  )
}

export default Navbar
