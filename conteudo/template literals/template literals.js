let userName = "emerson";
let itens = 3;
let total = 75;

/*
console.log("Olá ", userName);
console.log("Você tem ", itens, "itens no seu carrinho");
console.log("O seu total é R$", total);
*/

console.log(`Olá ${userName}! Você tem ${itens} items no seu carrinho! O seu total é R$ ${total}!`)

let texto = 
`Olá ${userName}! <br>
Você tem ${itens} items no seu carrinho! <br>
O seu total é R$ ${total}! <br>
`;

console.log(texto)


document.getElementById("botao").onclick = function(){
    let nome = document.getElementById("xInput").value;
    let idade = document.getElementById("yInput").value;
    let data = document.getElementById("zInput").value;
    let text = `
        Olá ${nome}! <br>
        ${nome} tem ${idade} anos! <br>
        ${nome} nasceu dia ${data}! <br>
    `;
    
    document.getElementById("minhaLabel").innerHTML = text;
}