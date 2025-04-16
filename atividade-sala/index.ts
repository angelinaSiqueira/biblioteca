import { Biblioteca } from "./Biblioteca";

const biblioteca = new Biblioteca();


biblioteca.cadastrarLeitor('daniel', '33333333', 1);
biblioteca.cadastrarLeitor('alexia', '111111111', 2);

biblioteca.cadastrarLivro('poema', 'amanda lovelace', '123456789');
biblioteca.cadastrarLivro('Dom Quixote', 'Miguel de Cervantes', '987654321');
biblioteca.cadastrarLivro('1984', 'George Orwell', '345678');
biblioteca.cadastrarLivro('hamlet', 'shakespeare', '901234');


biblioteca.emprestarLivro(1, '123456789');
biblioteca.emprestarLivro(1, '987654321');
biblioteca.emprestarLivro(2, '000000000');

biblioteca.listarTodosOsLivros();
biblioteca.listarLivrosDisponiveis();
biblioteca.listarLeitores();

biblioteca.emprestarLivro(1, '00000000');
biblioteca.devolverLivro(1, '123456789');

biblioteca.listarTodosOsLivros();
biblioteca.listarLeitores();