import { ILeitor } from "../Iterfaces/ILeitor";

export class Leitor implements ILeitor {
    id: number;
    nome: string;
    telefone: string;
    maxLivros: number = 3;
    livrosEmprestados: number[] = [];
  
    constructor(id: number, nome: string, telefone: string, limiteLivros?: number) {
      this.id = id;
      this.nome = nome;
      this.telefone = telefone;
      if (limiteLivros) this.maxLivros = limiteLivros;
    }
  
    livroDisponivel(): boolean {
      return this.livrosEmprestados.length < this.maxLivros;
    }
  
    emprestarLivro(ISBN: number) {
      if (this.livroDisponivel()) this.livrosEmprestados.push(ISBN);
    }
  
    devolverLivro(ISBN: number) {
      this.livrosEmprestados = this.livrosEmprestados.filter(l => l !== ISBN);
    }
  }