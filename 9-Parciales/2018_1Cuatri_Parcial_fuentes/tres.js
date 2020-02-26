function mostrar()
{
    var precio = prompt("Ingrese el precio");
    var porcentajeDescuento = prompt("Ingrese el porcentaje de descuento");
    var descuento;

    precio = parseInt(precio);
    porcentajeDescuento = parseInt(porcentajeDescuento);

    descuento = precio - (precio * porcentajeDescuento / 100);

    document.getElementById("elPrecioFinal").value = descuento;
}
