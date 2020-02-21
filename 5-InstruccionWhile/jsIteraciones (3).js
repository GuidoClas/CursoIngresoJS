function mostrar()
{
    var clave = prompt("ingrese la clave");
    var intentos = 0;

    do {
        intentos++;
        if (intentos == 3) {
            break;
        }   
        clave = prompt("Error, ingresa nuevamente la clave")
    } while (clave != "utn750");

    if (clave == "utn750") {
        alert("Bienvenido!");
    } else {
        alert("Agotaste tus intentos!");      
    }
}

/*
var clave = prompt("ingrese el número clave.");
    var intentos = 0;

    while (clave != "utn750") {
        intentos++
            if (intentos == 3) {
            break;
        }
        clave = prompt("Error, ingrese nuevamente la clave.");
    }
    if (clave == "utn750") {
        alert("Bienvenido!");
    }       else {
                alert("Llegaste al maximo de intentos!")
    }
*/