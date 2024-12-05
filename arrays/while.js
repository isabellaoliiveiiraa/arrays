//Exemplo 3: 
let contador = 1;

while (contador <= 15) {
  console.log("Contagem:", contador);
  contador++;
}

//Exemplo 4: 
const prompt = require('prompt-sync')();
let senha = "";

while (senha !== "1234") {
  senha = prompt("Digite a senha: ");
}
console.log("Senha correta!");

//exemplo 5:
let numero = 1;

do {
  console.log("Número:", numero);
  numero++;
} while (numero <= 3);

