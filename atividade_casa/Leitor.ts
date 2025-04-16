export class Leitor{
    idLeitor: number;
    nome: string;
    telefone: string;
    qtdeLivros: number;

    constructor(idLeitor: number, nome: string, telefone: string) {
        this.idLeitor = idLeitor;
        this.nome = nome;
        this.telefone = telefone;
        this.qtdeLivros = 0;
    }

}