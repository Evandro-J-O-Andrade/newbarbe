import { motion } from 'framer-motion'

const faqs = [
  { q: 'Precisa agendar?', a: 'Sim. Agende online ou pelo WhatsApp para garantir seu horário.' },
  { q: 'Aceita cartão?', a: 'Sim. Aceitamos PIX, dinheiro, cartão de crédito e débito.' },
  { q: 'Tem Pix?', a: 'Sim. PIX é nossa forma de pagamento preferida.' },
  { q: 'Faz barba?', a: 'Sim. Barba modelada, barba completa e design de barba.' },
  { q: 'Faz infantil?', a: 'Sim. Atendemos crianças a partir de 5 anos.' },
  { q: 'Tem estacionamento?', a: 'Sim. Estacionamento próprio e gratuito.' },
  { q: 'Quanto tempo dura um corte?', a: 'Cortes masculinos duram de 30 a 60 minutos, dependendo do serviço.' },
  { q: 'Atende por ordem de chegada?', a: 'Preferencialmente com agendamento. Em casos especiais, atendemos por ordem.' },
  { q: 'Posso remarcar?', a: 'Sim. Remarcações são permitidas com pelo menos 24h de antecedência.' },
  { q: 'Como cancelar?', a: 'Ligue ou envie uma mensagem pelo WhatsApp com pelo menos 24h de antecedência.' },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Perguntas Frequentes</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="text-amber-500">FAQ</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Respondemos as dúvidas mais comuns para facilitar sua experiência.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-white font-bold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}