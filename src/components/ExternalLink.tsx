import type { ReactNode } from 'react'
import { useLocale } from '../i18n/useLocale'

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
  const { t } = useLocale()
  const opensInNewTab = t.a11y.opensInNewTab

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
