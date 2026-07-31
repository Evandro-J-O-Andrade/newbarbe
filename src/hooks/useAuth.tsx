/**
 * AuthContext
 *
 * Contexto de autenticação.
 *
 * Responsabilidades:
 * - Gerenciar sessão do usuário.
 * - Fornecer dados do usuário logado.
 * - Controlar login e logout.
 */

import { createContext, useContext, useState, useEffect } from 'react'
import type { User } from '@/types/database'
import { supabase } from '@/services/supabase'

interface AuthContextValue {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        loadUserProfile(session.user.id)
      } else {
        setLoading(false)
      }
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        await loadUserProfile(session.user.id)
      } else {
        setUser(null)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  async function loadUserProfile(userId: string) {
    if (!supabase) {
      setLoading(false)
      return
    }

    const { data } = await supabase
      .from('usuario')
      .select('*')
      .eq('id', userId)
      .single()

    if (data) {
      setUser(data as User)
    }
    setLoading(false)
  }

  async function login(email: string, password: string) {
    if (!supabase) {
      throw new Error('Supabase não configurado')
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw new Error(error.message)
    }
  }

  async function logout() {
    if (!supabase) {
      return
    }

    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
