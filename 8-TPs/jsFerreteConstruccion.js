/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;
var metros;

largo = document.getElementById("Largo").value;
ancho = document.getElementById("Ancho").value;

perimetro = (parseInt(largo) + parseInt(ancho)) * 2;

metros = perimetro * 3;

alert("Se necesitarán " + metros + " Mts. de alambre.");

}
function Circulo () 
{
var radio;
var perimetro;
var total;

radio = document.getElementById("Radio").value;

perimetro = radio * 2 * 3.141592653589793;

total = perimetro * 3;

alert("Se necesitan " + total + " Mts. de alambre.")
}
function Materiales () 
{
 var bolsaCal;
 var bolsaCemento;
 var metrosCuadrados;
 var largo;
 var ancho;


largo = document.getElementById("Largo").value;
ancho = document.getElementById("Ancho").value;

metrosCuadrados = (parseInt(largo) * parseInt(ancho));

bolsaCal = metrosCuadrados * 3;
bolsaCemento = metrosCuadrados * 2;

alert("Se necesitan " + bolsaCal + " bolsas de Cal y " + bolsaCemento + " bolsas de Cemento.")
}