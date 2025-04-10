import { Leitor } from "./leitor";
import { Livro } from "./livro";

export class Biblioteca {
  private leitores: Leitor[] = [];
  private livros: Livro[] = [];

  cadastrarLeitor(leitor: Leitor): void {
    this.leitores.push(leitor);
  }

  cadastrarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  emprestarLivro(leitorId: number, isbn: string): string {
    const leitor = this.leitores.find(l => l.id === leitorId);
    const livro = this.livros.find(b => b.isbn === isbn);

    if (!leitor || !livro) return "Leitor ou livro não encontrado.";

    if (livro.status === 'Emprestado') return "Livro já emprestado.";

    if (!leitor.podeEmprestar()) return "Leitor atingiu o limite de livros.";

    livro.status = 'Emprestado';
    leitor.livrosEmprestados.push(isbn);
    return "Livro emprestado com sucesso.";
  }

  devolverLivro(leitorId: number, isbn: string): string {
    const leitor = this.leitores.find(l => l.id === leitorId);
    const livro = this.livros.find(b => b.isbn === isbn);

    if (!leitor || !livro) return "Leitor ou livro não encontrado.";

    if (!leitor.livrosEmprestados.includes(isbn)) return "Livro não está emprestado para esse leitor.";

    livro.status = 'Disponível';
    leitor.livrosEmprestados = leitor.livrosEmprestados.filter(i => i !== isbn);
    return "Livro devolvido com sucesso.";
  }

  listarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(livro => livro.status === 'Disponível');
  }
}