import { ILeitor } from "./ILeitor";
import { ILivro } from "./ILivro";
import { Leitor } from "./Leitor";
import { Livro } from "./Livro.";

const livro: Livro = new Livro("Mobydick", "Stephen King", "8575", true)
const leitor: Leitor = new Leitor("Miguel", "1", "+55 47 996218267", 3)

livro.cadastrarLivro(livro);
leitor.cadastrarLeitor(leitor);
livro.emprestarLivro(livro, leitor);
livro.devolverLivro(livro, leitor)

livro.listarLivrosDisponiveis(livro);


