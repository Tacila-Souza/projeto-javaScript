import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    
    procurarPorId(numero: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(numero: number): void;
    
}