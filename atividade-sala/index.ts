import { Biblioteca } from './Biblioteca';


const biblioteca = new Biblioteca();


biblioteca.cadastrarLeitor('João Silva', '11 99999-9999', 1);
biblioteca.cadastrarLeitor('Maria Souza', '11 98888-8888', 2);

biblioteca.cadastrarLivro('O Senhor dos Anéis', 'J.R.R. Tolkien', '123456');
biblioteca.cadastrarLivro('Dom Quixote', 'Miguel de Cervantes', '789012');
biblioteca.cadastrarLivro('1984', 'George Orwell', '345678');
biblioteca.cadastrarLivro('Orgulho e Preconceito', 'Jane Austen', '901234');


biblioteca.emprestarLivro(1, '123456');
biblioteca.emprestarLivro(1, '789012');
biblioteca.emprestarLivro(2, '345678');

biblioteca.listarTodosOsLivros();
biblioteca.listarLivrosDisponiveis();
biblioteca.listarLeitores();

biblioteca.emprestarLivro(1, '901234');


biblioteca.devolverLivro(1, '123456');

biblioteca.listarTodosOsLivros();
biblioteca.listarLeitores();
