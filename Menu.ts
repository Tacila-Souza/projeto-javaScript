import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';

// import { ProdutoController } from "./src/controller/ProdutoController";
import { Eletronico } from "./src/model/Eletronico"; 

export function main() {

    let opcao, id, categoria, preco, quantidade: number;
    let nome, modelo, cor: string;
    let tiposProdutos = ['Eletronico', 'Outros']; 

    // Instancia do Controller (futuro)
    // const produtos: ProdutoController = new ProdutoController();

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
            console.log(colors.reset, "");
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
                        
                        console.log("\nSimulação: Produto cadastrado com sucesso!");
                        break;
                    case 2:

                        break;
                }

                keyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os produtos\n\n", colors.reset);

                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar produto por ID\n\n", colors.reset);
                console.log("Digite o ID do produto: ");
                id = readlinesync.questionInt("");

                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar informações do produto\n\n", colors.reset);
                console.log("Digite o ID do produto: ");
                id = readlinesync.questionInt("");
                
                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\n\nExcluir produto\n\n", colors.reset);
                console.log("Digite o ID do produto: ");
                id = readlinesync.questionInt("");
                
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
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

/* Função para aguardar o enter do usuário */
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione ENTER para continuar...");
    readlinesync.prompt();
}