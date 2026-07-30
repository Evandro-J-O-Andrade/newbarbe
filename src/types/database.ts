/**
 * Tipos espelho do schema do Supabase.
 *
 * Responsabilidades:
 * - Representar entidades do banco.
 * - Facilitar integração com o backend.
 */

export interface Barber {
  id: number
  empresa_id: number
  usuario_id?: number
  nome: string
  foto?: string
  tipo: 'INTERNO' | 'FREELANCER'
  especialidade?: string
  comissao?: number
  ativo: boolean
  created_at?: string
}

export interface Chair {
  id: number
  empresa_id: number
  numero: string
  status: 'LIVRE' | 'OCUPADA' | 'MANUTENCAO'
  created_at?: string
}

export interface ServiceItem {
  id: number
  empresa_id: number
  nome: string
  descricao?: string
  duracao_minutos: number
  valor: number
  ativo: boolean
  created_at?: string
}

export interface Client {
  id: number
  empresa_id: number
  nome: string
  telefone: string
  email?: string
  data_nascimento?: string
  observacao?: string
  created_at?: string
}

export interface Appointment {
  id: number
  empresa_id: number
  cliente_id: number
  barbeiro_id: number
  servico_id: number
  cadeira_id?: number
  data: string
  hora_inicio: string
  hora_fim: string
  status: 'PENDENTE' | 'CONFIRMADO' | 'EM_ATENDIMENTO' | 'FINALIZADO' | 'CANCELADO'
  forma_pagamento?: 'PIX' | 'DINHEIRO' | 'CREDITO' | 'DEBITO'
  observacao?: string
  created_at?: string
}

export interface Company {
  id: number
  nome: string
  slug: string
  logo?: string
  telefone?: string
  whatsapp?: string
  instagram?: string
  facebook?: string
  tiktok?: string
  endereco?: string
  ativo: boolean
  created_at?: string
}

export interface User {
  id: number
  empresa_id: number
  nome: string
  email: string
  senha_hash: string
  tipo: 'ADMIN' | 'BARBEIRO' | 'CLIENTE'
  ativo: boolean
  created_at?: string
}
