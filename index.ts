import { Biblioteca } from './biblioteca';
import { Livro } from './livro';
import { Leitor } from './leitor';

const biblioteca = new Biblioteca();


biblioteca.cadastrarLivro(new Livro('Minecraft', 'João', '123'));
biblioteca.cadastrarLivro(new Livro('1999', 'Lucas Borges', '456'));


biblioteca.cadastrarLeitor(new Leitor(1, 'Nicolas Biff', '1111-0707'));
biblioteca.cadastrarLeitor(new Leitor(2, 'Nicolly Da Silva', '1616-1111'));

biblioteca.listarLivrosDisponiveis();

biblioteca.emprestarLivro(1, '123');

biblioteca.emprestarLivro(2, '123');

biblioteca.devolverLivro(1, '123');

biblioteca.devolverLivro(2, '123');

biblioteca.listarLivrosDisponiveis();
