# Arquitetura — New Wave Barber

## Visão geral

O projeto é organizado em camadas claras, com separação entre apresentação, regras de interface, integração e dados futuros.

```
src/
├── components/      # Componentes de UI e seções da landing page
├── styles/          # Tokens, tema global e utilitários visuais
├── hooks/           # Hooks reutilizáveis de interface e negócio
├── services/        # Integrações com backend, WhatsApp, maps, etc.
├── types/           # Tipos TypeScript compartilhados
├── pages/           # Rotas e telas completas (quando houver routing)
├── animations/      # Animações reutilizáveis (GSAP/Framer Motion)
└── App.tsx          # Composição principal e rotas iniciais
```

## Princípios

- Componentes pequenos e focados.
- Estilos centralizados em tokens quando possível.
- Nenhuma regra de `newfastfood` entra aqui.
- Frontend primeiro; backend entra depois, sem quebrar a UX já criada.

## Futuro

- Backend Node.js + MySQL.
- Banco enxuto para barbearia.
- Painel administrativo isolado.
- Migração gradual para SaaS multi-tenant.
