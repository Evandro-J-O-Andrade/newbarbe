# CHANGE_LOG — New Wave Barber

## NWB-M6.5.2 — UI Recovery & Product Completion

**Data:** 2026-07-31

### Feito

- Corrigido overflow horizontal e layout desktop (sem margens de 20px)
- Navbar desktop corrigida (itens sobrepostos resolvidos)
- LoginPage redesenhada como tela premium (sem seletor de perfil, sem role selector)
- Login com Google mockado visualmente
- RegisterPage redesenhada como tela premium com Google login mockado
- Galeria com fallback para imagens quebradas, hover/zoom e lightbox funcionais
- LoadingScreen redesenhada (animação de tesoura cortando tecido)
- BarberPole com rotação contínua, brilho e reflexo
- Page de perfil de barbeiro criada (/barbeiro/:id) com galeria de trabalhos, serviços e booking
- Botão "Agendar com este barbeiro" funcional em cada perfil
- Páginas de produtos, serviços e barbeiros criadas com dados mockados
- Fluxo de agendamento completo (serviço → data → horário → resumo → confirmar)
- Seed atualizado com admin master
- Build validado (npm run build ✅)

### Arquivos alterados

- src/index.css (layout desktop fix)
- src/components/Navbar.tsx (itens sobrepostos corrigidos)
- src/components/Gallery.tsx (fallback, hover, lightbox)
- src/components/LoadingScreen.tsx (animação de corte)
- src/components/BarberPole.tsx (rotação contínua, glow)
- src/components/Professionals.tsx (perfis clicáveis)
- src/features/auth/pages/LoginPage.tsx (redesenho premium)
- src/features/auth/pages/RegisterPage.tsx (redesenho premium)
- src/features/barber/pages/BarberProfilePage.tsx (novo)
- src/pages/ProductsPage.tsx (novo)
- src/pages/ServicesPage.tsx (novo)
- src/pages/BarbersPage.tsx (novo)
- src/types/appointment.ts (campo whatsapp adicionado)
- src/data/appointment.ts (whatsapp adicionado aos profissionais)
- supabase/seed/20260730000000_initial_data.sql (admin master seed)

### Registros de usuário

- Admin Master: admin@newwavebarber.com / 123456 (seed)
- Clientes se cadastram pela interface (apenas CLIENTE)
- Barbeiros e admins são criados pelo Admin Master (não por auto-cadastro)