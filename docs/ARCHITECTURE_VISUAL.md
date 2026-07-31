# Arquitetura Visual — New Wave Barber

## 1. Loading Screen

### Estado atual
- Tesoura com animação de rotação oscilante
- Barra de progresso
- Duração: 2.2s

### Planejado
- Tesoura cortando de verdade
- Poste girando continuamente
- Blink/shine effects

---

## 2. Hero Section

### Estado atual
- Parallax com useScroll/useTransform
- Entrada palavra por palavra
- Barber Pole SVG animado
- CTAs: Agendar Agora + Agendamento rápido

### Planejado
- Manter animações
- Adicionar partículas discretas
- Luz passando no fundo

---

## 3. Navegação

### Desktop
- Logo + menu
- Links: Sobre, Serviços, Equipe, Galeria, Preços, Contato
- CTAs: Agendar, Agendamento rápido, Entrar

### Mobile
- Hamburger lateral direita
- Menu com overlay
- Links + Agendar + Agendamento rápido + Entrar + Criar conta

---

## 4. Landing Page

### Seções
1. Hero
2. About
3. Services
4. Professionals
5. Gallery (masonry + lightbox)
6. Social Hub
7. Testimonials
8. Pricing
9. Contact
10. CTA
11. Footer

---

## 5. Portal de Acesso

### Rotas
- `/login` — Login com email/senha + seleção de perfil
- `/cadastro` — Cadastro de cliente
- `/admin` — Dashboard administrativo
- `/barbeiro` — Painel do barbeiro
- `/cliente` — Portal do cliente

### Proteção
- Rotas protegidas por perfil
- Redirecionamento automático

---

## 6. Agendamento

### Rápido (sem login)
- Rota: `/agendamento-rapido`
- Wizard: Serviço → Profissional → Data → Horário → Dados do cliente
- Envio via WhatsApp

### Completo (com login)
- Rota: `/agendamento`
- Wizard: Profissional → Serviço → Data → Horário → Pagamento → Acompanhante → Primeira vez → Cliente → Resumo
- Envio via WhatsApp

---

## 7. Admin

### Dashboard
- Métricas: clientes hoje, agendamentos, cadeiras, faturamento
- Agenda do dia
- Mapa do salão

### Páginas
- `/admin/barbeiros` — CRUD barbeiros
- `/admin/servicos` — CRUD serviços
- `/admin/clientes` — Lista de clientes

---

## 8. Barbeiro

### Dashboard
- Agenda do dia
- Cadeira fixada
- Status: Disponível/Ocupado

---

## 9. Cliente

### Portal
- Próximo agendamento
- Histórico de serviços

---

## 10. Tecnologias

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Router DOM
- React Hook Form

### Futuro
- Supabase
- Google Calendar API
- Microsoft Graph API

---

## 11. Deploy

### Netlify
- Build: `npm run build`
- Publish: `dist`
- Redirects: `/* /index.html 200`
- Headers de segurança configurados

---

## 12. Modelo de Dados

### Usuários
- ADMIN
- BARBEIRO (INTERNO | FREELANCER)
- CLIENTE

### Entidades
- empresa
- usuario
- cliente
- barbeiro
- cadeira
- servico
- agendamento
- produto
- pedido
- pedido_item

### Separação
- Booking: agendamento
- Commerce: produtos/pedidos

---

## 13. Próximos Passos

1. Melhorar LoadingScreen (tesoura cortando)
2. Ajustar Barber Pole
3. Adicionar mais motion library
4. Manter agendamento rápido
5. NWB-M7 — Banco Real Supabase
