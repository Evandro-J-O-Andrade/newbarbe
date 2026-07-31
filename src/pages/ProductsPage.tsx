import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'

const products = [
  { id: 1, name: 'Gelo Professional', price: 25, desc: 'Produto premium para cuidado pós-corte.', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 2, name: 'Pomada Styling', price: 35, desc: 'Fixação forte com acabamento natural.', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 3, name: 'Óleo de Barba', price: 30, desc: 'Hidratação profunda para barba e pele.', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=400&fit=crop', rating: 4.7 },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Loja</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Nossos <span className="text-amber-500">Produtos</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Produtos premium selecionados para cuidar do seu visual.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group hover:border-amber-500/30 transition-colors"
            >
              <div className="aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.desc}</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-500 fill-amber-500' : 'text-gray-700'}`} />
                  ))}
                  <span className="text-gray-400 text-xs ml-1">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-500 font-bold text-xl">R$ {product.price.toFixed(2)}</span>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm">
                    <ShoppingCart className="w-4 h-4" />
                    Adicionar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}