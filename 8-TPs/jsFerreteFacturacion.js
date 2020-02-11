/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

/* Precios:
150 - 100 - 40
*/
var producto1;
var producto2;
var producto3;

function Sumar () 
{
   var total;

    producto1 = document.getElementById("PrecioUno").value;
    producto2 = document.getElementById("PrecioDos").value;
    producto3 = document.getElementById("PrecioTres").value;

    total = (parseInt(producto1) + parseInt(producto2) + parseInt(producto3))

    alert(total)
}
function Promedio () 
{
   var promedio;

   producto1 = document.getElementById("PrecioUno").value;
   producto2 = document.getElementById("PrecioDos").value;
   producto3 = document.getElementById("PrecioTres").value;

   promedio = (parseInt(producto1) + parseInt(producto2) + parseInt(producto3)) / 3;

   alert(promedio);
}
function PrecioFinal () 
{
var suma;
var aumento;
var resultado;

    producto1 = document.getElementById("PrecioUno").value;
    producto2 = document.getElementById("PrecioDos").value;
    producto3 = document.getElementById("PrecioTres").value;

suma = (parseInt(producto1) + parseInt(producto2) + parseInt(producto3));

aumento = suma * 21 / 100;

resultado = suma + aumento;

alert(resultado);
}