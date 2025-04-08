export class Livro implements Livro {
    id: number;
    titulo: string;
    autor: string;
    editora: string;
    anoPublicacao: number;
    status: string;

    constructor(id: number, titulo: string, autor: string, editora: string, anoPublicacao: number, status:string) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
        this.status = status;
    }
}