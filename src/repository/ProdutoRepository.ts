import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    
    // CRUD - Create, Read, Update, Delete
    procurarPorId(numero: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(numero: number): void;
    
}