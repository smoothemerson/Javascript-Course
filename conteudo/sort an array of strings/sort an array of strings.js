let frutas = ["banana", "maca", "laranja", "manga"];

frutas = frutas.sort();                  //Ordena o array de frutas para alfabética

frutas = frutas.sort().reverse();        //Ordena o array de frutas para o inverso da alfabética 

for(let fruta of frutas){
    console.log(fruta);
}