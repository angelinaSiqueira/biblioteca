import { ILeitor } from "./ILeitor";

export class Leitor implements ILeitor{
    nome: String
    id: String
    telefone: String
    qtdMaxLivros: number

    constructor(nome: String, id: String, telefone: String, qtdMaxLivros: number){
        this.nome = nome
        this.id = id
        this.telefone = telefone
        this.qtdMaxLivros = qtdMaxLivros
    }

    static leitores : Leitor [] = [];
    cadastrarLeitor(leitor : Leitor):void{
        Leitor.leitores.push(leitor);
        console.log("cadastrado")
    }

}