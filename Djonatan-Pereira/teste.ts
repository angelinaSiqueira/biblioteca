import { Biblioteca } from "./biblioteca";
import { Leitor, Livro } from "./Livro_Leitor";

const biblioteca = new Biblioteca();

// Cadastrando leitores
const leitor1 = new Leitor(1, "Ana Silva", "123456789");
const leitor2 = new Leitor(2, "Carlos Souza", "987654321",2);
biblioteca.cadastrarLeitor(leitor1);
biblioteca.cadastrarLeitor(leitor2);

// Cadastrando livros
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", "ISBN001");
const livro2 = new Livro("O Cortiço", "Aluísio Azevedo", "ISBN002");
const livro3 = new Livro("Memórias Póstumas", "Machado de Assis", "ISBN003");
biblioteca.cadastrarLivro(livro1);
biblioteca.cadastrarLivro(livro2);
biblioteca.cadastrarLivro(livro3);

// Listar livros disponíveis
biblioteca.listarLivrosDisponiveis();

// Emprestar livros
console.log(biblioteca.emprestarLivro(1, "ISBN001")); // Ana pega Dom Casmurro
console.log(biblioteca.emprestarLivro(1, "ISBN002")); // Ana pega O Cortiço
console.log(biblioteca.emprestarLivro(1, "ISBN003")); // Ana pega Memórias
console.log(biblioteca.emprestarLivro(1, "ISBN001")); // Livro já emprestado
console.log(biblioteca.emprestarLivro(1, "ISBN003")); // Limite atingido

// Devolver livro
console.log(biblioteca.devolverLivro(1, "ISBN001")); // Devolve Dom Casmurro

// Emprestar de novo após devolução
console.log(biblioteca.emprestarLivro(2, "ISBN001")); // Carlos pega Dom Casmurro

// Listar livros disponíveis após operações
biblioteca.listarLivrosDisponiveis();