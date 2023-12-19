const loja = new Map ([
    ["camiseta", 20],
    ["jeans", 30],
    ["tenis", 100],
    ["meias", 10],
    ["cuecas", 40]
]);

let carrinhodeCompra = 0;

carrinhodeCompra += loja.get("camiseta");                               //O método get adiciona o preço ao seu carrinho de compra
carrinhodeCompra += loja.get("cuecas");

console.log(carrinhodeCompra);

loja.set("chapeu", 40);                                                 //O método set adiciona mais um produto e seu preço no map determinado
loja.delete("meias");                                                   //O método delete exclui um elemento do map
console.log(loja.has("chapeu"));                                        //O método has mostra se existe um elemento no map
console.log(loja.size);                                                 //O método size nos mostra quantos elementeos há no map

loja.forEach((value, key) => console.log(`${key} $${value}`));          //Essa função de seta nos mostra os elementos do map e seus respectivos preços
