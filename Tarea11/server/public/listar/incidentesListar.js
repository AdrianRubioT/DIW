/* bloque que recoge los alumnos y los lista */
$.getJSON("http://localhost:3000/convivencia", function (data) {
  var items = [];
  /* console.log(data); */
  $.each(data, function (key, val) {
    /*   console.log(key); */
    /* <button type="button" class="btn btn-primary">Adrian</button> */
    items.push("<button id='" + val._id + "' class='btn btn-primary botones'>" + val.alumno + "</button>");
    /* items.push("<li id='" + val._id + "' class='list-group-item'>" + val.alumno + "</li>"); */
  });

  /* si esta vacio se llenara un hueco indicando que esta vacio */
  if (items.length == 0) {

    /* console.log("al array esta vacio he entrado"); */
    $("<p/>", {
      /* "class": "", */
      html: "<p>no hay incidencias :)</p>"
    }).appendTo("#divLista");

  } else {

    $("<div/>", {
      "class": "btn-group-vertical mr-2",
      html: items.join("")
    }).appendTo("#divLista");
  }

  var botones = document.getElementsByClassName("botones");
  /* console.log(botones);
  console.log("----------------------------------------------"); */
  $.each(botones, function (key, val) {
    /* console.log(val) */
    val.addEventListener("click", obtenerinformacion, false);
  });

});

function obtenerinformacion(event) {
  /* linea para obtener la id del boton */
  /* console.log(event.target.id); */
  
  
  
  recogerData(event.target.id);

}




function recogerData(idConvivencia) {

  $.getJSON("http://localhost:3000/convivencia/" + idConvivencia, function (data) {
    var items = [];
    console.log(data);
    /* $.each(data, function (key, val) {
        console.log(key);
      items.push("<button id='" + val._id + "' class='btn btn-primary botones'>" + val.alumno + "</button>");
    }); */

  });
}


function limpiarRellenar() {
  
}
