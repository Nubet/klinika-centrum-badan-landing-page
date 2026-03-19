import { ArrowRight } from 'lucide-react'
import { trials } from '../../data/siteContent.ts'
import type { Trial } from '../../types/domain'
import Container from '../layout/Container'
import { Button } from '../ui/Button'

type RecruitmentSectionProps = {
  onSelectArea: (area: Trial['area']) => void
}

function RecruitmentSection({ onSelectArea }: RecruitmentSectionProps) {
  return (
    <section id="badania" className="py-16 lg:py-24">
      <Container>
        <h2 className="text-[2rem] leading-tight font-bold tracking-[-0.01em] lg:text-[2.4375rem] animate-fade-in-up">
          Aktualnie rekrutujemy
        </h2>
        <p className="mt-2 max-w-176 text-base leading-relaxed text-muted animate-fade-in-up delay-100">
          Sprawdź, czy kwalifikujesz się do jednego z naszych otwartych programów
          badawczych.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trials.map((trial, index) => {
            const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'

            return (
            <article
              key={trial.area}
              className={`flex h-full flex-col justify-between rounded-3xl border border-light-blue bg-white p-6 shadow-[0_0.8rem_1.8rem_-1.2rem_rgba(23,48,138,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_1.3rem_2.8rem_-1.2rem_rgba(23,48,138,0.42)] animate-fade-in-up ${delayClass}`}
            >
              <div>
                <span className="inline-flex rounded-full border border-light-blue/90 bg-light-blue/70 px-3 py-1 text-xs font-bold tracking-wide text-primary uppercase">
                  {trial.tag}
                </span>
                <h3 className="mt-4 text-[1.625rem] leading-tight font-semibold text-primary">
                  {trial.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {trial.description}
                </p>
              </div>

              <Button
                type="button"
                variant="dark"
                className="mt-6 w-fit group"
                onClick={() => onSelectArea(trial.area)}
              >
                <span>Weź udział / Kwalifikacja</span>
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default RecruitmentSection

