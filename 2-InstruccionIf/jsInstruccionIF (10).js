function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	//return Math.floor(Math.random() * (max - min)) + min;
	var numero;

	numero = Math.floor(Math.random()* (11 - 0)+ 0);
	
	if (numero >= 4) {
		if (numero > 8) {
			alert(numero + " Excelente")
		} else {
			alert(numero + " Aprobo")
		}
	} else {
		alert(numero + " Desaprobo")
	}
	
console.log(numero);
}//FIN DE LA FUNCIÓN