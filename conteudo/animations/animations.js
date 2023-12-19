const meuBotao1 = document.getElementById("meuBotao1");
const meuBotao2 = document.getElementById("meuBotao2");
const minhaAnimacao1 = document.getElementById("minhaDiv1");
var posicaoInicial = true;

meuBotao1.addEventListener("click", ir);
meuBotao2.addEventListener("click", voltar);

function ir() {
  if (posicaoInicial == true) {
    let timer = null;
    let x = 0;
    let y = 0;
    let degrees = 0;
    const windowWidth = (window.innerWidth - 200); // Largura da janela do navegador
    const windowHeight = (window.innerHeight - 200); // Altura da janela do navegador

    timer = setInterval(frame, 0.01);

    function frame() {
      degrees += 10;
      minhaAnimacao1.style.transform = "rotateX(" + degrees + "deg) rotateY(" + degrees + "deg) rotateZ(" + degrees + "deg)";
      if (x >= windowWidth || y >= windowHeight) {
        clearInterval(timer);
      }
      else {
        if (x < windowWidth) {
          x += 3;
          minhaAnimacao1.style.left = x + "px";
        }
        if (y < windowHeight) {
          y += 1;
          minhaAnimacao1.style.top = y + "px";
        }
      }
    }
    posicaoInicial = false;
  }
}

function voltar() {
  if (posicaoInicial == false) {
    let timer = null;
    let x = (window.innerWidth - 200);
    let y = (window.innerHeight - 330);
    let degrees = 0;

    timer = setInterval(frame, 1);

    function frame() {
      degrees += 10;
      minhaAnimacao1.style.transform = "rotateX(" + degrees + "deg) rotateY(" + degrees + "deg) rotateZ(" + degrees + "deg)";
      if (x <= 0 || y <= 0) {
        clearInterval(timer);
      }
      else {
        if (x > 0) {
          x -= 3;
          minhaAnimacao1.style.left = x + "px";
        }
        if (y > 0) {
          y -= 1;
          minhaAnimacao1.style.top = y + "px";
        }
      }
    }
  }
  posicaoInicial = true;
}




const meuBotao3 = document.getElementById("meuBotao3");
const meuBotao4 = document.getElementById("meuBotao4");
const minhaAnimaca2 = document.getElementById("minhaDiv2");
var estaMaximizado = true

meuBotao3.addEventListener("click", diminuir);
meuBotao4.addEventListener("click", aumentar);

function diminuir() {
  if (estaMaximizado == true) {
    let timer2 = null;
    let scaleX = 1;
    let scaleY = 1;

    timer2 = setInterval(frame, 4);

    function frame() {

      if (scaleX <= 0.01 || scaleY <= 0.01) {
        clearInterval(timer2);
      }
      else {
        scaleX -= 0.01;
        scaleY -= 0.01;
        minhaAnimaca2.style.transform = "scale(" + scaleX + "," + scaleY + ")";
      }
    }
  }
  estaMaximizado = false
}

function aumentar() {
  if (estaMaximizado == false) {
    let timer3 = null;
    let scaleX = 0.01;
    let scaleY = 0.01

    timer3 = setInterval(frame, 4);

    function frame() {
      if (scaleX < 1 || scaleY < 1) {
        scaleX += 0.01;
        scaleY += 0.01;
        minhaAnimaca2.style.transform = "scale(" + scaleX + "," + scaleY + ")";
      }
      else {
        clearInterval(timer3);
      }
    }
  }
  estaMaximizado = true
}