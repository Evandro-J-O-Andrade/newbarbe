import type { CalendarProvider, CalendarEvent, CalendarAuthConfig, CalendarToken } from '@/types/calendar'

interface GoogleEvent {
  id?: string
  summary?: string
  description?: string
  start?: { dateTime?: string; date?: string }
  end?: { dateTime?: string; date?: string }
  location?: string
}

interface MicrosoftEvent {
  id?: string
  subject?: { subjectType?: string; text?: string } | string
  body?: { preview?: string }
  start?: { dateTime?: string }
  end?: { dateTime?: string }
  location?: { displayName?: string }
}

function getEventTitle(e: MicrosoftEvent): string {
  if (typeof e.subject === 'string') return e.subject
  return e.subject?.text || ''
}

interface GoogleEventResponse {
  items?: GoogleEvent[]
}

interface MicrosoftEventResponse {
  value?: MicrosoftEvent[]
}

interface TokenResponse {
  access_token: string
  expires_in: number
  refresh_token?: string
  id_token?: string
  token_type?: string
}

const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth'
const GOOGLE_API_BASE = 'https://www.googleapis.com/calendar/v3/calendars'
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token'
const GOOGLE_SCOPES = 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.email'

const MICROSOFT_AUTH_URL = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
const MICROSOFT_API_BASE = 'https://graph.microsoft.com/v1.0/me/calendar/events'
const MICROSOFT_TOKEN_URL = 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
const MICROSOFT_SCOPES = 'Calendars.ReadWrite openid email profile'

const TOKEN_KEY = 'nwb_calendar_token'

export function getCalendarConfig(): CalendarAuthConfig | null {
  const provider = (import.meta.env.VITE_CALENDAR_PROVIDER as CalendarProvider) || null
  if (!provider) return null

  const clientId = import.meta.env.VITE_GOOGLE_CALENDAR_CLIENT_ID || import.meta.env.VITE_MICROSOFT_CLIENT_ID
  if (!clientId) return null

  return {
    provider,
    clientId,
    redirectUri: window.location.origin + '/auth/callback',
  }
}

export function getStoredToken(): CalendarToken | null {
  const raw = localStorage.getItem(TOKEN_KEY)
  if (!raw) return null

  try {
    const token = JSON.parse(raw) as CalendarToken
    if (token.expiresAt < Date.now() / 1000) {
      localStorage.removeItem(TOKEN_KEY)
      return null
    }
    return token
  } catch {
    return null
  }
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
}

export function initiateAuth(provider: CalendarProvider, clientId: string, redirectUri: string): void {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: provider === 'google' ? GOOGLE_SCOPES : MICROSOFT_SCOPES,
    access_type: 'offline',
    prompt: 'consent',
    state: btoa(JSON.stringify({ provider })),
  })

  if (provider === 'google') {
    window.location.href = `${GOOGLE_AUTH_URL}?${params.toString()}`
  } else {
    const microsoftParams = new URLSearchParams(params.toString())
    microsoftParams.set('response_mode', 'query')
    window.location.href = `${MICROSOFT_AUTH_URL}?${microsoftParams.toString()}`
  }
}

export async function handleAuthCallback(code: string, provider: CalendarProvider, clientId: string, redirectUri: string): Promise<CalendarToken> {
  const tokenUrl = provider === 'google' ? GOOGLE_TOKEN_URL : MICROSOFT_TOKEN_URL

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: import.meta.env[`VITE_${provider === 'google' ? 'GOOGLE' : 'MICROSOFT'}_CLIENT_SECRET`] || '',
    redirect_uri: redirectUri,
    grant_type: 'authorization_code',
    code,
    ...(provider === 'microsoft' ? { scope: MICROSOFT_SCOPES } : {}),
  })

  const res = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })

  if (!res.ok) {
    throw new Error(`Falha ao obter token (${provider})`)
  }

  const data = await res.json() as TokenResponse
  const token: CalendarToken = {
    accessToken: data.access_token,
    expiresAt: Date.now() / 1000 + (data.expires_in || 3600),
    provider,
    refreshToken: data.refresh_token,
    email: data.id_token ? JSON.parse(atob(data.id_token.split('.')[1])).email : undefined,
  }

  localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
  return token
}

async function refreshGoogleToken(refreshToken: string, clientId: string): Promise<CalendarToken | null> {
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET || '',
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  })

  try {
    const res = await fetch(GOOGLE_TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })

    if (!res.ok) return null
    const data = await res.json()

    const existing = getStoredToken()
    if (!existing) return null

    const token: CalendarToken = {
      ...existing,
      accessToken: data.access_token,
      expiresAt: Date.now() / 1000 + (data.expires_in || 3600),
    }

    localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
    return token
  } catch {
    return null
  }
}

async function refreshMicrosoftToken(refreshToken: string, clientId: string): Promise<CalendarToken | null> {
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: import.meta.env.VITE_MICROSOFT_CLIENT_SECRET || '',
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
    scope: MICROSOFT_SCOPES,
  })

  try {
    const res = await fetch(MICROSOFT_TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })

    if (!res.ok) return null
    const data = await res.json()

    const existing = getStoredToken()
    if (!existing) return null

    const token: CalendarToken = {
      ...existing,
      accessToken: data.access_token,
      expiresAt: Date.now() / 1000 + (data.expires_in || 3600),
      refreshToken: data.refresh_token || refreshToken,
    }

    localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
    return token
  } catch {
    return null
  }
}

