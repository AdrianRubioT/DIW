/* js para que contendra los castigos y las tipificaciones con texto para traducirlo de la base de datos que estan en booleano */

/* var y = "holamundo";
function hola() {
    return y;
} */

function castigo1() {
    return "Compareixença davant el cap d'estudis/director";
}

function castigo2(aparell) {
    return "Retirada d'aparells electrònics " + aparell;
}

function castigo3(diaInicio, diaFinal) {
    return "Privació del temps de recreació els dies: " + diaInicio + " fins a " + diaFinal;
}

function castigo4(tarea, dies, horario ) {
    return "Realizació de les següents tasques educadores: " + tarea + " els dies " + dies + " i amb l'orari " + horario;
}

function castigo5(dies) {
    return "Suspenció del dret de l'asistència en activitats extraescolars i complementàries des de " + dies;
}