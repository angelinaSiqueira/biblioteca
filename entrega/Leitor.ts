import { Ileitor } from "./Ileitor";

export class Leitor implements Ileitor{
    nome_completo: string;
    id: number;
    telefone: number;
    maximo: number;

    constructor(nome_completo: string,
        id: number,
        telefone: number,
        maximo: number){
            this.nome_completo=nome_completo;
            this.id=id;
            this.telefone=telefone;
            this.maximo=maximo;
        }

}