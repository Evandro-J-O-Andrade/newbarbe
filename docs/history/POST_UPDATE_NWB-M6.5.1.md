# Post Update — NWB-M6.5.1 UI/UX Stabilization

## Data

2026-07-31

## Branch

main

## Arquivos alterados

- src/index.css
- src/components/Navbar.tsx
- src/components/Gallery.tsx
- src/services/supabase.ts
- src/hooks/useAuth.tsx
- src/services/admin.ts
- src/services/appointment.ts
- src/services/barbers.ts
- public/site.webmanifest

## Arquivos novos

- docs/UI_AUDIT.md
- docs/history/PRE_UPDATE_NWB-M6.5.1.md
- docs/history/POST_UPDATE_NWB-M6.5.1.md

## Arquivos removidos

Nenhum

## Motivo da alteração

- Corrigir bloqueadores visuais antes do Supabase
- Estabilizar experiência mobile
- Garantir ausência de overflow horizontal
- Corrigir imagens quebradas na galeria

## Impacto

- Visual: correções de layout e responsividade
- UX: menu mobile com fechamento por ESC e overlay
- Manutenibilidade: documentação de auditoria visual

## Como voltar atrás

```bash
git checkout main -- src/index.css src/components/Navbar.tsx src/components/Gallery.tsx
```

## Resultado

- Overflow horizontal resolvido com regras CSS globais
- Menu mobile fecha com ESC e clique no overlay
- Galeria oculta imagens quebradas automaticamente
- Supabase funciona em dev sem `.env`
- Manifest sem erros de ícone
- Build ok

## Build

✅ `npm run build` passou

## Teste funcional

- [x] Rotas principais abrem
- [x] Dev sem variáveis Supabase funciona
- [x] Manifest sem erros no console
- [ ] Menu mobile validado em dispositivo real
- [ ] Overflow validado em breakpoints reais

## Observações

- Ajustes visuais adicionais podem ser necessários após teste manual
- Próxima sprint deve focar em product polish antes do Supabase
