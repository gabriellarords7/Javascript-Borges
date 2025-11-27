// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let idadeUsuario = parseInt(prompt("Digite sua idade: "));

while (idadeUsuario < 18){
    console.log("Você é menor de idade. Por favor, digite sua idade novamente.");
    idadeUsuario = parseInt(prompt("Digite sua idade: "));
}

console.log("Você é maior de idade.");
