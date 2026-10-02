export type SkillGroup = {
  id: string
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'mobile',
    title: 'Mobile platforms',
    items: ['Swift', 'SwiftUI', 'UIKit', 'Dart', 'Flutter', 'Kotlin / Compose (comparison work)'],
  },
  {
    id: 'architecture',
    title: 'Architecture & quality',
    items: ['Clean Architecture', 'BLoC / Cubit', 'Offline-first patterns', 'Automated tests', 'CI/CD'],
  },
  {
    id: 'web-demo',
    title: 'Web demo craft',
    items: ['React', 'TypeScript', 'Vite', 'Accessible UI', 'Static deploy'],
  },
  {
    id: 'delivery',
    title: 'Delivery',
    items: ['GitHub Actions', 'pub.dev packages', 'App Store / Play readiness', 'Technical writing for agents & teams'],
  },
]
