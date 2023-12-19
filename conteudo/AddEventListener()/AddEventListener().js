
const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", mudarAzul);
outerDiv.addEventListener("click", mudarAzul, true);

function mudarAzul(){
    alert(`Você selecionou ${this.id}`);
    this.style.backgroundColor = "blue";
}