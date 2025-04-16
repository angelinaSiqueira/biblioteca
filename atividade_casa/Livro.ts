export class Livro{
    id: number;
    titulo: string;
    autor: string;
    isbn: string;
    status: string;
    idLeitor: number

    constructor(id: number, titulo: string, autor: string, isbn: string) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.status = "disponivel";
        this.idLeitor = 0;
    }
}