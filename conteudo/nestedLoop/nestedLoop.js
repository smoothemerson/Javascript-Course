for (let i = 1; i <= 3; i += 1) {
    for (let j = 1; j <= 3; j += 1) {
        console.log(j);
    }
}


document.getElementById("botao").onclick = function () {
    let simbolo = document.getElementById("simbolo").value;
    let linha = document.getElementById("linha").value;
    let colunas = document.getElementById("coluna").value;
    for (let i = 1; i <= linha; i += 1) {
        for (let j = 1; j <= colunas; j += 1) {
            document.getElementById("meuretangulo").innerHTML += simbolo;
        }
        document.getElementById("meuretangulo").innerHTML += "<br>";
    }
}

