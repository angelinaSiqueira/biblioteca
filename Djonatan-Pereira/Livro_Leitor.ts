import { iLeitor, iLivro } from "./iLeitor_iLivro";


export class Leitor implements iLeitor{
    livrosEmprestados: string[] = [];

    constructor(public id: number,
        public nome: string,
        public telefone: string,
        public maxLivros: number = 3){
            this.id = id;
            this.nome = nome;
            this.telefone = telefone;
            this.maxLivros = maxLivros;
        }
} 

export class Livro implements iLivro{

    titulo: string;
    autor: string;
    isbn: string;
    status: "Disponível" | "Emprestado";
    constructor(titulo: string,
        autor: string,
        isbn: string,
        status: "Disponível" | "Emprestado" = "Disponível")
        {
            this.titulo = titulo;
            this.autor = autor;
            this.isbn = isbn;
            this.status = status;
        }
    
}