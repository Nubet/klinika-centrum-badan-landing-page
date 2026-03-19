import { LinkButton } from '../ui/Button'
import Container from '../layout/Container'
import HeaderNav from './HeaderNav'

type HeroSectionProps = {
  heroImageSrc: string
}

function HeroSection({ heroImageSrc }: HeroSectionProps) {
  return (
    <header className="overflow-hidden rounded-b-3xl bg-[linear-gradient(135deg,rgba(23,48,138,0.95),rgba(23,48,138,0.90))] pb-20">
      <HeaderNav />
      <Container className="grid items-center gap-12 py-4 lg:grid-cols-2">
        <div>
          <h1 className="max-w-[18ch] text-[2.5rem] leading-[1.1] font-extrabold tracking-[-0.04em] text-white lg:text-[3.5rem] animate-fade-in-up">
            Innowacyjne terapie dostępne już dziś.
          </h1>
          <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-white/80 animate-fade-in-up delay-100">
            Prowadzimy bezpieczne badania kliniczne fazy II-IV. Zapewniamy pacjentom
            bezpłatny dostęp do najnowocześniejszych leków i kompleksowej opieki
            medycznej, a sponsorom błyskawiczną rekrutację.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap animate-fade-in-up delay-200">
            <LinkButton
              href="#badania"
              className="w-full whitespace-nowrap sm:min-w-88 sm:w-auto"
            >
              Dla Pacjenta: Sprawdź badania
            </LinkButton>
            <LinkButton
              href="#dla-sponsora"
              variant="outline"
              className="w-full whitespace-nowrap sm:min-w-88 sm:w-auto"
            >
              Dla Sponsora: Nasze zaplecze
            </LinkButton>
          </div>
        </div>

        <div className="relative min-h-88 animate-fade-in-up delay-300">
          <img
            src={heroImageSrc}
            alt="Lekarz rozmawiający z pacjentem"
            className="absolute inset-0 h-full w-full rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-4 border-white/20 object-cover animate-float will-change-transform"
          />
        </div>
      </Container>
    </header>
  )
}

export default HeroSection

