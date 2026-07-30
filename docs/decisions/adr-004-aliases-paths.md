# ADR 004 — Aliases e paths no Vite/TypeScript

## Status

Aceito.

## Contexto

Queremos imports mais limpos e organizados, evitando caminhos relativos longos.

## Decisão

Configurar aliases no Vite e paths no TypeScript para que `@/` aponte para `src/`. Também habilitar `vite-tsconfig-paths` para garantir resolução consistente no desenvolvimento e build.

## Consequências

- Imports mais legíveis.
- Menos chance de erro ao mover arquivos.
- Padrão alinhado com projetos profissionais.
