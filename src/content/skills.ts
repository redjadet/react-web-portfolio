export type SkillGroup = { id: string; title: string; items: string[] }

export const skillGroupsEn: SkillGroup[] = [
  {
    id: 'native',
    title: 'Native iOS & iPadOS',
    items: [
      'Swift · SwiftUI · UIKit',
      'Objective-C · Swift Concurrency',
      'Xcode · CocoaPods',
    ],
  },
  {
    id: 'flutter',
    title: 'Flutter & Dart',
    items: [
      'BLoC / Cubit · Clean Architecture',
      'Responsive and adaptive UI',
      'Swift / Kotlin platform integration',
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & data',
    items: [
      'Modular features · Dependency injection',
      'REST APIs · Offline caching',
      'Firebase · Supabase',
    ],
  },
  {
    id: 'quality',
    title: 'Quality & delivery',
    items: [
      'Unit · UI · Widget · Integration tests',
      'GitHub Actions · Fastlane',
      'App Store & Google Play workflows',
    ],
  },
  {
    id: 'web',
    title: 'React web',
    items: [
      'React · TypeScript · Vite',
      'HTML / CSS · CSS Modules',
      'Responsive and accessible UI',
    ],
  },
  {
    id: 'ai',
    title: 'AI-assisted development',
    items: [
      'Cursor · Codex · Reusable AI skills',
      'Scoped changes and architecture review',
      'Human code review and test verification',
    ],
  },
]

export const skillGroupsTr: SkillGroup[] = [
  {
    id: 'native',
    title: 'Native iOS ve iPadOS',
    items: [
      'Swift · SwiftUI · UIKit',
      'Objective-C · Swift Concurrency',
      'Xcode · CocoaPods',
    ],
  },
  {
    id: 'flutter',
    title: 'Flutter ve Dart',
    items: [
      'BLoC / Cubit · Clean Architecture',
      'Duyarlı ve uyarlanabilir arayüz',
      'Swift / Kotlin platform entegrasyonu',
    ],
  },
  {
    id: 'architecture',
    title: 'Mimari ve veri',
    items: [
      'Modüler özellikler · Bağımlılık enjeksiyonu',
      'REST API’ler · Çevrimdışı önbellekleme',
      'Firebase · Supabase',
    ],
  },
  {
    id: 'quality',
    title: 'Kalite ve teslimat',
    items: [
      'Birim · UI · Widget · Entegrasyon testleri',
      'GitHub Actions · Fastlane',
      'App Store ve Google Play iş akışları',
    ],
  },
  {
    id: 'web',
    title: 'React web',
    items: [
      'React · TypeScript · Vite',
      'HTML / CSS · CSS Modules',
      'Duyarlı ve erişilebilir arayüz',
    ],
  },
  {
    id: 'ai',
    title: 'Yapay zekâ destekli geliştirme',
    items: [
      'Cursor · Codex · Yeniden kullanılabilir AI becerileri',
      'Sınırlı değişiklikler ve mimari inceleme',
      'İnsan kod incelemesi ve test doğrulaması',
    ],
  },
]

/** @deprecated Prefer locale-aware copies via `useLocale().t.skillGroups`. */
export const skillGroups = skillGroupsEn
