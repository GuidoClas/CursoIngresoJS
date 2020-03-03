function mostrar()
{
     var respuesta;
     var letra;
     var numero;
     var cantidadPares= 0;
     var cantidadImpares= 0;
     var cantidadCeros= 0;
     var contadorPositivos=0;
     var acumuladorPositivos=0;
     var acumuladorNegativos=0;
     var primeraVez= true;
     var numeroMinimo=0;
     var numeroMaximo=0;
     var letraMinima;
     var letraMaxima;
     var promedio;
    

     do {
         numero = prompt("Ingrese un numero");
         numero = parseInt(numero);
         while (isNaN(numero) || numero < -100 || numero > 100) {
             numero = prompt("Ingrese un numero");
             numero = parseInt(numero);
         }
         letra = prompt("Ingrese una letra");
         while (!isNaN(letra)) {
             letra = prompt("Ingrese una letra");
         }

         if (numero % 2 === 0) {
             cantidadPares++;
         } else if (numero != 0){
             cantidadImpares++;
         } 

         if (numero > 0) {
             acumuladorPositivos+= numero;
             contadorPositivos++
         } else if (numero < 0) {
             acumuladorNegativos+=numero;
         } else {
             cantidadCeros++;
         }

         if (primeraVez) {
             primeraVez=false;

             numeroMinimo=numero;
             numeroMaximo=numero;

             letraMinima=letra;
             letraMaxima=letra;
         } else {
             if (numero < numeroMinimo) {
                 numeroMinimo=numero;
                 letraMinima=letra;
             } else if (numero > numeroMaximo) {
                 numeroMaximo=numero;
                 letraMaxima=letra;
             }
         }

         respuesta= confirm("Desea continuar?");
     } while (respuesta);

     document.write("Cantidad de Pares: " + cantidadPares + "<br>");
     document.write("Cantidad de Impares: " + cantidadImpares + "<br>");
     document.write("Cantidad de Ceros: " + cantidadCeros + "<br>");

     if (contadorPositivos==0) {
         promedio=0;
     } else {
         promedio = acumuladorPositivos/contadorPositivos;
     }
     document.write("PromedioPositivos: " + promedio + "<br>");
     document.write("Suma de Negativos:  " + acumuladorNegativos + "<br>");
     document.write("El numero minimo es: " + numeroMinimo + " y la letra es: " + letraMinima +"<br>");
     document.write("El numero maximo es: " + numeroMaximo + " y la letra es: " + letraMaxima+"");
}
