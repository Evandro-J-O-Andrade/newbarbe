import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'
import BackButton from '@/components/navigation/BackButton'

const product = {
  id: 1,
  name: 'Gelo Professional',
  price: 25,
  desc: 'Produto premium para cuidado pós-corte.',
  image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop',
  rating: 4.8,
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute top-4 left-4 z-50">
        <BackButton />
      </div>
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Produto</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="text-amber-500">{product.name}</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </motion.div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
              <span className="text-gray-400 text-sm">{product.rating}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{product.name}</h2>
            <p className="text-gray-300 mb-6">{product.desc}</p>
            <div className="text-3xl font-bold text-amber-500 mb-8">R$ {product.price.toFixed(2)}</div>
            <button className="w-full py-4 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-colors flex items-center justify-center gap-3">
              <ShoppingCart className="w-5 h-5" />
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}