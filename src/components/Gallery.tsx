/**
 * Gallery
 *
 * Seção que exibe trabalhos realizados pela barbearia.
 *
 * Responsabilidades:
 * - Apresentar grid de imagens de trabalhos.
 * - Permitir abertura em lightbox.
 * - Manter animações suaves ao rolar e ao interagir.
 *
 * Dependências:
 * - Framer Motion
 * - Lucide React
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const images = [
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1503951914875-452162b0203f?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop',
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossa <span className="text-amber-500">Galeria</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos e deixe-se inspirar.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                src={image}
                alt={`Trabalho ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Galeria"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
