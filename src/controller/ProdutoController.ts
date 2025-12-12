import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();

    public id: number = 0;
 
    public gerarId(): number {
        return ++this.id;
    }

    public procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            buscaProduto.visualizar();
        } else {
            console.log("\nO Produto numero: " + id + " não foi encontrado!");
        }
    }

    public listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    public cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nO Produto foi cadastrado com sucesso!");
    }

    public atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null) {
            // Encontra a posição no array e substitui
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nO Produto numero: " + produto.id + " foi atualizado com sucesso!");
        } else {
            console.log("\nO Produto numero: " + produto.id + " não foi encontrado!");
        }
    }


    public deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nO Produto numero: " + id + " foi apagado com sucesso!");
        } else {
            console.log("\nO Produto numero: " + id + " não foi encontrado!");
        }
    }

    /* AUXILIARES */

    // Método para verificar se o produto existe e retornar o objeto 
    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                return produto;
            }
        }
        return null;
    }
}