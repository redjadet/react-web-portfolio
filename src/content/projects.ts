export type Project = {
  id: string
  name: string
  blurb: string
  tags: string[]
  href: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'flutter-bloc-app',
    name: 'flutter_bloc_app',
    blurb:
      'Flutter portfolio app with BLoC/Cubit, Clean Architecture, offline sync, native Swift/Kotlin interop, automated tests, and CI/CD — including a live web demo and Play release path.',
    tags: ['Flutter', 'BLoC', 'Clean Architecture', 'Offline'],
    href: 'https://github.com/redjadet/flutter_bloc_app',
    featured: true,
  },
  {
    id: 'super-demo-ios',
    name: 'super_demo_ios',
    blurb:
      'SwiftUI/SwiftData multiplatform demo for iOS, iPadOS, and macOS: offline feed, URLSession networking, UIKit interop, optional Flutter add-to-app, and CI checks.',
    tags: ['SwiftUI', 'SwiftData', 'iOS', 'macOS'],
    href: 'https://github.com/redjadet/super_demo_ios',
  },
  {
    id: 'type-safe-bloc',
    name: 'ilkersevim_type_safe_bloc',
    blurb:
      'Published Flutter package with compile-time-safe context extensions, selectors, builders, listeners, and consumers for BLoC/Cubit.',
    tags: ['Dart', 'pub.dev', 'BLoC'],
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    name: 'iOS_Android_Flutter_Comparison',
    blurb:
      'The same sample product built in SwiftUI, Jetpack Compose, and Flutter to compare UI fidelity and shared mobile implementation tradeoffs.',
    tags: ['SwiftUI', 'Compose', 'Flutter'],
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    name: 'ilkersevim_safe_parse',
    blurb:
      'Small Dart helpers for safely parsing dynamic / JSON-like values without brittle casts.',
    tags: ['Dart', 'Parsing'],
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    name: 'ilkersevim_async_utils',
    blurb:
      'Dependency-free Dart utilities for async coalescing and request-staleness guards in UI-heavy apps.',
    tags: ['Dart', 'Async'],
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
]
