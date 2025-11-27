// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let numeroUsuario = parseInt(prompt("Digite um número (digite 0 para sair): "));

while (numeroUsuario !== 0){
    console.log("Você digitou: " + numeroUsuario);
    numeroUsuario = parseInt(prompt("Digite um número (digite 0 para sair): "));
}

console.log("Programa encerrado. Você digitou 0.");
