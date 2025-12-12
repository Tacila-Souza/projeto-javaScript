import { Produto } from "./Produto";

export class Eletronico extends Produto {

    // Declarar os atributos ESPECÍFICOS desta classe
    private _modelo: string;
    private _cor: string;

    constructor(id: number, tipo: number, nome: string, preco: number, quantidade: number, modelo: string, cor: string) {
        
        // Enviamos id, tipo, nome, preco e quantidade para a classe PAI (Produto)
        super(id, tipo, nome, preco, quantidade);
        
        // Inicializamos os atributos desta classe
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

    // Sobrescrita do método visualizar (Polimorfismo)
    public visualizar(): void {
        super.visualizar(); // Chama o visualizar da classe Produto (mostra ID, Nome, Preço...)
        console.log(`Modelo: ${this._modelo}`);
        console.log(`Cor: ${this._cor}`);
    }
}