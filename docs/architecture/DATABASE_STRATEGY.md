# Estratégia de Banco — New Wave Barber

## Decisão

O New Wave Barber utiliza Supabase como banco do produto na V1. Ele não é o banco SaaS Enterprise agora, mas é projetado com estrutura organizada para uma futura migração/evolução para o ecossistema New Wave.

## Princípios

- Banco próprio e completo para o produto atual.
- Nada do HIS/MIDAS é compartilhado diretamente.
- Multi-tenant desde a primeira tabela via `empresa_id`.
- Nomes e entidades alinhados ao domínio de barbearia.
- Estrutura preparada para migração futura para Kernel Enterprise.
- Separação clara entre Booking (agenda) e Commerce (produtos).

## Modelo de negócio V1

### Jornadas

1. **Agendamento de serviço**
   - Cliente escolhe serviço, barbeiro, horário e confirma.
   - Resultado: `agendamento`.

2. **Compra de produtos**
   - Cliente adiciona itens ao carrinho e finaliza pedido.
   - Resultado: `pedido` + `pedido_item`.

3. **Serviço + Produto**
   - Cliente agenda serviço e pode adicionar produtos no mesmo atendimento.
   - Internamente: `agendamento` + `venda` separados.

### Usuários

- `ADMIN`: dono/gestor da barbearia.
- `BARBEIRO`: profissional, podendo ser `INTERNO` ou `FREELANCER`.
- `CLIENTE`: cliente final.

### Barbeiro

- `INTERNO`: funcionário da barbearia.
- `FREELANCER`: parceiro independente que usa a estrutura da barbearia.

## Modelo inicial

### empresa

```sql
id
nome
slug
logo
telefone
whatsapp
email
endereco
instagram
facebook
tiktok
horario_funcionamento
ativo
created_at
```

### usuario

```sql
id
empresa_id
nome
email
senha_hash
tipo
ativo
created_at
```

Tipos: `ADMIN`, `BARBEIRO`, `CLIENTE`.

### cliente

```sql
id
empresa_id
usuario_id
nome
telefone
email
data_nascimento
observacao
created_at
```

### barbeiro

```sql
id
empresa_id
usuario_id
nome
foto
descricao
especialidade
tipo
comissao
ativo
created_at
```

Tipo: `INTERNO`, `FREELANCER`.

### cadeira

```sql
id
empresa_id
numero
nome
status
ativo
created_at
```

Status: `LIVRE`, `OCUPADA`, `MANUTENCAO`.

### servico

```sql
id
empresa_id
nome
descricao
duracao_minutos
valor
ativo
created_at
```

### agendamento

```sql
id
empresa_id
cliente_id
barbeiro_id
servico_id
cadeira_id
data
hora_inicio
hora_fim
status
forma_pagamento
observacao
created_at
```

Status: `PENDENTE`, `CONFIRMADO`, `EM_ATENDIMENTO`, `FINALIZADO`, `CANCELADO`.

### produto

```sql
id
empresa_id
nome
categoria
preco
estoque
imagem
ativo
created_at
```

### pedido

```sql
id
empresa_id
cliente_id
valor_total
forma_pagamento
data
created_at
```

### pedido_item

```sql
id
pedido_id
produto_id
quantidade
valor
created_at
```

### avaliacao

```sql
id
empresa_id
cliente_id
barbeiro_id
nota
comentario
data
created_at
```

### notificacao

```sql
id
empresa_id
usuario_id
tipo
mensagem
status
created_at
```

### configuracao

```sql
id
empresa_id
horario_abertura
horario_fechamento
intervalo_agendamento
antecedencia_minima
created_at
```

## Arquitetura futura

```text
NWB Barber
├── Website
├── Booking (agenda)
├── Commerce (produtos)
├── CRM Cliente
├── Admin
└── Workforce (barbeiros/cadeiras)
```

## Futuro

- Migração para Node.js + API própria.
- Incorporação ao ecossistema New Wave pelo Kernel.
- Módulos adicionais: financeiro, estoque, fidelidade.
- Integração com Google Calendar e Microsoft Outlook.
- Multi-tenant explícito via `empresa_id`.
