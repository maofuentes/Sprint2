function ingreso() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if (usuario === clave) {
        // Si los textos son iguales, envia a producto.html
        window.location.href = "privado/index.html";
    } else {
        // Si los textos no son iguales, muestra alerta
        document.getElementById("tomadatos").reset();
        alert("Usuario y/o clave Incorrecta");
    }
}

function registro() {
    //Esta función sólo revisa si todas las formas presentes en el registro de
    //usuario fueron rellenadas y, si todas tienen un valor, entonces envía a la página
    //de privado/index.html

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var rut = document.getElementById("rut").value;
    var prevision = document.getElementById("prevision").value;
    var clave = document.getElementById("clave").value;

    //Si todos los datos fueron rellenados, envía a producto.html
    //Si falta al menos alguna forma, muestra un mensaje

    if ((nombre === "") || (apellido === "") || rut === "" || prevision === "" || clave === "") {
        alert("Uno o más elementos no han sido ingresados");
    } else {
        window.location.href = "privado/index.html"
    }
}