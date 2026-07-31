# CHANGE_LOG — New Wave Barber

## NWB-M6.5.6 — Sprint 1.2: Frontend Stabilization

**Data:** 2026-07-31

### Feito

- BackButton component criado e aplicado em todas as páginas públicas
- FAQPage transformada em accordion funcional com toggle
- ContactPage com Google Maps iframe embed responsivo
- ProfessionalCard totalmente clicável (onClick → /barbeiro/:id)
- LoadingScreen refatorado com única referência ao Scissors
- Build validado (`npm run build` ✅)

### Layout (visual recovery)

- Container default changed to `max-w-full` (wider content area)
- Container padding made responsive (`px-4 sm:px-6 lg:px-8`)
- Section padding adjusted (`py-14` default instead of `py-16`)
- All public pages now use `full` maxWidth or responsive padding

### Visual fixes (Sprint 1.2 visual recovery)

- Container.tsx: wider default maxWidth, responsive padding
- Section.tsx: adjusted padding for better spacing
- BackButton component applied to all public pages
- FAQPage: accordion functional
- ContactPage: Google Maps iframe embed
- Professionals: clickable cards with navigation
- LoginPage/RegisterPage: real Supabase Auth, BackButton
- LoadingScreen: single scissors animation

---

## NWB-M6.5.5 — Sprint 1.1: RLS Policies & Real Supabase Auth

**Data:** 2026-07-31

### Feito

- Criada migration de RLS policies (`supabase/migrations/20260731000000_add_rls_policies.sql`)
- Policies de isolamento multi-tenant para todas as tabelas
- Helper function `private.get_empresa_id()` para resolver empresa do usuário logado
- LoginPage agora usa `signInWithPassword` reais do Supabase em vez de mock localStorage
- RegisterPage agora usa `signUp` reais do Supabase em vez de mock localStorage
- Ambas as páginas têm loading states e exibição de erros
- LoginPage mantém opção de Google OAuth via `signInWithOAuth`
- AuthProvider (`useAuth.tsx`) expandido com método `register` que cria usuário no Supabase Auth
- `.env.example` atualizado com `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` no topo
- `supabase/README.md` expandido com instruções de configuração completas
- Auth wiring conectado: mock localStorage → supabase.auth real
- Build validado após correções de TypeScript (`npm run build` ✅)

### Migração

- `supabase/migrations/20260731000000_add_rls_policies.sql` (novo)

### Auth

- src/features/auth/pages/LoginPage.tsx (real Supabase Auth)
- src/features/auth/pages/RegisterPage.tsx (real Supabase Auth)
- src/hooks/useAuth.tsx (registrar método)

### Config

- .env.example (Supabase vars atualizadas)
- supabase/README.md (instruções setup)

---

## NWB-M6.5.4 — Sprint 0: Commit & Deploy Closure

**Data:** 2026-07-31

### Feito

- Sprint 0 comprometido e push para `origin/main` (commit `fdcee8b`)
- Auditoria de deploy concluída: 20 arquivos foram criados/movidos mas estavam apenas no disco local
- Git status confirmado: `nothing to commit, working tree clean`
- Build validado (`npm run build` ✅)
- Netlify deploy aguardando `Clear cache and deploy site`

### Correção de processo

- Identificado que o Kilo criava arquivos localmente e reportava "concluído" sem commit
- Sprint 0 agora está versionado no git e visível para deploy
- Próximo sprint: Sprint 1 — Fundação Supabase (banco real, auth, agendamento, notificações)

---

## NWB-M6.5.3 — Sprint 0: Responsive & Layout Recovery (OBRIGATÓRIA)

**Data:** 2026-07-31

### Feito

- Criado Layout System reutilizável (Container, Section, Page, Breakpoints, Viewports)
- Corrigido Hero para `100dvh` e largura total da tela
- Implementado Bottom Navigation para mobile (Home, Serviços, Agendar, Loja, Conta)
- Implementado FAB (Floating Action Button) expandível com WhatsApp, Instagram, Mapa, Ligar
- Corrigido Navbar (itens sobrepostos resolvidos, espaçamento padronizado)
- Corrigido overflow horizontal (adicionado `overflow-x-hidden` no root)
- LoginPage redesenhada como tela premium (sem role selector, Google mock)
- RegisterPage redesenhada como tela premium com Google login mockado
- Galeria com fallback para imagens quebradas, hover/zoom e lightbox funcionais
- LoadingScreen redesenhado (animação de tesoura cortando tecido)
- BarberPole com rotação contínua, brilho e reflexo
- Page de perfil de barbeiro criada (`/barbeiro/:id`) com galeria e booking
- Botões "Ver Perfil" e "Agendar" funcionais nos perfis
- Páginas públicas criadas: FAQ, Sobre, Contato, Produto individual, Carrinho, Checkout
- Páginas de área criadas: Client Profile, Barber Dashboard, Admin CRUD completo
- Seed atualizado com admin master
- Professional type atualizado (whatsapp, experience)
- Componentes genéricos criados (ProfessionalCard, BottomNavigation, FloatingActionButton)
- Toda a UI consolidada e responsiva
- Build validado (`npm run build` ✅)

### Páginas públicas

- Home (landing)
- Sobre
- Serviços
- Produtos / Produto individual
- Barbeiros / Barbeiro profile
- Galeria
- FAQ
- Contato
- Agendamento
- Agendamento rápido
- Carrinho
- Checkout
- Login / Cadastro
- 404

### Áreas protegidas

- Cliente `/cliente`
- Barbeiro `/barbeiro`
- Admin `/admin`

### Registros de usuário

- Admin Master: admin@newwavebarber.com / 123456 (seed)
- Clientes se cadastram pela interface (apenas CLIENTE)
- Barbeiros e admins são criados pelo Admin Master (não por auto-cadastro)

---

## NWB-M6.5.2 — UI Recovery & Product Completion

**Data:** 2026-07-31

### Feito

- Corrigido overflow horizontal e layout desktop (sem margens de 20px)
- Navbar desktop corrigida (itens sobrepostos resolvidos)
- LoginPage redesenhada como tela premium (sem seletor de perfil, sem role selector)
- Login com Google mockado visualmente
- RegisterPage redesenhada como tela premium com Google login mockado
- Galeria com fallback para imagens quebradas, hover/zoom e lightbox funcionais
- LoadingScreen redesenhado (animação de tesoura cortando tecido)
- BarberPole com rotação contínua, brilho e reflexo
- Page de perfil de barbeiro criada (`/barbeiro/:id`) com galeria de trabalhos, serviços e booking
- Botão "Agendar com este barbeiro" funcional em cada perfil
- Páginas de produtos, serviços e barbeiros criadas com dados mockados
- Fluxo de agendamento completo (serviço → data → horário → resumo → confirmar)
- Seed atualizado com admin master
- Build validado (`npm run build` ✅)

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