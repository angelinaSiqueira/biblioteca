import { ILeitor } from "./ILeitor";

export class Leitor implements ILeitor {
    constructor(
      public id: number,
      public nome: string,
      public telefone: string,
      public maxLivros: number = 3,
      public livrosEmprestados: string[] = []
    ) {}
  }
