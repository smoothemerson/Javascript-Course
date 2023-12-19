let canvas = document.getElementById("meuCanvas");
let context = canvas.getContext("2d");

//DESENHAR LINHAS
/*
context.strokeStyle = "blue";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();
*/


//DESENHAR UM TRIÂNGULO
/*
context.strokeStyle = "grey";
context.fillStyle = "red";
context.lineWidth = 10;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 500);     //ESQUERDA
context.lineTo(500, 500);   //DIREITA
context.lineTo(250, 0);     //MEIO
context.stroke();
context.fill();
*/

//DESENHAR UM RETÂNGULO
/*
context.fillStyle = "blue";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "yellow";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 0, 250, 250);
*/

//DESENHAR CÍRCULOS
/*
context.fillStyle = "blue";
context.strokeStyle = "black";
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();
*/

//DESENHAR TEXTO
context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("VOCÊ GANHOU!", canvas.width / 2, canvas.height / 2);