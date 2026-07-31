export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export type Breakpoint = keyof typeof breakpoints

export function isAbove(bp: Breakpoint): boolean {
  if (typeof window === 'undefined') return true
  return window.innerWidth >= breakpoints[bp]
}

export function isBelow(bp: Breakpoint): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < breakpoints[bp]
}