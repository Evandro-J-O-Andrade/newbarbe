export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Contato</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="text-amber-500">Onde Estamos</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <span className="text-amber-500">📍</span>
                </div>
                <div>
                  <div className="text-white font-medium">Endereço</div>
                  <div className="text-gray-400 text-sm">Av. Paulista, 1000 - São Paulo, SP</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <span className="text-amber-500">📞</span>
                </div>
                <div>
                  <div className="text-white font-medium">Telefone</div>
                  <div className="text-gray-400 text-sm">(11) 99999-9999</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <span className="text-amber-500">📱</span>
                </div>
                <div>
                  <div className="text-white font-medium">WhatsApp</div>
                  <div className="text-gray-400 text-sm">(11) 99999-9999</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <span className="text-amber-500">📧</span>
                </div>
                <div>
                  <div className="text-white font-medium">E-mail</div>
                  <div className="text-gray-400 text-sm">contato@newwavebarber.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <span className="text-amber-500">🕐</span>
                </div>
                <div>
                  <div className="text-white font-medium">Horário</div>
                  <div className="text-gray-400 text-sm">Seg a Sex: 08h - 20h | Sáb: 08h - 18h</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Encontre-nos</h2>
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5!2d-46.6583!3d-23.5615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c5b7e134a91%3A0x6a4e9f1e0e3e3e3e!2sAv.%20Paulista%2C%201000%20-%20S%C3%A3o%20Paulo%2C%20SP"
  width="100%"
  height="400"
  style={{ border: 0, borderRadius: '12px' }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-80 md:h-96 rounded-xl"
/>
            <button className="mt-4 w-full py-3 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-400 transition-colors">
              Abrir no Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}