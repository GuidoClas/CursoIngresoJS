function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Julio":
    case "Agosto":
        alert("Abrigate man")
        break;
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Se viene el invierno")
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert("Ya paso el frio")
        break;    

    default:
        break;
}




}//FIN DE LA FUNCIÓN