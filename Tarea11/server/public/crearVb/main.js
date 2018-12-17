function onSubmit(form) {

  var data = JSON.stringify($(form).serializeArray()); //  <-----------
  console.log(data);
  return false; //don't submit
}



function cargar() {

  //document.getElementById("leve").addEventListener("click", tFlipFLop, false);
  //document.getElementById("grave").addEventListener("click", tFlipFLop, false);
  document.getElementById("nivel").addEventListener("change", tFlipFLop, false);
  
}

function tFlipFLop(event) {
  
  /* linea para obtener el id del boton que genera la accion */
  /* console.log(event.originalTarget.id); */

  //document.getElementById("nivel").value = event.originalTarget.id;

  var valorSelect = document.getElementById("nivel").value;


if (valorSelect == "Leve") {
  $(".card:nth-child(2) * input:checked").each(function( index ){
    $("#tipiLeve").toggleClass = "class ''";
    //this.checked = false;
  });

}else if(valorSelect == "Grave"){
  $(".card:nth-child(1) * input:checked").each(function( index ){
    //this.checked = false;
  });
}

  /* $(".card * input") */


  
}






document.addEventListener("DOMContentLoaded", cargar, false);