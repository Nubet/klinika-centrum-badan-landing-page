import { HeartPulse, ShieldCheck, WalletCards } from 'lucide-react'
import { benefits } from '../../data/siteContent.ts'
import Container from '../layout/Container'

const benefitIcons = [HeartPulse, ShieldCheck, WalletCards]

function BenefitsSection() {
  return (
    <section id="dla-pacjenta" className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[2rem] leading-tight font-bold tracking-[-0.01em] lg:text-[2.4375rem] animate-fade-in-up">
            Dlaczego warto wziąć udział?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted animate-fade-in-up delay-100">
            Udział w badaniu klinicznym to szansa na nowoczesne leczenie pod okiem
            wybitnych specjalistów, z zachowaniem najwyższych standardów
            bezpieczeństwa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index]
            const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'

            return (
              <article
                key={benefit.id}
                className={`group rounded-3xl border border-light-blue/90 bg-linear-to-b from-light-blue/80 to-white px-6 py-10 text-left shadow-[0_0.8rem_1.8rem_-1.1rem_rgba(23,48,138,0.38)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_1.2rem_2.6rem_-1rem_rgba(23,48,138,0.42)] animate-fade-in-up ${delayClass}`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-light-blue/80 bg-white shadow-sm transition group-hover:scale-105">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-[1.375rem] leading-snug font-semibold text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed font-medium text-primary">
                  {benefit.description}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default BenefitsSection

