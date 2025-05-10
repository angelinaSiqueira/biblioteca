import { Livro } from "./Livro";
import { Leitor } from "./Leitor";

export class Biblioteca {
  private livros: Livro[] = [];
  private leitores: Leitor[] = [];

  cadastrarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  cadastrarLeitor(leitor: Leitor): void {
    this.leitores.push(leitor);
  }

  emprestarLivro(leitorId: number, isbn: string): string {
    const leitor = this.leitores.find(l => l.id === leitorId);
    const livro = this.livros.find(l => l.isbn === isbn);

    if (!leitor) return "Leitor não encontrado.";
    if (!livro) return "Livro não encontrado.";
    if (livro.status === "emprestado") return "Livro já emprestado.";
    if (!leitor.podePegarEmprestado()) return "Leitor atingiu o limite.";

    livro.status = "emprestado";
    leitor.livrosEmprestados.push(isbn);

    return "Livro emprestado com sucesso.";
  }

  devolverLivro(leitorId: number, isbn: string): string {
    const leitor = this.leitores.find(l => l.id === leitorId);
    const livro = this.livros.find(l => l.isbn === isbn);

    if (!leitor || !livro) return "Leitor ou livro não encontrado.";

    const index = leitor.livrosEmprestados.indexOf(isbn);
    if (index === -1) return "Esse livro não está com o leitor.";

    leitor.livrosEmprestados.splice(index, 1);
    livro.status = "disponível";

    return "Livro devolvido com sucesso.";
  }

  listarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(l => l.status === "disponível");
  }
}
