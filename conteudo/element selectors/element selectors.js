
let elemento = document.getElementById("meuTitulo");
elemento.style.backgroundColor = "lightgreen";


let frutas = document.getElementsByName("frutas");
frutas.forEach(frutas => {
    if (frutas.checked) {
        console.log(frutas.value);
    }
})

let vegetais = document.getElementsByTagName("li");
vegetais[0].style.backgroundColor = "lightgreen";

let sobremesas = document.getElementsByClassName("sobremesas");
sobremesas[1].style.backgroundColor = "lightblue";

let elementos = document.querySelectorAll("[for");
elementos.forEach(elemento => {
    elemento.style.backgroundColor = "blue";
})