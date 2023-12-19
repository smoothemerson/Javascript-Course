//PROGRAMA SEM O OPERADOR TERNARY

let adulto = checkAge(21);
console.log(adulto);

function checkAge(idade){
    
    if(idade >= 18){
        return true;
    }
    else{
        return false;
    }
}

//PROGRAMA COM O OPERADOR TERNARY

//COM RETURN
let adult = checkIdade(21);  //A idade é 21 então no console aparecerá true
console.log(adult);

function checkIdade(age){
    
    return age >= 18 ? true : false;
}

//MELHOR FORMA!

checkWinner(true);  //Como a função é true, então aparece 'Você ganhou!'

function checkWinner(win){
    win ? console.log("Você ganhou!") : console.log("Você perdeu!");
}