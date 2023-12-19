let nomedeusuario = "emerson";

let letra = nomedeusuario.charAt(0).toUpperCase();

console.log(letra);

document.getElementById("botao").onclick = function () {
    let x = document.getElementById("xInput").value;
    let y = document.getElementById("yInput").value;
    let letter = x.charAt(y -1).toUpperCase().trim();
    document.getElementById("xLabel").innerHTML = "A primeira letra do seu nome é: " + letter;
}