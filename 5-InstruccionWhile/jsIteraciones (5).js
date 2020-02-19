function mostrar()
{

    var sexo = prompt("ingrese f ó m .");

    while (sexo != "f" || sexo != "m") {
        sexo = prompt("El sexo es incorrecto, ingrese f ò m");
        break;
    }
    if (sexo == "m" || sexo == "f") {
        document.getElementById('Sexo').value=sexo;
    
    }

}//FIN DE LA FUNCIÓN