-- Seed inicial para desenvolvimento
-- Admin Master é criado pelo sistema (seed). Não permitir cadastro público de admin/barbeiro.
-- Clientes se cadastram pela interface.

insert into public.empresa (nome, slug, telefone, whatsapp, instagram, endereco)
values ('New Wave Barber', 'new-wave-barber', '(11) 99999-9999', '5511999999999', '@newwave', 'Av. Paulista, 1000 - São Paulo, SP');

insert into public.usuario (empresa_id, nome, email, senha_hash, tipo)
values (1, 'Administrador Master', 'admin@newwavebarber.com', 'hash', 'ADMIN');

insert into public.barbeiro (empresa_id, usuario_id, nome, tipo, especialidade, comissao)
values 
  (1, NULL, 'João Silva', 'INTERNO', 'Cortes Modernos', 50),
  (1, NULL, 'Pedro Costa', 'INTERNO', 'Barba e Pigmentação', 50),
  (1, NULL, 'Lucas Oliveira', 'FREELANCER', 'Cortes Clássicos', 40);

insert into public.cadeira (empresa_id, numero, status)
values 
  (1, '01', 'LIVRE'),
  (1, '02', 'LIVRE'),
  (1, '03', 'LIVRE'),
  (1, '04', 'LIVRE');

insert into public.servico (empresa_id, nome, descricao, duracao_minutos, valor)
values 
  (1, 'Corte Masculino', 'Cortes clássicos e modernos.', 40, 50),
  (1, 'Barba', 'Barba modelada com toalha quente.', 30, 40),
  (1, 'Hidratação', 'Tratamento para cabelo e couro cabeludo.', 45, 60),
  (1, 'Combo', 'Corte + Barba + Sobrancelha.', 70, 100);
