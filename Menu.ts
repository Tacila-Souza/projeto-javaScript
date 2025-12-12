import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';
import { ProdutoController } from "./src/controller/ProdutoController";
import { Eletronico } from "./src/model/Eletronico";

export function main() {

    let opcao, id, categoria, preco, quantidade: number;
    let nome, modelo, cor: string;
    let tiposProdutos = ['Eletronico', 'Outros']; 

    const produtos: ProdutoController = new ProdutoController();

    // Teste 1:
    produtos.cadastrar(new Eletronico(produtos.gerarId(), 1, "iPhone 14", 4500.00, 10, "Pro Max", "Dourado"));

    // Teste 2:
    produtos.cadastrar(new Eletronico(produtos.gerarId(), 1, "Macbook Air", 8500.00, 5, "M2", "Midnight"));

    // Teste 3:
    produtos.cadastrar(new Eletronico(produtos.gerarId(), 1, "PlayStation 5", 3800.00, 8, "Slim Digital", "Branco"));

    // Teste 4:
    produtos.cadastrar(new Eletronico(produtos.gerarId(), 1, "Galaxy Buds", 600.00, 20, "Pro 2", "Preto"));

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, "*****************************************************");
        console.log("                                                     ");
        console.log("                GESTÃO DE ESTOQUE                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Adicionar produto                    ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Buscar produto por ID                ");
        console.log("            4 - Atualizar informações do produto     ");
        console.log("            5 - Excluir produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.greenstrong, "\nGestão de Estoque - Boas vendas!");
            about();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nAdicionar Produto\n\n", colors.reset);

                console.log("Digite o Nome do Produto: ");
                nome = readlinesync.question("");

                console.log("Digite a categoria do Produto: ");
                categoria = readlinesync.keyInSelect(tiposProdutos, "", { cancel: false }) + 1;

                console.log("Digite o Preço do Produto (R$): ");
                preco = readlinesync.questionFloat("");

                console.log("Digite a Quantidade em Estoque: ");
                quantidade = readlinesync.questionInt("");

                switch (categoria) {
                    case 1: // Eletronico
                        console.log("Digite o Modelo do Eletrônico: ");
                        modelo = readlinesync.question("");
                        console.log("Digite a Cor: ");
                        cor = readlinesync.question("");
                        
                        produtos.cadastrar(new Eletronico(produtos.gerarId(), categoria, nome, preco, quantidade, modelo, cor));
                        break;
                    case 2:
                        console.log("Funcionalidade 'Outros' ainda não implementada.");
                        break;
                }
                keyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os produtos\n\n", colors.reset);
                
                produtos.listarTodos();
                
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar produto por ID\n\n", colors.reset);
                
                console.log("Digite o ID do produto: ");
                id = readlinesync.questionInt("");
                
                produtos.procurarPorId(id);
                
                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar informações do produto\n\n", colors.reset);
                
                console.log("Digite o ID do produto: ");
                id = readlinesync.questionInt("");

                // Verifica se o produto existe antes de pedir os dados
                let produtoExistente = produtos.buscarNoArray(id);

                if (produtoExistente !== null) {
                    
                    console.log("Digite o Nome do Produto: ");
                    nome = readlinesync.question("");
                    
                    categoria = produtoExistente.tipo; 
                    
                    console.log("Digite o Preço do Produto (R$): ");
                    preco = readlinesync.questionFloat("");

                    console.log("Digite a Quantidade em Estoque: ");
                    quantidade = readlinesync.questionInt("");

                    switch (categoria) {
                        case 1:
                            console.log("Digite o Modelo do Eletrônico: ");
                            modelo = readlinesync.question("");
                            console.log("Digite a Cor: ");
                            cor = readlinesync.question("");
                            
                            produtos.atualizar(new Eletronico(id, categoria, nome, preco, quantidade, modelo, cor));
                            break;
                    }

                } else {
                    console.log("Produto não encontrado!");
                }

                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\n\nExcluir produto\n\n", colors.reset);
                
                console.log("Digite o ID do produto: ");
                id = readlinesync.questionInt("");
                
                // Chamada ao Controller
                produtos.deletar(id);
                
                keyPress();
                break;

            default:
                console.log(colors.fg.redstrong, "\nOpção Inválida!\n", colors.reset);
                keyPress();
                break;
        }
    }
}

export function about(): void {
    console.log(colors.bg.black, colors.fg.gray, "\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - https://github.com/Tacila-Souza/projeto-javaScript");
    console.log("https://github.com/Tacila-Souza/projeto-javaScript");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione ENTER para continuar...");
    readlinesync.prompt();
}

main();
