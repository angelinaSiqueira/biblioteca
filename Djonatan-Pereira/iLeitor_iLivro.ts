export interface iLeitor{
  id: number;
  nome: string;
  telefone: string;
  maxLivros: number;
  livrosEmprestados: string[];
}

export interface iLivro{
  titulo: string;
  autor: string;
  isbn: string;
  status: "Disponível" | "Emprestado";
}

//

//