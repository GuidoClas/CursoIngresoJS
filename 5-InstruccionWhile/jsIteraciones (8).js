function mostrar()
{

	var numero; 
	var respuesta = true;
	var productoNegativo = 1;
	var sumaPositivos = 0;
	
	do {
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		respuesta = confirm("Desea continuar?")
		if (numero > 0) {
			sumaPositivos+=numero;
		} else {
			productoNegativo*=numero;
		}
	} while (respuesta == true);


	document.getElementById('suma').value=sumaPositivos;
	document.getElementById('producto').value=productoNegativo;

}

/*
var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta=true;
	var numero;
	
	while (respuesta == true) {
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		respuesta = prompt("Desea continuar?")
			if (numero >= 0) {
				positivo+=numero;
			} 	else {
				negativo*=numero;	
				}
	} 
*/