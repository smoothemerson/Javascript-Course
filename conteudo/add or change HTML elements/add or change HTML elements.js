/*
const nomeTag = document.createElement("h1");
nomeTag.textContent = window.prompt("Digite seu nome!");
document.body.append(nomeTag);
*/

const minhaLista = document.querySelector("#frutas");
const itensLista = document.createElement("li");
itensLista.textContent = "manga";
//minhaLista.append(itensLista);
//minhaLista.prepend(itensLista);
minhaLista.insertBefore(itensLista, minhaLista.getElementsByTagName("li")[1]);