let numero01 = parseFloat(prompt("Digite o primeiro número: "))
let numero02 = parseFloat(prompt("Digite o segundo número: "))
let numero03 = parseFloat(prompt("Digite o terceiro número: "))

if (numero01 < numero02 && numero02 < numero03){
    console.log("Os números estão em ordem crescente!")
}
else{
    console.log("Os números não estão em ordem crescente!")
}