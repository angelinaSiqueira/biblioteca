import { iLeitor, iLivro } from "./iLeitor_iLivro";

export class Biblioteca {
    leitores: iLeitor[] = [];
    livros: iLivro[] = [];
  
    cadastrarLeitor(leitor: iLeitor): void {
      this.leitores.push(leitor);
      console.log(`Leitor cadastrado: ${leitor.nome}`);
    }
  
    cadastrarLivro(livro: iLivro): void {
      this.livros.push(livro);
      console.log(`Livro cadastrado: ${livro.titulo}`);
    }
  
    emprestarLivro(leitorId: number, isbn: string): string {
      const leitor = this.leitores.find(l => l.id === leitorId);
      const livro = this.livros.find(b => b.isbn === isbn);
  
      if (!leitor || !livro) return "Leitor ou livro não encontrado.";
      if (livro.status === "Emprestado") return "Livro já está emprestado.";
      if (leitor.livrosEmprestados.length >= leitor.maxLivros)
        return "Limite de empréstimos atingido.";
  
      livro.status = "Emprestado";
      leitor.livrosEmprestados.push(livro.isbn);
      return `Empréstimo realizado: ${livro.titulo} para ${leitor.nome}`;
    }
  
    devolverLivro(leitorId: number, isbn: string): string {
      const leitor = this.leitores.find(l => l.id === leitorId);
      const livro = this.livros.find(b => b.isbn === isbn);
  
      if (!leitor || !livro) return "Leitor ou livro não encontrado.";
      if (!leitor.livrosEmprestados.includes(isbn))
        return "Este livro não foi emprestado por este leitor.";
  
      livro.status = "Disponível";
      leitor.livrosEmprestados = leitor.livrosEmprestados.filter(id => id !== isbn);
      return `Devolução realizada: ${livro.titulo} por ${leitor.nome}`;
    }
  
  
    listarLivrosDisponiveis(): void {
        console.log("Livros disponíveis:");
        this.livros
          .filter(l => l.status === "Disponível")
          .forEach(l => console.log(`- ${l.titulo} (${l.isbn})`));
    
    }
}


//
//
  