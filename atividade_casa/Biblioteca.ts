import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

class Biblioteca {

    static livros: Livro[] = [];
    static leitores: Leitor[] = [];

    cadastrarLivros(livro: Livro) {
        if (Biblioteca.livros.push(livro)) {
            console.log(`O livro ${livro.titulo} foi cadastrado`);
        }
        else {
            console.log("falha ao cadastrar");
        }
    }

    cadastrarLeitor(leitor: Leitor){
        
    }
}



