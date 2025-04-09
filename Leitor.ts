import { ILeitor } from "./ILeitor";


export class Leitor implements ILeitor {
  id: number;
  nome: string;
  telefone: string;
  limiteLivros: number = 3;
  livrosEmprestados: string[] = [];

  constructor(id: number, nome: string, telefone: string, limiteLivros?: number) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    if (limiteLivros) this.limiteLivros = limiteLivros;
  }

  podePegarLivro(): boolean {
    return this.livrosEmprestados.length < this.limiteLivros;
  }

  emprestarLivro(isbn: string) {
    if (this.podePegarLivro()) this.livrosEmprestados.push(isbn);
  }

  devolverLivro(isbn: string) {
    this.livrosEmprestados = this.livrosEmprestados.filter(l => l !== isbn);
  }
}