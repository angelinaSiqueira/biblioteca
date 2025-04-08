export class Leitor implements Leitor {
    id: number;
    nome: string;
    telefone: string;
    qtdeLivros: number;

    constructor(id: number, nome: string, telefone: string, qtdeLivros: number) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.qtdeLivros = 3;
    }

}