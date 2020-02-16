/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/

var tiempoInicio;
var colorRandom;
var azul ="Azul";
var verde ="Verde"
var amarillo ="Amarillo"
var celeste ="Celeste"
var marron ="Marron"
var rojo ="Rojo"
function comenzar()
{
colorRandom = Math.floor(Math.random() * (7-1) + 1); 
document.getElementById("ColorElegido").value = colorRandom;
console.log(colorRandom);

switch (colorRandom) {
    case 1:
        document.getElementById("ColorElegido").value = "Azul"
        break;
    case 2:
        document.getElementById("ColorElegido").value = "Verde"
        break;
    case 3:
        document.getElementById("ColorElegido").value = "Amarillo"
        break;
    case 4:
        document.getElementById("ColorElegido").value = "Celeste"
        break;
    case 5:
        document.getElementById("ColorElegido").value = "Marron"
        break;
    case 6:
        document.getElementById("ColorElegido").value = "Rojo"
        break;
    default:
        break;
}
}

function Responder(colorParametro)
{

    
}
    
    
