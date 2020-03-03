/*Pedir los siguientes datos hasta que el usuario quiera:
 edad(mayores de 18)
 sexo("f" o "m") y 
 pasaje ("urbano", "nacional" o "internacional");
a) El nombre del hombre con pasaje nacional más joven.
b) El sexo y pasaje del pasajero/a más viejo.
c) La cantidad de mujeres con pasaje urbano o nacional.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres con pasaje internacional.*/

function mostrar()
{

   var respuesta= true;
   var edadMinima=0;
   var edadMaxima=0;
   var primeraVez=true;
   var primeraVezHombreNacional=true;
   var edadMinimaHombreNacional=0;
   var nombreJovenNacional;
   var pasajeViejo;
   var sexoViejo;
   var contadorMujeresUoN=0;
   var acumuladorEdadMujeres=0;
   var promedioEdadMujeres;
   var contadorMujeres=0;
   var contadorHombresInternacional=0;
   var acumuladorEdadHombresInternacional=0;
   var promedioEdadHombresInternacional;
   var hombresInternacional=0;

    do {
        do {
            var nombre = prompt("Ingresa tu nombre");
        } while (!isNaN(nombre) && nombre=="");

        do {
            var edad = propmt("Ingrese la edad");
            edad = parseInt(edad);
        } while (isNaN(edad) || edad < 18);

        do {
            var sexo = prompt("Ingrese el sexo (f o m)")
        } while (sexo != "f" && sexo != "m");

        do {
            var pasaje = prompt("Ingresa tu pasaje (urbano, nacional o internacional)");
        } while (pasaje!="urbano" && pasaje !="nacional" && pasaje !="internacional");

        
        //PuntoA
        if (primeraVezHombreNacional) {
            primeraVezHombreNacional=false;
            edadMinimaHombreNacional=edad;
            
            if (pasaje=="nacional"  && sexo=="m") {
            nombreJovenNacional=nombre;
            }
        }  
            
        //PuntoB
        if (primeraVez) {
            primeraVez=false;
            edad=edadMinima;
            edad=edadMaxima;
        }
        if (edad > edadMaxima) {
            sexoViejo=sexo;
            pasajeViejo=pasaje;
        }
        //PuntoC
        if ((pasaje=="urbano" || pasaje=="nacional") && sexo == "f") {
            contadorMujeresUoN++;
        }
        //PuntoD
        if (sexo=="f") {
            contadorMujeres++;
            acumuladorEdadMujeres+=edad;
        }
        //PuntoE
        if (sexo=="m" && pasaje=="internacional") {
            contadorHombresInternacional++;
            acumuladorEdadHombresInternacional+=edad;
        }
    } while (respuesta);
    //promediomujeres
    if (condition) {
        
    } else {
        
    }
    promedioEdadMujeres = acumuladorEdadMujeres/contadorMujeres;
    //promediohombres
    promedioEdadHombresInternacional = acumuladorEdadHombresInternacional/contadorHombresInternacional;
}