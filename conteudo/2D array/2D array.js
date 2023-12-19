//  LISTA DE COMIDAS!

let frutas =        ["macas", "laranjas", "bananas"];
let vegetais =      ["cenouras", "cebola", "batatas"];
let carnes =        ["ovos", "frango", "peixe"];

let listaComidas = [frutas, vegetais, carnes]; 

for(let lista of listaComidas){
    for(let comida of lista){
        console.log(comida);
    }
}

listaComidas[1][2] = "manga";
listaComidas[0][2] = "pera";


for(let lista of listaComidas){
    for(let comida of lista){
        console.log(comida);
    }
}