import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

export class Biblioteca {
    private leitores: Leitor[] = [];
    private livros: Livro[] = [];
  
    public cadastrarLeitor(leitor: Leitor): void {
      this.leitores.push(leitor);
    }
  
    public cadastrarLivro(livro: Livro): void {
      this.livros.push(livro);
    }
  
    public listarLivrosDisponiveis(): Livro[] {
      return this.livros.filter(livro => livro.status === 'Disponível');
    }
  
    public emprestarLivro(leitorId: number, isbn: string): boolean {
      const leitor = this.leitores.find(l => l.id === leitorId);
      const livro = this.livros.find(l => l.isbn === isbn);
  
      if (!leitor || !livro) return false;
  
      if (livro.status === 'Disponível' && leitor.emprestarLivro(isbn)) {
        livro.status = 'Emprestado';
        return true;
      }
  
      return false;
    }
  
    public devolverLivro(leitorId: number, isbn: string): boolean {
      const leitor = this.leitores.find(l => l.id === leitorId);
      const livro = this.livros.find(l => l.isbn === isbn);
  
      if (!leitor || !livro) return false;
  
      if (leitor.devolverLivro(isbn)) {
        livro.status = 'Disponível';
        return true;
      }
  
      return false;
    }
  }