console.log ("Classificador de Nível de Herói")


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe seu Herói: ", (nome) => {
  console.log ("Seu herói é " + nome)
  rl.close();
});