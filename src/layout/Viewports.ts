export const viewports = {
  mobile320: 320,
  mobile360: 360,
  mobile375: 375,
  mobile390: 390,
  mobile414: 414,
  mobile430: 430,
  tablet768: 768,
  tablet820: 820,
  tablet1024: 1024,
  desktop1280: 1280,
  desktop1366: 1366,
  desktop1440: 1440,
  desktop1600: 1600,
  desktop1920: 1920,
  desktop2560: 2560,
} as const

export type Viewport = keyof typeof viewports