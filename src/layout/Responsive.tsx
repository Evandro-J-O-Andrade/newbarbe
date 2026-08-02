import { ReactNode, useState, useEffect } from 'react'

interface ResponsiveProps {
  children: ReactNode
  mobile?: ReactNode
  tablet?: ReactNode
  desktop?: ReactNode
}

const MOBILE_MAX = 768
const TABLET_MAX = 1024

export default function Responsive({
  children,
  mobile,
  tablet,
  desktop,
}: ResponsiveProps) {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (width < MOBILE_MAX && mobile) return <>{mobile}</>
  if (width < TABLET_MAX && tablet) return <>{tablet}</>
  if (desktop) return <>{desktop}</>

  return <>{children}</>
}
