/*
let estudantes = ["spongebob", "patrick", "squidward"];
estudantes.forEach(capitalize);
estudantes.forEach(print);

function capitalize(elemento, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

console.log(estudantes[0]);

function print(element){
    console.log(element);
}

*/


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);                  // Exibe cada número no console
});


const fruits = ['apple', 'banana', 'orange'];   //Exibe cada fruta no console

fruits.forEach(function(fruit) {
  console.log(fruit);
});
