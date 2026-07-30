# Arquitetura — New Wave Barber

## Visão geral

O projeto é organizado em três módulos principais, com separação clara entre site público, experiência do cliente e operação interna.

```
src/
├── features/
│   ├── appointment/       # Core de agendamento
│   ├── admin/             # Painel administrativo
│   ├── client-portal/     # Portal do cliente
│   ├── gallery/           # Galeria
│   ├── hero/              # Hero
│   ├── services/          # Serviços
│   ├── professionals/     # Equipe
│   └── contact/           # Contato
├── components/            # Componentes de UI compartilhados
├── pages/                 # Rotas e telas completas
├── styles/                # Tokens, tema global e utilitários visuais
├── hooks/                 # Hooks reutilizáveis
├── services/              # Integrações com backend, WhatsApp, maps, etc.
├── types/                 # Tipos TypeScript compartilhados
├── data/                  # Dados mockados e fixtures para V1
├── config/                # Configurações globais e variáveis de ambiente
├── constants/             # Constantes reutilizáveis
├── utils/                 # Utilitários diversos
├── lib/                   # Helpers gerais
└── App.tsx                # Composição principal e rotas iniciais
```

## Módulos

### Site Público

- Landing Page
- Serviços
- Equipe
- Galeria
- Agendamento
- Contato
- SEO

### Portal do Cliente

- Histórico de agendamentos
- Cancelamento e reagendamento
- Perfil
- Avaliações

### Painel Administrativo

- Dashboard
- Agenda
- Barbeiros
- Cadeiras
- Clientes
- Serviços
- Produtos
- Estoque
- Financeiro
- Configurações

## Princípios

- Cada módulo evolui de forma independente.
- Site público foca em conversão.
- Portal do cliente foca em experiência.
- Painel administrativo foca em operação.
- Nenhuma regra de `newfastfood` entra aqui.
- Frontend primeiro; backend entra depois, sem quebrar a UX já criada.

## Futuro

- Backend Node.js + MySQL ou Supabase.
- Banco enxuto para barbearia.
- Notificações multi-canal: WhatsApp, e-mail, SMS, push.
- Mapa visual de cadeiras em tempo real.
- Migração gradual para SaaS multi-tenant.
