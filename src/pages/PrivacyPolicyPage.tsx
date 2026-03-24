import Container from '../components/layout/Container'
import HeaderNav from '../components/sections/HeaderNav'
import SiteFooter from '../components/sections/SiteFooter'
import { LinkButton } from '../components/ui/Button'
import { privacyContacts, privacyIntro, privacySections } from '../data/privacy'

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(213,220,249,0.3),transparent_40%),radial-gradient(circle_at_bottom,rgba(213,220,249,0.22),transparent_45%),#ffffff]">
      <header className="overflow-hidden rounded-b-3xl bg-[linear-gradient(135deg,rgba(23,48,138,0.95),rgba(23,48,138,0.9))] pb-16">
        <HeaderNav />
        <Container className="py-6">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Polityka prywatności
            </p>
            <h1 className="mt-3 text-[2.4rem] leading-tight font-extrabold tracking-[-0.03em] text-white lg:text-[3.1rem]">
              Polityka prywatności serwisu
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Dokument dotyczy użytkowników serwisu internetowego i interakcji cyfrowych.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton to="/?section=kontakt" className="w-full sm:w-auto">
                Skontaktuj się z nami
              </LinkButton>
              <LinkButton to="/" variant="outline" className="w-full sm:w-auto">
                Wróć na stronę główną
              </LinkButton>
            </div>
          </div>
        </Container>
      </header>

      <main className="py-14 lg:py-20">
        <Container className="space-y-10">
          <section className="rounded-3xl border border-light-blue/80 bg-white/90 p-8 shadow-[0_1rem_2.5rem_-1.6rem_rgba(23,48,138,0.35)] animate-fade-in-up">
            <h2 className="text-[1.7rem] font-bold text-primary">Informacje ogólne</h2>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
              {privacyIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            {privacyContacts.map((contact) => (
              <article
                key={contact.label}
                className="rounded-3xl border border-light-blue/80 bg-linear-to-b from-light-blue/70 to-white px-7 py-8 shadow-[0_0.8rem_2.2rem_-1.4rem_rgba(23,48,138,0.38)] animate-fade-in-up"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
                  {contact.label}
                </p>
                <h3 className="mt-3 text-[1.4rem] font-semibold text-primary">
                  {contact.name}
                </h3>
                <div className="mt-4 space-y-1 text-sm text-primary">
                  {contact.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  {contact.phone ? <p>tel.: {contact.phone}</p> : null}
                  {contact.email ? <p>e-mail: {contact.email}</p> : null}
                </div>
                {contact.note ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted">{contact.note}</p>
                ) : null}
              </article>
            ))}
          </section>

          <section className="space-y-6">
            {privacySections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-light-blue/80 bg-white px-7 py-8 shadow-[0_0.8rem_2.2rem_-1.6rem_rgba(23,48,138,0.32)] animate-fade-in-up"
              >
                <h2 className="text-[1.5rem] font-semibold text-primary">{section.title}</h2>
                {section.paragraphs?.length ? (
                  <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
                {section.bullets?.length ? (
                  <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </section>
        </Container>
      </main>

      <SiteFooter />
    </div>
  )
}

export default PrivacyPolicyPage
