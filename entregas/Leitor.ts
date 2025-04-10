import { ILeitor } from "./ILeitor";

export class Leitor implements ILeitor{
    nome: string;
    id_unico: number;
    telefone: number;
    qtMaxLivros: number;
    livrosEmprestados: string[] = [];

    
    constructor(nome:string, id_unico:number, telefone:number, qtMaxLivros:3){
        this.nome = nome;
        this.id_unico = id_unico;
        this.telefone = telefone;
        this.qtMaxLivros = qtMaxLivros;
    }

    podeEmprestar():boolean{
        return this.livrosEmprestados.length < this.qtMaxLivros;
    }
}