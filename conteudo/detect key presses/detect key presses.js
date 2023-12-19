
const minhaDiv = document.getElementById("minhaDiv");

window.addEventListener("keydown", mover);

let x = 0;
let y = 0;

function mover(event){
    switch(event.key){
        case "ArrowDown":
            y+=5;
            minhaDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=5;
            minhaDiv.style.top = y + "px";
            break;
        case "ArrowLeft":
            x-=5;
            minhaDiv.style.left = x + "px";
            break;
        case "ArrowRight":
            x+=5;
            minhaDiv.style.left = x + "px";
            break;
        default:
            break;
    }
}