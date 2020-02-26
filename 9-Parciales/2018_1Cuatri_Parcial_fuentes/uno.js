
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = prompt("Ingrese el ancho");
    ancho = parseInt(ancho);

    largo = prompt("Ingrese el largo");
    largo = parseInt(largo);

    perimetro = (largo * 2) + (ancho * 2);
    alert("El perimetro es: " + perimetro);
}
