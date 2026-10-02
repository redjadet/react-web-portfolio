import type { ReactNode } from 'react'
export function ExternalLink({
  href,
  children,
  className,
  label,
}: {
  href: string
  children: ReactNode
  className?: string
  label?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label ? label + ' (opens in a new tab)' : undefined}
    >
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  )
}
