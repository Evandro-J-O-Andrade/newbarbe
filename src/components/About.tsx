/**
 * About
 *
 * Seção que apresenta a história e identidade da barbearia.
 *
 * Responsabilidades:
 * - Exibir narrativa curta e diferenciais.
 * - Destacar estatísticas relevantes.
 * - Manter identidade visual premium.
 *
 * Dependências:
 * - Framer Motion
 * - Lucide React
 */

import { motion, useScroll, useTransform } from 'framer-motion'
import { Users, Award, Clock } from 'lucide-react'
import NewWaveLogo from './NewWaveLogo'

const stats = [
  { icon: Users, value: '5.000+', label: 'Clientes Satisfeitos' },
  { icon: Award, value: '10+', label: 'Anos de Experiência' },
  { icon: Clock, value: '1.200+', label: 'Cortes por Mês' },
]

export default function About() {
  const { scrollY } = useScroll()
  const floatY = useTransform(scrollY, [0, 500], [0, -20])

  return (
    <section id="sobre" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nossa História
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Sobre a <span className="text-amber-500">New Wave</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Somos mais que uma barbearia. Somos um espaço onde estilo, conforto e profissionalismo
              se encontram. Fundada em 2015, a New Wave Barber nasceu com a missão de oferecer
              uma experiência única para o homem moderno.
            </p>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Nossa equipe é formada por profissionais apaixonados pelo que fazem, sempre
              atualizados com as últimas tendências e técnicas do mercado.
            </p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <motion.div
               style={{ y: floatY }}
               className="relative aspect-square bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl flex items-center justify-center border border-amber-500/20"
             >
               <NewWaveLogo className="w-48 h-48 text-amber-500" />
             </motion.div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/5 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
