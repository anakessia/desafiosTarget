
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function isFibonacci(num) {
    let a = 0, b = 1, temp;

    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b === num || num === 0;
}


rl.question("Digite um número: ", (input) => {
    const num = parseInt(input);

    if (isFibonacci(num)) {
        console.log(`${num} pertence a sequência de Fibonacci`);
    } else {
        console.log(`${num} não pertence a sequência de Fibonacci`);
    }

    
    rl.close();
});