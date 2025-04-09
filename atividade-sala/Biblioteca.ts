import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

class Biblioteca {
    livros: Livro[] = [];
    leitores: Leitor[] = [];
    
    constructor(livros: Livro[] = [], leitores: Leitor[] = []){
        this.livros = livros;
        this.leitores = leitores
    }

    const CadLeitor = new Leitor("João Paulo", 1, 991748313, 3);
}
