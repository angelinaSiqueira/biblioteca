import { Livro } from "./Livro";
import { Leitor } from "./Leitor";
import { Biblioteca } from "./Biblioteca";



let biblioteca: Biblioteca = new Biblioteca();

let livro1: Livro = new Livro(1, "Harry Potter e o prisioneiro de Azkaban", "J.K Rowling", "1234");
let livro2: Livro = new Livro(2, "Eu robo", "Asimov", "234");

let leitor1: Leitor = new Leitor(1, "Joao", "1234");
let leitor2: Leitor = new Leitor(2, "Maria", "2345");

biblioteca.cadastrarLeitor(leitor1);
biblioteca.cadastrarLeitor(leitor2);

biblioteca.cadastrarLivros(livro1);
biblioteca.cadastrarLivros(livro2);

biblioteca.emprestarLivro(livro1, leitor1);
biblioteca.emprestarLivro(livro1, leitor2);

biblioteca.devolverLivro(livro1);


