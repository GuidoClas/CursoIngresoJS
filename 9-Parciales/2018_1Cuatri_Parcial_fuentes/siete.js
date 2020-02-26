function mostrar()
{
     var nota = prompt("Ingresa la nota");
     var sexo = prompt("Ingresa el sexo (f o m)");
     var contadorAlumnos = 0;
     
     
     while (contadorAlumnos < 5){
         while (isNaN(nota) || nota > 10 || nota < 0) {
             nota = prompt("Error, ingresa una nota valida");
         }
         while (sexo != "f" && sexo != "m") {
             sexo = prompt("Error, ingresa un sexo valido")
         }
         contadorAlumnos++;
     }
}
