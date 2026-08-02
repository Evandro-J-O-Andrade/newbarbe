import { Calendar, ShoppingCart, Package, Heart, User, Settings, LogOut } from 'lucide-react'
import CalendarConnectButton from '@/components/CalendarConnectButton'

export default function ClientDashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Painel do Cliente</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-4 gap-6">
          <nav className="lg:col-span-1 space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-amber-500/10 text-amber-500 rounded-xl font-medium">
              <User className="w-5 h-5" />
              Perfil
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-gray-300 rounded-xl hover:text-white transition-colors">
              <Calendar className="w-5 h-5" />
              Agendamentos
            </a>
            <a href="/produtos" className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-gray-300 rounded-xl hover:text-white transition-colors">
              <ShoppingCart className="w-5 h-5" />
              Loja
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-gray-300 rounded-xl hover:text-white transition-colors">
              <Package className="w-5 h-5" />
              Histórico
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-gray-300 rounded-xl hover:text-white transition-colors">
              <Heart className="w-5 h-5" />
              Favoritos
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-gray-300 rounded-xl hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
              Configurações
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-gray-300 rounded-xl hover:text-red-500 transition-colors">
              <LogOut className="w-5 h-5" />
              Sair
            </a>
          </nav>

           <div className="lg:col-span-3">
             <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
               <h2 className="text-xl font-bold mb-4">Bem-vindo!</h2>
               <p className="text-gray-400">Aqui você gerencia seus agendamentos, histórico e preferências.</p>
             </div>

             <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
               <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <Calendar className="w-5 h-5 text-amber-500" />
                 Integração de Calendário
               </h2>
               <p className="text-gray-400 text-sm mb-4">
                 Conecte sua agenda do Google ou Microsoft para sincronizar automaticamente seus agendamentos.
               </p>
               <CalendarConnectButton />
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}