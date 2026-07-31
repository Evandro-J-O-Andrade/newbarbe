# Change Log — New Wave Barber

## 2026-07-31 — Melhorias visuais e de UX

### LoadingScreen
- Tesoura agora anima com rotação oscilante e pulso de escala
- Barra de progresso mantém animação suave
- Duração ajustada para 2.2s
- Blur aumentado para efeito de brilho mais forte

### BarberPole
- Poste gira continuamente em 6s no sentido horário
- Faixa interna gira em 4s no sentido anti-horário
- Gradiente amber/vermelho mantido
- Brilho mantido via filtro SVG

### QuickAppointmentPage
- Agendamento rápido sem login
- Wizard com 5 etapas: serviço, profissional, data, horário, dados do cliente
- Integração com WhatsApp
- Rota `/agendamento-rapido`

### Decisões
- Manter animação infinita no loading
- Manter loop contínuo no barber pole
- Não adicionar biblioteca extra além de Framer Motion

---

## 2026-07-30 — NWB-M6.4 Portal de Acesso

### Rotas
- Adicionada `/cadastro`
- Botões de acesso na landing (`Entrar` e `Criar conta`)

### Modelo
- Removido `FREELANCER` como papel
- `BARBEIRO` agora tem `tipo: INTERNO | FREELANCER`

### Arquivos afetados
- `src/features/auth/pages/LoginPage.tsx`
- `src/features/auth/pages/RegisterPage.tsx`
- `src/App.tsx`
- `src/components/ProtectedRoute.tsx`
- `src/components/Navbar.tsx`

---

## 2026-07-30 — NWB-M6.3 Access & Customer Flow

### Implementado
- LoginPage com formulário email/senha
- RegisterPage
- Área do freelancer removida
- Rotas protegidas atualizadas

---

## 2026-07-30 — NWB-M6.2.5 Demo Access & Route Validation

### Implementado
- Links no footer para `/login`
- Validação de rotas protegidas

---

## 2026-07-30 — NWB-M6.2.4 Premium Motion Layer

### Implementado
- Hero cinematográfico com parallax
- Galeria masonry
- Serviços com hover premium
- Profissionais com efeito de revelação
- Social Hub

---

## 2026-07-30 — NWB-M6.2.3 Demo Flow

### Implementado
- Mock store compartilhada
- Wizard persiste agendamento
- Dashboards leem dados reais

---

## 2026-07-30 — NWB-M6.2.2 Product Preview Mock

### Implementado
- Páginas mockadas navegáveis
- Login mock
- Admin mock
- Barbeiro mock
- Cliente mock

---

## 2026-07-30 — NWB-M6.2.2 Fixes

### Corrigido
- JSX errors em ClientDashboardPage
- Unused imports em AdminDashboardPage, AdminBarbersPage, AdminServicesPage

---
