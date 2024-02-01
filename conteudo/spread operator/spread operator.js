
let nomedeUsuario = "emerson rocha";
let numeros = [1, 2,3, 4, 5, 6, 7, 8 ,9];
let classe1 = ["BobEsponja", "Patrick", "Sandy"];
let classe2 = ["Scott", "Alisson", "Stiles", "Lydia"];

console.log(numeros);
console.log(nomedeUsuario);
console.log(...numeros);
console.log(...nomedeUsuario);

let maximo = Math.max(...numeros);
console.log(maximo);

classe1.push(classe2);
console.log(classe1);

classe1.push(...classe2);
console.log(...classe1);





const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2);                    // Output: [1, 2, 3, 4, 5, 6]

const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
const objetoMesclado = { ...objeto1, ...objeto2 };
console.log(objetoMesclado); // Output: { a: 1, b: 2, c: 3, d: 4 }