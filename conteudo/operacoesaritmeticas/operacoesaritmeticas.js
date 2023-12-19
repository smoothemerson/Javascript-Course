document.getElementById("botao").onclick = function(){
    let x = Number(document.getElementById("xNumero").value);
    let y = Number(document.getElementById("yNumero").value);
    let z = Number(document.getElementById("zNumero").value);
    let a = Number(x + y + z)
    document.getElementById("Resultado").innerHTML = "O Resultado é: " + a;
}