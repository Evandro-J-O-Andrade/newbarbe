-- NWB-M6.5.3 — RLS Policies Supabase
-- Aplica-se após a migration 20260730000000_initial_schema.sql
-- Proteção multi-tenant: cada empresa só acessa seus próprios dados via profiles.empresa_id = auth.uid()

-- ============================================================
-- Helper: obter empresa_id do perfil logado
-- ============================================================
create or replace function private.get_empresa_id()
returns bigint
language sql
security definer
set search_path = public
as $$
  select empresa_id
  from public.profiles
  where id = auth.uid()
  limit 1;
$$;

-- ============================================================
-- Empresas
-- ============================================================
create policy "empresa_isolamento_acesso"
on public.empresa
for all
to authenticated
using (id = private.get_empresa_id())
with check (id = private.get_empresa_id());

-- ============================================================
-- Profiles
-- ============================================================
create policy "profile_proprio_acesso"
on public.profiles
for all
to authenticated
using (id = auth.uid())
with check (id = auth.uid());

-- ============================================================
-- Servicos
-- ============================================================
create policy "servico_isolamento_empresa"
on public.servico
for all
to authenticated
using (empresa_id = private.get_empresa_id())
with check (empresa_id = private.get_empresa_id());

-- ============================================================
-- Barbeiros
-- ============================================================
create policy "barbeiro_isolamento_empresa"
on public.barbeiro
for all
to authenticated
using (empresa_id = private.get_empresa_id())
with check (empresa_id = private.get_empresa_id());

-- ============================================================
-- Cadeiras
-- ============================================================
create policy "cadeira_isolamento_empresa"
on public.cadeira
for all
to authenticated
using (empresa_id = private.get_empresa_id())
with check (empresa_id = private.get_empresa_id());

-- ============================================================
-- Clientes
-- ============================================================
create policy "cliente_isolamento_empresa"
on public.cliente
for all
to authenticated
using (empresa_id = private.get_empresa_id())
with check (empresa_id = private.get_empresa_id());

-- ============================================================
-- Agendamentos
-- ============================================================
create policy "agendamento_isolamento_empresa"
on public.agendamento
for all
to authenticated
using (empresa_id = private.get_empresa_id())
with check (empresa_id = private.get_empresa_id());

-- ============================================================
-- Usuarios (admin da empresa gerencia perfis)
-- ============================================================
create policy "usuario_isolamento_empresa"
on public.usuario
for all
to authenticated
using (empresa_id = private.get_empresa_id())
with check (empresa_id = private.get_empresa_id());