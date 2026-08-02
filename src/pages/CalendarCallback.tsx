import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getCalendarConfig, handleAuthCallback } from '@/services/calendar'

export default function CalendarCallback() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const code = searchParams.get('code')
    const state = searchParams.get('state')
    const errorParam = searchParams.get('error')

    if (errorParam) {
      setError(errorParam)
      return
    }

    if (!code || !state) {
      setError('Código ou estado inválido')
      return
    }

    let provider = 'google' as 'google' | 'microsoft'
    try {
      const parsed = JSON.parse(atob(state))
      if (parsed.provider === 'google' || parsed.provider === 'microsoft') {
        provider = parsed.provider
      }
    } catch {
      // use default provider
    }

    const config = getCalendarConfig()
    if (!config) {
      setError('Configuração de calendário não configurada')
      return
    }

    const redirectUri = config.redirectUri || `${window.location.origin}/auth/callback`

    const handleCallback = async () => {
      try {
        await handleAuthCallback(code, provider, config.clientId, redirectUri)
        navigate('/cliente?calendar=connected', { replace: true })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Falha na autenticação')
      }
    }

    handleCallback()
  }, [searchParams, navigate])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        {error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          <>
            <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-300">Conectando sua agenda...</p>
          </>
        )}
      </div>
    </div>
  )
}
