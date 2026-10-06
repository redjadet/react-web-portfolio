export type ProjectLink = { label: string; href: string }
export type Project = {
  id: string
  title: string
  blurb: string
  tags: string[]
  evidence: string[]
  links: ProjectLink[]
}

export type OpenSourceProject = {
  id: string
  title: string
  blurb: string
  href: string
}

export const projectsEn: Project[] = [
  {
    id: 'flutter-bloc-app',
    title: 'Flutter engineering portfolio',
    blurb:
      'A cross-platform reference app with BLoC / Cubit, offline synchronization and native Swift / Kotlin integration.',
    tags: ['Flutter', 'Dart', 'Clean Architecture'],
    evidence: [
      'Layered features and predictable state',
      'Offline data and platform integration',
      'Unit, widget, golden and integration tests',
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://redjadet.github.io/flutter_bloc_app/',
      },
      {
        label: '3-minute review',
        href: 'https://github.com/redjadet/flutter_bloc_app#3-minute-review',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter',
      },
      {
        label: 'Source & architecture',
        href: 'https://github.com/redjadet/flutter_bloc_app',
      },
    ],
  },
  {
    id: 'super-demo-ios',
    title: 'Native iOS & iPadOS portfolio',
    blurb:
      'A SwiftUI / SwiftData sample with an offline feed, concurrency and UIKit interoperability.',
    tags: ['SwiftUI', 'SwiftData', 'iOS / iPadOS'],
    evidence: [
      'Feature layers and dependency injection',
      'Offline cache and URLSession networking',
      'UI tests and an optional Flutter bridge',
    ],
    links: [
      {
        label: '3-minute path',
        href: 'https://github.com/redjadet/super_demo_ios#3-minute-path',
      },
      {
        label: 'Source & reviewer guide',
        href: 'https://github.com/redjadet/super_demo_ios',
      },
    ],
  },
  {
    id: 'react-website',
    title: 'React & TypeScript personal website',
    blurb:
      'This responsive website: typed content, accessible navigation and a small, reusable component system.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    evidence: [
      'Accessible and responsive design',
      'Typed content and reusable components',
      'Optimized build and clean project structure',
    ],
    links: [
      {
        label: 'View source',
        href: 'https://github.com/redjadet/react-web-portfolio',
      },
    ],
  },
]

export const projectsTr: Project[] = [
  {
    id: 'flutter-bloc-app',
    title: 'Flutter mühendislik portfolyosu',
    blurb:
      'BLoC / Cubit, çevrimdışı senkronizasyon ve native Swift / Kotlin entegrasyonu içeren çapraz platform referans uygulaması.',
    tags: ['Flutter', 'Dart', 'Clean Architecture'],
    evidence: [
      'Katmanlı özellikler ve öngörülebilir durum',
      'Çevrimdışı veri ve platform entegrasyonu',
      'Birim, widget, golden ve entegrasyon testleri',
    ],
    links: [
      {
        label: 'Canlı demo',
        href: 'https://redjadet.github.io/flutter_bloc_app/',
      },
      {
        label: '3 dakikalık inceleme',
        href: 'https://github.com/redjadet/flutter_bloc_app#3-minute-review',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter',
      },
      {
        label: 'Kaynak ve mimari',
        href: 'https://github.com/redjadet/flutter_bloc_app',
      },
    ],
  },
  {
    id: 'super-demo-ios',
    title: 'Native iOS ve iPadOS portfolyosu',
    blurb:
      'Çevrimdışı akış, eşzamanlılık ve UIKit birlikte çalışabilirliği olan SwiftUI / SwiftData örneği.',
    tags: ['SwiftUI', 'SwiftData', 'iOS / iPadOS'],
    evidence: [
      'Özellik katmanları ve bağımlılık enjeksiyonu',
      'Çevrimdışı önbellek ve URLSession ağı',
      'UI testleri ve isteğe bağlı Flutter köprüsü',
    ],
    links: [
      {
        label: '3 dakikalık yol',
        href: 'https://github.com/redjadet/super_demo_ios#3-minute-path',
      },
      {
        label: 'Kaynak ve inceleme rehberi',
        href: 'https://github.com/redjadet/super_demo_ios',
      },
    ],
  },
  {
    id: 'react-website',
    title: 'React ve TypeScript kişisel web sitesi',
    blurb:
      'Bu duyarlı site: tipli içerik, erişilebilir gezinme ve küçük, yeniden kullanılabilir bir bileşen sistemi.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    evidence: [
      'Erişilebilir ve duyarlı tasarım',
      'Tipli içerik ve yeniden kullanılabilir bileşenler',
      'Optimize derleme ve temiz proje yapısı',
    ],
    links: [
      {
        label: 'Kaynağı görüntüle',
        href: 'https://github.com/redjadet/react-web-portfolio',
      },
    ],
  },
]

export const openSourceProjectsEn = [
  {
    id: 'type-safe-bloc',
    title: 'Type-safe BLoC helpers',
    blurb:
      'Published Flutter package with typed selectors, builders and listeners for BLoC / Cubit.',
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    title: 'Cross-platform comparison study',
    blurb:
      'One sample product in SwiftUI, Jetpack Compose and Flutter, with implementation tradeoffs.',
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    title: 'Safe parse utilities',
    blurb:
      'Dart helpers for predictable parsing of dynamic and JSON-like values.',
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    title: 'Async coalescing utilities',
    blurb:
      'Dependency-free Dart utilities for coalescing work and rejecting stale results.',
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
] as const satisfies readonly OpenSourceProject[]

export const openSourceProjectsTr = [
  {
    id: 'type-safe-bloc',
    title: 'Tip güvenli BLoC yardımcıları',
    blurb:
      'BLoC / Cubit için tipli seçiciler, oluşturucular ve dinleyiciler içeren yayınlanmış Flutter paketi.',
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    title: 'Çapraz platform karşılaştırma çalışması',
    blurb:
      'SwiftUI, Jetpack Compose ve Flutter’da aynı örnek ürün; uygulama ödünleşimleriyle birlikte.',
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    title: 'Güvenli ayrıştırma yardımcıları',
    blurb:
      'Dinamik ve JSON benzeri değerlerin öngörülebilir ayrıştırması için Dart yardımcıları.',
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    title: 'Asenkron birleştirme yardımcıları',
    blurb:
      'İşleri birleştirmek ve bayat sonuçları reddetmek için bağımlılıksız Dart yardımcıları.',
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
] as const satisfies readonly OpenSourceProject[]

/** @deprecated Prefer locale-aware copies via `useLocale().t.projects`. */
export const projects = projectsEn

/** @deprecated Prefer locale-aware copies via `useLocale().t.openSourceProjects`. */
export const openSourceProjects = openSourceProjectsEn
