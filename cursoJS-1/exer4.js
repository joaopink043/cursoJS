// importar o modulo 'readline' para ler dados digitados pelo usuario no terminal
const readline = require("readline");


// cria a interface de leitura (entrada e saida de dados
const rl = readline.createInterface ({
    input: process.stdin,  // define que a entrada será o teclado
    output: process.stdout  // define que a saida será o console
});


// faz uma pergunta ao usuario
rl.question("digite um numero: ", (resposta) => {
    //converte a resposta (que vem como texto) para numero
    const numero = Number(resposta);


    // Estrutura if/else para verificar se é maior ou menor/igual a 5
    if (numero > 5) {
        console.log("numero é maior que 5");
    } else {
        console.log("o numero é menor ou igual a 5");
    }


    // fecha a interface de leitura (importante para encerrar o programa )
    rl.close();
});
