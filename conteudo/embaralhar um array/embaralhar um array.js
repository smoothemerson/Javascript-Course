let cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "J", "K"];

embaralhar(cartas);

cartas.forEach(cartas => console.log(cartas));

function embaralhar(array){
    let indexAtual = array.length;

    while(indexAtual != 0){
        let indexAleatorio = Math.floor(Math.random() * array.length);
        indexAtual -= 1;

        let tempo = array[indexAtual];
        array[indexAtual] = array[indexAleatorio];
        array[indexAleatorio] = tempo;
    }

    return array;
}