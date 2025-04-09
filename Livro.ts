import { ILivro } from "./ILivro";
import { Leitor } from "./Leitor";

export class Livro implements ILivro {
    titulo: String;
    autor: String;
    status: boolean;
    isbn: number;

    constructor(titulo: String, autor: String, status: boolean, isbn: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.status = status;
        this.isbn = isbn;
    }

    static livros : Livro[] = [];

    cadastrarLivro(livro: Livro):void{
        Livro.livros.push(livro);
        console.log("livro cadastrado com sucesso!")
    }

    emprestarLivro(livro: Livro, leitor: Leitor): void {
        if(livro.status == true && leitor.quantidadeLivros < 3) {
            livro.status = false;
            leitor.quantidadeLivros += 1;
            console.log(`Livro ${livro.titulo} emprestado para ${leitor.nome}.`);
        }
        else if(livro.status == false) {
            console.log(`Livro ${livro.titulo} já está emprestado.`);
        }
        else if(leitor.quantidadeLivros >= 3) { 
            console.log(`Leitor ${leitor.nome} já possui 3 livros emprestados.`);
        }
        else {
            console.log(`Erro ao emprestar o livro ${livro.titulo}.`);
        }
    }

    devolverLivro(livro :Livro): void {
        livro.status = true;
        console.log(`Livro ${livro.titulo} devolvido.`);
        console.log(`Status do livro ${livro.titulo}: ${livro.status}`);
    }

    listarLivrosDisponiveis(): void {
        console.log("Livros disponíveis:");
        Livro.livros.forEach(livro => {
            if(livro.status == true) {
                console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, ISBN: ${livro.isbn}`);
            }
        });
    }
}