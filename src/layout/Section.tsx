import { ReactNode } from 'react'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: string
  fullWidth?: boolean
}

const paddingMap = {
  none: '',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-24',
}

export default function Section({
  children,
  className = '',
  id,
  padding = 'lg',
  background = '',
  fullWidth = false,
}: SectionProps) {
  const Wrapper = fullWidth ? 'div' : Container

  return (
    <section
      id={id}
      className={`w-full ${paddingMap[padding]} ${background} ${className}`}
    >
      <Wrapper>
        {children}
      </Wrapper>
    </section>
  )
}