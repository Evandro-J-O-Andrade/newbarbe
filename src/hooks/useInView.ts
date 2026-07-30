/**
 * useInView
 *
 * Hook utilitário para detectar quando um elemento entra na viewport.
 *
 * Responsabilidades:
 * - Observar visibilidade de um elemento.
 * - Retornar ref e estado booleano.
 * - Permitir configuração de margem e trigger único.
 */

import { useState, useEffect, useRef } from 'react'

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (options?.triggerOnce) {
          observer.disconnect()
        }
      } else if (!options?.triggerOnce) {
        setIsInView(false)
      }
    }, options)

    observer.observe(element)
    return () => observer.disconnect()
  }, [options?.triggerOnce, options?.threshold, options?.rootMargin])

  return { ref, isInView }
}
