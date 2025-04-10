export interface ILivro{
    titulo: string;
    autor: string;
    isbn: string;
    status: "Disponível" | "Emprestado";
}