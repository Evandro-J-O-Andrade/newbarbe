import { ReactNode } from 'react'

interface ResponsiveProps {
  children: ReactNode
  mobile?: ReactNode
  tablet?: ReactNode
  desktop?: ReactNode
}

export default function Responsive({
  children,
  mobile,
  tablet,
  desktop,
}: ResponsiveProps) {
  if (typeof window === 'undefined') return <>{children}</>

  const width = window.innerWidth

  if (width < 768 && mobile) return <>{mobile}</>
  if (width < 1024 && tablet) return <>{tablet}</>
  if (desktop) return <>{desktop}</>

  return <>{children}</>
}