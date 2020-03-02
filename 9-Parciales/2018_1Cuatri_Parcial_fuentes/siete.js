function mostrar()
{
    var nota = prompt("Ingresa la nota");
    var sexo = prompt("Ingresa el sexo (f o m)");
    var contadorAlumnos = 0;
    var acumuladorNota = 0;
    var promedio;

    while (contadorAlumnos < 5){
        while (isNaN(nota) || nota > 10 || nota < 0) {
             nota = prompt("Error, ingresa una nota valida");
        }
        while (sexo != "f" && sexo != "m") {
             sexo = prompt("Error, ingresa un sexo valido")
        }
        nota = prompt("ingresa la siguiente nota");
        sexo = prompt("ingresa el siguiente sexo");
        nota = parseInt(nota);
        contadorAlumnos++;
        acumuladorNota+=nota
        console.log("acumulador: " + acumuladorNota);
        console.log("Nota: " + nota);
    }
    promedio = acumuladorNota/5;
    alert(promedio);
    
}
