function contador() {
    alert('it works madafaca')
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



var gente = [{
    nombres: 'rin rin',
    apellido: 'renacuajo'
}, {
    nombres: 'rin rin',
    apellido: 'renacuajo'
}]

function listar(lista, tablaid) {

    var table = document.getElementById('tabla')
    for (var i = 0; i < gente.length; i++) {
        var row = table.insertRow(0)
        var cell0 = row.instertCell(0)
        var cell1 = row.instertCell(1)
        cell0.innerHTML(gente[i].nombres)
        cell1.innerHTML(gente[i].apellido)
    }
};




}

}
