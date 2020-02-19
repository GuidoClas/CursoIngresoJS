function mostrar()
{
	var numero;
	var contador=0;
	var respuesta=true;
	var sumaNegativos= 0;
	var sumaPositivos= 0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia; 

	while(respuesta){
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		respuesta = confirm("Desea continuar?");
		
		while (isNaN(numero)) {
			numero = prompt("Error, ingrese un numero");
			numero = parseInt(numero);
			break;
		}
		if (numero > 0) {
			//punto2
			sumaPositivos+=numero;
			//punto3
			contadorPositivos++;
			//punto7
			
		} 
		else if (numero < 0) {
			//punto1
			sumaNegativos+=numero;
			//punto4
			contadorNegativos++;
			//punto8
			
		} 	
		else {
			//punto5
			contadorCeros++;
		} 	
		if (numero % 2 == 0) {
			//punto6
				contadorPares++;
		}
	}	

	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferencia = sumaPositivos + sumaNegativos;

	console.log(sumaNegativos);
	console.log(sumaPositivos);
	console.log(contadorPositivos);
	console.log(contadorNegativos);
	console.log(contadorCeros);
	console.log(contadorPares);
	console.log(promedioPositivos);
	console.log(promedioNegativos);
	console.log(diferencia);

	document.write("Suma positivos: " + sumaPositivos + "</br>")
	document.write("Suma Negativos: " + sumaNegativos + "</br>")
	document.write("Contador Positivos: " + contadorPositivos + "</br>")
	document.write("Contador Negativos: " + contadorNegativos + "</br>")
	document.write("Contador Ceros: " + contadorCeros + "</br>")
	document.write("Contador Pares: " + contadorPares + "</br>")
	document.write("Promedio Positivos: " + promedioPositivos + "</br>")
	document.write("Promedio Negativos: " + promedioNegativos + "</br>")
	document.write("Diferencia: " + diferencia + "</br>")

	
}