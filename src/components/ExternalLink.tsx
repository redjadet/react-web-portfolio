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
  const opensInNewTab = ' (opens in a new tab)'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label ? label + opensInNewTab : undefined}
    >
      {children}
      {!label ? <span className="visually-hidden">{opensInNewTab}</span> : null}
    </a>
  )
}
