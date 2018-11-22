$.getJSON( "http://localhost:3000/convivencia", function( data ) {
  var items = [];
   /* console.log(data); */ 
    $.each( data, function( key, val ) {
/*   console.log(key); */
    items.push( "<li id='" + val._id + "' class='list-group-item'>" + val.alumno + "</li>" );
  });
 
/* si esta vacio se llenara un hueco indicando que esta vacio */
if (items.length == 0) {
  /* console.log("al array esta vacio he entrado"); */
  items.push("<li class=\"list-group-item\">No hay alumnos</li>");
}

  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});


