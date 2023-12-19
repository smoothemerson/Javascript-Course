/*
let elemento = document.body;
let crianca = elemento.firstElementChild;
console.log(crianca);
crianca.style.backgroundColor = "lightgreen";
*/

/*
let elemento = document.querySelector("#vegetais");
let pai = elemento.parentElement;
crianca.style.backgroundColor = "lightgreen";
*/

/*
let elemento = document.querySelector("#vegetais");
let irmao = elemento.nextElementSibling;
irmao.style.backgroundColor = "lightgreen";
*/

/*
let elemento = document.querySelector("#vegetais");
let irmao = elemento.previousElementSibling;
irmao.style.backgroundColor = "lightgreen";
*/

/*
let elemento = document.querySelector("#frutas");
let crianca = elemento.firstElementChild;
crianca.style.backgroundColor = "lightgreen";
*/

/*
let elemento = document.querySelector("#frutas");
let crianca = elemento.lastElementChild;
crianca.style.backgroundColor = "lightgreen";
*/

/*
let elemento = document.querySelector("#frutas");
let crianca = elemento.children[1];
crianca.style.backgroundColor = "lightgreen";
*/

let elemento = document.querySelector("#sobremesa");
let criancas = Array.from(elemento.children);

criancas.forEach(criancas => criancas.style.backgroundColor = "green")