import type { Locale } from './locale'
import type { Project } from '../content/projects'
import type { SkillGroup } from '../content/skills'
import {
  openSourceProjectsEn,
  openSourceProjectsTr,
  projectsEn,
  projectsTr,
  type OpenSourceProject,
} from '../content/projects'
import { skillGroupsEn, skillGroupsTr } from '../content/skills'
import { profileCopyEn, profileCopyTr, type ProfileCopy } from '../content/profile'

export type Messages = {
  meta: {
    title: string
    description: string
    ogLocale: string
  }
  a11y: {
    skipToContent: string
    primaryNav: string
    brandTop: string
    language: string
    opensInNewTab: string
    emailName: (name: string) => string
    projectLink: (project: string, label: string) => string
    openSourceLink: (project: string) => string
  }
  theme: {
    switchToLight: string
    switchToDark: string
    darkOn: string
    lightOn: string
  }
  nav: {
    work: string
    skills: string
    about: string
    contact: string
  }
  hero: {
    exploreWork: string
    getInTouch: string
    portraitAlt: string
  }
  work: {
    title: string
    lead: string
    moreTitle: string
    viewSource: string
  }
  skills: {
    title: string
    lead: string
  }
  about: {
    title: string
    paragraphs: [string, string, string]
    location: string
    arrangements: string
    availability: string
    education: string
    educationValue: string
  }
  contact: {
    title: string
    note: string
    emailMe: string
    invitation: string
  }
  footer: {
    websiteSource: string
  }
  profile: ProfileCopy
  projects: Project[]
  openSourceProjects: readonly OpenSourceProject[]
  skillGroups: SkillGroup[]
}

const en: Messages = {
  meta: {
    title: 'İlker Sevim — Senior iOS & Flutter Engineer',
    description:
      'İlker Sevim — Senior iOS & Flutter Engineer in Istanbul. Explore mobile projects, engineering practices and immediate availability for remote, full-time and contract roles.',
    ogLocale: 'en_US',
  },
  a11y: {
    skipToContent: 'Skip to content',
    primaryNav: 'Primary',
    brandTop: '— top of page',
    language: 'Language',
    opensInNewTab: ' (opens in a new tab)',
    emailName: (name) => `Email ${name}`,
    projectLink: (project, label) => `${project}: ${label}`,
    openSourceLink: (project) => `${project}: View source`,
  },
  theme: {
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    darkOn: 'Dark theme on',
    lightOn: 'Light theme on',
  },
  nav: {
    work: 'Work',
    skills: 'Skills',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    exploreWork: 'Explore my work',
    getInTouch: 'Get in touch',
    portraitAlt: 'Portrait of İlker Sevim',
  },
  work: {
    title: 'Selected work',
    lead: 'Public projects that show how I design, build and verify software.',
    moreTitle: 'More open-source work',
    viewSource: 'View source',
  },
  skills: {
    title: 'Skills & engineering practices',
    lead: 'Native mobile depth, cross-platform delivery and a practical web stack.',
  },
  about: {
    title: 'Experience with real product constraints',
    paragraphs: [
      'I am a senior mobile engineer based in Istanbul. My experience spans banking, payments, telecom and secure communications, including native iPhone and iPad apps, shared iOS frameworks and cross-platform delivery.',
      'I have led mobile development, mentored engineers and automated build and release workflows. My public projects make architecture decisions, platform integration and testing practices easy to review.',
      'I bring the same care to AI-assisted development: useful context, scoped changes, human review and verification.',
    ],
    location: 'Location',
    arrangements: 'Working arrangements',
    availability: 'Availability',
    education: 'Education',
    educationValue:
      'BSc Computer Engineering · Işık University\nMBA · Maltepe University',
  },
  contact: {
    title: 'Let’s build something reliable.',
    note: 'Open to iOS, Flutter and mobile engineering opportunities.\nRemote from Türkiye, or hybrid and onsite in Istanbul.',
    emailMe: 'Email me',
    invitation:
      'For hiring conversations, tell me about the product, team and the role.',
  },
  footer: {
    websiteSource: 'Website source',
  },
  profile: profileCopyEn,
  projects: projectsEn,
  openSourceProjects: openSourceProjectsEn,
  skillGroups: skillGroupsEn,
}

