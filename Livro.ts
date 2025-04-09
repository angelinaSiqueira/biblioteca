import { ILivro } from "./Ileitor.js";

export class Livro implements ILivro {
    public titulo: string;
    public autor: string;
    public isbn: string;
    public status: 'Disponível' | 'Emprestado';
  
    constructor(titulo: string, autor: string, isbn: string, status: 'Disponível' | 'Emprestado' = 'Disponível') {
      this.titulo = titulo;
      this.autor = autor;
      this.isbn = isbn;
      this.status = status;
    }
  }