/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var piedrita = 1;
var papeles = 2;
var tijeras = 3;

function comenzar()
{
    eleccionMaquina = Math.floor(Math.random()* (4 - 1) +1);

    console.log(eleccionMaquina);
        

}
function piedra()
{
    switch (eleccionMaquina) {
        case 3:
            alert("Ganaste!")
            break;
        case 2:
            alert("Perdiste!")
            break;
        default:
            alert("Empate!")
            break;
}	

}
function papel()
{
    switch (eleccionMaquina) {
        case 1:
            alert("Ganaste!")
            break;
        case 3:
            alert("Perdiste!")
            break;
        default:
            alert("Empate!")
            break;
}

}
function tijera()
{
    switch (eleccionMaquina) {
        case 2:
            alert("Ganaste!")
            break;
        case 1:
            alert("Perdiste!")
            break;
        default:
            alert("Empate!")
            break;
}	

}//FIN DE LA FUNCIÓN