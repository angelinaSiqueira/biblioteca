import { ILivro } from "./Ilivro";

export class Livro implements ILivro {
  constructor(
    public titulo: string,
    public autor: string,
    public isbn: string,
    public status: 'Disponível' | 'Emprestado' = 'Disponível'
  ) {}
}