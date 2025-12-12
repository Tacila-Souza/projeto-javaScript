import { Produto } from "./Produto";

export class Eletronico extends Produto {

    private _modelo: string;
    private _cor: string;

    constructor(id: number, tipo: number, nome: string, preco: number, quantidade: number, modelo: string, cor: string) {
        
        super(id, tipo, nome, preco, quantidade);
        
        this._modelo = modelo;
        this._cor = cor;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(value: string) {
        this._modelo = value;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(value: string) {
        this._cor = value;
    }


    public visualizar(): void {
        super.visualizar(); 
        console.log(`Modelo: ${this._modelo}`);
        console.log(`Cor: ${this._cor}`);
    }
}