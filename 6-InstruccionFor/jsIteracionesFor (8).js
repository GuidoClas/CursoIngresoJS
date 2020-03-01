function mostrar()
{

    var numero = prompt("ingrese un numero");
    var contadorDivisores = 0;
    
    
    for (var contador = 0; contador <= numero; contador++){
        if (numero % contador===0) {
            contadorDivisores++;
            
        }
        
    }
    
    if (contadorDivisores===2) {
        alert("El numero es primo");
    } else {
        alert("El numero no es primo");
    }
    

}//FIN DE LA FUNCIÓN