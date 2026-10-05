import { useEffect, useState } from 'react'

const sectionIds = ['work', 'skills', 'about', 'contact'] as const
export type SectionId = (typeof sectionIds)[number]

export function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const nextId = visible[0]?.target.id
        if (sectionIds.includes(nextId as SectionId)) {
          setActive(nextId as SectionId)
        }
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75],
      },
    )

    for (const section of sections) {
      observer.observe(section)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return active
}
