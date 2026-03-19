import { FlaskConical } from 'lucide-react'
import { navLinks } from '../../data/siteContent.ts'
import Container from '../layout/Container'

function HeaderNav() {
  return (
    <Container className="relative z-10 mb-16 pt-6 animate-fade-in-down">
      <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-center">
        <div className="flex h-16 items-center gap-3 rounded-full border border-white/45 bg-white/18 px-6 shadow-[0_0.5rem_1.5rem_-1rem_rgba(9,22,77,0.7)] ring-1 ring-white/20">
          <FlaskConical className="h-6 w-6 text-white" aria-hidden="true" />
          <span className="font-heading text-xl font-bold tracking-wide text-white">
            Centrum Badań Jutra
          </span>
        </div>

        <nav
          className="flex h-16 w-full items-center gap-6 overflow-x-auto rounded-full border border-white/45 bg-white/18 px-6 shadow-[0_0.5rem_1.5rem_-1rem_rgba(9,22,77,0.7)] ring-1 ring-white/20 lg:w-auto"
          aria-label="Nawigacja główna"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-semibold text-white transition duration-200 hover:opacity-80 hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </Container>
  )
}

export default HeaderNav

