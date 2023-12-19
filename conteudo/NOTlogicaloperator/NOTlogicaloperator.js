let temp = 15;
let sol = true;

if(!(temp > 15)){
    console.log("Está frio lá fora!")
}
else{
    console.log("Está morno lá fora!")
}

if(!sol){
    console.log("Está chovendo lá fora!")
}
else{
    console.log("Está ensolarado lá fora!")
}

//PROGRAMA!

document.getElementById("botao").onclick = function(){
    let temp = document.getElementById("temperatura").value;
    const checkbox = document.getElementById("checkbox").value;

    if(!(temp > 15)){
        document.getElementById("xLabel").innerHTML = "Está frio lá fora!";
    }
    else{
        document.getElementById("xLabel").innerHTML = "Está morno lá fora!";
    }
    if(!checkbox){
        document.getElementById("yLabel").innerHTML = "Está chovendo lá fora!";
    }
    else{
        document.getElementById("yLabel").innerHTML = "Está ensolarado lá fora!";
    }
}