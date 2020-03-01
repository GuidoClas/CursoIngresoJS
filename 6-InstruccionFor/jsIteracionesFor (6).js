function mostrar()
{
    var numero=prompt("Ingrese un numero")
    var contadorPares = 0;
    var nums="";
    //contador de numeros pares del 0 a X
    for (var contador = 1; contador <= numero ; contador++) {
        if (contador % 2 === 0) {
            contadorPares++
            console.log(contadorPares);
            nums+=" "+contador;
            console.log(nums);
        }
        
    }
    alert(contadorPares);
    //numeros pares que hay del 0 a X
    for (var numerosPares=2; numerosPares <= numero; numerosPares=numerosPares+2){
        //document.write("Numero Par: " + numerosPares + "</br>");
    }
    alert(nums);  
    
    

}