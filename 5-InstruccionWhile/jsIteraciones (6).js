function mostrar()
{
	var numero = confirm("Ingresa 5 números");
	var acumulador = 0;
	var contador = 0;

	do {
		
		numero = prompt("ingresa el numero");
		while (isNaN(numero)) {
			numero = prompt("ingresa un numero valido");
		}
		numero = parseInt(numero);
		
		contador++;
		acumulador += numero;
		console.log(acumulador);
		console.log(numero);

	} while (contador < 5);

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador / 5;
}


/*
var contador=0;
var acumulador=0;
var numero;

while (contador < 5) {
	numero = NaN;
	
	while (isNaN(numero)) {
		
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
	}
	contador++;
	acumulador += numero;
} 

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
*/