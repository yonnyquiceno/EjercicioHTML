function funciona() {
    alert('it works')
};

function sqrt(){
var numero =prompt("ingrese número","")
resultado=Math.pow(numero,(0.5))
alert(resultado)
}











function añadiratabla(){
  var table = document.getElementById('tablapersonas')
  var row = table.insertRow(0)
  var cell0 = row.insertCell(0)
  var cell1 = row.insertCell(1)
  cell0.innerHTML= document.getElementById('nombre').value
  cell1.innerHTML= document.getElementById('apellido').value
}

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
