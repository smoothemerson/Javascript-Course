let ages = [18, 16, 21, 17, 19, 90];
let adultos = ages.filter(checkAge);

adultos.forEach(print);

function checkAge(element){
    return  element >= 18;
}

function print(element){
    console.log(element);
}


//FILTRA QUAIS NÚMEROS SÃO PARES


const numbers = [1, 2, 3, 4, 5];  

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);
// Output: [2, 4]



//FILTRA QUAIS FRUTAS TEM MAIS QUE 5 CARACTERES 


const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];

const longFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
});

console.log(longFruits);
// Output: ['banana', 'orange']
