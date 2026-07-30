# Estratégia de Banco — New Wave Barber

## Decisão

O New Wave Barber inicia como produto independente, com banco próprio, mas segue os padrões arquiteturais do ecossistema New Wave para permitir futura incorporação como módulo vertical.

## Princípios

- Banco próprio para o produto na V1.
- Nenhuma tabela do HIS/MIDAS é compartilhada diretamente.
- Mesma filosofia do banco canônico: `empresa_id`, `usuario`, permissões, auditoria.
- Preparado para multi-tenant desde a primeira tabela.
- Futura consolidação pelo Kernel, sem reescrita completa.

## Modelo inicial

### empresa

```sql
id
nome
slug
logo
telefone
whatsapp
instagram
facebook
tiktok
endereco
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

### barbeiro

```sql
id
empresa_id
usuario_id
nome
foto
tipo
especialidade
comissao
ativo
```

Tipo: `INTERNO`, `FREELANCER`.

### cadeira

```sql
id
empresa_id
numero
status
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
```

### cliente

```sql
id
empresa_id
nome
telefone
email
data_nascimento
observacao
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

## Regras principais

- Cliente agenda profissional, não cadeira.
- Cadeira é atribuída pelo sistema/admin.
- Nenhum conflito de horário para o mesmo barbeiro.
- Toda entidade relevante carrega `empresa_id`.

## Futuro

- Migração para Node.js + API própria.
- Incorporação ao ecossistema New Wave pelo Kernel.
- Módulos adicionais: financeiro, estoque, fidelidade.
