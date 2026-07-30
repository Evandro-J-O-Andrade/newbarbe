# NWB-M6.4 — Portal de Acesso + Páginas de Produto

## Objetivo

Fechar o ponto de entrada do sistema com telas executáveis de login, cadastro e áreas por perfil, mantendo dados mockados e sem depender de banco.

## Implementação

- [x] LoginPage com formulário email/senha e seleção de perfil
- [x] RegisterPage para cadastro de cliente
- [x] Rota `/cadastro`
- [x] Botões de acesso na landing (`Entrar` e `Criar conta`)
- [x] Área `/admin` funcional
- [x] Área `/barbeiro` funcional
- [x] Área `/cliente` funcional
- [x] Rotas protegidas por perfil
- [x] Responsividade mobile validada
- [x] Overflow controlado
- [x] Build validado

## Rotas

- `/login`
- `/cadastro`
- `/admin`
- `/barbeiro`
- `/cliente`

## Testes

- [x] `npm run build`
- [x] Rotas abrem e redirecionam por perfil
- [x] Mobile validado
- [x] Overflow controlado

## Status

Concluído
