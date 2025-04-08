export class Livro implements Livro {
    id: number;
    titulo: string;
    autor: string;
    editora: string;
    anoPublicacao: number;

    constructor(id: number, titulo: string, autor: string, editora: string, anoPublicacao: number) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
    }
}