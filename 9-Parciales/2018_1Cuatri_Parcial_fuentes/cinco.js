function mostrar()
{
    var planeta = prompt("Ingresa un planeta del sistema solar");

    switch (planeta) {
        case "mercurio":
        case "venus":
            alert("Aca hace mas calor")     
            break;
        case "tierra":
            alert("Aca vivimos");
            break;
        case "jupiter":
        case "urano":
        case "neptuno":
        case "saturno":
        case "marte": 
            alert("Aca hace mas frio");
            break;    
        default:
            alert("No es un planeta valido");
            break;
    }
}
