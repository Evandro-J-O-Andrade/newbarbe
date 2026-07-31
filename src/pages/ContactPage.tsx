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
            <div className="bg-gray-900 border border-gray-800 rounded-xl h-80 flex items-center justify-center">
              <p className="text-gray-400">Mapa do Google Maps</p>
            </div>
            <button className="mt-4 w-full py-3 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-400 transition-colors">
              Abrir no Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}