var objetoEmail = document.getElementById("email");
var objetoPrimeiraSenha = document.getElementById("primeiraSenha");
var objetoSegundaSenha = document.getElementById("segundaSenha");
var objetoRegistrar = document.getElementById("registrar");
var objetoAlertasenha = document.getElementById("alertaSenha");


function registrar() {
    if (compararSenhas()){
        alert("cadastro concluido")
    }

}

function compararSenhas() {
    if (objetoPrimeiraSenha.value != "" || objetoSegundaSenha.value != "" ) {
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