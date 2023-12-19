for(let i = 1; i <= 20; i += 1){
    if(i == 13){
        break;
    }
    else if(i == 6){
        continue;
    }
    console.log(i);
}

document.getElementById("botao").onclick = function(){
    let x = document.getElementById("1numero").value;
    let y = document.getElementById("ultimonumero").value;
    for(x; x <= y; x += 1){
        document.getElementById("label").innerHTML = x;
    }
}