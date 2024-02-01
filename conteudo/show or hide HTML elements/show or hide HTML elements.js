
const meuBotao1 = document.querySelector("#meuBotao1");
const meuBotao2 = document.querySelector("#meuBotao2");
const minhaImagem1 = document.querySelector("#minhaImagem1");
const minhaImagem2 = document.querySelector("#minhaImagem2");

meuBotao1.addEventListener("click", () => {
    if(minhaImagem1.style.visibility == "hidden"){
        minhaImagem1.style.visibility = "visible";
    }
    else{
        minhaImagem1.style.visibility = "hidden";
    }
})

meuBotao2.addEventListener("click", () => {
    if(minhaImagem2.style.display == "none"){
        minhaImagem2.style.display = "block";
    }
    else{
        minhaImagem2.style.display = "none";
    }
})