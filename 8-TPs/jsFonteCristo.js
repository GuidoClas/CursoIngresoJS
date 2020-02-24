/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

function NumerosPares()

{
    var numero = document.getElementById("numero").value; 
    var resultado;
    console.log(numero)
    
    resultado = Math.trunc(parseInt(numero/2));
    alert(resultado);
    
    
}

function NumerosImpares() 

{

    var numero = document.getElementById("numero").value; 
    var resultado;


    if (numero % 2 != 0) {
        resultado = ((parseInt(numero)+1)/2);
        alert(resultado)
    } else {
        resultado = parseInt(numero/2);
        alert(resultado);
    }
    console.log(resultado)
}

function NumerosDivisibles() 

{
    var numero = document.getElementById("numero").value;
    var contadorDivisores = 0;
    var divisor = 0;

    while (divisor <= numero) {
        if (numero % divisor === 0) {
            contadorDivisores++
        }  
        divisor++
    }
    alert(contadorDivisores)
}

function VerificarPrimo() 
{
    var numero = document.getElementById("numero").value;
    var resultado;


}