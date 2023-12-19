let item = "criptomoeda";
let preco = 420.69;

let tempo1 = setTimeout(primeiraMensagem, 5000, item, preco);
let tempo2 = setTimeout(segundaMensagem, 5000);
let tempo3 = setTimeout(terceiraMensagem, 2000);

function primeiraMensagem(item, preco){
    alert(`Compre esse ${item} por ${preco}!`);
}
function segundaMensagem(){
    alert("Isso não é um engano");
}
function terceiraMensagem(){
    alert("FAÇA ISSO!");
}

document.getElementById("botao").onclick = function(){
    clearTimeout(tempo1);
    clearTimeout(tempo2);
    clearTimeout(tempo3);
    alert("Obrigado por comprar <3");
}