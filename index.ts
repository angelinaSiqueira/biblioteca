import { Biblioteca } from "./Biblioteca";
import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

const biblioteca = new Biblioteca();

// Cadastrando livros
const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', '978-0261103573');
const livro2 = new Livro('1984', 'George Orwell', '978-0451524935');
const livro3 = new Livro('A Revolução dos Bichos', 'George Orwell', '978-0451526342');

biblioteca.cadastrarLivro(livro1);
biblioteca.cadastrarLivro(livro2);
biblioteca.cadastrarLivro(livro3);


const leitor1 = new Leitor(1, 'João Silva', '999999999');
const leitor2 = new Leitor(2, 'Maria Oliveira', '888888888');

biblioteca.cadastrarLeitor(leitor1);
biblioteca.cadastrarLeitor(leitor2);


console.log('Livros disponíveis antes do empréstimo:');
console.log(biblioteca.listarLivrosDisponiveis());

console.log('Leitor 1 tenta pegar o livro "1984" emprestado');
biblioteca.emprestarLivro(1, '978-0451524935');

console.log('Livros disponíveis após o empréstimo:');
console.log(biblioteca.listarLivrosDisponiveis());


console.log('Leitor 1 devolve o livro "1984"');
biblioteca.devolverLivro(1, '978-0451524935');

console.log('Livros disponíveis após devolução:');
console.log(biblioteca.listarLivrosDisponiveis());