/**
 * AdminBarbersPage
 *
 * Página de gerenciamento de barbeiros.
 *
 * Responsabilidades:
 * - Listar barbeiros.
 * - Criar novo barbeiro.
 * - Editar barbeiro existente.
 * - Ativar/desativar barbeiro.
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Pencil, Trash2, X, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import AdminLayout from '@/features/admin/layout/AdminLayout'
import { fetchBarbers, createBarber, updateBarber, deleteBarber } from '@/services/barbers'
import type { Barber } from '@/types/database'

interface BarberFormData {
  nome: string
  foto: string
  especialidade: string
  tipo: 'INTERNO' | 'FREELANCER'
  ativo: boolean
}

export default function AdminBarbersPage() {
  const [barbers, setBarbers] = useState<Barber[]>([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingBarber, setEditingBarber] = useState<Barber | null>(null)
  const [saving, setSaving] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<BarberFormData>()

  useEffect(() => {
    loadBarbers()
  }, [])

  async function loadBarbers() {
    setLoading(true)
    try {
      const data = await fetchBarbers()
      setBarbers(data)
    } finally {
      setLoading(false)
    }
  }

  function openCreateModal() {
    setEditingBarber(null)
    reset({ nome: '', foto: '', especialidade: '', tipo: 'INTERNO', ativo: true })
    setModalOpen(true)
  }

  function openEditModal(barber: Barber) {
    setEditingBarber(barber)
    reset({
      nome: barber.nome,
      foto: barber.foto || '',
      especialidade: barber.especialidade || '',
      tipo: barber.tipo,
      ativo: barber.ativo,
    })
    setModalOpen(true)
  }

  async function onSubmit(data: BarberFormData) {
    setSaving(true)
    try {
      if (editingBarber) {
        await updateBarber(editingBarber.id, data)
      } else {
        await createBarber(data)
      }
      await loadBarbers()
      setModalOpen(false)
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Tem certeza que deseja excluir este barbeiro?')) return
    await deleteBarber(id)
    await loadBarbers()
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Barbeiros</h1>
          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Novo Barbeiro
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
          </div>
        ) : (
          <div className="grid gap-4">
            {barbers.map((barber) => (
              <motion.div
                key={barber.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex items-start justify-between"
              >
                <div className="flex items-start gap-4">
                  {barber.foto && (
                    <img src={barber.foto} alt={barber.nome} className="w-16 h-16 rounded-full object-cover" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{barber.nome}</h3>
                    <p className="text-amber-500 text-sm">{barber.especialidade || 'Sem especialidade'}</p>
                    <span className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded ${
                      barber.tipo === 'INTERNO' ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'
                    }`}>
                      {barber.tipo === 'INTERNO' ? 'Interno' : 'Freelancer'}
                    </span>
                    <span className={`inline-block mt-2 ml-2 text-xs font-medium px-2 py-1 rounded ${
                      barber.ativo ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                    }`}>
                      {barber.ativo ? 'Ativo' : 'Inativo'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEditModal(barber)}
                    className="p-2 text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(barber.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg bg-gray-900 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">
                    {editingBarber ? 'Editar Barbeiro' : 'Novo Barbeiro'}
                  </h2>
                  <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                    <input
                      id="nome"
                      {...register('nome', { required: 'Nome é obrigatório' })}
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                    />
                    {errors.nome && <span className="text-red-500 text-sm mt-1">{errors.nome.message}</span>}
                  </div>

                  <div>
                    <label htmlFor="foto" className="block text-sm font-medium text-gray-300 mb-2">URL da Foto</label>
                    <input
                      id="foto"
                      {...register('foto')}
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                      placeholder="https://..."
                    />
                  </div>

                  <div>
                    <label htmlFor="especialidade" className="block text-sm font-medium text-gray-300 mb-2">Especialidade</label>
                    <input
                      id="especialidade"
                      {...register('especialidade')}
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                      placeholder="Ex: Fade, Barba"
                    />
                  </div>

                  <div>
                    <label htmlFor="tipo" className="block text-sm font-medium text-gray-300 mb-2">Tipo</label>
                    <select
                      id="tipo"
                      {...register('tipo')}
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                    >
                      <option value="INTERNO">Interno</option>
                      <option value="FREELANCER">Freelancer</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      id="ativo"
                      type="checkbox"
                      {...register('ativo')}
                      className="w-4 h-4 text-amber-500 bg-black border-gray-800 rounded focus:ring-amber-500"
                    />
                    <label htmlFor="ativo" className="text-sm text-gray-300">Ativo</label>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="px-4 py-2 border border-gray-700 text-white rounded hover:border-gray-600 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="px-4 py-2 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition-colors disabled:opacity-40"
                    >
                      {saving ? 'Salvando...' : editingBarber ? 'Salvar' : 'Criar'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AdminLayout>
  )
}
