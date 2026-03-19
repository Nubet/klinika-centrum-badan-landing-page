import type { PrivacySection, RodoContact } from '../types/domain'

export const privacyIntro = [
  'Niniejsza polityka prywatności dotyczy użytkowników serwisu internetowego Centrum Badań Jutra oraz interakcji cyfrowych.',
  'Dbamy o bezpieczeństwo danych osobowych i przetwarzamy je zgodnie z obowiązującymi przepisami prawa, w tym RODO.'
]

export const privacyContacts: RodoContact[] = [
  {
    label: 'Administrator danych',
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
    note: 'Kontakt w sprawach związanych z ochroną danych osobowych.',
  },
]

export const privacySections: PrivacySection[] = [
  {
    title: 'Zakres dokumentu',
    paragraphs: [
      'Polityka prywatności dotyczy wyłącznie działań online w ramach serwisu internetowego, w tym formularzy, korespondencji i analiz statystycznych.',
      'Zasady dotyczące przetwarzania danych pacjentów w relacji z placówką opisuje oddzielna informacja RODO.',
    ],
  },
  {
    title: 'Zakres danych i cele przetwarzania',
    paragraphs: [
      'W trakcie korzystania z serwisu możemy przetwarzać dane przekazane dobrowolnie przez użytkownika oraz dane zbierane automatycznie.',
    ],
    bullets: [
      'kontakt mailowy i telefoniczny – obsługa zapytań i komunikacja (art. 6 ust. 1 lit. f RODO);',
      'formularze kontaktowe – udzielenie odpowiedzi na zapytanie (art. 6 ust. 1 lit. f RODO);',
      'zapisy do newslettera lub prośby o kontakt (jeśli dostępne) – na podstawie zgody (art. 6 ust. 1 lit. a RODO);',
      'analiza statystyk serwisu i bezpieczeństwo infrastruktury (art. 6 ust. 1 lit. f RODO).',
    ],
  },
  {
    title: 'Prawa użytkownika',
    paragraphs: [
      'Każdej osobie, której dane dotyczą, przysługują następujące prawa:',
    ],
    bullets: [
      'dostępu do danych i uzyskania ich kopii;',
      'sprostowania danych;',
      'usunięcia danych w przypadkach przewidzianych prawem;',
      'ograniczenia przetwarzania danych;',
      'przenoszenia danych;',
      'sprzeciwu wobec przetwarzania danych;',
      'wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.',
    ],
  },
  {
    title: 'Odbiorcy danych',
    paragraphs: [
      'Dane mogą być udostępnione wyłącznie podmiotom uprawnionym, w szczególności:',
    ],
    bullets: [
      'pracownikom i współpracownikom upoważnionym do obsługi zgłoszeń;',
      'dostawcom usług IT i hostingowych;',
      'podmiotom świadczącym usługi doradcze lub prawne – w niezbędnym zakresie;',
      'organom publicznym uprawnionym przepisami prawa.',
    ],
  },
  {
    title: 'Dane zbierane automatycznie',
    paragraphs: [
      'Serwis zapisuje w logach informacje techniczne, takie jak adres IP, rodzaj urządzenia, przeglądarka i czas wizyty. Dane te nie są kojarzone z konkretną osobą i służą celom bezpieczeństwa oraz statystykom.',
    ],
  },
  {
    title: 'Pliki cookies',
    paragraphs: [
      'Serwis wykorzystuje pliki cookies oraz podobne technologie w celu zapewnienia prawidłowego działania, analizy ruchu oraz ulepszania treści. Użytkownik może zarządzać ustawieniami cookies w swojej przeglądarce.',
    ],
  },
  {
    title: 'Media społecznościowe i treści zewnętrzne',
    paragraphs: [
      'Serwis może zawierać odnośniki do profili w mediach społecznościowych lub osadzone treści. Korzystanie z tych usług podlega zasadom prywatności dostawców zewnętrznych.',
    ],
  },
  {
    title: 'Postanowienia końcowe',
    paragraphs: [
      'Serwis może zawierać odnośniki do zewnętrznych stron. Zalecamy zapoznanie się z ich politykami prywatności. Administrator może wprowadzać zmiany w treści polityki w związku z rozwojem serwisu lub zmianami prawa.',
    ],
  },
]
