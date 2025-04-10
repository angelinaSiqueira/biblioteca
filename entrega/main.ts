import { Biblioteca } from "./biblioteca";
import { Livro } from "./Livro";
import { Leitor } from "./Leitor";

// Instância da biblioteca
const biblioteca = new Biblioteca();

// Cadastro de livros
biblioteca.cadastrarLivro(new Livro("1984", "George Orwell", "123"));
biblioteca.cadastrarLivro(new Livro("Dom Casmurro", "Machado de Assis", "456"));

// Cadastro de leitores
biblioteca.cadastrarLeitor(new Leitor(1, "Alice Silva", "11999999999"));
biblioteca.cadastrarLeitor(new Leitor(2, "João Souza", "11888888888"));

// Empréstimo
console.log(biblioteca.emprestarLivro(1, "123"));
console.log(biblioteca.emprestarLivro(1, "456"));
console.log(biblioteca.emprestarLivro(1, "456")); // Já emprestado

// Devolução
console.log(biblioteca.devolverLivro(1, "123"));

// Livros disponíveis
console.log("Livros disponíveis:", biblioteca.listarLivrosDisponiveis());
