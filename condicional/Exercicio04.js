let nota01 = parseFloat(prompt("Iforme a primeira nota:")) 
let nota02 = parseFloat(prompt("Iforme a segunda nota:"))
let nota03 = parseFloat(prompt("Iforme a terceira nota:"))
let nota04 = parseFloat(prompt("Iforme a quarta nota:"))

let media = (nota01 + nota02 + nota03 + nota04) /4

console.log("A média final é:" + media)
if (media >=7){
    console.log("Aprovado!")
}
else if (media =5 && media <7){
    console.log("Recuperação!")
}
else{
    console.log("Reprovado!")
}