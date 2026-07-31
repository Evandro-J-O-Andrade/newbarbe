import { motion } from 'framer-motion'
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'

const cartItems = [
  { id: 1, name: 'Gelo Professional', price: 25, qty: 1, image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop' },
  { id: 2, name: 'Pomada Styling', price: 35, qty: 2, image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=400&fit=crop' },
]

export default function CartPage() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Carrinho</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Seu <span className="text-amber-500">carrinho</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Seu carrinho está vazio.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 p-6 bg-gray-900 border border-gray-800 rounded-xl"
              >
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <div className="text-gray-400 text-sm">R$ {item.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 bg-white/5 rounded border border-gray-700 text-white flex items-center justify-center hover:bg-white/10">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-white text-center w-8">{item.qty}</span>
                  <button className="w-8 h-8 bg-white/5 rounded border border-gray-700 text-white flex items-center justify-center hover:bg-white/10">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-white font-bold w-20 text-right">R$ {(item.price * item.qty).toFixed(2)}</div>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
            <div className="border-t border-gray-800 pt-6 flex justify-between items-center">
              <span className="text-gray-400 text-lg">Total</span>
              <span className="text-amber-500 font-bold text-2xl">R$ {total.toFixed(2)}</span>
            </div>
            <button className="w-full py-4 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-colors mt-4">
              Finalizar compra
            </button>
          </div>
        )}
      </div>
    </div>
  )
}