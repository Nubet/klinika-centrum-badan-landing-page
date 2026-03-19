import { CheckCircle2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import type { Trial } from '../../types/domain'
import Container from '../layout/Container'
import { Button } from '../ui/Button'

type FormData = {
  area: Trial['area'] | ''
  diagnosis: '' | 'tak' | 'nie'
  phone: string
}

type QualificationFormSectionProps = {
  selectedArea: Trial['area'] | ''
}

import { useScrollReveal } from '../../hooks/useScrollReveal'

function QualificationFormSection({ selectedArea }: QualificationFormSectionProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState<FormData>({
    area: selectedArea,
    diagnosis: '',
    phone: '',
  })
  const { ref, isVisible } = useScrollReveal(0.2)

  const stepIndicator = useMemo(() => {
    if (step > 3) {
      return 'Gotowe'
    }

    return `Krok ${step} z 3`
  }, [step])

  const isPhoneValid = (phone: string) => /^(\+?\d[\d\s]{8,})$/.test(phone.trim())

  const nextFromStepOne = () => {
    if (!formData.area) {
      setError('Proszę wybrać obszar terapeutyczny.')
      return
    }

    setError('')
    setStep(2)
  }

  const nextFromStepTwo = () => {
    if (!formData.diagnosis) {
      setError('Proszę zaznaczyć odpowiedź.')
      return
    }

    setError('')
    setStep(3)
  }

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isPhoneValid(formData.phone)) {
      setError('Proszę podać poprawny numer telefonu.')
      return
    }

    setError('')
    setStep(4)
  }

  return (
    <section id="kwalifikacja" className="py-16 lg:py-24">
      <Container>
        <div ref={ref} className={`relative overflow-hidden rounded-3xl border border-light-blue bg-[linear-gradient(160deg,#17308a_0%,#2043b3_56%,#17308a_100%)] px-6 py-10 text-center text-white shadow-[0_1.1rem_2.4rem_-1.3rem_rgba(12,27,89,0.85)] transition-opacity duration-700 lg:px-10 lg:py-12 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rotate-12 rounded-3xl border border-white/25"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-14 -left-12 h-40 w-40 -rotate-6 rounded-3xl border border-white/20"
            aria-hidden="true"
          />
          <h2 className="text-[2rem] leading-tight font-bold tracking-[-0.01em] text-white lg:text-[2.4375rem]">
            Szybka Kwalifikacja Online
          </h2>
          <p className="mx-auto mt-3 max-w-176 text-base leading-relaxed text-white/80">
            Odpowiedz na 2 proste pytania, a nasz koordynator medyczny oddzwoni do
            Ciebie w ciągu 24 godzin.
          </p>

          <form
            noValidate
            onSubmit={submitForm}
            className="relative mx-auto mt-10 max-w-150 rounded-3xl border border-light-blue/70 bg-white p-6 text-left text-dark shadow-[0_1.1rem_2.2rem_-1.1rem_rgba(0,0,0,0.28)] transition-shadow duration-300 hover:shadow-[0_1.4rem_2.6rem_-1.2rem_rgba(0,0,0,0.3)] lg:p-8"
          >
            <p className="text-sm font-semibold text-muted" aria-live="polite">
              {stepIndicator}
            </p>

            <div key={step} className="animate-fade-in">
            {step === 1 && (
              <div className="mt-6 space-y-4">
                <label htmlFor="obszar" className="block text-base font-semibold text-primary">
                  Wybierz obszar terapeutyczny, który Cię interesuje:
                </label>
                <select
                  id="obszar"
                  className="w-full rounded-xl border-2 border-light-blue px-5 py-3.5 text-base text-dark transition-colors duration-200 focus:border-primary"
                  value={formData.area}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      area: event.target.value as Trial['area'],
                    }))
                  }
                >
                  <option value="">-- Wybierz z listy --</option>
                  <option value="kardiologia">Kardiologia (Nadciśnienie)</option>
                  <option value="dermatologia">Dermatologia (AZS)</option>
                  <option value="pulmonologia">Pulmonologia (POChP)</option>
                </select>

                <div className="flex justify-end">
                  <Button type="button" onClick={nextFromStepOne}>
                    Dalej
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mt-6 space-y-4">
                <p className="text-base font-semibold text-primary">
                  Czy masz postawioną diagnozę lekarską od minimum 6 miesięcy?
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { value: 'tak' as const, label: 'TAK' },
                    { value: 'nie' as const, label: 'NIE' },
                  ].map((option) => (
                    <label key={option.value} className="cursor-pointer">
                      <input
                        type="radio"
                        className="peer sr-only"
                        name="diagnoza"
                        value={option.value}
                        checked={formData.diagnosis === option.value}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, diagnosis: option.value }))
                        }
                      />
                      <span className="flex items-center justify-center rounded-xl border-2 border-light-blue p-3.5 text-base font-semibold text-dark transition duration-200 hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <Button type="button" variant="outline" className="border-primary text-primary" onClick={() => setStep(1)}>
                    Wstecz
                  </Button>
                  <Button type="button" onClick={nextFromStepTwo}>
                    Dalej
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="mt-6 space-y-4">
                <label htmlFor="phone" className="block text-base font-semibold text-primary">
                  Zostaw numer telefonu:
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-xl border-2 border-light-blue px-5 py-3.5 text-base text-dark transition-colors duration-200 focus:border-primary"
                  placeholder="+48 000 000 000"
                  value={formData.phone}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, phone: event.target.value }))
                  }
                />
                <p className="text-xs text-muted">
                  Zostawiając numer wyrażasz zgodę na kontakt w celu omówienia
                  szczegółów badania.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <Button type="button" variant="outline" className="border-primary text-primary" onClick={() => setStep(2)}>
                    Wstecz
                  </Button>
                  <Button type="submit">Wyślij zgłoszenie</Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-[1.625rem] leading-tight font-semibold text-primary">
                  Dziękujemy!
                </h3>
                <p className="mt-2 max-w-136 text-base leading-relaxed text-muted">
                  Twoje zgłoszenie zostało przyjęte. Nasz koordynator skontaktuje się z
                  Tobą najpóźniej w następnym dniu roboczym.
                </p>
              </div>
            )}
            </div>

            {error && step !== 4 && (
              <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 animate-pulse-slow" role="alert">
                {error}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  )
}

export default QualificationFormSection

