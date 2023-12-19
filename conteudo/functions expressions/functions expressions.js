/*digaOla();

function digaOla(){
    console.log("Olá!")
}
*/

/*
let contagem = 0;

function aumentarContagem(){
    contagem += 1;
    document.getElementById("minhaLabel").innerHTML = contagem;
}

function diminuirContagem(){
    contagem -= 1;
    document.getElementById("minhaLabel").innerHTML = contagem;
}
*/

const saudacoes = function(){
    console.log("Ola!")
}

let contagem = 0;

document.getElementById("aumentarBotao").onclick = function(){
    contagem += 1;
    document.getElementById("minhaLabel").innerHTML = contagem;
}

document.getElementById("diminuirBotao").onclick = function(){
    contagem -= 1;
    document.getElementById("minhaLabel").innerHTML = contagem;
}



const soma = function(a, b) {
    return a + b;
};

  
const resultado = soma(2, 3);
console.log(resultado); // Output: 5
