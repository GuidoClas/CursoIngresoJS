function mostrar()
{	
	var maximo;
	var minimo;
	var numero;
	var respuesta = true;
	var primeraVez = true;

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

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN