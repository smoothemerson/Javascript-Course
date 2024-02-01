//CAMINHO MAIS FÁCIL

let usuario = window.prompt("Qual seu nome?")
console.log(usuario);
document.getElementById("janela").innerHTML = "Olá " + usuario;


//CAMINHO MAIS DIFÍCIL
let idade;
document.getElementById("meubotao").onclick = function () {
    idade = document.getElementById("minhaidade").value;
    console.log(idade);
    document.getElementById("resultado").innerHTML = "Você tem  " + idade + " anos";
}