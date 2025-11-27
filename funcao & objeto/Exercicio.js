// Fazer um menu de exercícios utilizando os exemplos e
// exercícios feitos em aula.
// • Cada exercício deve ser encapsulado em uma função, e
// o menu deve executar essas funções;
// • O usuário poderá escolher qual exercício ele quer
// visualizar;
// • O usuário deverá digitar 0 para sair do menu;

// sintaxe = escrita de código

let opcaoEscolhida = 0
do{
    opcaoEscolhida = parseInt(prompt(`
      ==========Menu de Exercícios=======
      
      Digite o número do exercício que você quer visualizar:
      1 - Sair
      2- Login
      3- Par ou Impar
      4-  Média do aluno
      5- Número crescente, decrescente e aleatorio)

      ===================================
      `))


     switch (opcaoEscolhida) {
        case 0:
            sairDoMenu()
            alert("Volte sempre! Saindo do menu...")
            
            break;
        case 1:
           
          Login()
            
            break;
        case 2:

              Semana()
            
            break;
        case 3:

             Pares()
            
            break;
        case 4:
           
            Notas()

            break;
        case 5:

            Ordem()
            
            break;
            
      
     
        default: 
        alert("Digite uma opção válida!")
            break;
     }
}

while()

  function Login() {

    let login = prompt(" Digite o seu usuário: ")

    let senha = prompt(" Digite a sua senha: ")

    if (login == "admin" && senha == "senha123") {
        console.log("Login bem sucedido!")
    }
    else {
        console.log("Você não tem permissão de acesso!")
    }
}

function Semana() {
    let semana = window.prompt("Digite um número de 1 a 7")
    switch (semana) {
        case "1":
            console.log("segunda-feira")

            break;

        case "2":
            console.log("terça-feira")

            break;

        case "3":
            console.log("quarta-feira")

            break;

        case "4":
            console.log("quinta-feira")

            break;

        case "5":
            console.log("sexta-feira")

            break;

        case "6":
            console.log("sábado")

            break;

        case "7":
            console.log("domingo")

            break;
        default:
            console.log("Dia inexistente")
            break;
    }
}

while (opcaoEscolhida != 0);

function Pares() {
    let numero = parseInt(prompt("Digite um número inteiro: "))

    if (numero % 2 == 0) {
        console.log("O número é par")
    } else {
        console.log("O número é ímpar")
    }
}

function Notas() {
    let nota01 = Number.parseFloat(prompt("Digite sua primeira nota: "))
    let nota02 = Number.parseFloat(prompt("Digite sua segunda nota: "))
    let nota03 = Number.parseFloat(prompt("Digite sua terceira nota: "))
    let nota04 = Number.parseFloat(prompt("Digite sua quarta nota: "))

    let media = (nota01 + nota02 + nota03 + nota04) / 4

    console.log("A média do aluno é: " + media)

    if (media >= 7) {
        console.log("Aprovado!")
    }

    else if (media > 5 && media < 7) {
        console.log("Recuperação")
    }

    else {
        console.log("Reprovado!")
    }
}

function Ordem() {
    let numero01 = parseInt(prompt("Digite o primeiro número: "))
    let numero02 = parseInt(prompt("Digite o segundo número: "))
    let numero03 = parseInt(prompt("Digite o terceiro número: "))

    if (numero01 < numero02 && numero02 < numero03) {
        console.log("Os números estão em ordem crescente", numero01, numero02, numero03)
    } else {
        console.log("Os números não estão em ordem crescente")
    }
}
