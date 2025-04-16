import { Leitor } from './Leitor';
import { Livro } from './Livro';
import { ILeitor } from './Ileitor';
import { ILivro } from './Ilivro';

export class Biblioteca {
  private leitores: Leitor[] = [];
  private livros: Livro[] = [];

  cadastrarLeitor(nome: string, telefone: string, id: number): void {
    const novoLeitor = new Leitor(id, nome, telefone);
    this.leitores.push(novoLeitor);
    console.log(`Leitor ${nome} cadastrado com sucesso!`);
  }

  cadastrarLivro(titulo: string, autor: string, isbn: string): void {
    const novoLivro = new Livro(titulo, autor, isbn);
    this.livros.push(novoLivro);
    console.log(`Livro "${titulo}" cadastrado com sucesso!`);
  }

  emprestarLivro(leitorId: number, isbn: string): void {
    const leitor = this.leitores.find(l => l.id === leitorId);
    const livro = this.livros.find(l => l.isbn === isbn);

    if (!leitor || !livro) {
      console.log('Leitor ou livro não encontrado!');
      return;
    }

    if (livro.status === 'Emprestado') {
      console.log('Livro já está emprestado!');
      return;
    }

    if (leitor.livrosEmprestados.length >= leitor.maxLivros) {
      console.log('Leitor atingiu o limite de empréstimos!');
      return;
    }

    livro.status = 'Emprestado';
    leitor.livrosEmprestados.push(isbn);
    console.log(`Livro "${livro.titulo}" emprestado para ${leitor.nome}`);
  }

  devolverLivro(leitorId: number, isbn: string): void {
    const leitor = this.leitores.find(l => l.id === leitorId);
    const livro = this.livros.find(l => l.isbn === isbn);

    if (!leitor || !livro) {
      console.log('Leitor ou livro não encontrado!');
      return;
    }

    if (livro.status === 'Disponível') {
      console.log('Livro já está disponível!');
      return;
    }

    const index = leitor.livrosEmprestados.indexOf(isbn);
    if (index === -1) {
      console.log('Este leitor não possui este livro emprestado!');
      return;
    }

    livro.status = 'Disponível';
    leitor.livrosEmprestados.splice(index, 1);
    console.log(`Livro "${livro.titulo}" devolvido por ${leitor.nome}`);
  }

  listarLivrosDisponiveis(): void {
    const disponiveis = this.livros.filter(l => l.status === 'Disponível');
    console.log('\nLivros disponíveis:');
    disponiveis.forEach(livro => {
      console.log(`- "${livro.titulo}" por ${livro.autor} (ISBN: ${livro.isbn})`);
    });
  }

  listarTodosOsLivros(): void {
    console.log('\nTodos os livros:');
    this.livros.forEach(livro => {
      console.log(`- "${livro.titulo}" [${livro.status}]`);
    });
  }

  listarLeitores(): void {
    console.log('\nLeitores cadastrados:');
    this.leitores.forEach(leitor => {
      console.log(`- ${leitor.nome} (ID: ${leitor.id}) - Livros emprestados: ${leitor.livrosEmprestados.length}/${leitor.maxLivros}`);
    });
  }
}