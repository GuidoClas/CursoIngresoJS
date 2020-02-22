function mostrar()
{	
	var maximo;
	var minimo;
	var numero;
	var respuesta = true;
	var primeraVez = true;

	
	do {
		numero = prompt("Ingrese un numero");
		while (isNaN(numero)) {
			prompt("Error, ingrese un numero valido");
		}
		numero = parseInt(numero);
		respuesta = confirm("Desea continuar?")

		if (primeraVez) {
			primeraVez=false;
			maximo=numero;
			minimo=numero;
		} else {
			if (numero > maximo) {
				maximo = numero;
			}
			if (numero < minimo) {
				minimo = numero;
			}
		}
	} while (respuesta == true);
	
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
}	
	
	/*
	while(respuesta==true){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		respuesta = confirm("desea continuar?");
		while (isNaN(numero)) {
			numero = prompt("Error, ingrese un numero");
			numero = parseInt(numero);
		}
		if (primeraVez) {
			primeraVez=false;
			minimo=numero;
			maximo=numero;
		} else {
			if (numero > maximo) {
				maximo = numero;
			}
		  }	
			if (numero < minimo) {
			    minimo = numero;
			}
	}


}//FIN DE LA FUNCIÓN
*/