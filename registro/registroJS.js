var objetoEmail = document.getElementById("email");
var objetoPrimeiraSenha = document.getElementById("primeiraSenha");
var objetoSegundaSenha = document.getElementById("segundaSenha");
var objetoRegistrar = document.getElementById("registrar");
var objetoAlertasenha = document.getElementById("alertaSenha");


function registrar() {
    if (compararSenhas()) {
        alert("cadastro concluido")
        criarUsuario(objetoPrimeiraSenha.value, objetoEmail.value)

    }

}

function compararSenhas() {
    if (objetoPrimeiraSenha.value != "" || objetoSegundaSenha.value != "") {
        if (objetoPrimeiraSenha.value != objetoSegundaSenha.value) {
            objetoAlertasenha.innerHTML = "Senhas nao sao iguais"
            return false;
        } else {
            objetoAlertasenha.innerHTML = ""
            return true
        }

    }
    return false;
}


function criarUsuario(senha, email) {
    var usuario = { password: senha, email: email }
    console.log(usuario)

    var usuarioJson = JSON.stringify(usuario)

    //window.location.href = "../login/login.html"


    $.ajax({

        url: "http://escolarapp2.herokuapp.com/account/register/",
        contentType: "application/json",
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: usuarioJson,
        success: function (resposta) {
            console.log(resposta)

            window.localStorage.setItem("key", resposta.key)
             

            /*
            window.location.href = "../home.html"
            */
        },
        error: function (error) {
            console.log(error)
        }



    });



}





























































/*
function compararSenhas() {
    if (objetoSegundaSenha.value != "" || objetoPrimeiraSenha.value != "") {
        if (objetoPrimeiraSenha.value != objetoSegundaSenha.value) {
            objetoAlertasenha.innerHTML = "senhas nao sao iguais"

            return false;
        }else{
            objetoAlertasenha.innerHTML = ""

            return true
        }
    }

    return false;

}

*/