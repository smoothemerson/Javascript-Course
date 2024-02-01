//PROGRAMA COM TEMPERATURA COM AND!!

let temperatura = 15;

if(temperatura > 0 && temperatura < 30){
    console.log("O clima está bom!");
}
else{
    console.log("O clima está ruim!");
}

//PROGRAMA DE IDADE COM AND E OR!!

let idade = 15;

if(idade > 0 && idade < 30){
    console.log("Você está novo!");
}
else if(idade > 40 || idade > 31 && idade < 120){
    console.log("Você está velho!");
}
else{
    console.log("Você nem nasceu ainda!");
}

//PROGRAMA COM TEMPERATURA, COM AND E OR!!

document.getElementById("botao").onclick = function(){
    const sol1 = document.getElementById("sol");
    const nublado1 = document.getElementById("nublado");
    let temp = document.getElementById("xInput").value;

    if(sol1.checked && temp >= 15 && temp <= 35){
        document.getElementById("xLabel").innerHTML = "O clima está bom para sair!";
    }
    else{
        document.getElementById("xLabel").innerHTML = "O clima está ruim para sair!";
    }
}