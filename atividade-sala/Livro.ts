import { ILivro } from "./ILivro";

export class Livro implements ILivro{
    titulo: string;
    autor: string;
    isbn: number;
    status: string;

    constructor(titulo: string, autor: string, isbn: number, status: string){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.status = status;
    }
}