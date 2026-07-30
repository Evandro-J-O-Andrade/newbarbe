/**
 * useInView
 *
 * Hook utilitário para detectar quando um elemento entra na viewport.
 *
 * Responsabilidades:
 * - Observar visibilidade de um elemento.
 * - Retornar ref e estado booleano.
 * - Permitir configuração de margem, threshold e disparo único.
 */

import { useState, useEffect, useRef } from 'react'

type UseInViewOptions = IntersectionObserverInit & {
  triggerOnce?: boolean
}

export function useInView(options?: UseInViewOptions) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const triggerOnce = options?.triggerOnce ?? false

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      {
        threshold: options?.threshold ?? 0,
        rootMargin: options?.rootMargin ?? '0px',
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [triggerOnce, options?.threshold, options?.rootMargin])

  return { ref, isInView }
}
