import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Instagram } from 'lucide-react'
import { useState } from 'react'

const contactItems = [
  { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp', href: 'https://wa.me/5511999999999', color: 'green' },
  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://instagram.com/newwavebarber', color: 'pink' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Como Chegar', href: '#localizacao', color: 'blue' },
  { icon: <Phone className="w-5 h-5" />, label: 'Ligar', href: 'tel:+5511999999999', color: 'amber' },
]

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-20 right-4 z-50 md:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 mb-2 space-y-3"
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center gap-3 px-4 py-3 bg-${item.color}-500 text-white rounded-xl shadow-lg hover:bg-${item.color}-400 transition-colors`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-amber-500 text-black rounded-full shadow-lg hover:bg-amber-400 transition-colors flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.div>
      </button>
    </div>
  )
}