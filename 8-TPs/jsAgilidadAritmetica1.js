/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

var respuesta;
var operacion;


function comenzar()
{
    var caso = Math.floor(Math.random()* (5 - 1) +1);
    var numero1 = Math.floor(Math.random()* (10 - 1)+ 1);
    var numero2 = Math.floor(Math.random()* (10 - 1) + 1);	
    console.log(caso);

    document.getElementById("PrimerNumero").value = numero1;
    document.getElementById("SegundoNumero").value = numero2;


    switch (caso) {
        case 1:
            document.getElementById("Operador").value = "+";
            operacion = numero1 + numero2;
            break;
        case 2:
            document.getElementById("Operador").value = "-";
            operacion = (numero1 - numero2);
            break;
        case 3:
            document.getElementById("Operador").value = "*";
            operacion = (numero1 * numero2);
            break;
        case 4:
            document.getElementById("Operador").value = "/";
            operacion = (numero1 / numero2)            
            break;

        default:
            break;
    }
    console.log(operacion)
}

function Responder()
{
    respuesta = parseInt(document.getElementById("Respuesta").value);

    if (respuesta == operacion) {
        alert("Usted acertó!");
    } else {
        alert("Usted se equivocó!");
    }
}
//FIN DE LA FUNCIÓN
