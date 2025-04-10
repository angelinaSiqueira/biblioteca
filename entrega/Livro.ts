import { Ilivro } from "./Ilivro";

export class Livro implements Ilivro {
    titulo: string;
    autor: string;
    isbn: number;
    status: "disponível" | "indisponível";

    constructor(titulo:string, autor:string;
        isbn:number, status:"disponível" | "indisponível"
    ){
        this.titulo=titulo;
        this.autor = autor;
        this.isbn=isbn;
        this.status=status;
    }
   
}