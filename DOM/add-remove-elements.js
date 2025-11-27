let secao = document.getElementsByClassName("section");
let novoParagrafo = document.createElement("p"); //cria um elemento no meu HTML
novoParagrafo.textContent = "Paragrafo criado via JS"; //Poe um conteudo no p

// secao[0].appendChild(novoParagrafo);

document.body.appendChild(novoParagrafo)

//remover a tag label
formularioElememnto.removeChild(LabelElemento); //remove o elemento label do formulario