function mostrar()
{

var contador=0;
var acumulado=0;
var respuesta=true;
var numero;

do {
	numero = prompt("ingrese un numero");
	numero = parseInt(numero);
	contador++;
	acumulado+=numero;
	respuesta = confirm("Desea continuar?");
	
} while (respuesta == true);


document.getElementById('suma').value=acumulado;
document.getElementById('promedio').value=acumulado/contador;

}
/*
var contador=0;
var acumulador=0;
var respuesta=true;
var numero;


while (respuesta == true) {
	numero = prompt("ingrese un numero");
	numero = parseInt(numero);
	contador++
	acumulador+= numero;
	respuesta = confirm("desea continuar?");
}
*/