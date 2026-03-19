import { DatabaseZap, Microscope, UsersRound } from 'lucide-react'
import { sponsorCapabilities } from '../../data/siteContent.ts'
import Container from '../layout/Container'

const capabilityIcons = [UsersRound, Microscope, DatabaseZap]
const capabilityAnchors = ['szybka-rekrutacja', 'zaplecze-techniczne', 'jakosc-danych']

type SponsorSectionProps = {
  imageSrc: string
}

function SponsorSection({ imageSrc }: SponsorSectionProps) {
  return (
    <section id="dla-sponsora" className="py-16 lg:py-24">
      <Container>
        <div className="grid gap-10 rounded-3xl border border-light-blue/80 bg-linear-to-b from-[#f8f9fc] to-white p-8 shadow-[0_1rem_2.2rem_-1.2rem_rgba(23,48,138,0.25)] lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-12 animate-fade-in-up">
          <div>
            <h2
              id="zaplecze"
              className="text-[2rem] leading-tight font-bold tracking-[-0.01em] lg:text-[2.4375rem]"
            >
              Zaufany Partner dla Sponsora i CRO
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Realizujemy badania terminowo, dbając o czystość danych i rygorystyczne
              przestrzeganie protokołu. Rozumiemy, że czas to kluczowy czynnik w R&D.
            </p>

            <ul className="mt-6 space-y-3 rounded-2xl border border-light-blue/70 bg-white/70 p-3">
              {sponsorCapabilities.map((capability, index) => {
                const Icon = capabilityIcons[index]
                const anchorId = capabilityAnchors[index]

                return (
                  <li key={capability.title}>
                    <article
                      id={anchorId}
                      tabIndex={0}
                      className="group/item relative overflow-hidden rounded-[1.75rem] border border-light-blue/70 bg-[#d7dcf3] px-4 py-3 outline-none transition duration-300 hover:border-[#e8ddb8] focus-visible:border-[#e8ddb8]"
                    >
                      <div
                        className="absolute inset-0 bg-[#e8ddb8] opacity-0 transition-opacity duration-500 ease-out group-hover/item:opacity-100 group-focus-visible/item:opacity-100"
                        aria-hidden="true"
                      />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3">
                          <Icon
                            className="h-5 w-5 text-primary transition-transform duration-300 group-hover/item:scale-110"
                            aria-hidden="true"
                          />
                          <h3 className="text-lg font-semibold text-primary">
                            {capability.title}
                          </h3>
                        </div>

                        <div className="grid grid-rows-[0fr] transition-all duration-400 ease-out group-hover/item:grid-rows-[1fr] group-focus-visible/item:grid-rows-[1fr]">
                          <p className="mt-0.5 overflow-hidden text-[0.9375rem] leading-relaxed text-primary/90 opacity-0 transition duration-300 group-hover/item:mt-3 group-hover/item:opacity-100 group-focus-visible/item:mt-3 group-focus-visible/item:opacity-100">
                            {capability.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="h-full min-h-88">
            <img
              src={imageSrc}
              alt="Zaplecze laboratoryjne ośrodka badań klinicznych"
              className="h-full w-full rounded-3xl border border-light-blue/80 object-cover shadow-[0_1rem_2.1rem_-1.2rem_rgba(23,48,138,0.42)] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SponsorSection

