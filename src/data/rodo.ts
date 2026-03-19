import type { RodoContact, RodoSection } from '../types/domain'

export const rodoIntro = [
  'Informacja RODO dotyczy danych przetwarzanych w relacji pacjent – lekarz/placówka, w tym dokumentacji medycznej, upoważnień, badań klinicznych oraz współpracy z kontrahentami.',
]

export const rodoContacts: RodoContact[] = [
  {
    label: 'Administrator danych osobowych',
    name: 'Centrum Badań Jutra sp. z o.o.',
    addressLines: ['ul. Badawcza 10', '00-001 Warszawa'],
    phone: '+48 555 123 456',
    email: 'kontakt@centrumbadanjutra.pl',
  },
  {
    label: 'Inspektor ochrony danych (IOD)',
    name: 'dr Aleksandra Nowak',
    addressLines: ['kontakt mailowy'],
    email: 'iod@centrumbadanjutra.pl',
    note: 'Kontakt w sprawach dotyczących bezpieczeństwa danych osobowych.',
  },
]

export const rodoSections: RodoSection[] = [
  {
    title: 'Rodzaj i kategorie danych',
    paragraphs: [
      'W zależności od celu i podstawy prawnej przetwarzania możemy zbierać i przetwarzać:',
    ],
    bullets: [
      'dane identyfikacyjne: imię, nazwisko, PESEL, data urodzenia, dane firmy, NIP, REGON, numer rachunku bankowego;',
      'dane kontaktowe: adres zamieszkania lub korespondencyjny, numer telefonu, adres e-mail;',
      'dane zdrowotne związane z kwalifikacją do badań klinicznych oraz świadczeniem usług zdrowotnych;',
      'dane z rekrutacji: wykształcenie, doświadczenie, umiejętności oraz dobrowolnie przekazane informacje;',
      'dane z upoważnień do informacji i dokumentacji medycznej.',
    ],
  },
  {
    title: 'Cele, podstawy prawne i okresy przetwarzania',
    paragraphs: [
      'Przetwarzamy dane osobowe w następujących celach:',
    ],
    bullets: [
      'realizacja świadczeń zdrowotnych i prowadzenie dokumentacji medycznej (art. 6 ust. 1 lit. c oraz art. 9 ust. 2 lit. h RODO) – 20 lat od końca roku, w którym dokonano ostatniego wpisu;',
      'kwalifikacja i prowadzenie badań klinicznych (art. 6 ust. 1 lit. b i c oraz art. 9 ust. 2 lit. h RODO) – nie krócej niż 25 lat od zakończenia badania;',
      'upoważnienia do informacji o stanie zdrowia i dokumentacji medycznej (art. 6 ust. 1 lit. c RODO) – 20 lat od końca roku ostatniego wpisu;',
      'zawarcie i realizacja umów z kontrahentami (art. 6 ust. 1 lit. b i f RODO) – do 3 lat od końca roku, w którym wygasło zobowiązanie;',
      'rekrutacja pracowników (art. 6 ust. 1 lit. b i c RODO) – do zakończenia procesu rekrutacji;',
      'ustalenie, dochodzenie i obrona roszczeń (art. 6 ust. 1 lit. f RODO) – przez okres przedawnienia roszczeń.',
    ],
  },
  {
    title: 'Pozyskiwanie danych osobowych',
    bullets: [
      'dane pacjentów pozyskujemy podczas rejestracji wizyty, kwalifikacji do badań oraz świadczenia usług medycznych;',
      'dane osób upoważnionych pochodzą z oświadczeń pacjenta;',
      'dane kontrahentów pozyskujemy przed zawarciem umowy lub w trakcie jej realizacji;',
      'dane kandydatów do pracy pochodzą z dokumentów aplikacyjnych.',
    ],
  },
  {
    title: 'Odbiorcy danych osobowych',
    paragraphs: [
      'Dostęp do danych mogą mieć wyłącznie podmioty uprawnione:',
    ],
    bullets: [
      'pracownicy i współpracownicy upoważnieni do przetwarzania danych;',
      'podmioty lecznicze i partnerzy badań klinicznych – w zakresie niezbędnym do zapewnienia ciągłości leczenia;',
      'podmioty przetwarzające dane na nasze zlecenie (np. IT, archiwizacja);',
      'organy i instytucje uprawnione na podstawie przepisów prawa.',
    ],
  },
  {
    title: 'Prawa osób, których dane dotyczą',
    paragraphs: [
      'W związku z przetwarzaniem danych przysługuje Państwu prawo do:',
    ],
    bullets: [
      'dostępu do danych oraz otrzymania ich kopii;',
      'sprostowania danych;',
      'usunięcia danych w przypadkach określonych w art. 17 RODO;',
      'ograniczenia przetwarzania danych;',
      'sprzeciwu wobec przetwarzania danych;',
      'przenoszenia danych;',
      'wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.',
    ],
  },
  {
    title: 'Profilowanie i decyzje automatyczne',
    paragraphs: [
      'Państwa dane osobowe nie podlegają profilowaniu ani zautomatyzowanemu podejmowaniu decyzji, które wywołuje skutki prawne lub w podobny sposób istotnie na Państwa wpływa.',
    ],
  },
]
