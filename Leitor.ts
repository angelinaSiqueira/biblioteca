import { ILeitor } from "./ILeitor";


export class Leitor implements ILeitor{
    nome: String;
    id: number;
    telefone: number;
    quantidadeLivros: number;

    constructor(nome: String, id: number, telefone: number, quantidadeLivros: number) {
        this.nome = nome;
        this.id = id;
        this.telefone = telefone;
        this.quantidadeLivros = quantidadeLivros;
    }
     
}