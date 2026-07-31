-- NWB-M6.5.3 — RLS Policies Supabase
-- Aplica-se após a migration 20260730000000_initial_schema.sql
-- Proteção multi-tenant: cada empresa só acessa seus próprios dados

-- ============================================================
-- Helper: obter empresa_id do usuário logado via auth.users
-- ============================================================
create or replace function private.get_empresa_id()
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_empresa_id bigint;
begin
  select u.empresa_id into v_empresa_id
  from public.usuario u
  where u.id in (
    select id::bigint from auth.users where auth.uid()::text = id::text
  );
  if v_empresa_id is null then
    select u.empresa_id into v_empresa_id
    from public.usuario u
    where u.id = (
      select (regexp_match(auth.uid()::text, '^.{-}(\d+)$'))[1]::bigint
      limit 1
    );
  end if;
  return v_empresa_id;
end;
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
-- Usuarios (admin da empresa gerencia perfis da mesma empresa)
-- ============================================================
create policy "usuario_isolamento_empresa"
on public.usuario
for all
to authenticated
using (empresa_id = private.get_empresa_id())
with check (empresa_id = private.get_empresa_id());