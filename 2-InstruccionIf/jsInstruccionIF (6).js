function mostrar()
{
//tomo la edad  
    var edad;

    edad = document.getElementById("edad").value;

        if (edad <=17) {
                if (edad < 13) {
                alert("Usted es menor")
            }   
                else {
                alert("Usted es adolescente")
            }
        }
        else {
            alert("Usted es mayor")
        }
        

}//FIN DE LA FUNCIÓN