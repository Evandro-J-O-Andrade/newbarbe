# ERD — New Wave Barber

## Visão geral

Modelo relacional do banco do produto New Wave Barber.

```
empresa
  ├── usuario
  ├── cliente
  ├── barbeiro
  ├── cadeira
  ├── servico
  ├── agendamento
  ├── produto
  ├── venda
  │     └── venda_item
  ├── avaliacao
  ├── notificacao
  └── configuracao
```

## Entidades

### empresa

- id
- nome
- slug
- logo
- telefone
- whatsapp
- email
- endereco
- instagram
- facebook
- tiktok
- horario_funcionamento
- ativo
- created_at

### usuario

- id
- nome
- email
- senha_hash
- tipo
- ativo
- created_at

Tipos: `ADMIN`, `BARBEIRO`, `CLIENTE`.

### cliente

- id
- usuario_id
- nome
- telefone
- email
- data_nascimento
- observacao
- created_at

### barbeiro

- id
- usuario_id
- nome
- foto
- descricao
- especialidade
- tipo
- ativo

Tipo: `INTERNO`, `FREELANCER`.

### cadeira

- id
- numero
- nome
- status
- ativo

### servico

- id
- nome
- descricao
- duracao
- valor
- imagem
- ativo

### agendamento

- id
- cliente_id
- barbeiro_id
- servico_id
- cadeira_id
- data
- hora_inicio
- hora_fim
- status
- forma_pagamento
- observacao
- created_at

Status: `PENDENTE`, `CONFIRMADO`, `EM_ATENDIMENTO`, `FINALIZADO`, `CANCELADO`.

### produto

- id
- nome
- categoria
- preco
- estoque
- imagem
- ativo

### venda

- id
- cliente_id
- valor_total
- forma_pagamento
- data

### venda_item

- id
- venda_id
- produto_id
- quantidade
- valor

### avaliacao

- id
- cliente_id
- barbeiro_id
- nota
- comentario
- data

### notificacao

- id
- usuario_id
- tipo
- mensagem
- status
- created_at

### configuracao

- id
- horario_abertura
- horario_fechamento
- intervalo_agendamento
- antecedencia_minima
