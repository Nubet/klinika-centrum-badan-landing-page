import { useState } from 'react'
import { FlaskConical, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../data/siteContent.ts'
import Container from '../layout/Container'
import clsx from 'clsx'

function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-20 w-full py-6 animate-fade-in-down">
      <Container>
        <div className="relative flex items-center justify-between rounded-full border border-white/45 bg-white/18 px-4 py-2 shadow-[0_0.5rem_1.5rem_-1rem_rgba(9,22,77,0.7)] backdrop-blur-sm ring-1 ring-white/20 sm:px-6">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 sm:h-12 sm:w-12">
              <FlaskConical
                className="h-5 w-5 text-white sm:h-6 sm:w-6"
                aria-hidden="true"
              />
            </div>
            <span className="whitespace-nowrap font-heading text-lg font-bold tracking-tight text-white sm:text-xl">
              Centrum Badań Jutra
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Nawigacja główna">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Navigation Overlay */}
          <div
            className={clsx(
              'absolute top-full left-0 mt-3 w-full origin-top transform transition-all duration-300 lg:hidden',
              isOpen
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-95 opacity-0'
            )}
          >
            <nav className="flex flex-col gap-2 rounded-3xl border border-white/45 bg-white/95 p-4 shadow-xl backdrop-blur-xl ring-1 ring-black/5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary/5 active:bg-primary/10"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default HeaderNav

