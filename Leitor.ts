import { ILeitor } from "./Ileitor";


export class Leitor implements ILeitor {
    public id: number;
    public nome: string;
    public telefone: string;
    public limiteEmprestimos: number = 3;
    public livrosEmprestados: string[] = [];
  
    constructor(id: number, nome: string, telefone: string) {
      this.id = id;
      this.nome = nome;
      this.telefone = telefone;
    }
  
    public emprestarLivro(isbn: string): boolean {
      if (this.livrosEmprestados.length < this.limiteEmprestimos) {
        this.livrosEmprestados.push(isbn);
        return true;
      }
      return false;
    }
  
    public devolverLivro(isbn: string): boolean {
      const index = this.livrosEmprestados.indexOf(isbn);
      if (index !== -1) {
        this.livrosEmprestados.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  