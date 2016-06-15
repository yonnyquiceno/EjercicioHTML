function contador(){
 alert('it works madafaca')
};



function llenarcampos(){
 document.getElementById('nombres').value="it works mamafaca"
}


function validate () {
  var username, password

  username = document.getElementById('inputEmail').value
  password = document.getElementById('inputPassword').value

  if ((username === undefined || username === '')
                  || (password === undefined || password === '')) {
    document.getElementById('error').innerHTML = 'Username or Password are invalid !.'
    document.getElementById('error').style.color = "red"
  } else {
    document.getElementById('error').style.color = "green"
    document.getElementById('error').innerHTML = 'Username and Password are valid !.'
  };
};
