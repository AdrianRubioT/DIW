/* bloque que recoge los alumnos y los lista */
$.getJSON("http://localhost:3000/convivencia", function (data) {
  var items = [];
  /* console.log(data); */
  $.each(data, function (key, val) {
    /*   console.log(key); */
    /* <button type="button" class="btn btn-primary">Adrian</button> */
    items.push("<button id='" + val._id + "' class='btn btn-primary'>" + val.alumno + "</button>");
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

    $.each(items, function (key, val) {
      /* console.log(key); */
      /* console.log(val); */
      val.on("click", holamundo, false);

      /* click, function () {
        alert("hola mundo");
      } */
    });



    $("<div/>", {
      "class": "btn-group-vertical mr-2",
      html: items.join("")
    }).appendTo("#divLista");
  }


});

function holamundo() {
  alert("hola mundo");
}
