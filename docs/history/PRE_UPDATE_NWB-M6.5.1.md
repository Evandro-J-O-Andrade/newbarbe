# Pre Update — NWB-M6.5.1 UI/UX Stabilization

## Data

2026-07-31

## Branch

main

## Objetivo

Corrigir bloqueadores visuais e de UX antes de qualquer integração com Supabase.

## Arquivos que serão alterados

- src/index.css
- src/components/Navbar.tsx
- src/components/Gallery.tsx
- src/services/supabase.ts
- src/hooks/useAuth.tsx
- src/services/admin.ts
- src/services/appointment.ts
- src/services/barbers.ts
- public/site.webmanifest

## Motivo

- Overflow horizontal em algumas telas
- Menu mobile não fecha com overlay/ESC
- Imagem quebrada na navbar
- Imagem 4 da galeria indisponível
- Responsividade incompleta

## Riscos

- Mudanças visuais podem alterar comportamento esperado
- Sidebar e navbar mexem com layout global

## Como voltar atrás

```bash
git revert --no-commit <commit_antes_sprint>
# ou
git checkout <commit_antes_sprint> -- src/index.css src/components/Navbar.tsx src/components/Hero.tsx src/components/Gallery.tsx src/components/Footer.tsx src/features/admin/layout/AdminSidebar.tsx src/features/appointment/QuickAppointmentPage.tsx src/App.tsx
```

## Resultado esperado

- Sem overflow horizontal em 320px-1920px
- Menu mobile com drawer, overlay, ESC e scroll lock
- Sem imagens quebradas
- Galeria totalmente funcional
- Supabase não quebra em dev sem `.env`
- Manifest sem erros
- Build ok
