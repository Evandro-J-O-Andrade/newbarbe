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
  { src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=800&fit=crop', tall: true },
  { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=800&fit=crop', tall: true },
  { src: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600&h=600&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1503951914875-452162b0203f?w=600&h=600&fit=crop', tall: false },
]

const FALLBACK = 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=600&fit=crop&q=80'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [brokenImages, setBrokenImages] = useState<Set<number>>(new Set())

  function handleError(index: number) {
    setBrokenImages((prev) => new Set(prev).add(index))
  }

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

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => {
            const isBroken = brokenImages.has(index)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => !isBroken && setSelectedImage(isBroken ? FALLBACK : image.src)}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${image.tall ? 'md:row-span-2' : ''}`}
              >
                <img
                  src={isBroken ? FALLBACK : image.src}
                  alt={`Trabalho ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={() => handleError(index)}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-amber-500/90 rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-black" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 cursor-pointer"
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Galeria ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
