import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {
    
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                GESTAO DE ESTOQUE                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Adicionar produto                    ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Buscar produto por ID                ");
        console.log("            4 - Atualizar informacoes do produto     ");
        console.log("            5 - Excluir produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        switch (opcao) {
            case 1:
                console.log("\n\nAdicionar produto\n\n");

                break;
            case 2:
                console.log("\n\nListar todos os produtos\n\n");

                break;
            case 3:
                console.log("\n\nBuscar produto por ID\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar informacoes do produto\n\n");

                break;
            case 5:
                console.log("\n\nExcluir produto\n\n");

                break;
            case 6:
                console.log("\n\nSair\n\n");

                break;
                
            default:
                console.log("\nOpção Inválida!\n");

                break;

        }
    }
} 