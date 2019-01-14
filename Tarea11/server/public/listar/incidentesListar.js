/* bloque que recoge los alumnos y los lista */
$.getJSON("http://localhost:3000/convivencia", function (data) {
  var items = [];
  /* console.log(data); */
  $.each(data, function (key, val) {
    /*   console.log(key); */
    /* <button type="button" class="btn btn-primary">Adrian</button> */
    items.push("<button id='" + val._id + "' class='btn  botones normalColor listaColor'>" + val.alumno + "</button>");
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

  var camposRellenar = document.getElementsByClassName("rellenar");


  /* linea para obtener la id del boton */
  /* console.log(event.target.id); */
  limpiarRellenar();
  recogerData(event.target.id);




  /* funcion que limpia todo los campos a rellenar */
  function limpiarRellenar() {
    $.each(camposRellenar, function (key, val) {
      /* con val obtenemos el elemto */
      /* console.log(val); */
      val.innerText = "";
    })
  }


  /* funcion que recoge los datos */
  function recogerData(idConvivencia) {
    $.getJSON("http://localhost:3000/convivencia/" + idConvivencia, function (data) {
      /* console.log(data); */
      rellenarData(data);
    });

  }

  /* funcion que rellenara los campos  */
  function rellenarData(datos) {


    //console.log(datos);
    camposRellenar[0].innerText = datos.alumno;
    camposRellenar[1].innerText = datos.grupo;
    camposRellenar[2].innerText = datos.profesor;
    camposRellenar[3].innerText = datos.fechaIncidente;
    camposRellenar[4].innerText = datos.descripcionIncidente;

    medidasCorrectoras(datos);
    function medidasCorrectoras(datos) {

      var padre = document.getElementById("listaMedidasCorrectoras");

      console.log(datos);
      if (!datos.castigo1) {

        //<li class="list-group-item">Retirada d'aparells electrònics (aparell)</li>
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        li.appendChild(document.createTextNode(castigo1()));
        padre.appendChild(li);
      }

      if (!datos.castigo2) {

        var li2 = document.createElement("li");
        li2.setAttribute("class", "list-group-item");
        li2.appendChild(document.createTextNode(castigo2()));
        padre.appendChild(li2);


      }

      //camposRellenar[5].innerText = datos.alumno;
      //camposRellenar[6].innerText = datos.alumno;
      //camposRellenar[7].innerText = datos.alumno;
      /* camposRellenar[0].innerText = datos[0]; */

    }



  }



}
