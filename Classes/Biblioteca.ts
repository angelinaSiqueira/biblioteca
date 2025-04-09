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

    emprestarLivro(leitorId: number, ISBN: number): string {
      const leitor = this.leitores.find(l => l.id === leitorId);
      const livro = this.livros.find(l => l.ISBN === ISBN);

      if (!leitor) return 'Leitor não encontrado';
      if (!livro) return 'Livro não encontrado';
      if (!livro.estaDisponivel()) return 'Livro emprestado';
      if (!leitor.livroDisponivel()) return 'Limite de livros atingido';

      livro.emprestar();
      leitor.emprestarLivro(ISBN);
      return 'Livro emprestado';
    }

    devolverLivro(leitorId: number, ISBN: number): string {
      const leitor = this.leitores.find(l => l.id === leitorId);
      const livro = this.livros.find(l => l.ISBN === ISBN);

      if (!leitor || !livro) return 'Leitor ou livro não encontrado';

      livro.devolver();
      leitor.devolverLivro(ISBN);
      return 'Livro devolvido com sucesso';
    }

    listarLivrosDisponiveis(): Livro[] {
      return this.livros.filter(l => l.estaDisponivel());
    }
  }