async function getValidToken(): Promise<CalendarToken | null> {
  let token = getStoredToken()
  if (!token) return null

  if (token.expiresAt < Date.now() / 1000 + 60) {
    const config = getCalendarConfig()
    if (!config || !token.refreshToken) {
      clearToken()
      return null
    }

    if (token.provider === 'google') {
      token = await refreshGoogleToken(token.refreshToken, config.clientId)
    } else {
      token = await refreshMicrosoftToken(token.refreshToken, config.clientId)
    }

    if (!token) {
      clearToken()
      return null
    }
  }

  return token
}

export async function fetchCalendarEvents(dateMin?: string, dateMax?: string): Promise<CalendarEvent[]> {
  const token = await getValidToken()
  if (!token) throw new Error('Não autenticado. Conecte sua agenda primeiro.')

  if (token.provider === 'google') {
    const params = new URLSearchParams()
    if (dateMin) params.set('timeMin', dateMin)
    if (dateMax) params.set('timeMax', dateMax)
    params.set('singleEvents', 'true')
    params.set('orderBy', 'startTime')

    const res = await fetch(`${GOOGLE_API_BASE}/primary/events?${params.toString()}`, {
      headers: { Authorization: `Bearer ${token.accessToken}` },
    })

    if (!res.ok) throw new Error('Falha ao buscar eventos do Google Calendar')

    const data = await res.json() as GoogleEventResponse
    return (data.items || []).map((e) => ({
      id: e.id,
      title: e.summary || '',
      description: e.description,
      startDate: e.start?.dateTime || e.start?.date || '',
      endDate: e.end?.dateTime || e.end?.date || '',
      location: e.location,
    }))
  } else {
    const url = new URL(MICROSOFT_API_BASE)
    url.searchParams.set('$orderby', 'start/dateTime')
    if (dateMin) url.searchParams.set("start/dateTime", `ge ${dateMin}`)
    if (dateMax) url.searchParams.set("start/dateTime", `lt ${dateMax}`)

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token.accessToken}` },
    })

    if (!res.ok) throw new Error('Falha ao buscar eventos do Microsoft Calendar')

    const data = await res.json() as MicrosoftEventResponse
    return (data.value || []).map((e) => ({
      id: e.id,
      title: getEventTitle(e),
      description: e.body?.preview,
      startDate: e.start?.dateTime || '',
      endDate: e.end?.dateTime || '',
      location: e.location?.displayName,
    }))
  }
}

export async function createCalendarEvent(event: CalendarEvent): Promise<string> {
  const token = await getValidToken()
  if (!token) throw new Error('Não autenticado. Conecte sua agenda primeiro.')

  if (token.provider === 'google') {
    const body = {
      summary: event.title,
      description: event.description,
      start: { dateTime: event.startDate, timeZone: 'America/Sao_Paulo' },
      end: { dateTime: event.endDate, timeZone: 'America/Sao_Paulo' },
      ...(event.location ? { location: event.location } : {}),
      ...(event.attendees?.length ? { attendees: event.attendees.map((e) => ({ email: e })) } : {}),
    }

    const res = await fetch(`${GOOGLE_API_BASE}/primary/events`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token.accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) throw new Error('Falha ao criar evento no Google Calendar')
    const data = await res.json()
    return data.id
  } else {
    const body = {
      subject: event.title,
      body: { contentType: 'HTML', content: event.description || '' },
      start: { dateTime: event.startDate, timeZone: 'America/Sao_Paulo' },
      end: { dateTime: event.endDate, timeZone: 'America/Sao_Paulo' },
      ...(event.location ? { location: { displayName: event.location } } : {}),
      ...(event.attendees?.length ? { attendees: event.attendees.map((e) => ({ emailAddress: { address: e } })) } : {}),
    }

    const res = await fetch(MICROSOFT_API_BASE, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token.accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) throw new Error('Falha ao criar evento no Microsoft Calendar')
    const data = await res.json()
    return data.id
  }
}

export async function updateCalendarEvent(eventId: string, event: Partial<CalendarEvent>): Promise<void> {
  const token = await getValidToken()
  if (!token) throw new Error('Não autenticado. Conecte sua agenda primeiro.')

  const updates: Record<string, unknown> = {}
  if (event.title) updates.summary = event.title
  if (event.description) updates.description = event.description
  if (event.startDate) updates.start = { dateTime: event.startDate, timeZone: 'America/Sao_Paulo' }
  if (event.endDate) updates.end = { dateTime: event.endDate, timeZone: 'America/Sao_Paulo' }
  if (event.location) updates.location = event.location

  if (token.provider === 'google') {
    const res = await fetch(`${GOOGLE_API_BASE}/primary/events/${eventId}`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token.accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    })
    if (!res.ok) throw new Error('Falha ao atualizar evento no Google Calendar')
  } else {
    const res = await fetch(`${MICROSOFT_API_BASE}/${eventId}`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token.accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    })
    if (!res.ok) throw new Error('Falha ao atualizar evento no Microsoft Calendar')
  }
}

export async function deleteCalendarEvent(eventId: string): Promise<void> {
  const token = await getValidToken()
  if (!token) throw new Error('Não autenticado. Conecte sua agenda primeiro.')

  if (token.provider === 'google') {
    const res = await fetch(`${GOOGLE_API_BASE}/primary/events/${eventId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token.accessToken}` },
    })
    if (!res.ok) throw new Error('Falha ao deletar evento do Google Calendar')
  } else {
    const res = await fetch(`${MICROSOFT_API_BASE}/${eventId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token.accessToken}` },
    })
    if (!res.ok) throw new Error('Falha ao deletar evento do Microsoft Calendar')
  }
}

export async function isCalendarAuthenticated(): Promise<boolean> {
  const token = await getValidToken()
  return !!token
}
