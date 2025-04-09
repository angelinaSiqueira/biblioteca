import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

export class Biblioteca {
    leitores: Leitor[] = [];
    livros: Livro[] = [];
  
    cadastrarLeitor(leitor: Leitor) {
      this.leitores.push(leitor);
    }
  
    cadastrarLivro(livro: Livro) {
      this.livros.push(livro);
    }
  
    emprestarLivro(leitorId: number, isbn: string): string {
      const leitor = this.leitores.find(l => l.id === leitorId);
      const livro = this.livros.find(l => l.isbn === isbn);
  
      if (!leitor) return 'Leitor não encontrado';
      if (!livro) return 'Livro não encontrado';
      if (!livro.estaDisponivel()) return 'Livro já emprestado';
      if (!leitor.podePegarLivro()) return 'Leitor atingiu o limite de livros';
  
      livro.emprestar();
      leitor.emprestarLivro(isbn);
      return 'Livro emprestado com sucesso';
    }
  
    devolverLivro(leitorId: number, isbn: string): string {
      const leitor = this.leitores.find(l => l.id === leitorId);
      const livro = this.livros.find(l => l.isbn === isbn);
  
      if (!leitor || !livro) return 'Leitor ou livro não encontrado';
  
      livro.devolver();
      leitor.devolverLivro(isbn);
      return 'Livro devolvido com sucesso';
    }
  
    listarLivrosDisponiveis(): Livro[] {
      return this.livros.filter(l => l.estaDisponivel());
    }
  }