import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

const leitor1 = new Leitor("João", 1, 123456789, 0);
const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", true, 1234567890123);
const livro2 = new Livro("1984", "George Orwell", true, 1234567890124);

livro1.emprestarLivro(livro1, leitor1);
livro2.emprestarLivro(livro2, leitor1);
livro1.devolverLivro(livro1);
livro1.listarLivrosDisponiveis();