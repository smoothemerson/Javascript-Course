//let meuNumero = 10;

//meuNumero = meuNumero.toLocaleString("pt-br");  //Português-Brasil
//meuNumero = meuNumero.toLocaleString("en-US");  //US English
//meuNumero = meuNumero.toLocaleString("hi-IN");  //Hindi
//meuNumero = meuNumero.toLocaleString("de-DE");  //Alemão Padrão

//meuNumero = meuNumero.toLocaleString("en-US", {style: "currency", currency: "USD"});
//meuNumero = meuNumero.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//meuNumero = meuNumero.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//meuNumero = meuNumero.toLocaleString(undefined, {style: "percent"});

//meuNumero = meuNumero.toLocaleString(undefined, {style: "unit", unit: "celsius"});

//console.log(meuNumero);



document.getElementById("botao").onclick = function () {
    let dinheiro = document.getElementById("aInput").value;

    //currencyDisplay é usada para controlar como o símbolo da moeda é exibido durante a formatação. Quando definido como "symbol", o método toLocaleString() tenta exibir o símbolo da moeda

    let dolarOptions = { style: "currency", currency: "USD", currencyDisplay: "symbol" };
    let realOptions = { style: "currency", currency: "BRL", currencyDisplay: "symbol" };
    let euroOptions = { style: "currency", currency: "EUR", currencyDisplay: "symbol" };

    //parseFloat analisa a string e retorna um número. Se a string não puder ser analisada como um número válido, ela retorna NaN (Not a Number).

    let dolar = parseFloat(dinheiro).toLocaleString("en-US", dolarOptions);
    let real = parseFloat(dinheiro).toLocaleString("pt-BR", realOptions);
    let euro = parseFloat(dinheiro).toLocaleString("en-GB", euroOptions);

    let text = `
          O número que você inseriu convertido em dinheiro seria:<br>
          Na moeda americana (dólar): ${dolar}<br>
          Na moeda brasileira (real): ${real}<br>
          Na moeda britânica (euro): ${euro}<br>
        `;

    document.getElementById("label").innerHTML = text;
}

