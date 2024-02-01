let fruits = ["maca", "laranja", "banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[4]);

fruits[1] = "coco";

console.log(fruits);

fruits.push("limao");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("manga");
console.log(fruits);
fruits.shift();

let length = fruits.length;
let index = fruits.indexOf("maca");

console.log(length);