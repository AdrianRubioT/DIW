$.getJSON( "http://localhost:3000/convivencia", function( data ) {
  var items = [];
  /* console.log(data); */
    $.each( data, function( key, val ) {
/*   console.log(key); */
    items.push( "<li id='" + key + "' class='list-group-item'>" + val.alumno + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});
