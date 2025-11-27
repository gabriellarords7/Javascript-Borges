function saudacao(){
    let NomePesssoa = prompt("Digite seu nome:")

    let horaAtual = new Date ().getHours()

    if (horaAtual > 6 && horaAtuall < 13){
        alert("Bom dia "+ NomePessoa)
    }else if(horaAtual >= 13 && horaAtual < 18){
        alert("Boa tarde " + NomePessoa)
    }else{
        alert(" Boa Noite " + NomePessoa)
    }
    }

    saudacao()
        let pessoa = {
            nome: "Arthur",
            idade: 22,
            Sobrenome: "Oliveira",
            Estadoi: "SP",
            cidade: "SCS"
        }
        console.log("Nome: " + pessoa.nome)
        console.log("Idade: " + pessoa.idade)
        
    for (let chave in pessoa){
        console.log(chave + ": " + pessoa[chave])
    }
