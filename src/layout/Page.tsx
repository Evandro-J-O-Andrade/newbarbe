import { ReactNode } from 'react'
import Container from './Container'

interface PageProps {
  children: ReactNode
  className?: string
  title?: string
}

export default function Page({
  children,
  className = '',
  title,
}: PageProps) {
  return (
    <div className={`min-h-screen bg-black text-white ${className}`}>
      {title && (
        <title>{title} | New Wave Barber</title>
      )}
      <main className="w-full">
        <Container>
          {children}
        </Container>
      </main>
    </div>
  )
}