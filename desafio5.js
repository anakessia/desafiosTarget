const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}


rl.question("Informe a string: ", (entrada) => {
    const resultado = inverterString(entrada);
    console.log(`String invertida: ${resultado}`);
    rl.close(); 
});