/*
elemento.onmousedown = facaAlgo;
elemento.onmouseup = facaAlgoCoisa;
*/

const elemento = document.getElementById("minhaDiv");
elemento.onmouseover = facaAlgo;
elemento.onmouseout = facaAlgoCoisa;

const elemento1 = document.getElementById("meuBotao");
elemento1.onclick = facaAlgo1;

const elemento2 = document.body;
elemento2.onload = facaAlgo2;

const elemento3 = document.getElementById("meuTexto");
elemento3.onchange = facaAlgo3;


function facaAlgo(){
    //alert("Você fez alguma coisa!");
    elemento.style.backgroundColor = "red";
}

function facaAlgoCoisa(){
    //alert("Você fez alguma coisa!");
    elemento.style.backgroundColor = "yellow";
}

function facaAlgo1(){
    alert("O botão foi clicado!");
}

function facaAlgo2(){
    alert("A página carregou!");
}

function facaAlgo3(){
    alert("A área de input foi modificada!");
}