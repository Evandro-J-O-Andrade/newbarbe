/**
 * Footer
 *
 * Rodapé principal da landing page.
 *
 * Responsabilidades:
 * - Agrupar links úteis por tema.
 * - Exibir redes sociais.
 * - Manter identidade visual consistente.
 * - Exibir direitos autorais.
 *
 * Dependências:
 * - Lucide React
 */

import { Scissors, Instagram, Facebook, MessageCircle, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  servicos: ['Corte Masculino', 'Barba', 'Hidratação', 'Pigmentação', 'Sobrancelha', 'Combo'],
  institucional: ['Sobre', 'Equipe', 'Galeria', 'Preços', 'Contato'],
  acesso: [
    { label: 'Área do Cliente', href: '/login' },
    { label: 'Área do Barbeiro', href: '/login' },
    { label: 'Painel Administrativo', href: '/login' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#" className="flex items-center gap-3 mb-6">
              <Scissors className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-bold tracking-widest text-white">
                NEW<span className="text-amber-500">WAVE</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experiência premium em cortes masculinos. Onde tradição encontra modernidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 text-gray-400 hover:text-amber-500 hover:bg-amber-500/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 text-gray-400 hover:text-amber-500 hover:bg-amber-500/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 text-gray-400 hover:text-amber-500 hover:bg-amber-500/10 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link}>
                  <a href="#servicos" className="text-gray-400 hover:text-amber-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Institucional</h3>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-amber-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Acesso</h3>
            <ul className="space-y-3">
              {footerLinks.acesso.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-amber-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5" />
                Av. Paulista, 1000 - São Paulo, SP
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-amber-500 mt-0.5" />
                (11) 99999-9999
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} New Wave Barber. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
