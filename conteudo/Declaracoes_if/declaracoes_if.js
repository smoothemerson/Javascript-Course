let age = 17;

if(age >= 18){
    console.log("Você é um adulto!")
}

else if (age < 0){
    console.log("VOCÊ NEM NASCEU AINDA!")
}
else if(age >= 65){
    console.log("Você é um cidadão idoso")
}
else{
    console.log("Você é uma criança! ")
}

let online = true;

if(online){
    console.log("Você está online!")
}
else{
    console.log("Você está offline!")
}

document.getElementById("botao").onclick = function(){
    x = Number(document.getElementById("xInput").value);
    if(x >= 65){
        document.getElementById("xLabel").innerHTML = "Você é um cidadão idoso!"
    }
    else if(x >= 18){
        document.getElementById("xLabel").innerHTML = "Você é um adulto!"
    }
    else if(x < 0){
        document.getElementById("xLabel").innerHTML = "Você nem nasceu ainda!"
    }
    else{
        document.getElementById("xLabel").innerHTML = "Você é uma criança!"
    }
}