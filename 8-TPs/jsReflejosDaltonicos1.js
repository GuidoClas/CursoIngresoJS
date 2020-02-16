/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/

var tiempoInicio;
var colorRandom = Math.floor(Math.random() * (7-1) + 1);
var input;


function comenzar()
{
    tiempoInicio = Date.now();
    
    console.log(colorRandom)

    switch (colorRandom) {
        case 1:
            input = "azul"
            break;
        case 2:
            input = "verde"
            break;
        case 3:
            input = "amarillo"
            break;
        case 4:
            input = "celeste"
            break;
        case 5:
            input = "marron"
            break;
        case 6:
            input = "rojo"
            break;
        default:
            break;
    }
    document.getElementById("ColorElegido").value = input;
}

function Responder(colorParametro)
{
    
    if (input == colorParametro) {
        var tiempoTardo = Date.now();
        var resultado = (tiempoTardo - tiempoInicio) / 1000;
        alert("Ganaste en " + resultado + " segundos!");
    }

}