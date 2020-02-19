function mostrar()
{
	var intentos = 0;
	var numero = prompt("ingrese un número entre 0 y 10.");

		while (parseInt(numero) < 0 || parseInt(numero) > 9) {
			intentos++
			if (intentos == 3) {
				document.getElementById("Numero").value = "Alcanzaste el maximo de intentos"
				break;
			}
			numero = prompt("El numero correcto no es correcto, ingrese nuevamente");
		} 
		if (numero >= 0 && numero <= 9) {
			document.getElementById("Numero").value = "El numero ingresado cumple!"
		}
}	