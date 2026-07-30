# Estrutura — New Wave Barber

## Pastas principais

```
src/
├── components/       # Componentes de UI e seções da landing page
├── features/         # Funcionalidades completas por domínio
│   ├── appointment/  # Wizard de agendamento
│   ├── gallery/      # Galeria
│   ├── hero/         # Hero
│   ├── services/     # Serviços
│   ├── professionals/# Equipe
│   └── contact/      # Contato
├── pages/            # Rotas e telas completas
├── styles/           # Tokens, tema global e utilitários visuais
├── hooks/            # Hooks reutilizáveis de interface e negócio
├── services/         # Integrações com backend, WhatsApp, maps, etc.
├── types/            # Tipos TypeScript compartilhados
├── data/             # Dados mockados e fixtures para V1
├── config/           # Configurações globais e variáveis de ambiente
├── constants/        # Constantes reutilizáveis
├── utils/            # Utilitários diversos
├── lib/              # Helpers gerais
└── App.tsx           # Composição principal e rotas iniciais
```

## Princípios

- Funcionalidades isoladas em `src/features`.
- Componentes pequenos e focados.
- Estilos centralizados em tokens quando possível.
- Nenhuma regra de `newfastfood` entra aqui.
- Frontend primeiro; backend entra depois, sem quebrar a UX já criada.
