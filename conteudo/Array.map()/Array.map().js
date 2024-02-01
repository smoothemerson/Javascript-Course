/*

let numero = [1, 2, 3, 4, 5];
let square = numero.map(square);
let cube = numero.map(cube);

square.forEach(print);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

function print(element){
    console.log(element)
}

*/

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
    return number * 2;                                                      //Executa uma transformação em cada elemento do array definido
  });                                                                       //Nesse caso, multiplica cada número por 2 e retorna o valor a variável doubledNumbers
  
  console.log(doubledNumbers);
  // Output: [2, 4, 6, 8, 10]
  