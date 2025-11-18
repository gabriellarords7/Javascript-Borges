//alert - Apresenta uma mensagem na tela
// window.alert("Olá turma do borges")
// //Confirm - pergunta com ok/ cancela (retorna um True ou false)
// window.confirm("O jonas vai casar")
// //prompt - Pega o texto da tela
// window.prompt("Qual o seu nome?")

//Comentario em linha
/*
Comentario em texto
*/

// console.log("multimidia")

// let nome = prompt ("Informe o seu nome:  ")

// console.log("Bem vindo!" + nome )

// let numero1 = Nuumber.parseInt(prompt("digite o primeiro número: ") )
// let numero2 = Nuumber.parseInt(prompt("digite o segundo número:  ") )

// let result = numero1 + numero2

// let numero1 = Nuumber.parseFloat(prompt("digite o primeiro número: ") )
// let numero2 = Nuumber.parseFloat(prompt("digite o segundo número:  ") )

// let result = numero1 + numero2

// console.log(resultado)
// //Exibe o resultado da última soma no console.

let idade= window.prompt("qual sua idade?")

if(idade >= 18){
    console.log("Maior de idade! da-lhe")
}else{
    console.log("Você é menor de idade!")
}

switch (idade) {
    case "18":
        console.log("Maior de idade! daa-lhee")
        break;

        case "27":
        console.log("Está perto do 30!")
        break;

    default:
        console.log("Nada a dizer")
        break;
}
