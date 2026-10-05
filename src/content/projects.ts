export type ProjectLink = { label: string; href: string }
export type Project = {
  id: string
  title: string
  blurb: string
  tags: string[]
  evidence: string[]
  links: ProjectLink[]
}

export const projects: Project[] = [
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

export const openSourceProjects = [
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
] as const
