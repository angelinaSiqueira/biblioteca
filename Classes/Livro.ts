import { Livros } from "../Iterfaces/ILivros";

export class Livro implements Livros {
    titulo: string;
    autor: string;
    ISBN: number;
    status: 'Disponivel' | 'Emprestado' = 'Disponivel';
  
    constructor(titulo: string, autor: string, ISBN: number) {
      this.titulo = titulo;
      this.autor = autor;
      this.ISBN = ISBN;
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
  