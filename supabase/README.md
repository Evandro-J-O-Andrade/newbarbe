# Supabase — New Wave Barber

## Visão geral

O Supabase é utilizado como backend inicial do produto, fornecendo banco PostgreSQL, autenticação, storage e realtime.

## Estrutura

```
supabase/
├── migrations/
│   └── 20260730000000_initial_schema.sql
├── seed/
│   └── 20260730000000_initial_data.sql
└── README.md
```

## Configuração

1. Criar projeto no Supabase.
2. Rodar a migration em `supabase/migrations/`.
3. Rodar o seed em `supabase/seed/`.
4. Copiar `.env.example` para `.env` e preencher as variáveis.

## Variáveis

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Próximos passos

- Conectar frontend via `src/services/supabase.ts`.
- Substituir mock data por chamadas reais.
- Ativar RLS e políticas de acesso.
