

$(document).ready(function(){


  $(".form-control").mouseleave(function(){
    var titulopost, contenidopost
    titulopost = $('#titulopost').val()
    contenidopost = $('#contenidopost').val()
    if ((titulopost === undefined || titulopost === '') || (contenidopost === undefined || contenidopost === '')) {
      $('#btnpostear').attr("disabled", true);
    } else {
      $('#btnpostear').attr("disabled", false);
    }
  });

  $("input.form-control").on({ mouseenter:function(){ $("body").css("background-color", "white");},
  mouseleave: function(){$("body").css("background-color", "rgb(217, 217, 217)")},
});

$("#btniniciarsesion").click(function(){
  var email, password
  email = $('#inputEmail').val()
  password = $('#inputPassword').val()
  if ((email === undefined || email === '') || (password === undefined || password === '')) {
    $(".form-control").css("borderColor", "red");
  } else {
    $('.form-control').css("borderColor", "green");
  };
});

});

function postear() {
  var frm = $("#formulario-postear")
  var datosformateados = frm.serializeArray()
  var data = {}
  data.title = datosformateados[0].value
  data.body = datosformateados[1].value
  $.post("http://jsonplaceholder.typicode.com/posts", data)
  .done(function(data) {
    console.log(data)
    alert("Nuevo Post creado: ")
  })
  .error(function(data) {
    alert("Error al crear post")
  })
};

/*function postearAlternativa() {
  var frm = $("#formulario-postear")
  var datosformateados= frm.serializeArray()
  var data = {}
  data.title = datosformateados[0].value
  data.body = datosformateados[1].value

  $.ajax('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',data
  })
  .done(function(data) {
    console.log(data)
    alert("Nuevo Post creado: ")
  })
  .error(function(data) {
    alert("Error al crear post")
  })

}
*/
function cargarpost(){
  var postsUrl = 'http://jsonplaceholder.typicode.com/posts'
  var elementoid
  var ipt = $("#numeroid")
  var id= ipt.serializeArray()[0].value

  $.ajax({
    url: postsUrl,
    method: 'GET'
  })
  .success(function(data) {
    console.log(data)

    $.each(data,function(i,data) {
      if(data.id == id ) {
        elementoid=data
        console.log(elementoid);
        $('#titulopost').val(elementoid.title)
        $('#contenidopost').val(elementoid.body)

      }
    })
  })
  .error(function(msg){
    alert(msg.responseText)
  })
};





function funciona() {
  alert('it works')
};

function sqrt(){
  var numero =prompt("ingrese número","")
  resultado=Math.pow(numero,(0.5))
  alert(resultado)
};


function añadiratabla(){
  var table = document.getElementById('tablapersonas')
  var row = table.insertRow(0)
  var cell0 = row.insertCell(0)
  var cell1 = row.insertCell(1)
  cell0.innerHTML= document.getElementById('nombre').value
  cell1.innerHTML= document.getElementById('apellido').value
};

function validate() {
  var username, password

  username = document.getElementById('inputEmail').value
  password = document.getElementById('inputPassword').value

  if ((username === undefined || username === '') ||
  (password === undefined || password === '')) {
    document.getElementById('error').innerHTML = 'Los campos están vacíos.'
    document.getElementById('error').style.color = "red"
  } else {
    document.getElementById('error').style.color = "green"
    document.getElementById('error').innerHTML = 'Los campos están llenos.'
  };
};


var gente = [{nombres: 'rin rin',apellido: 'renacuajo'}, {nombres: 'azuca',apellido: 'morena'}];
function listar(lista) {
  var table = document.getElementById('tablapersonas')
  var boton = document.createElement("button")
  boton.type = "btn-primary";

  for (var i = 0; i < gente.length; i++) {
    var row = table.insertRow(0)
    var cell0 = row.insertCell(0)
    var cell1 = row.insertCell(1)
    var cell2= row.insertCell(2)
    cell0.innerHTML=lista[i].nombres
    cell1.innerHTML=lista[i].apellido
    cell2.innnerHTML=boton

  }
};
