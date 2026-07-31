# Supabase — New Wave Barber

## Visão geral

O Supabase é utilizado como backend inicial do produto, fornecendo banco PostgreSQL, autenticação, storage e realtime.

## Estrutura

```
supabase/
├── migrations/
│   ├── 20260730000000_initial_schema.sql
│   └── 20260731000000_add_rls_policies.sql
├── seed/
│   └── 20260730000000_initial_data.sql
└── README.md
```

## Configuração

### 1. Criar projeto no Supabase

Acessar https://supabase.com/dashboard e criar novo projeto.

### 2. Configurar variáveis de ambiente

Copiar `.env.example` para `.env`:

```bash
cp .env.example .env
```

Preencher no `.env`:

```
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-anon-key
```

### 3. Rodar migration

```bash
supabase migration run
```

Ou acessar o SQL Editor no dashboard do Supabase e executar:

1. `supabase/migrations/20260730000000_initial_schema.sql`
2. `supabase/migrations/20260731000000_add_rls_policies.sql`

### 4. Rodar o seed

```bash
supabase db seed
```

Ou executar `supabase/seed/20260730000000_initial_data.sql` pelo SQL Editor.

### 5. Reiniciar o dev server

```bash
npm run dev
```

## Variáveis

```
VITE_SUPABASE_URL=sua-url-do-projeto
VITE_SUPABASE_ANON_KEY=sua-anon-key
VITE_SITE_URL=https://newbarbestudio.netlify.app
VITE_WHATSAPP_NUMBER=5511999999999
VITE_GA_ID=
```

## Segurança — RLS

Todas as tabelas possuem Row Level Security habilitado. As políticas garantem isolamento multi-tenant:

- Cada empresa só acessa seus próprios dados
- O perfil do usuário logado (`auth.uid()`) determina a `empresa_id`
- Admin da empresa gerencia usuários da mesma empresa

## Próximos passos

1. Configurar `.env` com credenciais reais do Supabase
2. Validar que login real funciona
3. Substituir dados mock por chamadas Supabase
4. Conectar notificações WhatsApp (Edge Functions ou webhook)
