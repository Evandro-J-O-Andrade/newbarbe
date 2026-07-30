# ADR 003 — Design system próprio do New Wave Barber

## Status

Aceito.

## Contexto

Queremos consistência visual, identidade própria e evolução controlada da interface.

## Decisão

Criar um design system inicial com tokens visuais centralizados em `src/styles/`, sem bibliotecas externas de design system. As cores, tipografia e espaçamentos são definidos como tokens do tema e reutilizados em componentes.

## Consequências

- Maior consistência entre telas.
- Alterações globais mais simples.
- Base para futuros temas white-label.
