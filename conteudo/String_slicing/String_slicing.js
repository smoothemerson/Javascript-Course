//Programa simples

let FullName = "emerson rocha";

let firstName;
let lastName;

//firstName = FullName.slice(0, 3);
//lastName = FullName.slice(4);

firstName = FullName.slice(0, FullName.indexOf(" "));
lastName = FullName.slice(FullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

//firstName vai começar na primeira letra e terminar onde tem espaço
//lastName vai começar um caractere depois do espaço

//Programa avançado

let FullName1;
let firstName1;
let lastName1;

document.getElementById("botaodeenviar").onclick = function () {
    FullName1 = document.getElementById("xText").value;

    firstName1 = FullName1.slice(0, FullName1.indexOf(" "));
    lastName1 = FullName1.slice(FullName1.indexOf(" ") + 1);

    document.getElementById("yLabel").innerHTML = "Nome: " + firstName1 + " " + lastName1;
}