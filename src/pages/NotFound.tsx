/**
 * Página 404.
 *
 * Responsabilidades:
 * - Apresentar fallback amigável para rotas não encontradas.
 * - Manter identidade visual da marca.
 * - Direcionar o usuário de volta para a home.
 */

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">404</span>
        <h1 className="text-4xl font-bold mt-2 mb-4">Página não encontrada</h1>
        <p className="text-gray-400 mb-8">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black font-semibold rounded"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para home
        </Link>
      </motion.div>
    </div>
  )
}
