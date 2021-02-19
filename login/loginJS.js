var objetoEmail = document.getElementById("email");
var objetoSenha = document.getElementById("senha");
var objetoAlertaLogin = document.getElementById("alertaLogin");
var objetoFazerLogin = document.getElementById("fazerLogin")


function fazerLogin() {

        var email = objetoEmail.value
        var senha = objetoSenha.value

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

