/**
 * useLenis
 *
 * Hook que inicializa o Lenis para scroll suave na aplicação.
 *
 * Responsabilidades:
 * - Inicializar o Lenis uma única vez.
 * - Integrar com requestAnimationFrame.
 * - Permitir limpeza ao desmontar.
 *
 * Dependências:
 * - @studio-freight/lenis
 */

import { useEffect } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
}
