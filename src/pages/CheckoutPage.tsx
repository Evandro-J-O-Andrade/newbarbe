import { motion } from 'framer-motion'

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Checkout</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Finalizar <span className="text-amber-500">pedido</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold mb-6">Dados de entrega</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
                <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                <input type="tel" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none" placeholder="(11) 99999-9999" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Endereço</label>
                <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none" placeholder="Rua, número, bairro" />
              </div>
              <button type="button" className="w-full py-4 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-colors mt-4">
                Confirmar pedido
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-2xl font-bold mb-6">Resumo do pedido</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Gelo Professional x1</span>
                  <span>R$ 25,00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Pomada Styling x2</span>
                  <span>R$ 70,00</span>
                </div>
                <div className="border-t border-gray-800 pt-4 flex justify-between text-white font-bold">
                  <span>Total</span>
                  <span>R$ 95,00</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}