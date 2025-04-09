import { ILivro } from "./ILivro";


export class Livro implements ILivro {
  titulo: string;
  autor: string;
  isbn: string;
  status: 'Disponivel' | 'Emprestado' = 'Disponivel';

  constructor(titulo: string, autor: string, isbn: string) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
  }

  emprestar() {
    this.status = 'Emprestado';
  }

  devolver() {
    this.status = 'Disponivel';
  }

  estaDisponivel(): boolean {
    return this.status === 'Disponivel';
  }
}
