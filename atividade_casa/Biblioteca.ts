import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

export class Biblioteca {

    static livros: Livro[] = [];
    static leitores: Leitor[] = [];



    cadastrarLivros(livro: Livro) :void {
        if (Biblioteca.livros.push(livro)) {
            console.log(`O livro ${livro.titulo} foi cadastrado`);
        }
        else {
            console.log("falha ao cadastrar");
        }
    }

    cadastrarLeitor(leitor: Leitor) :void {
        if (Biblioteca.leitores.push(leitor)) {
            console.log(`O leitor ${leitor.nome} foi cadastrrado`);
        }
        else {
            console.log("falha ao cadastrar");
        }

    }

    emprestarLivro(livro: Livro, leitor: Leitor) :void {
        if (livro.status == "disponivel" && leitor.qtdeLivros < 3) {
            livro.status = "indisponivel";
            livro.idLeitor = leitor.idLeitor;
            console.log(`livro ${livro.titulo} emprestado para ${leitor.nome}`);
        }
        else{
            console.log("não é possível realizar empréstimo");
        }
    }

    devolverLivro(livro:Livro) :void {
        if(livro.status == "emprestado"){
            livro.status = "disponivel";
            console.log(`Livro ${livro.titulo} devolvido`)
        }
        else{
            console.log(`O livro ${livro.titulo} não esta emprestado`);
        }
    }
}



