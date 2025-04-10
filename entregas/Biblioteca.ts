import { Leitor } from './Leitor';
import { Livro } from './Livro';

export class Biblioteca {
  private leitores: Leitor[] = [];
  private livros: Livro[] = [];

  cadastrarLeitor(leitor: Leitor): void {
    this.leitores.push(leitor);
  }

  cadastrarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  listarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(livro => livro.status === 'Disponível');
  }

  emprestarLivro(leitorId: number, isbn: string): string {
    const leitor = this.leitores.find(l => l.id_unico === leitorId);
    const livro = this.livros.find(b => b.isbn === isbn);

    if (!leitor) return 'Leitor não encontrado.';
    if (!livro) return 'Livro não encontrado.';
    if (livro.status === 'Emprestado') return 'Livro já está emprestado.';

    const livrosEmprestados = this.livros.filter(
      b => b.status === 'Emprestado' && this.leitorPossuiLivro(leitor.id_unico, b.isbn)
    );

    if (livrosEmprestados.length >= leitor.qtMaxLivros) {
      return 'Leitor atingiu o limite de empréstimos.';
    }

    livro.status = 'Emprestado';
    return `Livro "${livro.titulo}" emprestado com sucesso para ${leitor.nome}.`;
  }

  devolverLivro(leitorId: number, isbn: string): string {
    const livro = this.livros.find(b => b.isbn === isbn);
    if (!livro || livro.status === 'Disponível') {
      return 'Livro não está emprestado.';
    }

    livro.status = 'Disponível';
    return `Livro "${livro.titulo}" devolvido com sucesso.`;
  }

  private leitorPossuiLivro(leitorId: number, isbn: string): boolean {
    // Neste modelo simples, não associamos livros diretamente a leitores.
    // Para projetos mais complexos, isso seria necessário.
    return true;
  }
}