import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

 class biblioteca {
   leitores: Leitor[] = [];
   livros: Livro[] = [];

   //cadastros de livros e leitores
  cadastrarLeitor(novoLeitor: Leitor): void {
    this.leitores.push(novoLeitor);
  }

  cadastrarLivro(novoLivro: Livro): void {
    this.livros.push(novoLivro);
  }


//   emprestimoLivro(id:Ileitor, isbn:Ilivro){


//      const l = this.leitores.find(l => l.id === this.leitores.id);
//      if (!l) return "Leitor não encontrado.";

//      const livrosEmprestados = this.livros.filter(
//      lv => lv.status === "indisponível" && lv.isbn === isbn;);

//     if (livrosEmprestados.length >= l.maximo) return "Limite de livros atingido.";

// }



// }

// emprestarLivro(leitorId: number, isbn: string): string {
//     const leitor = this.leitores.find(l => l.id === leitorId);
//     const livro = this.livros.find(l => l.isbn === isbn);

//     if (!leitor) return "Leitor não encontrado.";
//     if (!livro) return "Livro não encontrado.";
//     if (!livro.disponivel) return "Livro já emprestado.";
//     if (leitor.livrosEmprestados.length >= leitor.maxEmprestimos) return "Limite de empréstimos atingido.";
    
//     livro.disponivel = false;
//     leitor.livrosEmprestados.push(isbn);
//     return "Livro emprestado com sucesso.";
// }

// devolverLivro(leitorId: number, isbn: string): string {
//     const leitor = this.leitores.find(l => l.id === leitorId);
//     const livro = this.livros.find(l => l.isbn === isbn);

//     if (!leitor) return "Leitor não encontrado.";
//     if (!livro) return "Livro não encontrado.";
//     if (!leitor.livrosEmprestados.includes(isbn)) return "Livro não foi emprestado por este leitor.";
    
//     livro.disponivel = true;
//     leitor.livrosEmprestados = leitor.livrosEmprestados.filter(l => l !== isbn);
//     return "Livro devolvido com sucesso.";
// }

// listarLivrosDisponiveis(): Livro[] {
//     return this.livros.filter(l => l.disponivel);
// }
// }
