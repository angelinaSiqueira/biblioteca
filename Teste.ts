import { Biblioteca } from "./Biblioteca";
import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

const biblioteca = new Biblioteca();

const leitor1 = new Leitor(1, 'João Silva', '9999-9999');
biblioteca.cadastrarLeitor(leitor1);

const livro1 = new Livro('1984', 'George Orwell', '123');
const livro2 = new Livro('Dom Casmurro', 'Machado de Assis', '456');
biblioteca.cadastrarLivro(livro1);
biblioteca.cadastrarLivro(livro2);

console.log(biblioteca.emprestarLivro(1, '123')); 
console.log(biblioteca.emprestarLivro(1, '123')); 
console.log(biblioteca.emprestarLivro(1, '456'));
console.log(biblioteca.listarLivrosDisponiveis());
console.log(biblioteca.devolverLivro(1, '123'));
console.log(biblioteca.listarLivrosDisponiveis());