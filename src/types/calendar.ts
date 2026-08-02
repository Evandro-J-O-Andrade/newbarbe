export type CalendarProvider = 'google' | 'microsoft'

export interface CalendarEvent {
  id?: string
  title: string
  description?: string
  startDate: string
  endDate: string
  location?: string
  attendees?: string[]
}

export interface CalendarAuthConfig {
  provider: CalendarProvider
  clientId: string
  redirectUri?: string
}

export interface CalendarToken {
  accessToken: string
  expiresAt: number
  provider: CalendarProvider
  refreshToken?: string
  email?: string
}
