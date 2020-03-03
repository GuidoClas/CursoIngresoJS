function mostrar()
{
    
    var contadorAlumnos = 0;
    var acumuladorNota = 0;
    var promedio;
    var notaMinima =11;
    var sexoNotaMinima;
    var contadorVarones=0;

    while (contadorAlumnos < 5){
        contadorAlumnos++;
        do {
            var nota = prompt("Ingresa la nota");
            nota = parseInt(nota);
            console.log(nota);
        } while (isNaN(nota) || nota > 10 || nota < 0) 
             
        do {
            var sexo = prompt("Ingresa el sexo (f o m)");
            console.log(sexo);
        } while (sexo != "f" && sexo != "m") 

        //PuntoA     
        acumuladorNota+=nota
        
        //PuntoB
        if (contadorAlumnos == 1) {
            nota = notaMinima;
            sexo = sexoNotaMinima;
        } else if (nota < notaMinima) {
            notaMinima=nota;
            sexoNotaMinima=sexo;
        }
        //PuntoC
        if (nota >= 6 && sexo == "m") {
            contadorVarones++
        }
    }
    promedio = acumuladorNota/5;
    alert(promedio);
    alert("La nota minima fue: " + notaMinima + " y el sexo fue" + sexoNotaMinima);
    alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + contadorVarones)
}
