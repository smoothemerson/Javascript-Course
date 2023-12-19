//Programa sem functions!

/*console.log("Feliz aniversário para você!");
console.log("Feliz aniversário para você!");
console.log("Feliz aniversário querido ______!");
console.log("Feliz aniversário para você!");
console.log("Feliz aniversário para você!");
console.log("Você tem ____ anos!");

console.log("Feliz aniversário para você!");
console.log("Feliz aniversário para você!");
console.log("Feliz aniversário querido ______!");
console.log("Feliz aniversário para você!");
console.log("Feliz aniversário para você!");
console.log("Você tem ____ anos!");

console.log("Feliz aniversário para você!");
console.log("Feliz aniversário para você!");
console.log("Feliz aniversário querido ______!");
console.log("Feliz aniversário para você!");
console.log("Feliz aniversário para você!");
console.log("Você tem ____ anos!");
*/

//Com Functions!

document.getElementById("botao").onclick = function () {
    
    //Chamamos a função quantas vezes quisermos!
    startprograma();
    startprograma();
    startprograma();
    startprograma();

    function startprograma() {
        let name = document.getElementById("nome").value;
        let age = document.getElementById("idade").value;

        //name e age são parâmetros dentro da dos parênteses, pois a próxima função não tem ideia de quem seja eles, por isso se declararmos aqui, poderemos fazer com que a próxima função consiga reconhecer eles 
        happybirthday(name, age);
    }

    // a e b correspondem 1° parâmetro e o segundo parâmetro definidos na função anterior

    function happybirthday(a, b) {
        console.log("Feliz aniversário para você!");
        console.log("Feliz aniversário querido", a);
        console.log("Feliz aniversário para você!");
        console.log("Você tem", b, "anos!");
    }
}