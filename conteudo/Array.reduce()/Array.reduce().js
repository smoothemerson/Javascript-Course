let preco = [5, 10, 15, 20, 25];
let total = preco.reduce(checkout);

console.log(`O total é: ${total}`)

function checkout(total, elemento){
    return total + elemento;
}

const aa = [10, 20, 30, 40, 50, 60];

const precoFinal = aa.reduce(function(totall, cadaUm) {
  return totall + cadaUm;
}, 15);

console.log(precoFinal);



const shoppingCart = [20, 50, 80, 5];
  
  const totalAmount = shoppingCart.reduce(function(acc, curr) {                 //acc = acumulador, é o total, a soma 
    return acc + curr;                                                    //curr = é o atual (current), o elemento atual
  }, 0);                                                                      // o 0 significa que a váriavel totalAmount começa com o preço 0 e vai somando a cada callback
  
  console.log(totalAmount);
  // Output: 155
  