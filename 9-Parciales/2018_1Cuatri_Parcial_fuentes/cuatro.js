function mostrar()
{
    var numero1 = prompt("Ingrese el primer numero");
    var numero2 = prompt("Ingrese el segundo numero");
    var suma = parseInt(numero1) + parseInt(numero2);

    if (numero1 === numero2) {
        alert(numero1 + numero2);
    } else if (numero1 > numero2) {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        alert(numero1-numero2);
    } else if (suma > 10) {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        alert("La suma es " + suma + " y supero al 10");
    } else if (numero1 < numero2) {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        alert(numero1+numero2);
    }
    
}
