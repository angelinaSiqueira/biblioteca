import { ILivro } from "./ILivro";
import { Leitor } from "./Leitor";

export class Livro implements ILivro{
    titulo: String
    autor: String
    isbn: String
    status: boolean

    constructor(titulo: String, autor: String, isbn: String, status: boolean){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.status = status;
    }
    
    static livros: Livro[] = [];

    cadastrarLivro(livro: Livro): void{
        Livro.livros.push(livro)
        console.log("cadastrado")
    }

    emprestarLivro(livro : Livro, leitor: Leitor): void{
        if (livro.status = true && leitor.qtdMaxLivros < 3){
            livro.status = false
            leitor.qtdMaxLivros += 1
            console.log("emprestado")
        }else if (livro.status = false || leitor.qtdMaxLivros >= 3){
            console.log("nao pode ser emprestado")
        }else{
            console.log("erro")
        }
    }

    devolverLivro(livro: Livro, leitor: Leitor): void{
        if (livro.status = false && leitor.qtdMaxLivros < 3){
            livro.status = true
            leitor.qtdMaxLivros -= 1
            console.log("devolvido")
        }else if (livro.status = true || leitor.qtdMaxLivros >= 3){
            console.log("ja esta devolvido")
    }else{
        console.log("erro")
    }
    }

    listarLivrosDisponiveis(livro: Livro): void{
        Livro.livros.forEach(Livro => {
            if (livro.status = true){
                console.log(livro.titulo + " esta disponivel")
            }
        });
    }

}