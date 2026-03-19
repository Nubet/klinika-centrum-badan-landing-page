export type NavLink = {
  label: string
  href: string
}

export type Benefit = {
  id: number
  title: string
  description: string
}

export type Trial = {
  area: 'kardiologia' | 'dermatologia' | 'pulmonologia'
  tag: string
  title: string
  description: string
}

export type SponsorCapability = {
  title: string
  description: string
}

export type FooterColumn = {
  title: string
  links: Array<{ label: string; href: string }>
}

export type RodoContact = {
  label: string
  name: string
  addressLines: string[]
  phone?: string
  email?: string
  note?: string
}

export type RodoSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export type PrivacySection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}


