# New Wave Barber — Documentação do Projeto

## Regras fixas

- Cada produto é independente.
- Nada de código, tabelas ou regras de `newfastfood` dentro deste repositório.
- Decisões de arquitetura são documentadas antes ou junto da implementação.
- Toda alteração relevante entra no changelog.

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion + GSAP
- React Router + Lucide React + React Hook Form
- Lenis + clsx + tailwind-merge

## Estrutura principal

- `src/components/` — componentes de UI
- `src/styles/` — tokens e estilos globais
- `src/hooks/` — hooks reutilizáveis
- `src/lib/` — utilitários
- `src/services/` — clientes HTTP e integrações
- `src/types/` — tipos TypeScript
- `src/data/` — dados mockados e fixtures para V1
- `src/config/` — configurações globais e variáveis de ambiente
- `src/constants/` — constantes reutilizáveis
- `src/utils/` — utilitários diversos
- `src/features/` — módulos: appointment, admin, client-portal, gallery, hero, services, professionals, contact
- `supabase/` — migrations, seed e configuração do banco
- `docs/` — documentação técnica oficial

## Milestones

- **NWB-M1** — Fundação
- **NWB-M2** — Landing Page Premium
- **NWB-M3** — SEO + Deploy
- **NWB-M3.1** — Estrutura do Produto
- **NWB-M4** — Core de Agendamento
- **NWB-M5** — Banco Supabase
- **NWB-M6** — Dashboard Admin
- **NWB-M7** — Painel Barbeiro
- **NWB-M8** — Painel Cliente
- **NWB-M9** — Gestão Financeira
- **NWB-M10** — SaaS Multi-tenant
