function mostrar()
{
//tomo la hora  
var laHora = document.getElementById('hora').value;

//alert (laHora);
	
switch (parseInt(laHora)) {
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        alert("Es la mañana!")                
        break;

    default:
        break;
}	



}//FIN DE LA FUNCIÓN