/**
 * Navbar
 *
 * Componente de navegação principal da landing page.
 *
 * Responsabilidades:
 * - Exibir marca e menu principal.
 * - Oferecer CTA de agendamento.
 * - Alterar comportamento visual ao rolar a página.
 * - Exibir menu mobile com animação.
 *
 * Dependências:
 * - Framer Motion
 * - Lucide React
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Scissors } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#precos', label: 'Preços' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <Scissors className="w-8 h-8 text-amber-500 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-amber-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-2xl font-bold tracking-widest text-white">
              NEW<span className="text-amber-500">WAVE</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-gray-300 hover:text-amber-500 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#agendar"
              className="relative px-6 py-2.5 bg-amber-500 text-black font-semibold text-sm tracking-wide rounded overflow-hidden group"
            >
              <span className="relative z-10">Agendar</span>
              <span className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <Link
              to="/login"
              className="relative px-6 py-2.5 border border-gray-700 text-white font-semibold text-sm tracking-wide rounded hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
            >
              Entrar
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-72 bg-black border-l border-gray-800 z-50 lg:hidden flex flex-col justify-center gap-8 p-8"
          >
             {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-medium tracking-wide text-gray-300 hover:text-amber-500 transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#agendar"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-4 px-8 py-3 bg-amber-500 text-black font-semibold tracking-wide rounded text-center"
              >
                Agendar
              </motion.a>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                className="mt-4 flex flex-col gap-3"
              >
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 border border-gray-700 text-white font-semibold tracking-wide rounded text-center hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
                >
                  Entrar
                </Link>
                <Link
                  to="/cadastro"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 border border-gray-700 text-white font-semibold tracking-wide rounded text-center hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
                >
                  Criar conta
                </Link>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
