function mostrar()
{
	var intentos = 0;
	var numero = prompt("Ingrese un numero del 0 al 9");
	
	do {
		intentos++
		if (intentos == 3) {
		break;
		} 
		numero = prompt("Volve a ingresar un numero valido");
	} 	while (parseInt(numero) < 0 || parseInt(numero) > 9);

	if (numero >= 0 && numero <=9) {
		document.getElementById("Numero").value = "El numero ingresado es valido!"
	} else {
		document.getElementById("Numero").value = "Alcanzaste el maximo de intentos";
	}

}	
/*
var intentos = 0;
var numero = prompt("ingrese un número entre 0 y 9.");

	while (parseInt(numero) < 0 || parseInt(numero) > 9) {
		intentos++
		if (intentos == 3) {
			document.getElementById("Numero").value = "Alcanzaste el maximo de intentos"
			break;
		}
		numero = prompt("El numero no es correcto, ingrese nuevamente");
	} 
	if (numero >= 0 && numero <= 9) {
		document.getElementById("Numero").value = "El numero ingresado cumple!"
	}
*/