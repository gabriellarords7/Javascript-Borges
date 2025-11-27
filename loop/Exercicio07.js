// Faça um programa que receba um número do usuário e mostre
// // no console a contagem regressiva até 0.

let numeroUsuario = parseInt(prompt("Digite um número para a contagem regressiva: "));

console.log("Contagem regressiva de " + numeroUsuario + " até 0:");

while (numeroUsuario >= 0){
    console.log(numeroUsuario);
    numeroUsuario--;
}   