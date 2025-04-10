import { ILivro } from "./ILivro";

export class Livro implements ILivro{
    titulo: string;
    autor: string;
    isbn: string;
    status: "Disponível" | "Emprestado";

    constructor(titulo:string, autor:string, isbn:string){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.status = "Disponível";
    }
}