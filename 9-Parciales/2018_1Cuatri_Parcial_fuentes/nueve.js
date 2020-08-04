function mostrar()
{
    //arranco declarando variables que sé que seguro voy a usar, como marca, peso, temp y respuesta.
    let marca;
    let peso = 0;
    let temperatura = 0;
    let respuesta;

    let cantidadTemperaturasPares = 0;
    let flagProductoMasPesado = 0;
    let flagProductoMenosPesado = 0;
    let productoMasPesado = 0;
    let productoMenosPesado = 0;
    let marcaDelProductoMasPesado;
    let cantidadProductosACeroGrados = 0;
    let acumuladorPeso = 0;
    let cantidadPesos = 0;
    let promedioPeso = 0;

    //Valido que el usuario siga ingresando, hasta que ponga un no(false) en el confirm.
    do {

        //Valido marca, isNaN es is Not a Number, o sea no es un numero, y si lo niego, si lo es, por eso valido marca asi, ya que es un string y yo no quiero numeros.
        //Se leeria, mientras me pongas un numero, te voy a seguir pidiendo la marca.
        do {
            marca = prompt("Ingrese la marca(solo letras): ");
        } while (!isNaN(marca));

        //En este caso valido lo contrario, si lo que me ingresó is Not a Number, o sea que no es un numero, y yo necesito un numero para el peso.
        do {
            peso = prompt("Ingrese el peso (entre 1 y 100): ");
            peso = parseInt(peso); //No te olvides de parsearlo sino te queda como string.

        } while (isNaN(peso) && peso >= 1 && peso <= 100);

            acumuladorPeso += peso;
            cantidadPesos++;

        //En este caso valido lo mismo que en peso, si lo que me ingresó is Not a Number, o sea que no es un numero, y yo necesito un numero para la temperatura.
        do {
            temperatura = prompt("Ingresa la temperatura de almacenamiento(entre -30 y 30): ");
            temperatura = parseInt(temperatura);//No te olvides de parsearlo sino te queda como string.
        } while (isNaN(temperatura) && temperatura >= -30 && temperatura <= 30);


        // (A) Temperaturas pares, si no tiene resto dividiendolo entre 2, es par.
        if(temperatura % 2 == 0)
        {
            cantidadTemperaturasPares++; //Cada vez que me ingresen una temperatura par, voy a sumar esta variable.
        }

        // (B) Marca del producto mas pesado. En este caso me voy a preguntar si la bandera(flag, lo utilizo para ver si es la primera vez que entro aca, o si nunca entro) sigue siendo 0 (o sea que es la primera vez que entra)
        //o me voy a preguntar si el peso que me ingresaron es mas grande que registro que yo tengo del producto mas pesado, en ese caso entraria, ya que efectivamente es el mas pesado hasta el momento.

        //Para que se entienda mejor, si es la primera vez que me ingresan un peso, entonces ese va a ser el mas pesado (1era condicion),
        // y si no es la primera vez, voy a testear si es mas pesado que el que ya tengo como "mas pesado".

        if(flagProductoMasPesado == 0 || peso > productoMasPesado)
        {
            productoMasPesado = peso; //mi nuevo producto mas pesado, pasa a ser el actual peso que me ingresaron, ya que se comprobo que era mas pesado que los anteriores.
            //Teniendo ya el mas pesado, puedo averiguar de que marca es (que es lo que nos pide el enunciado), y lo hago asignandole la marca a mi nueva variable "marcaDelProductoMasPesado".
            marcaDelProductoMasPesado = marca;
            flagProductoMasPesado = 1; //cambio la variable de control que uso aca, o sea que la primera vez que ingrese, el flag va a ser == 0, y cuando salga del if va a ser == 1.
        }

        // (E)Hago lo mismo para averiguar el peso minimo.
        if(flagProductoMenosPesado == 0 || peso < productoMenosPesado)
        {
            productoMenosPesado = peso; //mi nuevo producto menos pesado, pasa a ser el actual peso que me ingresaron, ya que se comprobo que era menos pesado que los anteriores.
            flagProductoMenosPesado = 1; //cambio la variable de control que uso aca, o sea que la primera vez que ingrese, el flag va a ser == 0, y cuando salga del if va a ser == 1.
        }


        // (C) La cantidad de productos que se conservan a menos de 0 grados. 
        if(temperatura < 0)
        {
            cantidadProductosACeroGrados++; //Cada vez que me ingresen una temperatura < 0, voy a sumar esta variable.
        }



        //Hago un confirm para que me diga si SI o NO, quiere seguir ingresando, y lo guardo en respuesta, para luego validar con el do while, si no quiere, se rompe la iteracion, si quiere, va a seguir siendo true.
        respuesta = confirm("Desea seguir ingresando?");
    } while (respuesta == true);

    
    // (D) El promedio del peso de todos los productos. Esto acordate siempre que no podes averiguarlo adentro de un loop, porque vos necesitas un promedio, entonces lo vas a tener que calcular
    ////// una vez que ya hayas obtenido todos los datos y se haya roto el loop. 
    //En el loop si vas a tener que hacer un acumulador del peso de cada producto y dividirlo por la cantidad de productos. 
    promedioPeso = acumuladorPeso / cantidadPesos;

    // Al final muestro todo por document.write como pide
    document.write("Cantidad de temperaturas pares: " + cantidadTemperaturasPares + "<br>");
	document.write("Marca producto más pesado: " + marcaDelProductoMasPesado + "<br>");
	document.write("Cantidad de productos conservados a menos de 0 grados: " + cantidadProductosACeroGrados + "<br>");
	document.write("Promedio del peso: " + promedioPeso + "<br>");
	document.write("Peso máximo: "+ productoMasPesado + "<br>");
	document.write ("Peso minimo: "+ productoMenosPesado + "<br>");

}
