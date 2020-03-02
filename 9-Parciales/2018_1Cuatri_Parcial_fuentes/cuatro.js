function mostrar()
{
    var numero1 = prompt("Ingrese el primer numero");
    var numero2 = prompt("Ingrese el segundo numero");
    

    if (numero1 === numero2) {
        alert(numero1 + numero2);
    } else if (numero1 < numero2) {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        var suma = numero1 + numero2;
        alert(suma);
            if (suma > 10) {
                alert("La suma es " + suma + " y supera al 10");
            }
    } else if (numero1 > numero2) {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        var resta = numero1-numero2;
        alert(resta);
    } 
    
}
