function onSubmit(form) {

  var data = JSON.stringify($(form).serializeArray()); //  <-----------
  console.log(data);
  return false; //don't submit
}



function cargar() {

  document.getElementById("leve").addEventListener("click", tFlipFLop, false);
  document.getElementById("grave").addEventListener("click", tFlipFLop, false);

  
}

function tFlipFLop(event) {
  
  /* linea para obtener el id del boton que genera la accion */
  /* console.log(event.originalTarget.id); */

  document.getElementById("nivel").value = event.originalTarget.id;

if (event.originalTarget.id == "leve") {
  $(".card:nth-child(2) * input:checked").each(function( index ){
    this.checked = false;
  });

}else if(event.originalTarget.id == "grave"){
  $(".card:nth-child(1) * input:checked").each(function( index ){
    this.checked = false;
  });
}

  /* $(".card * input") */


  
}






document.addEventListener("DOMContentLoaded", cargar, false);