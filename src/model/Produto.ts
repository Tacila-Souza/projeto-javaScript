import { colors } from "../util/colors";

export abstract class Produto {

    // Atributos gerais para todos os produtos
    private _id: number;
    private _tipo: number;
    private _nome: string;
    private _preco: number;      
    private _quantidade: number; 

    constructor(id: number, tipo: number, nome: string, preco: number, quantidade: number) {
        this._id = id;
        this._tipo = tipo;
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    // Getters e Setters
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(value: number) {
        this._preco = value;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(value: number) {
        this._quantidade = value;
    }

    // Método Visualizar (Polimorfismo)
    public visualizar(): void {
        let tipoString: string = "";

        switch (this._tipo) {
            case 1:
                tipoString = "Eletrônico";
                break;
            case 2:
                tipoString = "Outro"; // Adicione mais casos conforme seu Menu
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Tipo: ${tipoString}`);
        console.log(`Preço: R$ ${this._preco.toFixed(2)}`);
        console.log(`Quantidade em Estoque: ${this._quantidade}`);
    }
}