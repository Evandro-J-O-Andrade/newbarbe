import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '7xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const maxWidthMap = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
}

const paddingMap = {
  none: '',
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8',
  xl: 'px-12',
}

export default function Container({
  children,
  className = '',
  maxWidth = '7xl',
  padding = 'lg',
}: ContainerProps) {
  return (
    <div
      className={`w-full ${maxWidthMap[maxWidth]} mx-auto ${paddingMap[padding]} ${className}`}
    >
      {children}
    </div>
  )
}