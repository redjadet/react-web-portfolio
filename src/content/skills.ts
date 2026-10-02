export type SkillGroup = { id: string; title: string; items: string[] }
export const skillGroups: SkillGroup[] = [
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
