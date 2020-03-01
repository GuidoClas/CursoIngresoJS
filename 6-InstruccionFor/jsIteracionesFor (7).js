function mostrar()
{

    var numero = prompt("Ingrese un numero");
    var contadorDivisores = 0;
    var nums = "";

    for (var contador = 0; contador <= numero; contador++) {
        if (numero % contador === 0) {
            contadorDivisores++;
            nums+=" "+contador;
            console.log(nums);
        }
        
    }
    alert("Cantidad de divisores: " + contadorDivisores + " Divisores: " + nums);
}//FIN DE LA FUNCIÓN