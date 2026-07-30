# Estratégia de Banco — New Wave Barber

## Decisão

O New Wave Barber utiliza Supabase como banco do produto na V1. Ele não é o banco SaaS Enterprise agora, mas é projetado com estrutura organizada para uma futura migração/evolução para o ecossistema New Wave.

## Princípios

- Banco próprio e completo para o produto atual.
- Nada do HIS/MIDAS é compartilhado diretamente.
- Multi-tenant desde a primeira tabela via `empresa_id`.
- Nomes e entidades alinhados ao domínio de barbearia.
- Estrutura preparada para migração futura para Kernel Enterprise.

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
usuario_id
nome
foto
descricao
especialidade
tipo
ativo
```

Tipo: `INTERNO`, `FREELANCER`.

### cadeira

```sql
id
numero
nome
status
ativo
```

### servico

```sql
id
nome
descricao
duracao
valor
imagem
ativo
```

### agendamento

```sql
id
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
nome
categoria
preco
estoque
imagem
ativo
```

### venda

```sql
id
cliente_id
valor_total
forma_pagamento
data
```

### venda_item

```sql
id
venda_id
produto_id
quantidade
valor
```

### avaliacao

```sql
id
cliente_id
barbeiro_id
nota
comentario
data
```

### notificacao

```sql
id
usuario_id
tipo
mensagem
status
created_at
```

### configuracao

```sql
id
horario_abertura
horario_fechamento
intervalo_agendamento
antecedencia_minima
```

## Futuro

- Migração para Node.js + API própria.
- Incorporação ao ecossistema New Wave pelo Kernel.
- Módulos adicionais: financeiro, estoque, fidelidade.
