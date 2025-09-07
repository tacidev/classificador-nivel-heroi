console.log ("Classificador de Nível de Herói")


const readline = require("readline-sync");

for (let i = 1; i <= 3; i++) {

  let nome = readline.question("Informe o nome do Herói: ");
  let quantidadeXP = readline.question("Informe a quantidade de XP: ");

  let resultado = "Seu herói é " + nome + " e está no nível ";

   switch (true){
    case (quantidadeXP <= 1000):
      console.log (resultado + "Ferro!");
      break;

    case (quantidadeXP >= 1001 && quantidadeXP <= 2000):
      console.log (resultado + "Bronze!");
      break;

    case (quantidadeXP >= 2001 && quantidadeXP <= 5000):
      console.log (resultado + "Prata!");
      break;
       
    case (quantidadeXP >= 5001 && quantidadeXP <= 7000):
      console.log (resultado + "Ouro!");
      break;

    case (quantidadeXP >= 7001 && quantidadeXP <= 8000):
      console.log (resultado + "Platina!");
      break;
        
    case (quantidadeXP >= 8001 && quantidadeXP <= 9000):
      console.log (resultado + "Ascendente!");
      break;

    case (quantidadeXP >= 9001 && quantidadeXP <= 10000):
      console.log (resultado + "Imortal!");
      break;

    default: 
      console.log (resultado + "Radiante!");
    }

  console.log(" ");
  console.log("----");
  console.log("");
}



