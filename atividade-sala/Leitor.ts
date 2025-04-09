import { ILeitor } from "./ILeitor";

export class Leitor implements ILeitor{
    nome: string;
    id: number;
    telefone: number;
    qtMaxLivro: number;

    constructor(nome: string, id: number, telefone: number, qtMaxLivro: number){
        this.nome = nome;
        this.id = id;
        this.telefone = telefone;
        this.qtMaxLivro = qtMaxLivro;
    }
}