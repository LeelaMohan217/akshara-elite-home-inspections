import { useState } from 'react'
import siteInfo from '../data/siteInfo'
import Button from './Button'
import Container from './Container'
import Logo from './Logo'
import MenuButton from './MenuButton'
import NavLinks from './NavLinks'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <Container>
        <div className="relative flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2 md:gap-8">
            <NavLinks />
          </nav>

          <Button href="#contact" className="hidden md:block">
            {siteInfo.ctaLabel}
          </Button>

          <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
        </div>

        {open && (
          <nav className="flex flex-col gap-4 border-t border-border py-4 md:hidden">
            <NavLinks
              className="block py-1"
              onLinkClick={() => setOpen(false)}
            />
            <Button href="#contact" className="block text-center">
              {siteInfo.ctaLabel}
            </Button>
          </nav>
        )}
      </Container>
    </header>
  )
}

export default Navbar
