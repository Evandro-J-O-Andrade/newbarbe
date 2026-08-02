import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
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
        <Helmet>
          <title>{title} | New Wave Barber</title>
        </Helmet>
      )}
      <main className="w-full">
        <Container>
          {children}
        </Container>
      </main>
    </div>
  )
}
