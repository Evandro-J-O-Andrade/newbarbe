import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Check, X } from 'lucide-react'
import { useCalendarAuth } from '@/hooks/useCalendarAuth'
import { getCalendarConfig } from '@/services/calendar'

export default function CalendarConnectButton() {
  const { authenticated, connect, disconnect, provider } = useCalendarAuth()
  const [showOptions, setShowOptions] = useState(false)

  const config = getCalendarConfig()
  const providerName = provider === 'google' ? 'Google Calendar' : provider === 'microsoft' ? 'Microsoft Calendar' : null

  if (!config) {
    return (
      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gray-500" />
          <span className="text-gray-400">Conexão de calendário não configurada</span>
        </div>
        <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">Desativado</span>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
      <div className="flex items-center gap-3">
        <Calendar className="w-5 h-5 text-amber-500" />
        <div>
          <span className="text-white font-medium">
            {authenticated && providerName ? providerName : 'Conectar Calendário'}
          </span>
          {authenticated && (
            <p className="text-xs text-gray-400 mt-0.5">Sincronização automática de agendamentos</p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {authenticated ? (
          <motion.button
            key="connected"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={disconnect}
            className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-sm hover:bg-green-500/20 transition-colors"
          >
            <Check className="w-4 h-4" />
            Conectado
          </motion.button>
        ) : (
          <motion.button
            key="disconnected"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setShowOptions(true)}
            className="px-3 py-1.5 bg-amber-500 text-black rounded-lg text-sm font-semibold hover:bg-amber-400 transition-colors"
          >
            Conectar
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowOptions(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-72"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Escolher Provedor</h3>
                <button
                  onClick={() => setShowOptions(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    connect('google')
                    setShowOptions(false)
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Google Calendar
                </button>
                <button
                  onClick={() => {
                    connect('microsoft')
                    setShowOptions(false)
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Microsoft Calendar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
