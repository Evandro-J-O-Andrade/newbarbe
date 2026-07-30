# NWB-M6.2.1 — Responsive Foundation

## Objetivo

Corrigir base visual e responsiva do sistema antes de criar novas páginas.

## Arquivos alterados

- `src/index.css`
- `src/components/Navbar.tsx`
- `src/features/admin/layout/AdminLayout.tsx`
- `src/features/admin/layout/AdminSidebar.tsx`

## Implementação

- [x] CSS global anti-overflow: `html`, `body`, `#root` com `width: 100%`, `min-height: 100%`, `overflow-x: hidden`.
- [x] Regra global para mídias: `img`, `video`, `canvas` com `max-width: 100%`.
- [x] Navbar mobile como drawer lateral com overlay e bloqueio de scroll.
- [x] Admin mobile com overlay e bloqueio de scroll.
- [x] Sidebar desktop fixa e mobile drawer consistente.

## Testes

- [x] `npm run build`
- [ ] Inspeção manual em 320px
- [ ] Inspeção manual em 375px
- [ ] Inspeção manual em 768px
- [ ] Inspeção manual em 1024px
- [ ] Inspeção manual em 1440px

## Status

Concluído