const tr: Messages = {
  meta: {
    title: 'İlker Sevim — Kıdemli iOS ve Flutter Mühendisi',
    description:
      'İlker Sevim — İstanbul’da Kıdemli iOS ve Flutter Mühendisi. Mobil projeleri, mühendislik pratiklerini ve uzaktan, tam zamanlı ve sözleşmeli roller için hemen başlayabilirliği keşfedin.',
    ogLocale: 'tr_TR',
  },
  a11y: {
    skipToContent: 'İçeriğe atla',
    primaryNav: 'Ana menü',
    brandTop: '— sayfa başı',
    language: 'Dil',
    opensInNewTab: ' (yeni sekmede açılır)',
    emailName: (name) => `${name} adresine e-posta`,
    projectLink: (project, label) => `${project}: ${label}`,
    openSourceLink: (project) => `${project}: Kaynağı görüntüle`,
  },
  theme: {
    switchToLight: 'Açık temaya geç',
    switchToDark: 'Koyu temaya geç',
    darkOn: 'Koyu tema açık',
    lightOn: 'Açık tema açık',
  },
  nav: {
    work: 'İşler',
    skills: 'Yetkinlikler',
    about: 'Hakkında',
    contact: 'İletişim',
  },
  hero: {
    exploreWork: 'İşlerimi keşfet',
    getInTouch: 'İletişime geç',
    portraitAlt: 'İlker Sevim’in portresi',
  },
  work: {
    title: 'Seçilmiş işler',
    lead: 'Yazılımı nasıl tasarladığımı, geliştirdiğimi ve doğruladığımı gösteren açık projeler.',
    moreTitle: 'Diğer açık kaynak çalışmalar',
    viewSource: 'Kaynağı görüntüle',
  },
  skills: {
    title: 'Yetkinlikler ve mühendislik pratikleri',
    lead: 'Native mobil derinliği, çapraz platform teslimatı ve pratik bir web yığını.',
  },
  about: {
    title: 'Gerçek ürün kısıtlarıyla edinilmiş deneyim',
    paragraphs: [
      'İstanbul merkezli kıdemli bir mobil mühendisim. Deneyimim bankacılık, ödemeler, telekom ve güvenli iletişimi kapsar; native iPhone ve iPad uygulamaları, paylaşılan iOS çerçeveleri ve çapraz platform teslimatı dahil.',
      'Mobil geliştirmeyi yönettim, mühendisleri mentorladım ve derleme ile yayın iş akışlarını otomatikleştirdim. Açık projelerim mimari kararları, platform entegrasyonunu ve test pratiklerini kolayca incelenebilir kılar.',
      'Yapay zekâ destekli geliştirmeye de aynı özeni getiririm: yararlı bağlam, sınırlı değişiklikler, insan incelemesi ve doğrulama.',
    ],
    location: 'Konum',
    arrangements: 'Çalışma düzeni',
    availability: 'Müsaitlik',
    education: 'Eğitim',
    educationValue:
      'Bilgisayar Mühendisliği Lisans · Işık Üniversitesi\nMBA · Maltepe Üniversitesi',
  },
  contact: {
    title: 'Güvenilir bir şey inşa edelim.',
    note: 'iOS, Flutter ve mobil mühendislik fırsatlarına açığım.\nTürkiye’den uzaktan, ya da İstanbul’da hibrit ve ofis içi.',
    emailMe: 'E-posta gönder',
    invitation:
      'İşe alım görüşmeleri için ürün, ekip ve rol hakkında bilgi verin.',
  },
  footer: {
    websiteSource: 'Site kaynağı',
  },
  profile: profileCopyTr,
  projects: projectsTr,
  openSourceProjects: openSourceProjectsTr,
  skillGroups: skillGroupsTr,
}

export const messagesByLocale: Record<Locale, Messages> = {
  en,
  tr,
}

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale]
}

export function applyDocumentMeta(locale: Locale): void {
  const messages = getMessages(locale)
  document.title = messages.meta.title

  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.setAttribute('content', messages.meta.description)
  }

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', messages.meta.title)
  }

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) {
    ogDescription.setAttribute('content', messages.meta.description)
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]')
  if (ogLocale) {
    ogLocale.setAttribute('content', messages.meta.ogLocale)
  }

  const twitterTitle = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitle) {
    twitterTitle.setAttribute('content', messages.meta.title)
  }

  const twitterDescription = document.querySelector(
    'meta[name="twitter:description"]',
  )
  if (twitterDescription) {
    twitterDescription.setAttribute('content', messages.meta.description)
  }
}
