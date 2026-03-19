import type {
  Benefit,
  FooterColumn,
  NavLink,
  SponsorCapability,
  Trial,
} from '../types/domain'

const baseUrl = import.meta.env.BASE_URL

export const navLinks: NavLink[] = [
  { label: 'Dla Pacjenta', href: `${baseUrl}#dla-pacjenta` },
  { label: 'Aktualne Badania', href: `${baseUrl}#badania` },
  { label: 'Dla Sponsorów & CRO', href: `${baseUrl}#dla-sponsora` },
  { label: 'Nasze Zaplecze', href: `${baseUrl}#zaplecze` },
  { label: 'Kontakt', href: `${baseUrl}#kontakt` },
]

export const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Bezpłatna diagnostyka',
    description:
      'Uczestnicy badań otrzymują pełen pakiet badań laboratoryjnych i obrazowych (MRI, TK) całkowicie za darmo, bez kolejek na NFZ.',
  },
  {
    id: 2,
    title: 'Dostęp do innowacji',
    description:
      'Szansa na leczenie preparatami, które wejdą na rynek dopiero za kilka lat. To nowa nadzieja w chorobach przewlekłych.',
  },
  {
    id: 3,
    title: 'Zwrot kosztów i opieka',
    description:
      'Zapewniamy zwrot kosztów dojazdu na każdą wizytę oraz stały, bezpośredni kontakt z lekarzem prowadzącym.',
  },
]

export const trials: Trial[] = [
  {
    area: 'kardiologia',
    tag: 'Kardiologia',
    title: 'Nadciśnienie tętnicze oporne na leczenie',
    description:
      'Poszukujemy pacjentów w wieku 18-75 lat z nadciśnieniem, które nie reaguje na standardową terapię trójlekową.',
  },
  {
    area: 'dermatologia',
    tag: 'Dermatologia',
    title: 'Atopowe Zapalenie Skóry (AZS) u dorosłych',
    description:
      'Badanie nowej maści niesteroidowej dla pacjentów ze zdiagnozowanym AZS o nasileniu umiarkowanym do ciężkiego.',
  },
  {
    area: 'pulmonologia',
    tag: 'Pulmonologia',
    title: 'Przewlekła Obturacyjna Choroba Płuc (POChP)',
    description:
      'Testujemy innowacyjny inhalator rozszerzający oskrzela. Program dla osób palących obecnie lub w przeszłości.',
  },
]

export const sponsorCapabilities: SponsorCapability[] = [
  {
    title: 'Szybka rekrutacja',
    description:
      'Posiadamy własną bazę ponad 15 000 zweryfikowanych pacjentów oraz dedykowany dział call center.',
  },
  {
    title: 'Zaplecze techniczne',
    description:
      'Własne laboratorium, chłodziarki lekowe z monitoringiem temperatury i certyfikowany personel.',
  },
  {
    title: 'Jakość danych',
    description:
      'Pracujemy zgodnie z wytycznymi GCP, gwarantując wysokiej klasy raportowanie w systemach eCRF.',
  },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Dla Pacjenta',
    links: [
      { label: 'Aktualne programy', href: `${baseUrl}#badania` },
      { label: 'Dlaczego warto wziąć udział?', href: `${baseUrl}#dla-pacjenta` },
    ],
  },
  {
    title: 'Dla Sponsorów',
    links: [
      { label: 'Szybka rekrutacja', href: `${baseUrl}#zaplecze` },
      { label: 'Zaplecze techniczne', href: `${baseUrl}#zaplecze` },
    ],
  },
  {
    title: 'Ośrodek',
    links: [
      { label: 'Kontakt', href: `${baseUrl}#kontakt` },
      { label: 'Polityka prywatności', href: `${baseUrl}polityka-prywatnosci` },
      { label: 'RODO', href: `${baseUrl}rodo` },
    ],
  },
]

