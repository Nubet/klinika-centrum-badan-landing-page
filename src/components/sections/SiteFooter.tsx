import { footerColumns } from '../../data/siteContent.ts'
import { Link } from 'react-router-dom'
import Container from '../layout/Container'

function SiteFooter() {
  return (
    <footer id="kontakt" className="mt-6 rounded-t-3xl bg-primary py-12 text-white animate-fade-in-up">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="font-heading text-2xl font-bold text-white">Centrum Badań Jutra</p>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              ul. Badawcza 10
              <br />
              00-001 Warszawa
              <br />
              KRS: 0000123456
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-semibold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition duration-200 hover:text-white hover:translate-x-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white/70">
          Projekt i wykonanie:{' '}
          <a
            href="https://useme.com/en/roles/contractor/norbert-fila,272854/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white transition duration-200 hover:text-accent"
          >
            Norbert Fila
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default SiteFooter

