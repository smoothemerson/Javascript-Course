//SYNCHRONOUS CODE
console.log("COMECE!");
console.log("Esse passo é síncrono!");
console.log("TERMINE!");

//ASSYNCHRONOUS CODE
console.log("COMECE!");
setTimeout(() => console.log("Esse passo é assíncrono!"), 5000);
console.log("TERMINE!");