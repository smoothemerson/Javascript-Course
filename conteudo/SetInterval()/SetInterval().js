let contagem = 0;
let maximo = window.prompt("Contagem até qual número?");
maximo = Number(maximo);

const meuTempo = setInterval(contagem1, 1000);

function contagem1(){
    contagem += 1;
    console.log(contagem);
    if(contagem >= maximo){
        clearInterval(meuTempo);
    }
}