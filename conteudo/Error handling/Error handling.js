try{
    let x = window.prompt("Digite um número");
    x = Number(x);

    if(isNaN(x)) throw "isso não é um número!";
    if(x = "") throw "você digitou nada!";

    console.log(`${x} é um número`)
}
catch(error){
    console.log(error);
}
finally{
    console.log("isso sempre executa!");
}