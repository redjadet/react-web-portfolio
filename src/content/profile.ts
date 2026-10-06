export type ProfileCopy = {
  role: string
  headline: string
  support: string
  location: string
  locationShort: string
  arrangements: string
  availability: string
}

/** Shared identity — not localized. */
export const profile = {
  name: 'İlker Sevim',
  email: 'ilkersevim2007@gmail.com',
  links: {
    github: 'https://github.com/redjadet',
    linkedin: 'https://www.linkedin.com/in/ilker-sevim-95020820/',
    portfolioRepo: 'https://github.com/redjadet/react-web-portfolio',
  },
} as const

export const profileCopyEn: ProfileCopy = {
  role: 'Senior iOS & Flutter Engineer',
  headline:
    'I build reliable mobile experiences across iOS, iPadOS and Flutter.',
  support:
    'Public repos highlight architecture, offline data, native bridges and test coverage — structured for a quick technical review.',
  location: 'Istanbul, Türkiye · UTC+3',
  locationShort: 'Istanbul, Türkiye',
  arrangements: 'Remote from Türkiye; Istanbul hybrid or onsite',
  availability: 'Immediate · Full-time & contract',
}

export const profileCopyTr: ProfileCopy = {
  role: 'Kıdemli iOS ve Flutter Mühendisi',
  headline:
    'iOS, iPadOS ve Flutter’da güvenilir mobil deneyimler geliştiriyorum.',
  support:
    'Açık depolar mimariyi, çevrimdışı veriyi, native köprüleri ve test kapsamını öne çıkarır — hızlı teknik inceleme için yapılandırılmıştır.',
  location: 'İstanbul, Türkiye · UTC+3',
  locationShort: 'İstanbul, Türkiye',
  arrangements: 'Türkiye’den uzaktan; İstanbul’da hibrit veya ofis içi',
  availability: 'Hemen · Tam zamanlı ve sözleşmeli',
}
