import { ILeitor } from "./iLeitor";

export class Leitor implements ILeitor {
  id: number;
  nome: string;
  telefone: string;
  limiteLivros: number;
  livrosEmprestados: string[] = [];

  constructor(id: number, nome: string, telefone: string, limiteLivros: number = 3) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.limiteLivros = limiteLivros;
  }

  podeEmprestar(): boolean {
    return this.livrosEmprestados.length < this.limiteLivros;
  }
}