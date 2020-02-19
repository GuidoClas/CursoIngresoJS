function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;
	
	while (respuesta == "si") {
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		respuesta = prompt("Desea continuar?")
			if (numero >= 0) {
				positivo+=numero;
			} 	else {
				negativo*=numero;	
				}
	} 
	
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}