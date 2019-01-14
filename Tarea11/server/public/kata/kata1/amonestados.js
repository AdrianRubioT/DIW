var anterior;

function cargar() {

    document.getElementById("alumnos").addEventListener("change", cambiar, false);

}

function cambiar() {

    if (anterior != null) {
        document.getElementById(anterior).style.order = 0;
    }

    var valor = document.getElementById("alumnos").value;

    document.getElementById(valor).style.order = -1;

    anterior = valor;
}




document.addEventListener("DOMContentLoaded", cargar, false);