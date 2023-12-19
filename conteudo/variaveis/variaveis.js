let primeironome = "emerson"; //strings
let idade = 16;              //números
let estudante = true;      //valores booleanos

idade += 1;

console.log("Olá", primeironome);
console.log("Você tem", idade, "anos");
console.log("Aluno: ", estudante);

document.getElementById("p1").innerHTML = "Olá " + primeironome;
document.getElementById("p2").innerHTML = "Você tem " + idade + " anos!";
document.getElementById("p3").innerHTML = "Aluno: " + estudante;

//Parte do input

document.getElementById("botao").onclick = function () {
    let x = document.getElementById("xText").value;
    document.getElementById("xResultado").innerHTML = "Olá " + x + "!";

    let y = document.getElementById("yText").value;
    document.getElementById("yResultado").innerHTML = "Você tem " + y + " anos!";

    let z = document.getElementById("zText").value;
    document.getElementById("zResultado").innerHTML = z + " é o melhor nome de WiFi!";
}