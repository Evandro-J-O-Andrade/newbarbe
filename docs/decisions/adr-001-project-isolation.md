# ADR 001 — Projeto isolado por produto

## Status

Aceito.

## Contexto

Estamos estruturando dois produtos: barbearia e fast food. A tendência natural é compartilhar código, componentes e banco entre eles.

## Decisão

Cada produto será um repositório independente, com documentação, banco, deploy e identidade visual próprios. Nenhum código ou regra de outro produto será trazida para cá sem necessidade explícita.

## Consequências

- Mais clareza na evolução de cada produto.
- Menos acoplamento entre nichos.
- Histórico de versionamento mais limpo.
