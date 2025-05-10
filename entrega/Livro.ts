import { ILivro } from "../interfaces/ILivro";

export class Livro implements ILivro {
  constructor(
    public titulo: string,
    public autor: string,
    public isbn: string,
    public status: "disponível" | "emprestado" = "disponível"
  ) {}
}
