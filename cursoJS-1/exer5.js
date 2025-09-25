const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um numero: ", (resposta) => {
    const numero = Number(resposta);

    if (numero > 5) {
        console.log(numero, "é maior que 5")
    } else {
        console.log(numero, "é menor ou igual á 5")
    }
   
    rl.close();
} );
