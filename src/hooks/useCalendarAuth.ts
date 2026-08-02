import { useState, useEffect, useCallback } from 'react'
import { getCalendarConfig, getStoredToken, clearToken, initiateAuth, handleAuthCallback, isCalendarAuthenticated } from '@/services/calendar'
import type { CalendarToken, CalendarProvider } from '@/types/calendar'

export function useCalendarAuth() {
  const [token, setToken] = useState<CalendarToken | null>(null)
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const stored = getStoredToken()
      if (stored) {
        setToken(stored)
        setAuthenticated(true)
      } else {
        const authed = await isCalendarAuthenticated()
        setAuthenticated(authed)
      }
      setLoading(false)
    }
    checkAuth()
  }, [])

  const connect = useCallback((provider: CalendarProvider) => {
    const config = getCalendarConfig()
    if (!config) {
      console.error('Configuração de calendário não encontrada')
      return
    }
    initiateAuth(provider, config.clientId, config.redirectUri || `${window.location.origin}/auth/callback`)
  }, [])

  const disconnect = useCallback(() => {
    clearToken()
    setToken(null)
    setAuthenticated(false)
  }, [])

  const handleCallback = useCallback(async (code: string, provider: CalendarProvider) => {
    const config = getCalendarConfig()
    if (!config) throw new Error('Configuração de calendário não encontrada')

    const newToken = await handleAuthCallback(code, provider, config.clientId, config.redirectUri || `${window.location.origin}/auth/callback`)
    setToken(newToken)
    setAuthenticated(true)
    return newToken
  }, [])

  return {
    token,
    loading,
    authenticated,
    connect,
    disconnect,
    handleCallback,
    provider: token?.provider ?? null,
  }
}
