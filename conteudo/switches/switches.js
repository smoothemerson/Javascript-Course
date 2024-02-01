 //PROGRAMA SEM SWITCHES!!

let nota = "A";

if(nota == "A"){
    console.log("Você foi ótimo!");
}
else if(nota == "B"){
    console.log("Você foi bem!");
}
else if(nota == "C"){
    console.log("Você foi razoável!");
}
else if(nota == "D"){
    console.log("Você mal passou...");
}
else if(nota == "F"){
    console.log("Você falhou!")
}
else{
    console.log(nota, "não é uma letra de nota!");
}

//1° PROGRAMA COMO SWITCHES!!

let nota1 = "B";

switch(nota1){
    case "A":
        console.log("Você foi ótimo!");
        break;
    case "B":
        console.log("Você foi bem!");
        break;
    case "C":
        console.log("Você foi razoável!");
        break;
    case "D":
        console.log("Você mal passou!");
        break;
    case "F":
        console.log("Você falhou!");
        break;
    default:
        console.log(nota1, "não é uma letra de nota!")
}

//2° PROGRAMA COM SWITCHES 

let nota2 = "59";

switch(true){
    case nota2 >= 90:
        console.log("Você foi ótimo!");
        break;
    case nota2 >= 80:
        console.log("Você foi bem!");
        break;
    case nota2 >= 70:
        console.log("Você foi razoável!");
        break;
    case nota2 >= 60:
        console.log("Você mal passou!");
        break;
    case nota2 < 60:
        console.log("Você falhou!");
        break;
    default:
        console.log(nota2, "não é um número de nota!")
}

//PROGRAMA COM SWITCHES E COM INPUT!
document.getElementById("botao").onclick = function(){
let nota3 = document.getElementById("xInput").value;
switch(true){
    case nota3 >= 90:
        document.getElementById("xLabel").innerHTML = "Você foi ótimo!";
        break;
    case nota3 >= 80:
        document.getElementById("xLabel").innerHTML = "Você foi bem!";
        break;
    case nota3 >= 70:
        document.getElementById("xLabel").innerHTML = "Você foi razoável!";
        break;
    case nota3 >= 60:
        document.getElementById("xLabel").innerHTML = "Você mal passou!";
        break;
    case nota3 < 60:
        document.getElementById("xLabel").innerHTML = "Você falhou!";
        break;
    default:
        document.getElementById("xLabel").innerHTML = nota3, "não é um número de nota!";
}
}