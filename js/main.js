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