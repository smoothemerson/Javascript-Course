let precos = [5, 10, 15, 20, 25];

/*
for(let i = 0; i < precos.length; i += 1){
    console.log(precos[i]);

}

        //LOOP INVERSO!!

for(let i = precos.length - 1; i >= 0; i -= 1){
    console.log(precos[i]);
}
*/


    //JEITO MAIS FÁCIL!

for(let preco of precos){
    console.log(preco);
}