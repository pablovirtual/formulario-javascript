function validarFormulario() {
   //variables
    var texto;
    var nombre = document.forms["formulario"]["nombre"].value;
    var apellido = document.forms["formulario"]["apellido"].value;
    var genero = document.forms["formulario"]["genero"].value;
    var comentarios = document.forms["formulario"]["comentarios"].value;
    //validaciones del formulario
    if (nombre == null || nombre == "") {
        texto = "<span style = 'color:red;' >Debe de acompletar el campo de nombre</span>";
        document.getElementById("info").innerHTML = texto;
        document.querySelector("input[name = nombre]").style.border = "1px solid red";
        return false;
    } else {
        document.querySelector("input[name = nombre]").style.border = "2px solid mediumseagreen";
    }

    if (apellido == null || apellido == "") {
        texto = "<span style = 'color:red;' >Debe de acompletar el campo de apellido</span>";
        document.getElementById("info").innerHTML = texto;
        document.querySelector("input[name = apellido]").style.border = "1px solid red";
        return false;
    } else {
        document.querySelector("input[name = apellido]").style.border = "2px solid mediumseagreen";
    }

    if (genero == "0") {
        texto = "<span style = 'color:red;' >Debe de acompletar el campo de genero</span>";
        document.getElementById("info").innerHTML = texto;
        document.querySelector("select[name = genero]").style.border = "1px solid red";
        return false;
    } else {
        document.querySelector("select[name = genero]").style.border = "2px solid mediumseagreen";
    }
    //validacion checkbox pais
    var paises = document.getElementsByName("pais");
    var paisSeleccionado = false;
    for(var i = 0; i <paises.length; i++){

        if(paises[i].checked){
            paisSeleccionado = true;
            break;
        }
    }

    if(!paisSeleccionado){

        texto = "<span style='color:red;'> Debe de seleccionar un pais</span>";
        document.getElementById("info").innerHTML = texto;
        return false;

    }

    // fin validacion pais

    if (comentarios == null || comentarios == "") {
        texto = "<span style = 'color:red;' > Debe de acompletar el campo de comentarios</span>";
        document.getElementById("info").innerHTML = texto;
        return false;
    }

    // Si todas las validaciones pasan
    texto = "<span style = 'color:green;'> Formulario enviado correctamente</span>";
    document.getElementById("info").innerHTML = texto;
    return false;
}

//agregar elemntos al DOM



