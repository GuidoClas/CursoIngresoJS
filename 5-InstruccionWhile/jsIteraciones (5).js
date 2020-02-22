function mostrar()
{
    var sexo = prompt("Ingrese sexo f ó m")
    
    do {
        sexo = prompt("El sexo es incorrecto, ingrese uno nuevamente")
        break;
    } while (sexo != "f" || sexo != "m");
    if (sexo == "f" || sexo == "m") {
        document.getElementById("Sexo").value = sexo;
    }
}


/*
var sexo = prompt("ingrese f ó m .");

while (sexo != "f" || sexo != "m") {
    sexo = prompt("El sexo es incorrecto, ingrese f ò m");
    break;
}
if (sexo == "m" || sexo == "f") {
    document.getElementById('Sexo').value=sexo;

}
*/