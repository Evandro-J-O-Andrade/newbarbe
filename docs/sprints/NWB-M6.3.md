# NWB-M6.3 — Access & Customer Flow

## Objetivo

Fechar o ponto de entrada do sistema com login, cadastro e áreas por perfil, mantendo dados mockados.

## Implementação

- [x] Modelagem correta: `BARBEIRO` com tipos `INTERNO` e `FREELANCER`
- [x] LoginPage com email/senha e seleção de perfil
- [x] RegisterPage para cadastro de cliente
- [x] Rota `/cadastro`
- [x] Botões de acesso na landing (`/login`, `/cadastro`)
- [x] Rotas protegidas atualizadas para `ADMIN | BARBEIRO | CLIENTE`
- [x] Build validado

## Rotas

- `/login`
- `/cadastro`
- `/admin`
- `/barbeiro`
- `/cliente`

## Modelo de usuário

- `ADMIN`
- `BARBEIRO` com `tipo: INTERNO | FREELANCER`
- `CLIENTE`

## Testes

- [x] `npm run build`
- [x] Rotas abrem e redirecionam por perfil

## Status

Concluído
