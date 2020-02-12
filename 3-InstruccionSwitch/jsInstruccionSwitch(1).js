function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Enero":
        alert("Que comiences bien el año!");
        break;
    case "Marzo":
        alert("A clases!");
        break;
    case "Julio":
        alert("Se vienen vacaiones!");
        break;
    case "Diciembre":
        alert("Llego el verano");
        break;        
    default:
        break;
}



}//FIN DE LA FUNCIÓN