export interface ILeitor {
  id: number;
  nome: string;
  telefone: string;
  limiteEmprestimos: number;
  livrosEmprestados: string[]; 
  emprestarLivro(isbn: string): boolean;
  devolverLivro(isbn: string): boolean;
}


export interface ILivro {
  titulo: string;
  autor: string;
  isbn: string;
  status: 'Disponível' | 'Emprestado';
}