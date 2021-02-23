


var objetoEmail = document.getElementById("email");
var objetoSenha = document.getElementById("senha");
var objetoAlertaLogin = document.getElementById("alertaLogin");
var objetoFazerLogin = document.getElementById("fazerLogin");
var objetoLogoff = document.getElementById("logoffApi");



function fazerLogin() {

    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    
    var usuario = { email: email, password: senha }

    var usuarioJson = JSON.stringify(usuario)

    $.ajax({

        url: "http://escolarapp2.herokuapp.com/account/login/",
        contentType: "application/json",
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: usuarioJson,
        success: function (objetoToken) {
            console.log(objetoToken)


            window.localStorage.setItem("key", objetoToken.key)

            var informacao = window.localStorage.getItem("key")

            console.log(informacao)


            var token = window.localStorage.getItem("key")

            if(token != null) {
                window.location.href = "../home.html"
            }
            /*
            window.location.href = "../home.html"
            */
        },
        error: function (error) {
            console.log(error)
        }



    });

}

function validarLogin() {
    if (objetoEmail.value == "" || objetoSenha.value == "") {
        objetoAlertaLogin.innerHTML = "Email ou Senha vazios"
        return false
    } else {
        objetoAlertaLogin.innerHTML = ""
        return true

    }
}

function  logoffApi(){
    window.localStorage.removeItem("key");
    console.log("indo para index")
    window.location.href = "sobrenos.html"
}