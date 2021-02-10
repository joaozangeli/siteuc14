var objetoErroNome = document.getElementById("erroNome");
var objetoErroIdade = document.getElementById("erroIdade");
var objetoErroNaturalidade = document.getElementById("erroNaturalidade");
var objetoNome = document.getElementById("nome");
var objetoErroAntecedentes = document.getElementById("erroAntecedentes");


function cadastrar() {

    var objetoIdade = document.getElementById("idade");
    var objetoNaturalidade = document.getElementById("naturalidade");
    var objetoAntecedentes = document.getElementById("antecedentes");

    if (validarNome(objetoNome.value)) {
        if (validarIdade(objetoIdade.value)) {
            if (validarNaturalidade(objetoNaturalidade.value)) {
                if(validarAntecedentes(objetoAntecedentes.checked)) {

                }

            }
        }
    }
}








function validarNome() {
    if (objetoNome.value != "") {
        return true
    }

    objetoErroNome.innerHTML = "nome nao pode ser vazio";


}

function validarIdade(idade) {
    if (idade >= 18) {
        objetoErroIdade.innerHTML = "";

        return true;
    }
    objetoErroIdade.innerHTML = "Idade insuficiente para o cadastro";

    return false;

}

function validarNaturalidade(naturalidade) {
    if (naturalidade === "brasileiro") {
        return true
    }



    objetoErroNaturalidade.innerHTML = "Naturalidade não aceita."
    return false;

}



function validarAntecedentes(antecedentes) {
    if (antecedentes) {
        objetoErroAntecedentes.innerHTML = "Voce possui antecedentes criminais."
        return false;

    }

    
    return true;
}

































/*
OPERACOES SIMPLES


var primeiroNumero = 2;
var segundoNumero = 4;

var resultado;


resultado = primeiroNumero + segundoNumero;

console.log("soma: " + resultado)

resultado = segundoNumero - primeiroNumero;

console.log("subtracao: " + resultado)

resultado = segundoNumero / primeiroNumero;

console.log("divisao: " + resultado)

resultado = primeiroNumero * segundoNumero;

console.log("multiplicacao: " + resultado);

var media = (primeiroNumero + segundoNumero) / 2;
console.log("media: " + media)
*/


/*
ARRAYS

var listaDeNomes = ["joao", 100, "matheus"];
console.log(listaDeNomes)

listaDeNomes[1] = 10;
console.log(listaDeNomes)

listaDeNomes[0] = "lucas";
console.log(listaDeNomes)



var solicitacao = {
    data: "04/05/2021",
    nome: "joao",
    status: "aberto"
}
console.log(solicitacao)

var computador = {
    cor: "preto",
    modelo: "lenovo",
    processador: "amd"
}
console.log(computador)

console.log(computador.processador)
console.log(computador.cor)
console.log(computador.modelo)

var idadePai = 40;
var idadeFilho = 14;
var idadeMae = 39;

if (idadeFilho >= 14) {
    console.log("A idade do filho é maior ou igual que 14 anos")
} else {
    console.log("a idade do filho é menor que 14 anos")
}


if (idadeFilho != 14) {
    console.log("A idade do filho é diferente que 14 anos")
} else {
    console.log("a idade do filho é 14 anos")
}

*/





/*
UMA EMPRESA DE TRANSPORTE DE PESSOAS POR APLICATIVO DESEJA CRIAR UM CADASTRO DE MOTORISTA.
NESTE CADASTRO, O MOTORISTA PRECISA ENVIAR ALGUNS DOCUMENTOS/INFORMAÇÕES, TAIS COMO: NOME, ATESTADO ANTECEDENTES, IDADE E NACIONALIDADE
ATRAVES DO JS, CRIE UM CODIGO QUE RETORNE AO USUARIO SE ELE PODE OU NAO SE CADASTRAR, SABENDO QUE O MOTORISTA :
1 - NAO PODE TER ATESTADO DE ANTECEDENTES (SEM FIXA CRIMINAL)
2 - PRECISA SER MAIOR QUE 18 ANOS
3 - PRECISA SER BRASILEIRO OU ARGENTINO

OBS: O CODIGO DEVE MOSTRAR AO USUARIO O MOTIVO PELO QUAL NAO PODE SER CADASTRADO


var cadastro = {
    nome: "carlos",
    antecedentes: false,
    idade: 25,
    nacionalidade: "brasileiro"
}

if (cadastro.antecedentes == false) {
    if (cadastro.idade >= 18) {
        if (cadastro.nacionalidade == "brasileiro") {
            console.log("Seu cadastro foi aprovado.")

        } else {
            console.log("nacionalidade nao aprovada")
        }
    } else {
        console.log("idade nao aprovada")
    }
} else {
    console.log("antecedentes negados")
}
*/



/*
FUNÇÃO

function soma (a, b) {
    return a + b
}

var resultado = soma(4,2);
var resultado1 = soma(8, 8);

console.log(resultado)
console.log(resultado1)

function subtracao (a, b) {
    return a - b
}

var resultadoSub = subtracao(4,2);
var resultadoSub1 = subtracao(8, 5);

console.log(resultadoSub)
console.log(resultadoSub1)

function divisao (a, b) {
    return a / b
}

var resultadoDiv = divisao(4,2);
var resultadoDiv1 = divisao(8, 2);

console.log(resultadoDiv)
console.log(resultadoDiv1)

function multiplicacao (a, b) {
    return a * b
}

var resultadoMulti = multiplicacao(4,2);
var resultadoMulti1 = multiplicacao(8, 5);

console.log(resultadoMulti)
console.log(resultadoMulti1)

*/


/*
var primeiro = document.getElementById('primeiro');

primeiro.onclick = function() {
    alert('OPS')
}
*/
