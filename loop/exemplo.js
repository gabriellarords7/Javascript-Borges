// // while loop condicionals
// let salario = 1000

// while( salario < 5000){
//     //salario = 1000 + salario
//     salario += 100

//     console.log ("O salario é de R$: " + salario)
// }

// // do while - loop condicional
// let aumento = 1000

// do{

//     console.log("Esse é o seu salario: " + aumento)
// }

//Array
let fruta = ["Banana", "Laranja", "Maça", "Pitaya", "Melancia", "Uva"]

//Console.log( frutas[3])
//Console.log( frutas[5])

// for loop - loop condicionalforEach => percorre uma lista
frutas.forEach(fruta => {
console.log( "A fruta é:" + fruta)
})

//Percorrer a lista com for
for ( let indice = 0; indice < frutas.length; indice++){
    console.log (frutas[ indice])

    if ( frutas[indice] === "Uva"){
        console.log("Eu gosto de "+ frutas[indice])
    }
}

