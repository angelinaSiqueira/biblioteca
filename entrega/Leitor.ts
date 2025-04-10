import { ILeitor } from "./ILeitor";

export class Leitor implements ILeitor {
  public livrosEmprestados: string[] = [];
  public maxLivrosEmprestados: number;

  constructor(
    public id: number,
    public nome: string,
    public telefone: string,
    maxLivrosEmprestados: number = 3
  ) {
    this.maxLivrosEmprestados = maxLivrosEmprestados;
  }

  podePegarEmprestado(): boolean {
    return this.livrosEmprestados.length < this.maxLivrosEmprestados;
  }
}
